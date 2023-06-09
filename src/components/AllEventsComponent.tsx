import axios from "axios";
import  styled  from "styled-components";

import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function AllEventsComponent() {

  // const {isAuthenticated, setIsAuthenticated } = useContext<any>(AuthContext)
const [events, setEvents] = useState<any>(null)

const navigate = useNavigate()

  useEffect(() => {

   

    const fetchEvents = async () => {
       const response = await fetch('http://localhost:3000/events/allCompany/events')
       const json = await response.json()

       if(response.ok){
        setEvents(json);
     
       }
    }

    fetchEvents();
    console.log('events: ', events);


    
  }, [])
  

  return (
    <Main>
      <Form>
       <Label htmlFor="" onClick={() => console.log('clicked')}> 
       Choose a Date 
       <img src="/assets/box.svg" alt="box" />
       </Label>
       <Label htmlFor="" onClick={() => console.log('clicked')} > 
       Category 
       <img src="/assets/box.svg" alt="box" />
       </Label>
        
        <Search type="text" placeholder="Search" />
      </Form>
      <Div>
       

        <Ul>
          {events && events.map((event:any, index: any) => {
            return (
              <Li key={index} onClick={() => navigate(`/events/${event.eventID}`) }>
              <Event>
              <P>{event.price} GEL</P>

              </Event>
              <H1>{event.nameE}</H1>
              <p>{new Date(event.eventStartTime).toLocaleDateString()}</p>
            </Li>
            )
          })}
        </Ul>
      </Div>
      <Button>Load More</Button>
    </Main>
  );
}
//${event._id}

const Label = styled.label`
  font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
display: flex;
flex-direction: row;
align-items: center;
color: #555454;
margin-top: 28px;
cursor: pointer;
& img {
  margin-left: 15px;
  width: auto;
}
@media (min-width: 768px) {
  width: 50%;
}
@media (min-width: 1200px) {
  margin-top: 0;
  width: 100%;
  
  
 
}
`



const Ul = styled.ul`
    list-style: none;
    
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: auto auto;
      gap: 25px;
    }
    @media (min-width: 1200px) {
      grid-template-columns: auto auto auto;
      gap: 40px;
    }
`
const Li = styled.li`
    cursor: pointer;
`

const Div = styled.div`
    width: 100%;
`
const Main = styled.div`
  width: 100%;
  padding: 0 19px 61px 19px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 126px 104px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
   width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    /* justify-content: space-between; */
    gap: 120px;
  }
 
  
`;

const Search = styled.input`
  width: 100%;
  background: #e0e0e0;
  border-radius: 8px;
  padding: 6px 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #555454;
  border: none;
  margin-top: 22px;
  margin-bottom: 28px;
  @media (min-width: 1200px) {
    
   
  }
  

`;

const Event = styled.div<any>`
  width: 100%;
  height: 178px;
  background: #d9d9d9;
  border-radius: 8px;
  background-image: url('/assets/jazz.jpg');
  /* background-image: ${(props) => props.img}; */
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  /* @media (min-width: 768px){
    width: 95%;
  } */
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  padding: 20px;
  color: white;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 55px inset;

  }
`;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-top: 16px;
  color: #555454;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 8px;
  color: white;

`;

const Button = styled.button`
  background: #555454;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #e0e0e0;
  padding: 10px 71px;
  border: none;
  width: calc(100% - 55px);
  margin-top: 16px;
  @media (min-width: 768px) {
width: 264px;
  }
`;
