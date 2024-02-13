import './stepper.css';
import {useState} from 'react';

const Stepper = ({stepsConfig=[]}) => {

    const [currentStep,setCurrentStep]= useState(1);
    const [isComplete,setIsComplete]= useState(false);
    
    const handleNext =()=>{
        setCurrentStep(currentStep+1)
    }

    if(!stepsConfig.length){
        return<>

        </>;
    }

  return (
    <>
    <div className="stepper">
        {stepsConfig.map((step,index)=>{
            return(
                <div key={step.name} className={`step ${currentStep >= index+1 || isComplete? "complete":""}
                ${currentStep === index + 1 ? "active":" "}
                `} >
                    <div className="step-number" >{index+1}</div>
                    <div  className="step-name">{step.name}</div>                   
                </div>
            )
        })}
    </div>
        <div className="progress-bar">
            <div className="progress"> </div>
        </div>

        <button onClick={handleNext} >
            { currentStep === stepsConfig.length ? "Finish": "Next" }
        </button>
    </>
  )
}

export default Stepper