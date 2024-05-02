import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="jobrole">{job.jobRole}</div>
      <div className="joblocation"> {job.location}</div>
      <div className="salary">
        Estimated Salary: {job.minJdSalary} - {job.maxJdSalary}{" "}
        {job.salaryCurrencyCode}
      </div>
      <div className="about">About Company</div>
      <div className="aboutus">About us</div>
      <div className="jobdetails">{job.jobDetailsFromCompany}
      
      <div className="viewJob">
      <a style={{textDecoration: 'none', color: 'rgb(0, 0, 194)'}} href={job.jdLink} target="_blank" rel="noopener noreferrer">
          View Job
        </a>
      </div>
      </div>
      <div className="exp">
        Experience Required: {job.minExp} - {job.maxExp} years
      </div>
      <div className="morejob">
      
        <div className="apply">Easy Apply</div>
      </div>
    </div>
  );
};

export default JobCard;
