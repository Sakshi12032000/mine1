import React, { useEffect, useState } from 'react';
import '../Quiz/Quiz.css';

function Quiz() {
    const data =[
        {
            que:"Which of the following is the original creator of the C++ language?",
            opt1:"Dennis Ritchie",
            opt2:"Ken Thompson",
            opt3:"Bjarne Stroustrup",
            opt4:"Brian Kernighan",
            isCorrect:3,
        },
        
        {
            "id": 365,
        
           "ques": [
        
                {
        
                    "descType": "text",

                    "description": "What does the line inside the box in a box plot represent?",
                    "contentOrder": 1
        
                }
        
            ],
        
            "options": [
        
                {
                     'idx':1,
                    "isSelected":false ,
                    "descType": "text",
        
                    "isCorrect": false,
        
                    "answerType": null,
        
                    "description": "Mean"
        
                },
        
                {
                    'idx':2,
                  "isSelected":false ,
                    "descType": "text",
        
                    "isCorrect": true,
        
                    "answerType": null,
        
                    "description": "Median"
        
                },
        
                {
                  'idx':3,
                  "isSelected":false ,

                    "descType": "text",
        
                    "isCorrect": false,
        
                    "answerType": null,
        
                    "description": "Mode"
        
                },
        
                {
                  "idx":4,
                  "isSelected":false ,

                    "descType": "text",
        
                    "isCorrect": false,
        
                    "answerType": null,
        
                    "description": "Maximum"
        
                }
        
            ],
        
            "duration": "00:00:30",
        
            "hintText": "<p>It represents the middle value of the data set.</p>",
        
            "hintImage": null,
        
            "hintVideo": null,
        
            "answerText": "<p>The line inside the box shows the median (Q2), which divides the data into two equal halves.</p>",
         
        },
    ]
    const [index, setIndex] = useState(1);
    const [question, setQuestion] = useState(data[index]);
    const [ans, setAns] = useState([]);
    const [opt1, setOpt1] = useState([]);
    const [opt2, setOpt2] = useState("");
    const [opt3, setOpt3] = useState("");
    const [opt4, setOpt4] = useState("");
    const [selectIndex, setSelectedIndex] = useState([]);
    const [answered, setAnswered] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);
    const [isSubmit,setIsSubmit]=useState(false)

    // console.log("ques",question);
    useEffect(() => {
      setSelectedIndex(question.options);
      setAns(selectedOption);
      setAnswered(selectedOption.isCorrect);

    }, [selectedOption]);

    // console.log("AnswerSelectedOption",ans);
    console.log("selectedIndex", selectIndex);
        
    
    const handleAnswer = (e) =>{
      e.preventDefault();
        if(opt1==='3'){
        //  alert("option is correct");
         setOpt2("Correct Option");
        }
        else{
          // alert("option is wrong");
          setOpt2("Not Quite!!!");
          setOpt3("Give another try");
        }
    }

    const handleAnswerButtonClick = (isCorrect)=>{
      if(isCorrect===true){
        alert("correct");
      }
      else{
        alert("wrong");
      }
      
    }

    const handleSelect=(answerOptions)=>{
      if (selectedOption === ans && selectedOption === true) {
        return 'select'
      } else if (selectedOption === ans && selectedOption !== true) {
        return 'wrong'
      } 
      else if (ans.isCorrect === true) {
        return 'select-green'
      } 
      // else if(answerOptions.isCorrect === false){
      //   return 'select-wrong'
      // } 
      else {
        return 'grey'
      }
    }
    
  
    const handleClick =(e)=>{
      setIsSubmit(true)
      e.preventDefault();
      setAnswered()
      // if( === true){
      //   setOpt2("Correct Option");
      // }
      // else{
      //   // alert("option is wrong");
      //   setOpt2("Not Quite!!!");
      //   setOpt3("Give another try");
      // }
    }    

    console.log("question" , question);
    
    const onChangeOption=(index)=>{
      let newOptionArry={...question};
      newOptionArry.options.forEach((item)=>item.isSelected=false);
      newOptionArry.options[index].isSelected=true;
      setQuestion(newOptionArry);
    }
    return (
    <div> 
      <div className='Container'>
        <div className='Content'>  
        <div className='Question'>{
          question.ques.map((que) =>(
            <div>{index+1}. {que.description}</div>
          ))
          }</div>
        <div className='Answer row'>
            {/* {ans.map((item, index)=> {
              return(
            <div>
            <li className={`Options ${opt1==='1' ? 'bg-success text-white bg-opacity-80' : 'border border-dark-subtle'}`} id='1' 
            onClick={(e)=>setOpt1(e.target.id)}>a. {item.opt1}</li>

            <li className={`Options ${opt1==='2' ? 'bg-success text-white bg-opacity-80' : 'border border-dark-subtle'}`} id='2' 
            onClick={(e)=>setOpt1(e.target.id)}>b. {item.opt2}</li>
            
            <li className={`Options ${opt1==='3' ? 'bg-success text-white bg-opacity-80' : 'border border-dark-subtle'}`} id='3' 
            onClick={(e)=>setOpt1(e.target.id)}>c. {item.opt3} </li>
            <li className={`Options ${opt1==='4' ? 'bg-success text-white bg-opacity-80' : 'border border-dark-subtle'}`} id='4' 
            onClick={(e)=>setOpt1(e.target.id)}>d. {item.opt4}</li>

            <div className='Bttn'>

            {opt2 ? <div className="alert alert-success" id="liveAlertPlaceholder" role="alert">
                  <h4 className="alert-heading">{opt2}</h4>
                  <p>{opt3}</p>
                  </div> : null}
            <button className='Sub-Btn' id="liveAlertBtn" onClick={handleAnswer}> Submit Answer</button>
            </div>
            </div>
            
              )
            }
          )} */}

          
          
          {
                     question.options.map((answerOptions,index) => (
                    <>
                      <div > 
                      <button 
                      id={answerOptions.idx}
                      key={index}
                      disabled={isSubmit}
                      className={`Options-ans ${
                        // selectedOption && handleSelect(answerOptions)
                        isSubmit && answerOptions.isCorrect && answerOptions.isSelected ? 'bg-success-subtle' :
                        isSubmit && !answerOptions.isCorrect && answerOptions.isSelected ?  'bg-danger-subtle' :
                        isSubmit && answerOptions.isCorrect && !answerOptions.isSelected ?  'bg-warning-subtle': "" 
                      }`} 
                      value={selectedOption}
                      onClick={()=>onChangeOption(index)}
                        > 
                        {answerOptions.description}
                    </button>                    
                      </div>
                    </>
                  ))
                }
          </div>
          {opt2 ? <div className="alert alert-success" id="liveAlertPlaceholder" role="alert">
                  <h4 className="alert-heading">{opt2}</h4>
                  <p>{opt3}</p>
                  </div> : null}
          <button 
                className={`Sub-Btn ${
                  selectedOption 
                  // && handleSelect()
                }`} 
                onClick={handleClick}
                >Submit Answer</button>
        </div>
      </div>
    </div>
  )
}

export default Quiz
