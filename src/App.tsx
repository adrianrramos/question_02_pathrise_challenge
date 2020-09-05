import React, { useState, useEffect } from "react";
import { JobCardProps } from "./components/JobsList/JobCard";

import Header from "./components/Display/Header";
import JobsList from "./components/JobsList/JobsList";
import PostToggle from "./components/Portal/PortalToggle";
import CreatePost from "./components/Modals/CreatePost";

import "./styles/App.css";

const App = () => {
  const [jobData, setJobData] = useState<JobCardProps[]>(JSON.parse(localStorage.getItem("jobs") || "[]"));
  const [postCount, setPostCount] = useState<number>(jobData.length);

  const addNewPost = (post: JobCardProps) => {
    setJobData([post, ...jobData]);
  };

  const deletePost = (id: string) => {
    setJobData(jobData.filter(x => x.id !== id));
  };

  useEffect(() => {
    // update job count
    setPostCount(jobData.length);

    // save job posts to local storage
    localStorage.setItem("jobs", JSON.stringify(jobData));
  }, [jobData]);

  return (
    <div className="App">
      <Header count={postCount} />
      <PostToggle btnClassName="add-post-button" icon={<i className="fas fa-plus"></i>}>
        <CreatePost addNewPost={addNewPost} />
      </PostToggle>
      <JobsList jobData={jobData} deletePost={deletePost} />
    </div>
  );
};

export default App;

// =============================
// TODO: ADD A ALL THE CSS
// FIXME: ICONS INSIDE THE INPUT FIELDS + HIGHLIGHT THE INPUT FIELD ON CLICK
// TODO: UPLOAD TO HACKER RANK
