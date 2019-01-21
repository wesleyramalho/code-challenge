import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const UserStoryContent = ({ stories }) => {
  const userStories = stories.map(({ name, date, description }) => (
    <div key={name} className="user-story-text-container__content">
      <h1 className="user-story-text-container__content__name">{name}</h1>
      <span className="user-story-text-container__content__date">{date}</span>
      <p className="user-story-text-container__content__description">
        {description}
      </p>
    </div>
  ));
  return <div className="user-story-text-container">{userStories}</div>;
};

export default UserStoryContent;

UserStoryContent.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};
