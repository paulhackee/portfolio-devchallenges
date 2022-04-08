import "./App.css";
import PersonInfo from "./PersonInfo";
import CardsSkills from "./CardsSkills";
import Experiences from "./Experiences";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Blog from "./Blog";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="flex flex-wrap justify-center lg:flex-nowrap lg:mt-[55px] mx-auto max-w-[1362px] pb-6">
        <div className="w-full lg:w-[50%]">
          <PersonInfo />
          <Experiences />
          <Hobbies />
        </div>
        <div className="w-full">
          <CardsSkills />
          <Projects />
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
