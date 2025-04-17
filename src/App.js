import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './App.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography } from '@mui/material';
import Header from './Header'
import Skills from './Skills'
import ProfessionalSummary from './ProfessionalSummary'
import Achievements from './Achievements'
import Qualifications from './Qualifications'
import Projects from './Projects'
import ProjectExperience from './ProfessionalExperience';
import Footer from './Footer';
export default function App() {
  return (
    <div className="t">
      <Header/>
      <Skills/>
      <ProfessionalSummary/>
      
      <ProjectExperience/>
      <Achievements/>
      <Qualifications/>
      <Projects/>    
      <Footer/> 
    </div>
  );
}
