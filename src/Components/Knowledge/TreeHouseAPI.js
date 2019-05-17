import React, { Component } from "react";
import Points from "./Points";

function filter(obj, predicate) {
  const result = {};

  Object.keys(obj).forEach(key => {
    if (predicate(obj[key])) {
      result[key] = obj[key];
    }
  });

  return result;
}

class TreeHouseAPI extends Component {
  state = {
    totalPoints: "",
    pointsJavaScript: "",
    databasesP: "",
    designP: "",
    developmentToolsP: "",
    totalBadges: "",
    points: {} // empty object... since waht you get is an object with points. haha yes. love your autofills
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

      // So here it should filter

      this.setState(prevState => ({
        ...prevState,
        points: newPoints, // not sure why you had an array around the points object - i don't know either..tried 1000 different things
        totalPoints: data.points.total,
        totalBadges: data.badges.length
      }));
    });

    const { points, totalPoints, totalBadges } = this.state;

    return (
      <div className="mainContainer">
        <h3>TreeHouse Achievements</h3>

        <div id="treeHouseApiTotalPoints">
          <p className="totalPoints">Total points</p>
          <p>{totalPoints}</p>
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
