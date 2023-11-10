import Loading from "../components/loading";
import SurveyItem from "../components/survey/surveyItem";
import { useReducers } from "../context/connectionsContext";
import { surveyQuestions } from "../utils/data";
import { useState } from "react";

const Survey = () => {
    const [activeIndex, setActiveIndex] = useState(3)
    const { globalDispatchEvent, loading } = useReducers();

    console.log(activeIndex)

    return (
        <>
            {loading &&
            <>
                <p>test</p>
            </>
                // <Loading />
            }
            <h2>Friendly Survey</h2>
            <div className="relative space-y-10">
                {surveyQuestions.map((question, i) => (question.questionId > activeIndex - 3 && question.questionId <= activeIndex) && (
                    <div key={question.questionId}>
                        <p className="text-sm">Question {question.questionId} of 9</p>
                        <SurveyItem question={question}/>
                    </div>
                ))}
                <div className="fixed bottom-0 left-0 w-full bg-white p-2">
                    {activeIndex < 9
                        ?
                        <button onClick={() => {
                            setActiveIndex(state => state + 3)
                            console.log('ran')
                        }} className="bg-pink-600 text-white p-2 border-none w-20 hover:bg-gray-900 transition-all font-bold cursor-pointer outline-none rounded-full">Next</button>
                        :
                        <button onClick={() => globalDispatchEvent({ surveyQuestions })} className="bg-pink-600 text-white p-2 border-none w-20 hover:bg-gray-900 transition-all font-bold cursor-pointer outline-none rounded-full">Submit Survey</button>
                    }
                </div>
            </div>
        </>
    )
}

export default Survey;