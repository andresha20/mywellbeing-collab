import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { ENDPOINTS, surveyQuestions } from "../utils/data";
import dispatchEndpoint from "../utils/dispatcher";

export const ReducersContext = createContext();

export const ReducersProvider = ({ children }) => {

    const URL = ENDPOINTS['GET-USER'];
    const [unfetchedSession, setUnfetchedSession] = useState(true);
    const [questions, setQuestions] = useState([...surveyQuestions]);
    const [action, setAction] = useState(null);
    const { data, error, isValidating } = useSWR(unfetchedSession && URL, fetcher, { dedupingInterval: 900000, revalidateOnFocus: false });
    const [session, setSession] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const sessionLoading = !data && !error && isValidating;
    const cachedSession = data;
    
    const globalDispatchEvent = () => {
        setLoading(true);
        try {
            questions.forEach(async el => {
                let endpoint;
                let questions;
                switch (el.category) {
                    case 1:
                        if (el.category == 1) {
                            questions = {
                                [el.questionInternalId]: el.questionAnswer
                            }
                        }
                        endpoint = 'POST-economyCreate';
                        break;
                    case 2:
                        if (el.category == 2) {
                            questions = {
                                [el.questionInternalId]: el.questionAnswer
                            }
                        }
                        endpoint = 'POST-educationCreate';
                        break;
                    default:
                        if (el.category == 3) {
                            questions = {
                                [el.questionInternalId]: el.questionAnswer
                            }
                        }
                        endpoint = 'POST-psychologyCreate';
                        break;
                }
                let params = {
                    body: JSON.stringify(questions)
                }
                console.log('sklaslaoqeoqopqewlñl')
                await dispatchEndpoint(endpoint, undefined, undefined, params);
            });
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const values = { loading, setLoading, session, action, questions, setQuestions, setAction, globalDispatchEvent };

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            if (sessionLoading || !cachedSession) return;
            if (cachedSession.username) {
                setSession(cachedSession)
                setUnfetchedSession(false);
            } 
        }
        return () => {
            mounted = false;
        }
    }, [cachedSession, sessionLoading])

    return <ReducersContext.Provider value={values}>
        {children}
    </ReducersContext.Provider>
}

export const useReducers = () => useContext(ReducersContext);

