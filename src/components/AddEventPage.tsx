import { useState, useContext, useEffect } from "react";
import { styled } from "styled-components";

import { AuthContext } from "../context/AuthContext";
import {} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddEventPage() {
  // const { isAuthenticated, setIsAuthenticated } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  const [nameK, setNameK] = useState("");
  const [nameE, setNameE] = useState("");
  const [timeOfTheDay, setTimeOfTheDay] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [addressK, setAddressK] = useState("");
  const [addressE, setAddressE] = useState("");
  const [performerK, setPerformerK] = useState("");
  const [performerE, setPerformerE] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [ticketLink, setTicketLink] = useState("");
  const [descriptionK, setDescriptionK] = useState("");
  const [descriptionE, setDescriptionE] = useState("");
  const [price, setPrice] = useState<any>("");

  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const [id, setId] = useState("");

  function getCookieValue(cookieName: any) {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const event = {
      nameK,
      nameE,
      timeOfTheDay,
      eventStartTime,
      eventEndTime,
      addressK,
      addressE,
      performerK,
      performerE,
      category,
      city,
      ticketLink,
      descriptionK,
      descriptionE,
      price,
    };

    if (token) {
      console.log("Token:", token);
      // Split the JWT into its three parts: header, payload, and signature
      const [encodedHeader, encodedPayload, encodedSignature] =
        token.split(".");

      // Decode the Base64 encoded header and payload
      const decodedHeader = JSON.parse(atob(encodedHeader));
      const decodedPayload = JSON.parse(atob(encodedPayload));

      console.log("Decoded Header:", decodedHeader);
      console.log("Decoded Payload:", decodedPayload);

      const addEvent = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/events/register/${decodedPayload.companyID}`,
            {
              method: "POST",
              body: JSON.stringify(event),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const json = await response.json();
          setData(json);
          console.log("company ID: ", decodedPayload.companyID)
          console.log("Token: ", token)
          console.log('event: ', event)
          if (!response.ok) {
            setError(json.error);
          }
          if (response.ok) {
            setAddressE("");
            setAddressK("");
            setNameE("");
            setNameK("");
            setTimeOfTheDay("");
            setEventEndTime("");
            setEventStartTime("");
            setPerformerE("");
            setPerformerK("");
            setCategory("");
            setCity("");
            setTicketLink("");
            setDescriptionE("");
            setDescriptionK("");
            setPrice("");
            setError(null);

            console.log("new event added", json);
          }
        } catch (error) {
          console.log(error);
        }
      };
      addEvent()
    }
  };

  return (
    <Main>
      <Form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Title"
          onChange={(e) => setNameE(e.target.value)}
          value={nameE}
        />
        <Input
          type="text"
          placeholder="სათაური"
          onChange={(e) => setNameK(e.target.value)}
          value={nameK}
        />
        <Input
          type="text"
          placeholder="Time of the day"
          onChange={(e) => setTimeOfTheDay(e.target.value)}
          value={timeOfTheDay}
        />
        <Input
          type="text"
          placeholder="Event start time"
          onChange={(e) => setEventStartTime(e.target.value)}
          value={eventStartTime}
        />
        <Input
          type="text"
          placeholder="Event End time"
          onChange={(e) => setEventEndTime(e.target.value)}
          value={eventEndTime}
        />
        <Input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddressE(e.target.value)}
          value={addressE}
        />
        <Input
          type="text"
          placeholder="მისამართი"
          onChange={(e) => setAddressK(e.target.value)}
          value={addressK}
        />
        <Input
          type="text"
          placeholder="Performers"
          onChange={(e) => setPerformerE(e.target.value)}
          value={performerE}
        />
        <Input
          type="text"
          placeholder="პერფორმერი"
          onChange={(e) => setPerformerK(e.target.value)}
          value={performerK}
        />
        <Input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <Input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <Input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <Input
          type="text"
          placeholder="Ticket"
          onChange={(e) => setTicketLink(e.target.value)}
          value={ticketLink}
        />
        <Textarea
          placeholder="Description"
          onChange={(e) => setDescriptionE(e.target.value)}
          value={descriptionE}
        />
        <Textarea
          placeholder="აღწერა"
          onChange={(e) => setDescriptionK(e.target.value)}
          value={descriptionK}
        />

        <Button onClick={handleSubmit}>Add Event</Button>
        {error && <Error>{error}</Error>}
      </Form>
      {/* <>{
      data.map((item : any,index :any) => {
        return (
          <div key={index}>{item.title}</div>
        )
      })
    }
    </> */}
    </Main>
  );
}

const Error = styled.div`
  padding: 10px;
  background: #ffefef;
  border: 1px solid red;
  color: red;
  border-radius: 4px;
  margin: 20px 0;
`;
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
`;

const Textarea = styled.textarea`
  background: #d9d9d9;
  border: 1px solid #555454;
  border-radius: 20px;
  padding: 9px 0 9px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  min-height: 92px;
`;

const Button = styled.button`
  background: #555454;
  border: 1px solid #555454;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding: 9px;
  color: #d9d9d9;
`;
