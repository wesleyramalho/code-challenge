import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const UserInfoText = ({ text } = []) => {
  if (!text.length) return null;
  const textItems = text.map(textItem => {
    return <h1 key={textItem} className="user-content__text">{textItem}</h1>;
  });
  return <div className="user-content">{textItems}</div>;
};

export default UserInfoText;
UserInfoText.propTypes = {
  text: PropTypes.array
};
