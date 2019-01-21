import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const calculateTransparentPart = (filledPart) => {
  //removes percentage symbol and convert value to int
  const filledValue = parseInt(filledPart.slice(0,filledPart.length - 1));
  return 100 - filledValue;
}
const SkillsChart = ({ skills } = []) => {
  if (!skills.length) return null;
  const skillItems = skills.map(skill => {
    return (
      <div className="user-skills__skill-content">
        <h1 className="user-skills__skill-title">{skill.name}</h1>
        <div
          className="user-skills__skill-chart"
          style={{
            backgroundImage: `linear-gradient(90deg, #fff 
              ${skill.value}, transparent ${calculateTransparentPart(skill.value)}%)`
          }}
        />
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
