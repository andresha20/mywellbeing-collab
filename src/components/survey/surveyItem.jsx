import SurveyAnswer from "./surveyAnswer";
import SurveyQuestion from "./surveyQuestion";

const SurveyItem = ({ question = {} }) => {

    return (
        <>
            <SurveyQuestion question={question}/>
            <SurveyAnswer question={question}/>
        </>
    )
}

export default SurveyItem;