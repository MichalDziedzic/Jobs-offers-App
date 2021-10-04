import "./App.css";
import TechJobTag from "./component/TechJobTag";
import JobItem from "./component/JobItem";
import styled from "styled-components";
import data from "./data/data";
import bgHeader from "./images/bg-header-desktop.svg";
//
const Container = styled.div`
     background: hsl(180, 8%, 52%);
     width: 100%;
     margin: 0;
     padding: 0;
`;

const Header = styled.div`
     background-image: url(${bgHeader});
     background-size: cover;
     background-repeat: no-repeat;
     height: 20vh;
     width: 100%;
`;
const Section = styled.div`
     background: hsl(180, 52%, 96%);
     width: 100%;
     height: auto;
`;

const JobsWrapper = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
`;
const FilterOffer = styled.div``;

const App = () => {
     return (
          <Container>
               <Header>
                    <FilterOffer>
                         <TechJobTag />
                    </FilterOffer>
               </Header>
               <Section>
                    <JobsWrapper>
                         {data.map((el) => (
                              <JobItem
                                   key={el.id}
                                   company={el.company}
                                   position={el.position}
                                   logo={el.logo}
                              />
                         ))}
                    </JobsWrapper>
               </Section>
          </Container>
     );
};

export default App;
