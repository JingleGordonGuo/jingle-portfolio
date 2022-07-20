import Head from "next/head";

import { AnimatePresence, motion } from "framer-motion";

import {
  IconAWS,
  IconCSS,
  IconFirebase,
  IconFramer,
  IconFramerMotion,
  IconGitHub,
  IconHTML,
  IconHowlerjs,
  IconIllustrator,
  IconIndesign,
  IconJavascript,
  IconNextjs,
  IconPhotoshop,
  IconPython,
  IconReact,
  IconReactQuery,
  IconRedux,
  IconSCSS,
  IconStyledComponent,
  IconTypeScript,
  IconVercel,
} from "../../LabelledIcons";
import LoadingScreen from "../../LoadingScreen";
import { useImagesAllLoaded } from "../../LoadingScreen/scripts";
import NavBtn from "../../NavBtn";
import Shortcuts from "../../Shortcuts";
import { FirstSection, GradientDiv, LandingPageDiv, LastSection, motionFrostedGlass } from "./styling";

const LandingPage = () => {
  const loaded = useImagesAllLoaded();
  return (
    <LandingPageDiv>
      <Head>
        <title>Jingle Gordon Guo</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>{!loaded && <LoadingScreen key="loadingScreen" />}</AnimatePresence>

      <main className="main">
        <GradientDiv>
          <Shortcuts />
          <div className="content">
            <FirstSection id="landing">
              <span className="importLine">import &#123; JingleGordonGuo &#125; from “sydney”;</span>
              <>
                <h1 className="title">&lt;JingleGordonGuo/&gt;</h1>
                <h2>&#47;* Frontend Developer + Entrepreneur *&#47;</h2>
              </>
              <div className="NavBox">
                <NavBtn elementId="about" />
                <NavBtn elementId="skills" />
                <NavBtn elementId="experience" />
                <NavBtn elementId="education" />
                <NavBtn elementId="contact" />
              </div>
            </FirstSection>

            <section id="about">
              <motion.div className="frostedGlassCard" {...motionFrostedGlass}>
                <h2>Who am I?</h2>
                <p>Well, I am a start-up guy who discovered how rewarding building web apps felt.</p>
                <p>
                  I specialize in React and used a variety of tools alongside it such as NextJS and Typescript to get
                  things done.
                </p>
                <p>
                  At heart, I am a team player who loves the synergy of collaboration with a dash of competition and
                  would not be where I am today without it.
                </p>
              </motion.div>
            </section>

            <section id="skills">
              <motion.div className="frostedGlassCard" {...motionFrostedGlass}>
                <h2>Skills</h2>
                <ul className="skillsBox">
                  <IconJavascript />
                  <IconTypeScript />
                  <IconCSS />
                  <IconSCSS />
                  <IconStyledComponent />
                  <IconFramerMotion />
                  <IconHTML />
                  <IconReact />
                  <IconReactQuery />
                  <IconRedux />
                  <IconNextjs />
                  <IconHowlerjs />
                  <IconPython />
                  <IconGitHub />
                  <IconVercel />
                  <IconFirebase />
                  <IconAWS />
                  <IconFramer />
                  <IconPhotoshop />
                  <IconIllustrator />
                  <IconIndesign />
                </ul>
              </motion.div>
            </section>

            <section id="experience">
              <motion.div className="frostedGlassCard" {...motionFrostedGlass}>
                <h2>Experience</h2>
                <h3>ButterVoice</h3>
                <a href={"https://www.buttervoice.com"} target="_blank" rel="noreferrer">
                  buttervoice.com
                </a>
                <p>Full-stack developer</p>
                <p>
                  ButterVoice is an web and future mobile app that you can share short digestible clips of audio for
                  others to enjoy.
                </p>
                <p>
                  This is a personal project I have been working on in my spare time to sharpen my skills as a web
                  developer. My goal is to create it first as a progressive web app, and eventually convert it into an
                  IOS and Android application through Capacitor.
                </p>
                <div className="techUsedBox">
                  <IconTypeScript subtle />
                  <IconStyledComponent subtle />
                  <IconFramerMotion subtle />
                  <IconReact subtle />
                  <IconReactQuery subtle />
                  <IconRedux subtle />
                  <IconNextjs subtle />
                  <IconHowlerjs subtle />
                  <IconGitHub subtle />
                  <IconVercel subtle />
                  <IconFirebase subtle />
                </div>
              </motion.div>
            </section>

            <section>
              <motion.div className="frostedGlassCard" {...motionFrostedGlass}>
                <h3>Comova</h3>
                <p>Co-founder | Frontend Developer | UI/UX Designer</p>
                <p>Comova was a social platform for users to watch videos and play games together.</p>
                <p>
                  This was an ambitious project I was fortunate to be a part of that really kickstarted my passion for
                  front-end development. We worked with technologies such as WebRTC to enable voice and video streaming.
                  In order to make users feel like they were in the same room, we designed a special 3D voice chat
                  system that allowed users to hear their friends voice as if they were sitting right next to them.
                </p>
                <div className="techUsedBox">
                  <IconTypeScript subtle />
                  <IconSCSS subtle />
                  <IconFramerMotion subtle />
                  <IconReact subtle />
                  <IconRedux subtle />
                  <IconNextjs subtle />
                  <IconHowlerjs subtle />
                  <IconPython subtle />
                  <IconGitHub subtle />
                  <IconAWS subtle />
                  <IconFramer subtle />
                  <IconPhotoshop subtle />
                  <IconIllustrator subtle />
                </div>
              </motion.div>
            </section>

            <section>
              <motion.div className="frostedGlassCard" {...motionFrostedGlass}>
                <h3>BacPoc</h3>
                <p>Co-founder | Business Development Manager | Graphics Designer</p>
                <p>
                  BacPoc was a Lost and Found management system designed to centralised the Lost and Found process for
                  organisations and individuals.
                </p>
                <p>
                  Part of Cohort 12 of University of Sydney’s accelerator program INCUBATE, I mainly led the business
                  aspect of the startup. At the height of this project, our system was serving universities such as the
                  University of Technology Sydney and Australia Catholic University. We were also in talks with Mirvac
                  and other Universities with getting them to adopt the system before the impact of Covid.
                </p>
                <div className="techUsedBox">
                  <IconPhotoshop subtle />
                  <IconIllustrator subtle />
                  <IconIndesign subtle />
                </div>
              </motion.div>
            </section>

            <section id="education">
              <motion.div className="frostedGlassCard" {...motionFrostedGlass}>
                <h2>Education</h2>
                <h4>University of Melbourne</h4>
                <p>Design Computing 2022 - Present</p>
                <h4>Harvard Business School Online</h4>
                <p>Negotiation Mastery 2021</p>
                <p>Leadership Principles 2019</p>
                <p>Disruptive Strategy 2019</p>
                <h4>University of Technology Sydney</h4>
                <p>Business and Science 2017-2018</p>
              </motion.div>
            </section>

            <LastSection id="contact">
              <div className="contactContent">
                <h2>Contact</h2>
                LinkedIn | Discord | Email
              </div>
              <footer className="footer">
                Powered by
                <IconVercel subtle />
                <IconNextjs subtle />
                <IconTypeScript subtle />
                <IconStyledComponent subtle />
                <IconFramerMotion subtle />
              </footer>
            </LastSection>
          </div>
        </GradientDiv>
      </main>
    </LandingPageDiv>
  );
};

export default LandingPage;
