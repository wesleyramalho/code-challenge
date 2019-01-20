import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const SkillsChart = ({ skills } = []) => {
  if (!skills.length) return null;
  const skillItems = skills.map(skill => {
    return (
      <div>
        <h1 className="user-skills__skill-title">{skill.name}</h1>
        <div className="user-skills__skill-chart">{skill.value} </div>
      </div>
    );
  });
  return <div className="user-skills">{skillItems}</div>;
};

export default SkillsChart;
SkillsChart.PropTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};
