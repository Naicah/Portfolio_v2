import React, { Component } from "react";
import Points from "./Points";
import Badge from "./Badge";

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

    allBadges: [
      {
        course: "",
        icon_url: "",
        badges: [
          {
            title: this.badgeSteps,
            url: ""
          },
          {
            title: "",
            url: ""
          }
        ]
      }
    ]
  };

  getAllUniqueCourses = data => {
    let courses = [];
    let result = [];

    let i;
    for (i = 1; i < data.length; i++) {
      let course = data[i]["courses"][0].title;
      if (!courses.includes(course)) {
        courses.push(course);
        result.push({ course: course });
      }
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

      const courses = this.getAllUniqueCourses(data.badges);

      this.setState(prevState => ({
        ...prevState,
        points: newPoints,
        totalPoints: data.points.total,
        totalBadges: data.badges.length,
        allBadges: courses

        // allBadges: [
        //   {
        //     course: data.badges[1]["courses"][0].title,
        //     icon_url: data.badges[1].icon_url,
        //     badges: [
        //       {
        //         title: data.badges[1]["courses"][1].title,
        //         url: ""
        //       },
        //       {
        //         title: "",
        //         url: ""
        //       }
        //     ]
        //   }
        // ]
      }));

      // console.log(data.badges[1]["courses"][0].title);
    });

    const { points, totalPoints, totalBadges, allBadges } = this.state;

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
          <p>Course: {allBadges[0]["course"]}</p>
          {/* <p> Icon: {allBadges[0]["icon_url"]}</p>
          <p> Step: {allBadges[0]["badges"][0]["title"]}</p> */}
        </div>

        <Badge
          course="React"
          badges="[ 
          { step: Newbie,
          icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage1.png' },
          {
          step: Tricks,
          icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_react_Stage2.png' }

          }]"
        />
      </div>
    );
  }
}

export default TreeHouseAPI;
