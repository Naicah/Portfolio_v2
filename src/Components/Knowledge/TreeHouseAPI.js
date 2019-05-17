import React, { Component } from "react";
import Points from "./Points";

function filter(obj, condition) {
  const result = {};

  Object.keys(obj).forEach(key => {
    if (condition(obj[key])) {
      result[key] = obj[key];
    }
  });

  return result;
}

class TreeHouseAPI extends Component {
  state = {
    totalPoints: "",
    totalBadges: "",
    points: {}
  };

  render() {
    async function getData() {
      //await the response of the fetch call
      let response = await fetch("https://teamtreehouse.com/ninahedman.json");
      //proceed once the first promise is resolved.
      let data = await response.json();
      //proceed only when the second promise is resolved

      return data;
    }

    getData().then(data => {
      const newPoints = filter(data.points, entry => entry > 0);
      delete newPoints.total;

      this.setState(prevState => ({
        ...prevState,
        points: newPoints,
        totalPoints: data.points.total,
        totalBadges: data.badges.length
      }));
    });

    const { points, totalPoints, totalBadges } = this.state;

    return (
      <div className="mainContainer">
        <h3>TreeHouse Achievements</h3>

        <div id="treeHouseApiTotalPoints">
          <p className="totalPoints">{totalPoints}</p>
          <p>Total points</p>
        </div>
        <div id="treeHouseApiSkillPoints">
          {Object.keys(points).map(keyName => (
            <Points points={points[keyName]} skill={keyName} key={keyName} />
          ))}
        </div>

        <div>Total badges: {totalBadges} </div>
      </div>
    );
  }
}

export default TreeHouseAPI;
