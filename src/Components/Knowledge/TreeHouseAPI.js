import React, { useState, useEffect } from "react";
import BadgeContainer from "./BadgeContainer";
import { PointsDiv } from "./style";

function Points({ points, skill }) {
  return (
    <PointsDiv>
      <div className="details">
        <div className="points">
          <p>{points}</p>
        </div>
        <div>
          <p>{skill}</p>
        </div>
      </div>
    </PointsDiv>
  );
}

function filter(obj, condition) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (condition(obj[key])) {
      result[key] = obj[key];
    }
  });

  return result;
}

function TreeHouseAPI() {
  const [state, setState] = useState({
    totalPoints: "",
    points: {},
    totalBadges: "",
    courses: []
  });
  const [pointsHidden, setPointsHidden] = useState(true);
  const [badgesHidden, setbadgesHidden] = useState(true);

  const extractCourses = data => {
    let result = {};

    for (let i = 0; i < data.length; i++) {
      let currentEntry = data[i];
      const courses = currentEntry.courses;
      if (courses.length === 0) {
        continue;
      }

      const currentBadge = {
        name: currentEntry.name,
        url: currentEntry.url,
        icon_url: currentEntry.icon_url
      };

      const currentCourses = courses.filter(
        obj => obj.url !== currentEntry.url
      );

      currentCourses.forEach(obj => {
        let course = result[obj.title];
        if (!course) {
          course = {
            name: obj.title,
            url: obj.url,
            badges: []
          };
          result[course.name] = course;
        }

        course.badges.push(currentBadge);
      });
    }

    return Object.values(result);
  };

  const togglePoints = () => {
    setPointsHidden(!pointsHidden);
  };

  const toggleBadges = () => {
    setbadgesHidden(!badgesHidden);
  };

  useEffect(() => {
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

      const courses = extractCourses(data.badges);

      setState({
        points: newPoints,
        totalPoints: data.points.total,
        totalBadges: data.badges.length,
        courses: courses
      });
    });
    // componentDidUnmount
    return () => {
      // window.onscroll = null;
    };
  }, []);

  const { totalPoints, points, totalBadges, courses } = state;
  return (
    <div>
      <h3>TreeHouse Achievements</h3>

      <div className="treeHouseApiTotal" onClick={togglePoints}>
        <p className="number">{totalPoints}</p>
        <p>Total points</p>
      </div>
      <div
        id="treeHouseApiSkillPoints"
        className={pointsHidden ? "hidden" : ""}
      >
        {Object.keys(points).map(keyName => (
          <Points points={points[keyName]} skill={keyName} key={keyName} />
        ))}
      </div>
      <div className="treeHouseApiTotal" onClick={toggleBadges}>
        <p className="number">{totalBadges}</p>
        <p>Total badges</p>
      </div>
      <div className={badgesHidden ? "hidden" : ""}>
        {courses.map(course => (
          <BadgeContainer course={course} key={course.name} />
        ))}
      </div>
    </div>
  );
}

export default TreeHouseAPI;
