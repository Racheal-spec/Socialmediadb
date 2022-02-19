import styled from "styled-components";

interface Card2props {
    id: number,
    title: string,
    icon: string,
    counts: string,
    percent: string,
    arrow: string,
    primarycolor: string,
}

const Card2: React.FC<Card2props> = ({id,title,icon,counts,percent, arrow, primarycolor}) => {
    const Percentdiv = styled.div`
    display: flex;
    align-items: center;
    color: ${primarycolor === "green" ? "#1db489" : "#dc414c"};
  `
    
    return(
        <Cardwrapper>
            <Innerwrapper>
               <Row1>
               <div>
                    <Text>{title}</Text>
                </div>
                <div>
                    <img src={icon} alt="card2icon" />
                </div>
               </Row1>
               <Row2>
               <div>
                    <Counts>{counts}</Counts>
                </div>
                <Percentdiv>
                <div>
                <img src={arrow} alt="iconup" />
                </div>
                 <div>{percent}</div>
                </Percentdiv>
               </Row2>
            </Innerwrapper>
        </Cardwrapper>
    )
}

export default Card2;

const Cardwrapper = styled.div`
    background-color: ${({theme}) => theme.cardbg};
    width: 100%;
    height: 150px;
    margin: 0 10px;
   box-shadow:  1px 1px 1px ${({theme}) => theme.shadow};
   border-radius: 6px;
   &:hover{
           background-color: ${({theme}) => theme.cardhover};
       }
`
    const Innerwrapper = styled.div`
        padding: 0 20px;
    `
    const Row1 = styled.div`
         display: flex;
         align-items: center;
        justify-content: space-between;
        padding: 20px 0;
    `
       const Row2 = styled.div`
       display: flex;
       align-items: center;
      justify-content: space-between;
      padding: 20px 0;
  `
   const Counts = styled.p`
   color: ${({theme}) => theme.numcolor};
   font-size: 2rem;
   font-weight: bold;
`
const Text = styled.h5`
      color: #8f91ba;
 `