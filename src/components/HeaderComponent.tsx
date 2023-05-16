import { useNavigate } from "react-router";
import { styled } from "styled-components";

export default function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <Header>
      
      <Li onClick={() => navigate('/')}> <Img src="/assets/SPEKTRI.svg" alt="" /></Li>
      <DivBtn>
        <ButtonSign onClick={() => navigate('/registration')}>Sign In</ButtonSign>
        <ButtonLog onClick={() => navigate('/login')}>Log In</ButtonLog>
      </DivBtn>
    </Header>
  );
}

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  width: 152px;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 19px;
`;

const Img = styled.img`
  width: 152px;
`;
const DivBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
`;
const ButtonSign = styled.button`
  width: 45%;
  height: 30px;
  background: #555454;
  border-radius: 20px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  color: #e0e0e0;
`;

const ButtonLog = styled(ButtonSign)`
  background: #e0e0e0;
  color: #555454;
`;
