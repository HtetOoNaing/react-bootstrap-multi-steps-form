import { useEffect, useState } from "react";
import { questions as originalQuestions } from "../data";
import SimpleForm from "./SimpleForm";

const pageSize = 3;

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const startIndex = pageSize * (step - 1);
    const endIndex = pageSize * step;
    const slicedQuestions = originalQuestions.slice(startIndex, endIndex);
    console.log(slicedQuestions)
    setQuestions(slicedQuestions);
  }, [step]);

  return <SimpleForm step={step} setStep={setStep} questions={questions} />;
};

export default MultiStepForm;

// step 1, start = 0 ( pageSize * 0 ), end = pageSize - 1 = 1 ((pageSize * 1)- 1)

// step 2, start = pageSize = 2 ( pageSize * 1 ), end = pageSize + pageSize - 1 = 3 ((pageSize * 2)- 1)
// step 3, start = pageSize + pageSize = 4 ( pageSize * 2 ), end = pageSize + pageSize + pageSize - 1 = 5
