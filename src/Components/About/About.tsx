import Skills from "../UI/Skills";
import { connect } from "react-redux";

import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const About = () => {
  const { i18n, t } = useTranslation();

  return (
    <AboutDiv className="about" id="About">
      <div className="about-inner">
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce={true}
          offset={200}
          duration={3}
        >
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "1rem",
            }}
            className="about-title"
          >
            {t("about.title")}
          </h1>
          <div
            style={{
              paddingBottom: "1rem",
            }}
          >
            <p className="about-description">{t("about.description1")}</p>
            <p className="about-description">{t("about.description2")}</p>
            <p className="about-description">{t("about.description3")}</p>
            <p className="about-description">{t("about.description4")}</p>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOnce={true}
          offset={250}
          duration={2}
        >
          <Skills />
        </AnimationOnScroll>
      </div>
    </AboutDiv>
  );
};

const AboutDiv = styled.div`
  width: 85vw;
  margin: auto;

  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: var(--off-white);
  overflow: hidden;

  .about-inner {
    width: 50%;
  }

  .about-title {
    text-decoration: underline;
    text-decoration-color: var(--secondary-color);
    text-decoration-thickness: 5px;
    text-underline-offset: 6px;
    text-decoration-skip-ink: none;
    overflow: hidden;
    margin-bottom: 50px;
  }

  .about-description {
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    .about {
      width: 90%;
      padding: 10px;
    }
    .about-inner {
      width: 100%;
    }
    .about-description {
      font-size: 1.2rem;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export default About;
