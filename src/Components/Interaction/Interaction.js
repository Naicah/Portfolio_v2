import React from "react";
import Theme from "./Theme";
import agave from "../../Media/thumbnails/agave.jpg";
import blue_sea from "../../Media/thumbnails/blue_sea.jpg";
import blooming_blossom from "../../Media/thumbnails/blooming_blossom.jpg";
import cherry_blossom from "../../Media/thumbnails/cherry_blossom.jpg";
import dandelion from "../../Media/thumbnails/dandelion.jpg";
import movie_moment from "../../Media/thumbnails/movie_moment.jpg";
import orchid from "../../Media/thumbnails/orchid.jpg";
import white_cherry from "../../Media/thumbnails/white_cherry.jpg";

function Interaction() {
  let themes = [
    {
      name: "Agave",
      img: agave,
      colorLight1: "#FEEEC1",
      colorDark1: "#506C4D",
      colorDark2: "#2A6175",
      colorAccent: "#A8CFFE",
      colorLight2: "#ABCDC6"
    },
    {
      name: "Blue Sea",
      img: blue_sea,
      colorLight1: "#9EA9E3",
      colorDark1: "#4A4D9A",
      colorDark2: "#1E479F",
      colorAccent: "#4478C1",
      colorLight2: "#B4D3E5"
    },
    {
      name: "Blooming Blossom",
      img: blooming_blossom,
      colorLight1: "#f5f5ef",
      colorDark1: "#32522a",
      colorDark2: "#b15f76",
      colorAccent: "#c78a95",
      colorLight2: "#e8d0d4"
    },
    {
      name: "Cherry Blossom",
      img: cherry_blossom,
      colorLight1: "#C59CC1",
      colorDark1: "#6E3454",
      colorDark2: "#8B275B",
      colorAccent: "#BF3F81",
      colorLight2: "#ED9FD1"
    },
    {
      name: "Dandelion",
      img: dandelion,
      colorLight1: "#A792A3",
      colorDark1: "#81667B",
      colorDark2: "#21615D",
      colorAccent: "#43F0DA",
      colorLight2: "#D1F8F8"
    },
    {
      name: "Movie Moment",
      img: movie_moment,
      colorLight1: "#E095CE",
      colorDark1: "#8832B7",
      colorDark2: "#4691A5",
      colorAccent: "#45D5EE",
      colorLight2: "#B7F1F0"
    },
    {
      name: "Orchid",
      img: orchid,
      colorLight1: "#EDF19A",
      colorDark1: "#266B15",
      colorDark2: "#EA324B",
      colorAccent: "#F37A81",
      colorLight2: "#FCAF98"
    },
    {
      name: "White Cherry",
      img: white_cherry,
      colorLight1: "#C39394",
      colorDark1: "#870932",
      colorDark2: "#675B65",
      colorAccent: "#87AEAD",
      colorLight2: "#D5D5D3"
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
