import React from "react";
import styled from "styled-components";
const TechJob = styled.p`
     width: 100%;
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
