import React from "react";

const skills = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/512/1532/1532556.png",
  },
  {
    name: "CSS",
    img: "data:image/png;base64,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",
  },
  {
    name: "JS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ENmTrwygvfNGPr1Ha8lg0WAfQmw0UKgY2A&usqp=CAU",
  },
  {
    name: "REACT",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    name: "REDUX",
    img: "data:image/png;base64,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",
  },
  {
    name: "CHAKRA UI",
    img: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg",
  },
];


function Skills() {
  return (
    <div id="skills">
      {/* <h1>Skills and Tools</h1> */}
      {skills.map((item) => (
        <div className="skills-card">
          <img className="skills-card-img" src={item.img} alt="" />
          <p className="skills-card-name">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;

// Each skills card in the Skills section should have class="skills-card" and the following:
// Image : class="skills-card-img"
// Name : class="skills-card-name"
