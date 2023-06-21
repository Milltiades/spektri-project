import { styled } from "styled-components";
import SwiperComponent from "./SwiperComponent";
import { useEffect, useState } from "react";

export default function EventPage() {

  const [event, setEvent] = useState<any>(null)
  useEffect(() => {

    const fetchEvents = async () => {
       const response = await fetch('http://localhost:3000/events/:eventID')
       const json = await response.json()

       if(response.ok){
        setEvent(json);
     
       }
    }

    fetchEvents();
    console.log('event: ', event);
  }, [])
  return (
    <Main>
      <Div>
        <Event></Event>

        <Content>
          <H1>26th Tbilisi Jazz Festival</H1>
          <Ul>
            <li><P>Sheraton Grand Tbilisi Metechi Palace</P> </li>
            <li><P> Performer:{" "}
              <span>
                {" "}
                Beka Gochiashvili <br />
                Temur Diasamidze
              </span></P> 
             
            </li>
            <li><P>Time: <span>22:00 , May 22 , 2023</span></P> 
              
            </li>
            <li><P> Address: <span>20 Telavi S, Tbilisi 0103</span></P> 
             
            </li>
            <li><P> Phone: <span>032 277 20 20</span></P> 
             
            </li>
          </Ul>
          <Button>BUY TICKET</Button>
        </Content>
        <TextDiv>
          <H1>Description</H1>
          <P>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </P>
        </TextDiv>
      </Div>
      
      <SwiperComponent/>
    </Main>
  );
}

const Main = styled.div`
  padding: 30px 19px 55px 19px;
`;

const Event = styled.div`
  width: 100%;
  height: 178px;
  background: #d9d9d9;
  border-radius: 8px;
  @media (min-width: 768px) {
    height: 371px;
    width: 50%;
  }
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-top: 16px;
  color: #555454;
  align-self: flex-start;
`;

const Ul = styled.ul`
  list-style: none;
  text-align: left;
  align-self: flex-start;
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
margin-bottom: 43px;
  margin-top: 16px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width:768px){
    width: 50%;
    padding-left: 40px;
  }
`;
const Div = styled.div`
  width: 100%;
  @media screen and (min-width:1200px){
    padding: 0 126px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
`;

const P = styled.p`
 font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
margin-top: 16px;
color: #555454;
`;

const TextDiv = styled.div`
  width: 100%;
  margin-bottom: 86px;
`