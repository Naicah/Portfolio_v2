import React, { Component } from "react";

class TreeHouseAPI extends Component {
  state = {
    totalPoints: "",
    pointsJavaScript: "",
    databasesP: "",
    designP: "",
    developmentToolsP: "",
    totalBadges: "",
    points: [],
    pointsToShow: []
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

    getData().then(data =>
      this.setState(prevState => ({
        // points[ "Total points" ]: data.points.total,
        ...prevState,
        points: [data.points],
        totalPoints: [data.points.total],
        totalBadges: data.badges.length
      }))
    );

    const {
      points,
      totalPoints,
      javaScriptP,
      databasesP,
      designP,
      developmentToolsP,
      totalBadges,
      pointsToShow
    } = this.state;

    // var i;
    // for (i = 0; i < points.length; i++) {
    //   if (points.total > 0) {
    //     pointsToShow.push(points.total);
    //   }
    //   console.log(points.total);
    // }

    return (
      <div className="mainContainer">
        <h3>TreeHouse Achievements</h3>
        <div>Total points: {pointsToShow}</div>
        <div>Total points: {totalPoints}</div>
        <div>Points JavaScript: {javaScriptP}</div>
        <div>Points Databases: {databasesP}</div>
        <div>Points Design: {designP}</div>
        <div>Points Development Tools: {developmentToolsP}</div>
        <div>Total badges: {totalBadges}</div>
        <div />
        <div />
      </div>
    );
  }
}

export default TreeHouseAPI;
