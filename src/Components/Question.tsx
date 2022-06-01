
interface QuestionProps {
    question: string
}

const Question = ({question}:QuestionProps) => {
    
    return (
        <h1 className="text-7xl">{question}</h1>
    )
}

export default Question