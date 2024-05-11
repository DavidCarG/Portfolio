import React, { useEffect, useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/DavidCarG/repos")
      .then((response) => response.json())
      .then((data) => {
        const repoNames = [
          "BellPepperDisease",
          "FitnessClass",
          "PyTacos",
          "Calista",
          "Etchy",
          "Landing-Page",
        ];
        const filteredData = data.filter((repo) =>
          repoNames.includes(repo.name)
        );
        setRepos(filteredData);
      });
  }, []);

  return (
    <div id="work" className="mywork bg-slate-200">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>

      <div className="mywork-container">
        {repos.map((repo) => (
          <div key={repo.id} className="repo">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
