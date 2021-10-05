import React from "react";
import TechJobTag from "./TechJobTag";
import styled from "styled-components";

const JobContainer = styled.div`
     width: 100%;
     display: flex;
`;
const LogoImg = styled.img`
     width: 100px;
     background-size: cover;
     height: 100px;
`;
const LogoWrapper = styled.div`
     width: 20%;
     display: flex;
     justify-content: center;
     align-items: center;
`;
const JobTags = styled.div`
     width: 40%;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: flex-end;
`;
const JobsTitle = styled.h3`
     color: purple;
`;
const CompanyTitle = styled.h3`
     color: purple;
`;
const JobItemDesc = styled.h3`
     width: 40%;
`;
const JobItem = (props) => {
     const { logo, id, company, position, dataTech } = { ...props };
     const dataTechnologies = dataTech.map((tech) => (
          <TechJobTag technology={tech} />
     ));
     return (
          <JobContainer>
               <LogoWrapper>
                    <LogoImg src={logo} key={id} alt={company} />
               </LogoWrapper>
               <JobItemDesc>
                    <CompanyTitle>{company}</CompanyTitle>
                    <JobsTitle>{position}</JobsTitle>
               </JobItemDesc>
               <JobTags>{dataTechnologies}</JobTags>
          </JobContainer>
     );
};

export default JobItem;
