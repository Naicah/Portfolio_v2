import React, { Component } from "react";
import Points from "./Points";
import BadgeContainer from "./BadgeContainer";

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
    points: {},
    totalBadges: "",

    badges: [
      {
        course: "",
        badges: [
          {
            title: this.badgeSteps,
            url: "",
            icon_url: ""
          },
          {
            title: "",
            url: "",
            icon_url: ""
          }
        ]
      }
    ]
  };

  getAllBadges = data => {
    let result = [];
    let badges = [];

    let currentCourse = data[1]["courses"][0].title;
    console.log("result: ", result);
    console.log("badges: ", badges);
    let i;
    for (i = 1; i < data.length; i++) {
      let course = data[i]["courses"][0].title;
      let courseUrl = data[i]["courses"][0].url;
      let skill = data[i]["courses"][1].title;
      let skillUrl = data[i]["courses"][1].url;
      let icon_url = data[i].icon_url;

      if (course === currentCourse) {
        badges.push({
          title: skill,
          url: skillUrl,
          icon_url: icon_url
        });
      } else {
        if (i !== 1) {
          i = i - 1;
          course = data[i]["courses"][0].title;
          courseUrl = data[i]["courses"][0].url;
          skill = data[i]["courses"][1].title;
          skillUrl = data[i]["courses"][1].url;
          icon_url = data[i].icon_url;
        }
        result.push({
          course: course,
          url: courseUrl,
          badges: badges
        });

        currentCourse = course;
        badges = [];
        badges.push({
          title: skill,
          url: skillUrl,
          icon_url: icon_url
        });
      }
      console.log("result", result);
    }
    return result;
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

      const badges = this.getAllBadges(data.badges);

      this.setState(prevState => ({
        ...prevState,
        points: newPoints,
        totalPoints: data.points.total,
        totalBadges: data.badges.length,
        badges: badges
      }));
    });

    const { points, totalPoints, totalBadges, badges } = this.state;

    return (
      <div className="mainContainer">
        <h3>TreeHouse Achievements</h3>

        <div className="treeHouseApiTotal">
          <p className="number">{totalPoints}</p>
          <p>Total points</p>
        </div>
        <div id="treeHouseApiSkillPoints">
          {Object.keys(points).map(keyName => (
            <Points points={points[keyName]} skill={keyName} key={keyName} />
          ))}
        </div>
        <div className="treeHouseApiTotal">
          <p className="number">{totalBadges}</p>
          <p>Total badges</p>
        </div>

        {badges.map(object => (
          <BadgeContainer object={object} key={object["course"]} />
        ))}
      </div>
    );
  }
}

export default TreeHouseAPI;
