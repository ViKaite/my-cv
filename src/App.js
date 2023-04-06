import './App.css';
import React from 'react';
import Header from './components/HeaderComponent/Header';
import Summary from './components/SummaryComponent/Summary';
import WorkExperience from './components/WorkExperienceComponent/WorkExperience';
import Education from './components/EducationComponent/Education';
import Skills from './components/SkillsComponent/Skills';

function App() {
  return (
    <div className="App">
    <Header/>
      <div>
        <Summary/>
        <WorkExperience/>
        <Education/>
        <Skills/>
      </div>
      
    </div>
  );
}

export default App;
