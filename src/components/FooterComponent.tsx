import  styled  from "styled-components";

export default function FooterComponent() {
  return (
    <Footer>
      <Ul>
        <Li>592 44 44 94</Li>
        <Li>About Us</Li>
        <Li>FAQ</Li>
      </Ul>
      <Ul>
        <Li>Support@spektri.ge</Li>
        <Li>For Organizations</Li>
        <Li>Terms & Conditions</Li>
      </Ul>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 52px 19px;
  background: #D9D9D9;
 
 
`;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: left;
`
const Li = styled.li`
    font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
margin-top: 16px;
color: #555454;
cursor: pointer;
transition: all .3s ease;
&:hover {
    color: white;
}
`
