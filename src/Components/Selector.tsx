import Question from "./Question"
import { useState, useEffect } from "react"

const Selector = () => {
    const [answers, setAnswers] = useState({})
    const [questionNumber, setQuestionNumber] = useState(1)
    let foundResult = ""
    let currQ = "this is the first question"
    
    useEffect(() => {
        //determine what question to ask, or whether to show the finalized library!
        // switch(questionNumber){
        //     case 1: {
        //         currQ = "Do you want to build a web-based experience?"
        //         break
        //     }
        //     case 2: {
        //         //we need to check if previous value was false
        //         if(!answers[1]) {
        //             foundResult = `Answers API! Click ${<a href="">here</a>} for documentation`
        //         }
        //         else {
        //             currQ = "Do you want to use React?"
        //         }
        //         break
        //     }
        //     case 3: {
        //         if(!answers[2]){
        //             currQ = "Do you want to use Redux for State Management?"
        //         }
        //         else {
        //             currQ = "Do you want to take advantage of pre-built components?"
        //         }
        //     }
        //     case 4: {
        //         //we're gonna have 4 possible options here, rethink how this will work
        //     }
        // }
    }, [answers])

    const handleSelectAnswer = (e:any) => {
        //set the answer state with the new answer
        e.preventDefault()
        // setAnswers({...answers, questionNumber:e.target.value})
        // setQuestionNumber(() => questionNumber + 1)
        console.log(e.target.value)
    }

    return (
        <div className="flex flex-col items-center my-8">
            <Question question={currQ}/>
            <div className="flex space-between">
                <button className="bg-blue-500 white p-4 text-center rounded-md w-32 mx-4" onClick={handleSelectAnswer} value="True">
                TRUE
                </button>
                <button className="bg-red-500 white p-4 text-center rounded-md w-32 mx-4" onClick={handleSelectAnswer} value="False">
                FALSE
                </button>
            </div>
        </div>
    )
}

export default Selector