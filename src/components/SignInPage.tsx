import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function SignInPage() {
  const [nameK, setNameK] = useState("");
  const [nameE, setNameE] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [idCard, setIdCard] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [gander, setGander] = useState("");

  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const submitHandler = async () => {
   

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:3000/companys/register",
        {
          email,
          password,
          nameE,
          nameK,
          identificationNumber,
          companyAddress,
          firstname,
          lastname,
          idCard,
          mobile,
          gander,
        }
      );
      console.log(response.data);

      if (response.data) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Main>
      <Form action="" onSubmit={handleSubmit(submitHandler)}>
        <Input
          type="text"
          placeholder="Identification Code"
          required
          onChange={(e) => setIdentificationNumber(e.target.value)}
          value={identificationNumber}
        />
        <Input
          type="text"
          placeholder="Name English"
          required
          onChange={(e) => setNameE(e.target.value)}
          value={nameE}
        />
        <Input
          type="text"
          placeholder="Name Georgian"
          required
          onChange={(e) => setNameK(e.target.value)}
          value={nameK}
        />
        <Input
          type="text"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="text"
          placeholder="Mobile"
          required
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          type="text"
          placeholder="Gender"
          required
          onChange={(e) => setGander(e.target.value)}
          value={gander}
        />
        <Input
          type="text"
          placeholder="Firstname"
          required
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
        <Input
          type="text"
          placeholder="Lastname"
          required
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
        <Input
          type="text"
          placeholder="ID Card"
          required
          onChange={(e) => setIdCard(e.target.value)}
          value={idCard}
        />
        <Input
          type="text"
          placeholder="Company Address"
          required
          onChange={(e) => setCompanyAddress(e.target.value)}
          value={companyAddress}
        />
        <Registration onClick={handleSubmit(submitHandler)}>
          Registration
        </Registration>
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

  color: #d9d9d9;
`;

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
