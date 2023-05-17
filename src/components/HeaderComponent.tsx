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
  @media (min-width: 768px) {
flex-direction: row;
 justify-content: space-between;
  align-items: center;
  }
  
  @media (min-width: 1200px) {
    padding: 66px 127px;
    
   
   
  }
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
  @media (min-width: 768px) {
    width: 65%;
  }
 
  @media (min-width: 1200px) {
    width: 50%;
    padding: 0;
 align-items: center;
  }
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
   @media (min-width: 768px) {
   height: 43px;
  }
   @media (min-width: 1200px) {
   height: 50px;
  }
`;

const ButtonLog = styled(ButtonSign)`
  background: #e0e0e0;
  color: #555454;
`;
