import React from "react";
import JobCard, { JobCardProps } from "./JobCard";

interface JobsListProps {
  jobData: JobCardProps[];
  deletePost(id: string): void;
}

const JobsList = ({ jobData, deletePost }: JobsListProps) => {
  return (
    <div className="jobs-list-container">
      {jobData.map(job => (
        <JobCard {...job} key={job.id} deletePost={deletePost} />
      ))}
    </div>
  );
};
export default JobsList;
