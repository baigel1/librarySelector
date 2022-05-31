
interface QuestionProps {
    question: string
}

const Question = ({question}:QuestionProps) => {
    
    return (
        <h1>{question}</h1>
    )
}

export default Question