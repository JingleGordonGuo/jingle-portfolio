import Head from "next/head";
import Image from "next/image";

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
import NavBtn from "../../NavBtn";
import { FirstSection, LandingPageDiv, LastSection } from "./styling";

const LandingPage = () => {
  return (
    <LandingPageDiv>
      <Head>
        <title>Jingle Gordon Guo</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="content">
          <FirstSection id="landing">
            <p className="importLine">import &#123; JingleGordonGuo &#125; from “sydney”;</p>
            <>
              <h1 className="title">&lt;JingleGordonGuo/&gt;</h1>
              <h2>&#47;* Frontend Developer + Entrepreneur *&#47;</h2>
            </>
            <div>
              <NavBtn elementId="about" />
              <NavBtn elementId="skills" />
              <NavBtn elementId="experience" />
              <NavBtn elementId="education" />
              <NavBtn elementId="contact" />
            </div>
          </FirstSection>

          <section id="about">
            <h2>Who am I?</h2>
            <p>
              Who am I? Well, I am a start-up guy who discovered how rewarding building web apps felt. Seeing a project
              go from mere a idea to a fully functional product never fails to put a smile on my face. I specialize in
              React and used a variety of tools alongside it such as NextJS and Typescript to get things done. I am team
              player at heart who loves the synergy of collaboration and would not be here without it.
            </p>
          </section>

          <section id="skills">
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
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <h3>ButterVoice</h3>
            <a href={"https://www.buttervoice.com"} target="_blank" rel="noreferrer">
              buttervoice.com
            </a>
            <p>Full-stack developer</p>
            <p>
              ButterVoice is an web and future mobile app that you can share short digestible clips of audio for others
              to enjoy.
            </p>
            <p>
              This is a personal project I have been working on in my spare time to sharpen my skills as a web
              developer. My goal is to create it first as a progressive web app, and eventually convert it into an IOS
              and Android application through Capacitor.
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
          </section>

          <section>
            <h3>Comova</h3>
            <p>Co-founder | Frontend Developer | UI/UX Designer</p>
            <p>Comova was a social platform for users to watch videos and play games together.</p>
            <p>
              This was an ambitious project I was fortunate to be a part of that really kickstarted my passion for
              front-end development. We worked with technologies such as WebRTC to enable voice and video streaming. In
              order to make users feel like they were in the same room, we designed a special 3D voice chat system that
              allowed users to hear their friends voice as if they were sitting right next to them.
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
          </section>

          <section>
            <h3>BacPoc</h3>
            <p>Co-founder | Business Development Manager | Graphics Designer</p>
            <p>
              BacPoc was a Lost and Found management system designed to centralised the Lost and Found process for
              organisations and individuals.
            </p>
            <p>
              Part of Cohort 12 of University of Sydney’s accelerator program INCUBATE, I mainly led the business aspect
              of the startup. At the height of this project, our system was serving universities such as the University
              of Technology Sydney and Australia Catholic University. We were also in talks with Mirvac and other
              Universities with getting them to adopt the system before the impact of Covid.
            </p>
            <div className="techUsedBox">
              <IconPhotoshop subtle />
              <IconIllustrator subtle />
              <IconIndesign subtle />
            </div>
          </section>

          <section id="education">
            <h2>Education</h2>
            <h4>University of Melbourne</h4>
            <p>Design Computing 2022 - Present</p>
            <h4>Harvard Business School Online</h4>
            <p>Negotiation Mastery 2021</p>
            <p>Leadership Principles 2019</p>
            <p>Disruptive Strategy 2019</p>
            <h4>University of Technology Sydney</h4>
            <p>Business and Science 2017-2018</p>
          </section>

          <LastSection id="contact">
            <div className="content">
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
      </main>
    </LandingPageDiv>
  );
};

export default LandingPage;
