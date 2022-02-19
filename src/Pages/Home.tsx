import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import { CardData, overviewData } from "../Data/CardData";


export interface typeProps {
    toggleHandler: (() => void);
  }

const Home:React.FC<typeProps> = ({toggleHandler}) => {

    return(
      <Wrapper>
          <TitleWrapper>
              <div>
              <HeadingH2>Social Media Dashboard</HeadingH2>
              <Total>Total Followers: 23,004</Total>
              </div>
              <ToggleWrapper>
                  <SwitchText >
                      Dark Mode
                      </SwitchText> 
                
                   <SwitchLabel>
                      <SwitchInput 
                        type="checkbox"
                        checked={
                            window.localStorage.getItem('theme') === 'light'
                        }
                        onChange={() => false}
                        onClick={toggleHandler}
                      />
                      <SwitchSpan></SwitchSpan>
                  </SwitchLabel>
                   
              </ToggleWrapper>
          </TitleWrapper>
          <CardDiv> 

            {
                CardData.map((item) => (
                         <Card key={item.id} id={item.id} icon={item.icon} profilename={item.profilename} followers={item.followers} today={item.today} arrow={item.arrow} primarycolor={item.primarycolor} />
                 
                ))
            }
          </CardDiv>

         <Section2>
         <div>
            <HeadingH3>Overview- Today</HeadingH3>
            </div>
          <Card2Div>
            {
                overviewData.map((item) => (
                    <Card2 key={item.id} id={item.id} title={item.title} icon={item.icon} counts={item.counts} percent={item.percent} arrow={item.arrow} primarycolor={item.primarycolor}/>
                ))
            }
          </Card2Div>
         </Section2>
      </Wrapper>
    )
}

export default Home;


//-------------------STYLES--------------------
const Wrapper = styled.div`
  padding: 30px 80px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
 const Total = styled.h5`
  margin: 10px;
  color: #8f91ba;
`
const HeadingH2 = styled.h2`
 color: ${({theme}) => theme.color};
 margin-left: 10px;
 @media (max-width: 768px) {
    font-size: 15px;
  }
 
`
const HeadingH3 = styled.h3`
 color: ${({theme}) => theme.color};
 margin-left: 10px;
`
const CardDiv = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-gap: 20px;
 padding: 30px 0;
 @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`
const Section2 = styled.section`
 padding: 25px 0;
`
const Card2Div = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-gap: 20px;
 padding: 30px 0;
 width: 100%;
 @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`
const ToggleWrapper = styled.div`
 display: flex;
 align-items: center;
 color: ${({theme}) => theme.cardtext};
 font-weight: bold;
`
const SwitchLabel = styled.label`
 position: relative;
 width: 45px;
 height: 22px;
 display: inline-block;
`
const SwitchSpan = styled.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: 500ms all;
transition: 500ms all;
border-radius: 30px;
&:before {
position: absolute;
content: "";
height: 17px;
width: 17px;
left: 5px;
top: 50%;
background-color: white;
-webkit-transition: 500ms all;
transition: 500ms all;
border-radius: 20px;
transform: translate(0, -50%);
},
`
const SwitchInput = styled.input`
display: none;
&:checked + ${SwitchSpan}{
 background: linear-gradient(to right, #a7dddb, #56c999);
 &:before{
transform: translate(21px, -50%);
-webkit-transform: translate(21px, -50%);
-ms-transform: translate(21px, -50%);
}
}
`
const SwitchText = styled.div`
margin: 0 7px;  
`  