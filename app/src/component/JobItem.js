import React from "react";
import TechJobTag from "./TechJobTag";
import styled from "styled-components";
const JobContainer = styled.div`
     background: red;
     width: 80%;
     display: flex;
`;
// const LogoImg = styled.img``;
const JobItem = (props) => {
     console.log(props);
     return (
          <JobContainer>
               <img src={props.logo} key={props.id} alt="logo" />
               <div className="job-item-desc">
                    <p className="company-name">{props.company}</p>
                    <h3 className="job-title">{props.position}</h3>
               </div>
               <div className="job-tags">
                    <TechJobTag />
                    <TechJobTag />
                    <TechJobTag />
               </div>
          </JobContainer>
     );
};

export default JobItem;
