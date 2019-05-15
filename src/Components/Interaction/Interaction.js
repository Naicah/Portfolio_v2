import React from "react";
import Theme from "./Theme";
import agave from "../../Media/agave.jpg";
import blue_sea from "../../Media/blue_sea.jpg";
import blooming_blossom from "../../Media/blooming_blossom.jpg";
import cherry_blossom from "../../Media/cherry_blossom.jpg";
import dandelion from "../../Media/dandelion.jpg";
import movie_moment from "../../Media/movie_moment.jpg";
import orchid from "../../Media/orchid.jpg";
import white_cherry from "../../Media/white_cherry.jpg";

function Interaction() {
  let themes = [
    {
      name: "Agave",
      img: agave,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "Blooming Blossom",
      img: blue_sea,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "Blue Sea",
      img: blooming_blossom,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "Cherry Blossom",
      img: cherry_blossom,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "Dandelion",
      img: dandelion,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "Movie Moment",
      img: movie_moment,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "Orchid",
      img: orchid,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    },
    {
      name: "White Cherry",
      img: white_cherry,
      colorLight1: "",
      colorDark1: "",
      colorDark2: "",
      colorAccent: "",
      colorLight2: ""
    }
  ];

  return (
    <div className="mainContainer" id="interction">
      <h1>Interaction</h1>
      <div>
        {themes.map(theme => (
          <Theme key={theme.name} {...theme} />
        ))}
      </div>
    </div>
  );
}

export default Interaction;
