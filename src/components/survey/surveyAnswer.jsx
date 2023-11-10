import { EmojiAngryFill, EmojiFrownFill, EmojiNeutralFill, EmojiSmileFill, EmojiHeartEyesFill } from 'react-bootstrap-icons';
import { useReducers } from '../../context/connectionsContext';

const SurveyAnswer = ({ question }) => {

    const { questions, setQuestions } = useReducers();
    const updateSurveyAnswer = (questionId, answer) => {
        let surveyQuestions = [ ...questions];
        const indexOfQuestion = surveyQuestions.findIndex(q => q.questionId == questionId);
        surveyQuestions[indexOfQuestion]['questionAnswer'] = answer;
        setQuestions(surveyQuestions);
    }

    const icons = [
        { emoji: <EmojiAngryFill key={1} size={52} color="pink"/>, label: 'Strongly Disagree' },
        { emoji: <EmojiFrownFill key={2} size={52} color="pink"/>, label: 'Disagree' },
        { emoji: <EmojiNeutralFill key={3} size={52} color="pink"/>, label: 'Neither Agree or Disagree' },
        { emoji: <EmojiSmileFill key={4} size={52} color="pink"/>, label: 'Agree' },
        { emoji: <EmojiHeartEyesFill key={5} size={52} color="pink"/>, label: 'Strongly Agree' },
    ]
    return (
        <>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5 bg-gray-100 p-2 rounded max-w-screen-sm mx-auto'>
                {icons.map((icon, i) => (
                    <div onClick={(e) => updateSurveyAnswer(question.questionId, i)} key={i} className={`space-x-3 sm:space-x-0 p-5 ${questions?.[questions.findIndex(q => q.questionId == question.questionId)]?.['questionAnswer'] == i && 'text-white bg-pink-800'} rounded-lg text-gray-600 cursor-pointer hover:bg-pink-800 transition-all hover:text-white`}>
                        <div className=''>
                            {icon.emoji}
                        </div>
                        <p className='text-sm font-bold'>{icon.label}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SurveyAnswer;