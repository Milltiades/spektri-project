import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

export default function UserPage() {
 const {isUser, setIsUser, isAuthenticated} = useContext<any>(AuthContext);
 const [events, setEvents] = useState<any>([])
  const navigate = useNavigate();

  const handleAddEvent = () => {
    navigate("/add-event");
  };

  function getCookieValue(cookieName:any) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
      const [name, value] = cookies[i].split("=");

      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }

    return undefined; // Cookie not found
  }

  const token = getCookieValue("_auth");

  useEffect(() => {
    if (token) {
      console.log("Token:", token);
      // Split the JWT into its three parts: header, payload, and signature
      const [encodedHeader, encodedPayload, encodedSignature] = token.split(".");

      // Decode the Base64 encoded header and payload
      const decodedHeader = JSON.parse(atob(encodedHeader));
      const decodedPayload = JSON.parse(atob(encodedPayload));

      console.log("Decoded Header:", decodedHeader);
      console.log("Decoded Payload:", decodedPayload);

      const fetchEvents = async () => {
        try {
          const response = await fetch(`http://localhost:3000/events/list/${decodedPayload.companyID}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          if (response.ok) {
            const json = await response.json();
           
              console.log('json: ', json);
              setEvents(json)
              setIsUser(decodedPayload.email)
           
           
          } else {
            console.log('Error:', response.status);
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };

      fetchEvents();
    } else {
      console.log("Token cookie not found.");
    }
    console.log("isAuthenticated: ", isAuthenticated)
  }, [token]);


  return (
    <Main>
      <ButtonsDiv>
        <Button onClick={handleAddEvent}>Add Event</Button>
        <Button>Subscription</Button>
      </ButtonsDiv>
     
          <div>
          <h1>My Events</h1>
          
          <Div >
          {events && events.map((event:any, index:any) => {
            return (
              <div key={index}>
            <Event >
            <p>{event.price} Gel</p>
              </Event>
              
           
            <h2>{event.nameE}</h2>
           
            </div>
            )
          })}
          </Div>
     </div>
    </Main>
  );
}

const Div = styled.div`
  display: grid;
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    gap: 25px;
  }
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 33px;
  margin-bottom: 35px;
  @media (min-width: 1200px) {
    gap: 68px;
  }
`;

const Button = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #e0e0e0;
  background: #555454;
  border: none;
  width: 50%;
  padding: 34px 0;
  @media (min-width: 768px) {
    height: 214px;
  }
  @media (min-width: 1200px) {
    font-size: 60px;
    line-height: 73px;
  }
`;

const Main = styled.div`
  width: 100%;
  padding: 0 19px;
  @media (min-width: 1200px) {
    padding: 0 126px;
  }
`;

const Event = styled.div`
  background: #d9d9d9;
  border-radius: 8px;
  width: 100%;
  height: 178px;
  display: flex;
  justify-content: end;
  align-items:end;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 20px;
`;
