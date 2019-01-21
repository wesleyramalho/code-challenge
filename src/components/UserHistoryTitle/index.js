import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const UserHistoryTitle = ({ title }) => (
  <div className="user-history">
    <h1 className="user-history__title">{title}</h1>
  </div>
);

export default UserHistoryTitle;

UserHistoryTitle.propTypes = {
  title: PropTypes.string.isRequired
};
