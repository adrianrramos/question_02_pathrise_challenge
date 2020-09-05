import React, { useState, SyntheticEvent, ChangeEvent } from "react";
import { JobCardProps } from "../JobsList/JobCard";
import { v4 as uuidv4 } from "uuid";

import "../../styles/CreatePost.css";
import "../../styles/PortalMarkup.css";

interface CreatePostProps {
  closePortal?(): void;
  addNewPost(post: JobCardProps): void;
}

const CreatePost = ({ closePortal, addNewPost }: CreatePostProps) => {
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const createPost = (e: SyntheticEvent) => {
    e.preventDefault();

    const colors = ["#4A306D", "#49BF71", "#8FB1DF", "#FD6E7B", "#FBBE74"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const postData = {
      company,
      role,
      id: uuidv4(),
      createdAt: new Date(),
      color,
    };

    addNewPost(postData);
    closePortal && closePortal();
  };

  return (
    <div className="portal-bkg create-post-bkg" onClick={closePortal}>
      <div className="portal-container create-post-container" onClick={(e: SyntheticEvent) => e.stopPropagation()}>
        <h2>Add</h2>
        <form onSubmit={createPost} id="create-post-form">
          <div className="input-box">
            <input
              type="text"
              name="company"
              id="company"
              value={company}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCompany(e.target.value)}
              placeholder="Company Name"
            />
            <i className="input-icon fas fa-search"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="role"
              id="role"
              value={role}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value)}
              placeholder="Job Title"
            />
            <i className="input-icon fas fa-briefcase"></i>
          </div>
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
