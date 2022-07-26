import React from "react";

function MyProfile() {
  return (
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">My Profile</h1>
          <p className="col-md-8 fs-4 mx-auto">
            You can view and manage your profile here
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Edit Profile
          </button>
        </div>
      </div>
  );
}

export default MyProfile;
