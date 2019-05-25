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
    courses: [],
    pointsHidden: true,
    badgesHidden: true
  };

  extractCourses = data => {
    let result = {};
    
    for (let i = 0; i < data.length; i++) {

      let currentEntry = data[i];
      const courses = currentEntry.courses;
      if (courses.length === 0) {
        continue;
      }

      const currentBadge = {
        name: currentEntry.name,
        url:  currentEntry.url,
        icon_url: currentEntry.icon_url,
      };

      const currentCourses = courses.filter(obj => obj.url !== currentEntry.url);
      
      currentCourses.forEach(obj => {
        let course = result[obj.title];
        if (!course) {
          course = {
            name: obj.title,
            url: obj.url,
            badges: [],
          }
          result[course.name] = course;
        }

        course.badges.push(currentBadge);

      });
    }

    return Object.values(result);
  };

  togglePoints = () => {
    const { pointsHidden } = this.state;
    this.setState({ pointsHidden: !pointsHidden });
  };

  toggleBadges = () => {
    const { badgesHidden } = this.state;
    this.setState({ badgesHidden: !badgesHidden });
  };

  componentDidMount() {
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


      const courses = this.extractCourses(data.badges);
      
      this.setState(prevState => ({
        ...prevState,
        points: newPoints,
        totalPoints: data.points.total,
        totalBadges: data.badges.length,
        courses: courses
      }));
    });
  }

  render() {
    const { points, totalPoints, totalBadges, courses, pointsHidden, badgesHidden } = this.state;

    return (
      <div>
        <h3>TreeHouse Achievements</h3>

        <div className="treeHouseApiTotal"  onClick={this.togglePoints}>
          <p className="number">{totalPoints}</p>
          <p>Total points</p>
        </div>
        <div id="treeHouseApiSkillPoints"
        className={pointsHidden ? "hidden" : ""}
        >
          {Object.keys(points).map(keyName => (
            <Points points={points[keyName]} skill={keyName} key={keyName} />
          ))}
        </div>
        <div className="treeHouseApiTotal"  onClick={this.toggleBadges}>
          <p className="number">{totalBadges}</p>
          <p>Total badges</p>
        </div>
<div   className={badgesHidden ? "hidden" : ""}
       >
        {courses.map(course => (
          <BadgeContainer course={course} key={course.name} />
        ))}
        </div>
      </div>
    );
  }
}

export default TreeHouseAPI;
