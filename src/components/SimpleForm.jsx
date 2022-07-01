import { Card, Container, Form } from "react-bootstrap";

const SimpleForm = ({ step, setStep, questions }) => {
  return (
    <Container>
      {questions.map((question) => (
        <Card body key={question.id} className="mt-2" >
          <div className="d-md-flex gap-3 align-items-end">
            {question.question}
            <div className="ms-auto d-flex justify-content-end">
              <Form.Check inline type="radio" name={question.id} />
              <Form.Check inline type="radio" name={question.id} />
              <Form.Check inline type="radio" name={question.id} />
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default SimpleForm;
