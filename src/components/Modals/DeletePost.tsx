import React from "react";

import "../../styles/PortalMarkup.css";
import "../../styles/DeletePost.css";

interface DeletePostProps {
  deletePost?(id: string): void;
  closePortal?(): void;
  id: string;
}

const DeletePost = ({ deletePost, closePortal, id }: DeletePostProps) => {
  return (
    <div className="portal-bkg delete-post-bkg" onClick={closePortal}>
      <div className="portal-container delete-post-container" onClick={e => e.stopPropagation()}>
        <h2>Delete Job</h2>
        <p>Are you sure you want to delete this job?</p>
        <div className="delete-post-controls">
          <button className="cnt-btn delete-control" onClick={() => deletePost && deletePost(id)}>
            Delete
          </button>
          <button className="cnt-btn cancel-control" onClick={closePortal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeletePost;
