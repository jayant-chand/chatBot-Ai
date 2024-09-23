import { useState } from 'react'
import "./App.css";
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
 
  async function generateAnswer(){
    setAnswer("loading...");
    const response =await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAMtUs1inJdnRW5qW94Sj5CjD_K--VBxac",
      method: "post",
      data:{
        contents:[
          {"parts":[{"text": question }]},
        ],
      },
    });
      setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);_
  }

  return (
    <>
      <h1> Chat AI</h1>
      <textarea 
      className="border rounded w-full "
      value={question}
       onChange={(e) => setQuestion(e.target.value)}
       cols="30"
       rows="10" 
       placeholder="Ask any thing to me "
       ></textarea>
      <button onClick={generateAnswer}>Generate Answer</button>
      <p>{answer}</p>
    </>
  )
}

export default App
