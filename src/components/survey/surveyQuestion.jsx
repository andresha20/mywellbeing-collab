// eslint-disable-next-line react/prop-types
const SurveyQuestion = ({ question = {} }) => {

    return (
        <>
            <h3>{question?.questionLabel || 'No title'}</h3>
        </>
    )
}

export default SurveyQuestion;