import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import DeletePost from "../Modals/DeletePost";
import PortalToggle from "../Portal/PortalToggle";

import "../../styles/JobCard.css";

export interface JobCardProps {
  id: string;
  company: string;
  role: string;
  createdAt: Date;
  color: string;
  deletePost?(id: string): void;
}

const JobCard = ({ company, role, createdAt, id, color, deletePost }: JobCardProps) => {
  const [displayPortalToggle, setDisplayPortalToggle] = useState(false);

  dayjs.extend(relativeTime);
  const date = dayjs(createdAt).fromNow();

  return (
    <div
      className="job-card-container"
      style={{ backgroundColor: `${color}` }}
      onMouseEnter={() => setDisplayPortalToggle(true)}
      onMouseLeave={() => setDisplayPortalToggle(false)}
    >
      {displayPortalToggle && (
        <PortalToggle btnClassName="delete-button" icon={<i className="delete-icon far fa-trash-alt"></i>}>
          <DeletePost deletePost={deletePost} id={id} />
        </PortalToggle>
      )}
      <h2 className="job-company">{company}</h2>
      <p className="job-role">{role}</p>
      <p className="job-created-date">added {date}</p>
    </div>
  );
};
export default JobCard;
