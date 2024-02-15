import './stepper.css';
import {useState,useRef,useEffect} from 'react';

const Stepper = ({stepsConfig=[]}) => {

    const [currentStep,setCurrentStep]= useState(1);
    const [isComplete,setIsComplete]= useState(false);
    const [margins,setMargins] = useState({
        marginLeft:0,
        marginRight:0
    })

    const stepRef = useRef([]);
    useEffect(()=>{
        console.log(stepRef.current[2].offsetWidth)
    },[stepRef.current])

    const handleNext =()=>{
        setCurrentStep(currentStep+1)
    }

    if(!stepsConfig.length){
        return<>
        </>;
    }

    function calculatePercent(){
        // console.log((currentStep/stepsConfig.length)*100)
        return(((currentStep-1)/stepsConfig.length)*100)
    }

  return (
    <>
    <div className="stepper">
        {stepsConfig.map((step,index)=>{
            return(
                <>
                <div key={step.name} 
                ref={(el)=>{stepRef.current[index]=el}}
                className={`step ${currentStep >= index+1 || isComplete? "complete":""}
                ${currentStep === index + 1 ? "active":" "}
                `} >
                    <div className="step-number" >{index+1}</div>
                    <div  className="step-name">{step.name}</div>                   
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{width:`${calculatePercent()}%`}}> </div>
                </div>
                </>
            )
        })}
    </div>
        {/* <div className="progress-bar">
            <div className="progress"> </div>
        </div> */}

        <button onClick={handleNext} >
            { currentStep === stepsConfig.length ? "Finish": "Next" }
        </button>
    </>
  )
}

export default Stepper