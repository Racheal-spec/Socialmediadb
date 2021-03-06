import styled from "styled-components";

interface Cardprops {
     id: number,
     icon: string,
     profilename: string,
     followers: string,
     today: string,
     arrow: string,
     primarycolor: string,
  }

const Card: React.FC<Cardprops>= ({id,icon,profilename, followers,today, arrow, primarycolor}) => {
    
    const TodayStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-size: 11px;
    font-weight: bold;
    color: ${primarycolor === "green" ? "#1db489" : "#dc414c"};
    `
    return(
          <Cardwrapper key={id}>
             <InnerWrapper>
             <NameDiv>
           <div><img src={icon} alt="cardimg" /></div>
           <div>
             <Text>{profilename}</Text>
             </div>
           </NameDiv>
             <Followers>{followers}</Followers>
             <SpanText>Followers</SpanText>
              <div>
              <TodayStyle>
                <div>
                <img src={arrow} alt="iconup" />
                </div>
                 <div> {today} Today</div>
                </TodayStyle>
              </div>
             </InnerWrapper>
          </Cardwrapper>
    )
}

export default Card;

const Cardwrapper = styled.div`
background-color: ${({theme}) => theme.cardbg};
width: 100%;
height: 200px;
margin: 0 10px;
box-shadow: 1px 1px 1px ${({theme}) => theme.shadow};
border-radius: 6px;
&:hover{
   background-color: ${({theme}) => theme.cardhover};
}
@media (max-width: 768px) {
    margin: 0;
  }
`
const NameDiv = styled.div`
display: flex;
padding: 10px 0;
`
const InnerWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px 0;
`
const Text = styled.p`
font-weight: bold;
margin: 0 10px;
color: ${({theme}) => theme.cardtext};
`
const Followers = styled.p`
font-size: 3rem;
color: ${({theme}) => theme.numcolor};
font-weight: bold;
`
const SpanText = styled.span`
text-transform: uppercase;
font-size: 11px;
letter-spacing: 4px;
font-weight: bold;
color: ${({theme}) => theme.cardtext}};
`

