import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const UserInfoTitle = ({ title }) => (
  <div className="user-info">
    <h1 className="user-info__title">{title}</h1>
  </div>
);

export default UserInfoTitle;

UserInfoTitle.propTypes = {
  title: PropTypes.string.isRequired
};
