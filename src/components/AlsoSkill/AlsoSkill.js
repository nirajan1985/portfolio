import React from "react";
import "./AlsoSkill.css";
import Sdata from "./AlsoSkillData";

const AlsoSkill = () => {
  return (
    <section id="alsoskill">
      <h1 className="heading">Backend</h1>

      <div className="container also_container">
        {Sdata.map((item, index) => {
          return (
            <div className="also_container-item" key={item.index}>
              <div>
                <img src={item.logo} alt="" />
              </div>
              <p>{item.skillName}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AlsoSkill;
