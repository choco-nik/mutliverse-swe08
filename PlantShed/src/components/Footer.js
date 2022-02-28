import React from "react";
import styled from 'styled-components';
import { AiFillInstagram, AiFillFacebook, AiOutlineMail } from "react-icons/ai";
import { RiSuitcaseLine, RiTruckLine } from "react-icons/ri";


   
export const Box = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #CCE8CC;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

  @media (max-width: 100%) {
    padding: 60px 20px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1024px;
    margin: 0 auto;
    min-height: calc(1024px-(footerheight+headerheight))
`;
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 100%) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #4BA37E;
  margin-bottom: 15px;
  font-size: 20px;
  text-decoration: none;
   
  &:hover {
      color: #3F826D;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #3F826D;
  margin-bottom: 15px;
  font-weight: bold;
`;
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ fontSize: "2rem",
                   color: "#3F826D", 
                   textAlign: "center", 
                   marginTop: "-5px" }}>
        Plants and Coffee for Everyone, Everywhere. 
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <span style={{ marginLeft: "30px" }}>
            <FooterLink href="#">Aim</FooterLink>
            </span>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <i className="icon">
            <span style={{ marginLeft: "20px" }}>
            <FooterLink href="#"><RiTruckLine /></FooterLink>
            </span>
            <span style={{ marginLeft: "20px" }}>
            <FooterLink href="#"><RiSuitcaseLine /></FooterLink>
            </span>
            </i>            
          </Column>
          <br/>
          <Column>
            <Heading>Contact Us</Heading>
            <i className="icon">
            <span style={{ marginLeft: "30px" }}>
            <FooterLink href="#"><AiOutlineMail /></FooterLink>
            </span>
            </i>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/patchplants" target="_blank">
              <i className="icon">
                <span style={{ marginLeft: "40px" }}>
                  <AiFillFacebook />
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="icon">
                <span style={{ marginLeft: "40px" }}>
                  <AiFillInstagram />
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;