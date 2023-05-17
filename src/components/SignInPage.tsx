import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function SignInPage() {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const submitHandler = () => {
    navigate('/user')
  }
  return (
    <Main>
      <Form action="">
        <Input type="text" placeholder="Identification Code" required/>
        <Input type="text" placeholder="Name" required/>
        <Input type="text" placeholder="Email" required/>
        <Input type="text" placeholder="Phone" required/>
        <Input type="text" placeholder="Password" required/>
        <Input type="text" placeholder="Repeat the password" required/>
        <Registration onClick={handleSubmit(submitHandler) }>Registration</Registration>
      </Form>
    </Main>
  );
}

const Input = styled.input`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 9px 0 9px 14px;
  color: #555454;
 
  background: #d9d9d9;
  border: 1px solid #555454;
  border-radius: 20px;
  margin-bottom: 12px;
  
`;

const Registration = styled.button`
  width: 100%;
  background: #555454;
border: 1px solid #555454;
border-radius: 20px;
padding: 9px 0 9px 14px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

color: #D9D9D9;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  margin: 52px 0 96px 0;
  width: 100%;
  background: #d9d9d9;
  border-radius: 8px;
  padding: 52px 28px;
  @media (min-width: 768px) {
    padding: 79px 89px;
  }
  @media (min-width: 1200px) {
    padding: 79px 206px;
    width: 60%;
    margin: 0 auto 96px auto;
  }
`;
