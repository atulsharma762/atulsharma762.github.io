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

export default function App() {
  return (
    <div className="header">
      <Header/>
      <Skills/>
      <ProfessionalSummary/>
      <Achievements/>
      <Qualifications/>
      <Projects/>     
    </div>
  );
}
