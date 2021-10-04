import React from "react";
import TechJobTag from "./TechJobTag";
import styled from "styled-components";

const JobContainer = styled.div`
     width: 100%;
     display: flex;
     background: red;
`;
const LogoImg = styled.img`
     width: 100px;
     background-size: cover;
     height: 100px;
`;

const JobTags = styled.div`
     width: 10px;
     height:10px
     display: flex;
     flex-direction: column;
`;

const JobItem = (props) => {
     const { logo, id, company, position, dataTech } = { ...props };
     const dataTechnologies = dataTech.map((tech) => (
          <TechJobTag technology={tech} />
     ));
     console.log(dataTechnologies);
     return (
          <JobContainer>
               <LogoImg src={logo} key={id} alt={company} />
               <div className="job-item-desc">
                    <p className="company-name">{company}</p>
                    <h3 className="job-title">{position}</h3>
               </div>
               <JobTags>{dataTechnologies}</JobTags>
          </JobContainer>
     );
};

export default JobItem;
