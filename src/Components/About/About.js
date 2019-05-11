import React from "react";
import { LinkButton } from "../General";
import ReactTypingEffect from "react-typing-effect";

function About() {
  return (
    <div className="mainContainer" id="about">
      <h1>About</h1>
      <div className="quote">
        <ReactTypingEffect
          speed="100"
          eraseDelay="99999999999999"
          text="With vision and determination nothing is impossible"
        />
      </div>
      <div id="aboutText">
        <p>
          As a true{" "}
          <a
            href="https://www.16personalities.com/enfj-personality"
            target="-blank"
          >
            PROTAGONIST (ENFJ-T)
          </a>{" "}
          I seriously believe that nothing is impossible, which can sometimes be
          a bit dangerous. Once I get exhited about something there is no
          stopping me.
        </p>

        <p>
          I love to create, solve problems and, especially, help people. This
          comes in several forms, such as web development, dance, song, sewing,
          crafts and much much more. There is not a second that goes by without
          me working on or thinking about my projects or ideas of new projects.
          When I don't work on web development I teach dance or work on ways to
          help people.
        </p>

        <p>
          Before I knew how to develop websites and applications I used Excel to
          build the tools that I wanted, which means that I (on my own) have
          learnt how use Excel in many different, and sometimes not the most
          common, ways. I, for example, built a 'program' for keeping track of
          work orders and work load in a big team. So as you can tell, I truly
          believe that everything is possible, you just have to find the right
          way.
        </p>
        <p>
          So weither you want help making an idea reality, update something
          existing or learn, I am here for you! I love to create, toss around
          ideas and teach. So weither it is something web based, excel, dance or
          even sewing that you have on your mind, let me know!
        </p>
      </div>
      <LinkButton url="Contact" text="Let' s talk!" id="linkButtonToContact" />
    </div>
  );
}

export default About;
