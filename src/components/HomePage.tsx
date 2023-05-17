import styled  from "styled-components";
import SwiperComponent from "./SwiperComponent";
import HelloComponent from "./HelloComponent";
import AllEventsComponent from "./AllEventsComponent";


export default function HomePage() {
  return (
    <>
      <PopularEventsDiv>
        <PopularH1>Popular Events</PopularH1>
        <SwiperComponent />
      </PopularEventsDiv>
      <HelloComponent/>
      <AllEventsComponent/>
      
    </>
  );
}

const PopularEventsDiv = styled.div`
  padding: 0 19px;
  @media (min-width: 1200px) {
    padding: 0 126px;
  }
`;

const PopularH1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 22px;
  color: #555454;
`;
