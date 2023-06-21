import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useSignOut } from "react-auth-kit";

export default function HeaderComponent() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, isUser } =
    useContext<any>(AuthContext);

  const logOut = () => {
    signOut();
    navigate("/login");
    setIsAuthenticated(false);
  };
  console.log("ine header-is auntheticated: " ,isAuthenticated)
  console.log('User: ', isUser)

  return (
    <Header>
      <Li onClick={() => navigate("/")}>
        {" "}
        <Img src="/assets/SPEKTRI.svg" alt="" />
      </Li>
      <DivBtn>
        {isAuthenticated ? (
          <ProfileDiv>
            <h2 className="userMeil" style={{cursor:'pointer'}} onClick={() => navigate('/user')}>{isUser}</h2>
            <Profile onClick={logOut}>
              <span className="material-symbols-outlined">logout</span>
            </Profile>
          </ProfileDiv>
        ) : (
          <>
            <ButtonSign onClick={() => navigate("/signup")}>Sign In</ButtonSign>
            <ButtonLog onClick={() => navigate("/login")}>Log In</ButtonLog>
          </>
        )}

        {/* <ButtonSign onClick={() => navigate('/signup')}>Sign In</ButtonSign>
        <ButtonLog onClick={() => navigate('/login')}>Log In</ButtonLog> */}

        {/* {isAuthenticated? <button onClick={logOut}>sign out</button> :
       (<>
          <ButtonSign onClick={() => navigate("/signup")}>Sign In</ButtonSign>
         <ButtonLog onClick={() => navigate("/login")}>Log In</ButtonLog>
         </>)
        } */}
      </DivBtn>
    </Header>
  );
}

const Profile = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  background: #555454;
  border-radius: 50%;
  border: 2px solid #d2d2d2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & span {
    display: none;
    color: white;
    transition: all 0.3s ease;
  }
  &:hover span {
    display: flex;
  }
`;
const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  width: 152px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 19px;
  justify-content: space-between;
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
  width: 50%;
  padding: 0 0 30px;
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
  width: 40%;
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
