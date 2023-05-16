
import { styled } from 'styled-components'

export default function HelloComponent() {
  return (
    <Div>
        <H1>HELLO!</H1>
        <P>What's Happening!</P>
    </Div>
  )
}


const Div = styled.div`
width: 100%;
font-style: normal;
background: #555454;
color: #E0E0E0;
padding: 21px 0;
display: flex;
flex-direction: column;
align-items: center;
height: 141px;
margin-top: 24px;
`

const H1 = styled.h1`
    font-weight: 400;
font-size: 50px;
line-height: 61px;
width: 176px;
`
const P = styled.p`
    font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 25px;

`