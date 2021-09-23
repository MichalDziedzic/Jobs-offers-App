import "./App.css";
import TechJobItem from "./component/FilterTechItem";
import JobItem from "./component/JobItem";
import styled from "styled-components";
import data from "../src/data/data.json";
const Container = styled.div`
     background: red;
`;

const Header = styled.div`
     background: blue;
`;
const Section = styled.div``;

const JobsWrapper = styled.div``;
const FilterOffer = styled.div``;

const App = () => {
     console.log(data);
     return (
          <Container>
               <Header>
                    <FilterOffer>
                         <TechJobItem />
                    </FilterOffer>
               </Header>
               <Section>
                    <JobsWrapper>
                         {data.map((el) => (
                              <JobItem
                                   key={el.id}
                                   company={el.company}
                                   position={el.position}
                              />
                         ))}
                    </JobsWrapper>
               </Section>
          </Container>
     );
};

export default App;
