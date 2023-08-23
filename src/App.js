import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import './App.css';

function App() {
  return (
    <html class="dark">
    <div className="App-dark">
      {/* header, with photo and name and maybe summaries */}
      <header className="App-page centered" id="top">
        <p className="text-2xl text-light-bg">Hi! I'm</p>
        <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-r 
          from-sky-400 to-blue-800 font-bold">Albert Ye</h1>
        <p className="text-2xl text-light-bg">Math and CS at UC Berkeley</p>
        <br />
        <img src="albert.png" alt="Albert Ye"
          className="albert bg-gradient-to-r from-sky-400 to-blue-800 p-2" width="300" />
        <br />
        <DownButton elemid={"about"}/>
      </header>

      {/* about me */}
      <div className="App-page" id="about">
        <h1 className="centered text-6xl text-transparent bg-clip-text bg-gradient-to-br
          from-sky-400 to-blue-800 font-bold underline">About Me</h1>
        <br />
        <div className="flex flex-row">
          <div class="basis-1/6" />
          <div class="basis-2/3">
            <p className="text-xl">I'm a sophomore at UC Berkeley interested in
            data structures and algorithms. You can find my resume 
            <a className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-200 to-sky-700" href="https://drive.proton.me/urls/SQWPGB9P9R#AtcKtBOInBL7"> here</a>. 
            <br /> <br />
            Recently, I have been learning more about frontend web development and systems programming, 
            starting projects in both areas.
            These projects are listed down below.
            </p>
          </div>
          <div class="basis-1/6" />
        </div>
        <br />
        <DownButton elemid={"projects"}/>
      </div>

      {/* projects */}
      <div className="App-long-page centered" id="projects">
        <h1 className="centered text-6xl text-transparent bg-clip-text bg-gradient-to-br
          from-sky-400 to-blue-800 font-bold underline">Projects</h1>
        <br/>
        <a href="https://github.com/albertye1/unboxing">
        <div class="card-dark">
          <p className="text-2xl">OpenGL Playground</p>
          <p className="text-xl">Interactively teaching myself OpenGL. Notes will be put into the README soon.</p>
            <div class="pt-4 pb-2">
              <Tag content={"C++"} />
              <Tag content={"OpenGL"} />
            </div>
        </div>
	  	</a>
        <a href="https://github.com/albertye1/stegosaurus">
        <div class="card-dark">
          <p className="text-2xl">PNG Encoder</p>
          <p className="text-xl">A command-line program that encodes and decodes messages from chunks of a PNG file.</p>
            <div class="pt-4 pb-2">
              <Tag content={"Rust"} />
            </div>
        </div>
	  	</a>
        <a href="https://www.youtube.com/watch?v=0b9HQfmmBg0">
        <div class="card-dark">
          <p className="text-2xl">Build Your Own World</p>
          <p className="text-xl">A game with pseudorandom world generation that a partner and I built for a class (CS61B).</p>
            <div class="pt-4 pb-2">
              <Tag content={"Java"} />
              <Tag content={"DS/Algos"} />
            </div>
        </div>
        </a>
        <a href="https://github.com/xyzyzl/hard-cp">
          <div class="card-dark">
            <p className="text-2xl">Competitive Programming</p>
            <p className="text-xl">
              Repository of solution code for coding competitions. Organized by website, 
              then by contest, then by problem.</p>
            <div class="pt-4 pb-2">
              <Tag content={"C++"} />
              <Tag content={"Java"} />
              <Tag content={"DS/Algos"} />
            </div>
          </div>
        </a>
        <a href="https://github.com/wlmchen/learn.theyei">
          <div class="card-dark">
            <p className="text-2xl">YEI Learn</p>
            <p className="text-xl">Slideshows and example problems covering AP Microeconomics 
              and AP Macroeconomics content, all conveniently organized into a website.</p>
            <div class="pt-4 pb-2">
              <Tag content={"Next.js"} />
              <Tag content={"TypeScript"} />
              <Tag content={"Frontend WebDev"} />
            </div>
          </div>
        </a>
        <br />
        <DownButton elemid={"courses"} />
      </div>

      {/* courses */}
      <div className="App-page" id="courses">
        <h1 className="centered text-6xl text-transparent bg-clip-text bg-gradient-to-br
          from-sky-400 to-blue-800 font-bold">Coursework</h1>
        <br/>
        <div className="flex flex-row">
          <div class="basis-1/6"></div>
          <div class="basis-2/3">
            <p className="text-3xl text-darker-bg dark:text-light-bg">Fall 2023</p>
            <ul className="text-xl">
              <li>EECS 126: Probability and Random Processes</li>
              <li>CS 161: Computer Security</li>
            </ul>
            <br />
            <p className="text-3xl text-darker-bg dark:text-light-bg">Summer 2023</p>
            <ul className="text-xl">
              <li>Math 104: Introduction to Analysis</li>
              <li>Math 49: Differential Equations</li>
            </ul>
            <br />
            <p className="text-3xl text-darker-bg dark:text-light-bg">Spring 2023</p>
            <ul className="text-xl">
              <li>CS 170: Efficient Algorithms and Intractable Problems (A)</li>
              <li>CS 61C: Great Ideas in Computer Architecture (A)</li>
              <li>Math 110: Linear Algebra (A)</li>
            </ul>
            <br></br>
            <p className="text-3xl text-darker-bg dark:text-light-bg">Fall 2022</p>
            <ul className="text-xl">
              <li>CS 61A: Structure and Interpretation of Computer Programs (A)</li>
              <li>CS 61B: Data Structures (A+)</li>
              <li>CS 70: Discrete Math and Probability Theory (A+)</li>
            </ul>
            <br />
            <p className="text-3xl text-darker-bg dark:text-light-bg">Dual Enrollment</p>
            <ul className="text-xl">
              <li>Math 004A: Intermediate Calculus (equiv. to Math 53) (A)</li>
              <li>Math 004C: Linear Algebra (equiv. to Math 56) (A)</li>
            </ul>
          </div>
        </div>
      </div>
      <UpButton/>
    </div>
    </html>
  );
}

