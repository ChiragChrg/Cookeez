import React from "react";
import style from "../../components/css/About.module.css";

const About = () => {
  const insta = {
    padding: "10px 12px",
    color: "#e1306c",
  };

  const fb = {
    padding: "10px",
    color: "#3b5998",
  };

  const tweet = {
    padding: "10px",
    color: "#00acee",
  };

  return (
    <div className={style.App}>
      <div className={style.logo}>Cookeez</div>

      <div className={style.para}>
        <p>
          {`
            Hello,
            I'm Chirag, a prospective developer.
            I try to create exciting Webapps.
            All of my projects are Open-Source, So Enjoy!
          `}
        </p>
      </div>

      <div className={style.giticon}>
        <a
          className="fab fa-github fa-2x"
          href="https://github.com/ChiragChrg/Cookeez"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </div>

      <div className={style.social}>
        <a
          // id="insta"
          // className={style.insta}
          className="fab fa-instagram fa-2x"
          href="https://www.instagram.com/chiragchrg/"
          target="_blank"
          rel="noreferrer"
          style={insta}
        ></a>
        <o
          id="f"
          className="fab fa-facebook fa-2x"
          href="https://www.facebook.com/ChiragChrg"
          target="_blank"
          rel="noreferrer"
          style={fb}
        ></o>
        <o
          id="t"
          className="fab fa-twitter fa-2x"
          href="https://twitter.com/ChiragChrg1"
          target="_blank"
          rel="noreferrer"
          style={tweet}
        ></o>
      </div>

      <footer>
        <p> &#169; Copyright 2020 ChiragChrg </p>
      </footer>
    </div>
  );
};

export default About;
