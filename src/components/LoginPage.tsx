import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useSignIn } from "react-auth-kit";

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext<any>(AuthContext);
  const signIn = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSubmit } = useForm();

  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login/user",
        {
          email,
          password,
        }
      );

      console.log("token", response.data);
      if (response.data) {
     
        signIn({
          token: response.data.access_token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { email, password },
        });
        setIsAuthenticated(true);
        navigate("/user");
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }
 
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Input
          type="text"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Login>Log In</Login>
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

const Login = styled.button`
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
    margin: 100px auto 196px auto;
  }
`;
