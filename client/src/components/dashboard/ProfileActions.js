import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return(
    <div className="btn-group mb-4" role ="group">
      <a href="edit-profile.html" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1"/>
          Edit Profile
      </a>
      <a href="add-experience.html" class="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1"/>
        Add Experience
      </a>
      <a href="add-education.html" className="btn btn-light">
        <i class="fas fa-graduation-cap text-info mr-1"/>
        Add Education
      </a>
    </div>
  );
};

export default ProfileActions;
