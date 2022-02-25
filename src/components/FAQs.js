import React, { useState } from 'react';
import { FAQData } from './FAQData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQsSection = styled.div`
flex-direction: column;
align-items: center;
justify-content: center;
display: block;
margin-left: 25%;
width: 50%;

`;

const Container = styled.div`
  margin-top: 100px;
  max-height: 100%;  
  position: center;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
border: 1px solid rgba(153, 153, 153, 0.3);

`;

const Wrap = styled.div`
  background: #FFFFFFF;
  color: #2F4F4F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1.2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }

`;

const Dropdown = styled.div`
  max-height: 100%;
  background: #C4C4C4;
  color: #FFFFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
  }
`;

const FAQs = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#3F826D', size: '20px'}}>
      <FAQsSection>
        <Container>
          {FAQData.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>

            );
          })}
        </Container>
      </FAQsSection>
    </IconContext.Provider>
  );
};

export default FAQs;