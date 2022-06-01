import Question from "./Question"
import { useState, useEffect } from "react"

const Selector = () => {
    const [answers, setAnswers] = useState<Array<string>>([])
    const [questionNumber, setQuestionNumber] = useState(0)
    const [foundResult, setFoundResult] = useState("")
    const [documentationLink, setDocumentationLink] = useState("")
    const questions = [
        "Do you want to build a web-based experience?",
        "Do you want to use React?",
        "Do you want to use Redux for state management?",
        "Do you want to use pre-built components to help you build your experience?"
    ]
    
    useEffect(() => {
    
        //determine what question to ask, or whether to show the finalized library!
        switch(answers.length){
            case 1: {
                if(answers[0] === 'False') {
                    setFoundResult("Answers API!") 
                    setDocumentationLink("https://hitchhikers.yext.com/docs/liveapis/answersapi/")
                }  
                break
            }
            case 2: {
                //we need to check if previous value was false
                if(answers[1] === 'True') {
                    setQuestionNumber(3)
                    setAnswers([...answers, ""])
                }
                else {
                    setQuestionNumber(2)
                }
                break
            }
            case 3: {
                //at this step they are being asked question 3 and will receive an answer after the response
                if (answers[2] === 'True') {
                    setFoundResult(`Answers Headless!`)
                    setDocumentationLink("https://github.com/yext/answers-headless")
                }
                else if (answers[2] === 'False'){
                    setFoundResult(`Answers Core!`)
                    setDocumentationLink("https://hitchhikers.yext.com/docs/answerscoresdk/")
                }
                else {
                    //we are skipping the question
                    break
                }
               
                
            }
            case 4: {
                if (answers[3] === 'True') {
                    setFoundResult(`React Component Library!`)
                    setDocumentationLink("https://github.com/yext/answers-react-components")
                }
                else {
                    setFoundResult(`React Headless!`)
                    setDocumentationLink("https://github.com/yext/answers-headless-react")
                }
                break
            }
        }
    }, [answers])

    const handleSelectAnswer = (e:any) => {
        //set the answer state with the new answer
        e.preventDefault()
        setAnswers([...answers, e.target.value])
        setQuestionNumber(() => questionNumber + 1)

        
    }

    return (
        
        <div className="flex flex-col items-center my-16">
            { foundResult ? <h1 className="text-7xl">{foundResult} Click <a href={documentationLink} className="text-cyan-800 font-bold">here</a> for documentation</h1> :
            <>
            <Question question={questions[questionNumber]}/>
            <div className="flex space-between my-8">
                <button className="opacity-80 bg-blue-500 white p-4 text-center rounded-md w-64 mx-4 font-bold text-white active:bg-blue-800 active:text-slate-500 hover:bg-blue-600" onClick={handleSelectAnswer} value="True">
                TRUE
                </button>
                <button className=" opacity-80 bg-red-500 white p-4 text-center rounded-md w-64 mx-4 font-bold text-white active:bg-red-800 active:text-slate-500 hover:bg-red-600" onClick={handleSelectAnswer} value="False">
                FALSE
                </button>
            </div>
            </>
            
                
            }
        </div>
    
    )
}

export default Selector