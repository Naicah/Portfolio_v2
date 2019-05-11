import React, { Component } from "react";

class TreeHouseAPI extends Component {
  state = {
    totalPoints: "",
    pointsJavaScript: "",
    pointsDatabases: "",
    pointsDesign: "",
    pointsDevelopmentTools: "",
    totalBadges: ""
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
    //call getData function
    getData().then(data =>
      this.setState({
        totalPoints: data.points.total,
        pointsJS: data.points.JavaScript,
        pointsDatabases: data.points.Databases,
        pointsDesign: data.points.Design,
        pointsDevelopmentTools: data.points["Development Tools"],
        totalBadges: data.badges.length
      })
    ); //log the data

    const {
      totalPoints,
      pointsJS,
      pointsDatabases,
      pointsDesign,
      pointsDevelopmentTools,
      totalBadges
    } = this.state;
    return (
      <div className="mainContainer">
        <h3>TreeHouse Achievements</h3>
        <div>Total points: {totalPoints}</div>
        <div>Points JavaScript: {pointsJS}</div>
        <div>Points Databases: {pointsDatabases}</div>
        <div>Points Design: {pointsDesign}</div>
        <div>Points Development Tools: {pointsDevelopmentTools}</div>
        <div>Total badges: {totalBadges}</div>
        <div />
        <div />
      </div>
    );
  }
}

export default TreeHouseAPI;
