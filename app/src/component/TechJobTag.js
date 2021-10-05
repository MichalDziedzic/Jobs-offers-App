import React from "react";
import styled from "styled-components";
const TechJob = styled.p`
     padding: 10px;
     border-radius: 25px;
     background: grey;
     height: auto;
     color: blue;
`;
const TechJobTag = ({ technology }) => {
     return (
          <>
               <TechJob>{technology}</TechJob>
          </>
     );
};
export default TechJobTag;
