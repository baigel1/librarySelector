import Question from "./Question";
import { useState, useEffect } from "react";

const Selector = () => {
  const [answers, setAnswers] = useState<Array<string>>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [foundResult, setFoundResult] = useState("");
  const [documentationLink, setDocumentationLink] = useState("");
  const [libraryDescription, setLibraryDescription] = useState("");
  const questions = [
    "Do you want to build a web-based experience?",
    "Do you want to use React?",
    "Do you want to use Redux for state management?",
    "Do you want to use pre-built components to help you build your experience?",
  ];

  useEffect(() => {
    //determine what question to ask, or whether to show the finalized library!
    switch (answers.length) {
      case 1: {
        if (answers[0] === "False") {
          setFoundResult("Search API!");
          setDocumentationLink(
            "https://hitchhikers.yext.com/docs/liveapis/answersapi/"
          );
          setLibraryDescription(
            "The Search API is great if you are building a non-web application like a mobile app. It's a REST API used for querying data that contains different endpoints for Universal Search and Vertical Search."
          );
        }
        break;
      }
      case 2: {
        //we need to check if previous value was false
        if (answers[1] === "True") {
          setQuestionNumber(3);
          setAnswers([...answers, ""]);
        } else {
          setQuestionNumber(2);
        }
        break;
      }
      case 3: {
        //at this step they are being asked question 3 and will receive an answer after the response
        if (answers[2] === "True") {
          setFoundResult(`Search Headless!`);
          setDocumentationLink("https://github.com/yext/answers-headless");
          setLibraryDescription(
            "Headless is our Redux state management library that has React bindings (if you want to use React) but is also general enough to be used in any framework of your choice! (Vue and Angular bindings coming soon)!"
          );
        } else if (answers[2] === "False") {
          setFoundResult(`Search Core!`);
          setDocumentationLink(
            "https://hitchhikers.yext.com/docs/answerscoresdk/"
          );
          setLibraryDescription(
            "Search Core is a TypeScript library that’s used for interacting with the Search API. It does not require access to the DOM so you can use it in either the browser or Node if you want to."
          );
        } else {
          //we are skipping the question
          break;
        }
      }
      case 4: {
        if (!foundResult) {
          if (answers[3] === "True") {
            setFoundResult(`Search UI React (Component Library)!`);
            setDocumentationLink(
              "https://github.com/yext/answers-react-components"
            );
            setLibraryDescription(
              "The React Component Library is great if you are using React and want to get your experience up and running as quickly as possible with some pre-defined components. It contains components for your search bar, results, facets, and more!"
            );
          } else {
            setFoundResult(`Search Headless!`);
            setDocumentationLink(
              "https://github.com/yext/answers-headless-react"
            );
            setLibraryDescription(
              "If you want to use React as well as a library that handles state management for you, but would rather have full control over each component's UI, then this library is perfect for you!"
            );
          }
        }
        break;
      }
    }
  }, [answers, foundResult]);

  const handleSelectAnswer = (e: any) => {
    //set the answer state with the new answer
    e.preventDefault();
    setAnswers([...answers, e.target.value]);
    setQuestionNumber(() => questionNumber + 1);
  };
  const startOver = () => {
    setAnswers([]);
    setQuestionNumber(0);
    setFoundResult("");
  };

  return (
    <>
      <button
        onClick={startOver}
        className="my-4 opacity-80 bg-slate-400 black p-4 text-center rounded-md w-32 mx-4 font-bold text-black active:bg-slate-600 hover:bg-slate-500"
      >
        Start Over?
      </button>
      <div className="flex flex-col items-center my-16 text-center">
        {foundResult ? (
          <>
            <h1 className="text-7xl">
              {foundResult} Click{" "}
              <a href={documentationLink} className="text-cyan-800 font-bold">
                here
              </a>{" "}
              for documentation
            </h1>
            <p className="text-xl my-8">{libraryDescription}</p>
          </>
        ) : (
          <>
            <Question question={questions[questionNumber]} />
            <div className="flex space-between my-8">
              <button
                className="opacity-80 bg-blue-500 white p-4 text-center rounded-md w-64 mx-4 font-bold text-white active:bg-blue-800 active:text-slate-500 hover:bg-blue-600"
                onClick={handleSelectAnswer}
                value="True"
              >
                YES
              </button>
              <button
                className=" opacity-80 bg-red-500 white p-4 text-center rounded-md w-64 mx-4 font-bold text-white active:bg-red-800 active:text-slate-500 hover:bg-red-600"
                onClick={handleSelectAnswer}
                value="False"
              >
                NO
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Selector;
