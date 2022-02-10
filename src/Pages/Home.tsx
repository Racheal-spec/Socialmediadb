import styled from "styled-components";
import Card from "../Components/Card";
import Card2 from "../Components/Card2";
import { CardData, overviewData } from "../Data/CardData";

const Home = () => {
 
    const Wrapper = styled.div`
      padding: 60px 150px;
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
     display: flex;
     padding: 30px 0;
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
          <section>
              <div>
                  <h3>Overview- Today</h3>
              </div>
            {
                overviewData.map((item) => (
                    <Card2 key={item.id} id={item.id} title={item.title} icon={item.icon} counts={item.counts} precent={item.percent} />
                ))
            }
          </section>
      </Wrapper>
    )
}

export default Home;