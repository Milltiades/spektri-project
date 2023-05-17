
import { styled } from "styled-components";

export default function AddEventPage() {
  return (
    <Main>
        <Form action="">
      <Input type="text" placeholder="Event Name" required/>
      <Input type="text" placeholder="Date" required/>
      <Input type="text" placeholder="Address" required/>
      <Input type="text" placeholder="Phone" required/>
      <Input type="text" placeholder="Performer" required/>
      <Textarea placeholder="Description" required></Textarea>
      <Input type="file" placeholder="Upload Cover" required/>
      <Button>Add Event</Button>
      
      </Form>
    </Main>
  );
}
const Main = styled.div`
  width: 100%;
  background: #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 48px 28px;
  margin-bottom: 96px;
   @media (min-width: 768px) {
    padding: 79px 89px;
  }
    @media (min-width: 1200px) {
    padding: 79px 206px;
    width: 60%;
    margin: 0 auto 96px auto;
  }
`;

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
`;
const Form = styled.form`
    gap: 12px;
    display: flex;
    flex-direction: column;
`

const Textarea = styled.textarea`
    background: #D9D9D9;
border: 1px solid #555454;
border-radius: 20px;
padding: 9px 0 9px 14px;
font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  min-height: 92px;
`

const Button = styled.button`
    background: #555454;
border: 1px solid #555454;
border-radius: 20px;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
padding: 9px;
color: #D9D9D9;
`