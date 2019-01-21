import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const UserStoryTitle = ({ title }) => (
  <div className="user-story-title-container">
    <h1 className="user-story-title-container__title">{title}</h1>
  </div>
);

export default UserStoryTitle;

UserStoryTitle.propTypes = {
  title: PropTypes.string.isRequired
};
