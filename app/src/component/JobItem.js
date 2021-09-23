import React from "react";
import TechJobItem from "./FilterTechItem";

const JobItem = (props) => {
     return (
          <div className="job-item">
               <img src="#" alt="Logo" />
               <div className="job-item-desc">
                    <p className="company-name">{props.company}</p>
                    <h3 className="job-title">{props.position}</h3>
               </div>
               <div className="job-hash-tags">
                    <TechJobItem />
                    <TechJobItem />
                    <TechJobItem />
               </div>
          </div>
     );
};
export default JobItem;