function Tag({ content }) {
  return (
    <span class="inline-block bg-light-hl rounded-full px-3 py-1 text-sm font-semibold text-dark-hl mr-2 mb-2">{ content }</span>
  )
}

function DownButton({ elemid }) {
  const scroll = () => {
    const element = document.getElementById(elemid);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <center>
    <button
      className="text-xl transition-all my-5 text-dark-bg hover:bg-light-hl dark:text-light-bg dark:hover:bg-dark-hl py-1 px-1 rounded-full animate-bounce"
      onClick={scroll}>
        <FaAngleDown /></button>
    </center>
  )
}

function UpButton() {
  const scroll = () => {
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <center><button
      className="text-xl transition-all text-dark-bg hover:bg-light-hl dark:hover:bg-dark-hl dark:text-light-bg py-1 px-1 rounded-full animate-bounce"
      onClick={scroll}>
        <FaAngleUp /></button></center>
  )
}

function DarkButton() {
  const toggle = () => {
    const light = document.getElementsByClassName("light");
    const dark = document.getElementsByClassName("dark");
    for (let i = 0; i < light.length; i++) {
      const element = light[i];
      element.setAttribute("class", "dark");
    }
    for (let i = 0; i < dark.length; i++) {
      const element = dark[i];
      element.setAttribute("class", "light");
    }
    const light2 = document.getElementsByClassName("App");
    const dark2 = document.getElementsByClassName("App-dark");
    for (let i = 0; i < light2.length; i++) {
      const element = light2[i];
      element.setAttribute("class", "App-dark");
    }
    for (let i = 0; i < dark2.length; i++) {
      const element = dark2[i];
      element.setAttribute("class", "App");
    }
    const light3 = document.getElementsByClassName("card");
    const dark3 = document.getElementsByClassName("card-dark");
    for (let i = 0; i < light3.length; i++) {
      const element = light3[i];
      console.log("light");
      element.setAttribute("class", "card-dark");
    }
    for (let i = 0; i < dark3.length; i++) {
      const element = dark3[i];
      console.log("dark");
      element.setAttribute("class", "card");
    }
  }
  return (
    <center><button
      className="text-xl transition-all text-dark-bg hover:bg-light-hl dark:hover:bg-dark-hl dark:text-light-bg py-1 px-1 rounded-full"
      onClick={toggle}>
        moo</button></center>
  )
}

export default App;
