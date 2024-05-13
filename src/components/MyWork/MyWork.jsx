import React, { useEffect, useState } from "react";
import "./MyWork.css";
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
          "Audyssey",
          "Calista",
          "Passkeeper",
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
      <a
        href="https://github.com/DavidCarG"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mywork-showmore">
          Show more
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default MyWork;
