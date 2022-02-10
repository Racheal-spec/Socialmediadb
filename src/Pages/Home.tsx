import styled from "styled-components";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import { CardData, overviewData } from "../Data/CardData";

const Home = () => {
 
    const Wrapper = styled.div`
      padding: 30px 80px;
`
    const TitleWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `
     const Total = styled.h5`
      margin: 10px 0;
      color: #8f91ba;
 `
 const CardDiv = styled.div`
     width: 100%;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 20px;
     padding: 30px 0;
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
 `
    return(
      <Wrapper>
          <TitleWrapper>
              <div>
              <h2>Social Media Dashboard</h2>
              <Total>Total Followers: 23,004</Total>
              </div>
              <div>
                  <p>Dark Mode</p>
              </div>
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
            <h3>Overview- Today</h3>
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