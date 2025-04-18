import * as React from 'react';
import { Box, Container } from '@mui/material';
import './App.css';

import Header from './Header';
import Skills from './Skills';
import ProfessionalSummary from './ProfessionalSummary';
import Achievements from './Achievements';
import Qualifications from './Qualifications';
import Projects from './Projects';
import ProjectExperience from './ProfessionalExperience';
import Footer from './Footer';

export default function App() {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', overflowY:'hidden' }}>
      <Header />

      <TightSection>
        <ProfessionalSummary />
      </TightSection>

      <TightSection alternate>
        <Skills />
      </TightSection>

      <TightSection>
        <Projects />
      </TightSection>

      {/* Optional: Uncomment if needed */}
      {/* <TightSection alternate>
        <ProjectExperience />
      </TightSection> */}

      <TightSection alternate>
        <Qualifications />
      </TightSection>

      <TightSection>
        <Achievements />
      </TightSection>

      <Footer />
    </Box>
  );
}

function TightSection({
  children,
  alternate = false,
}: {
  children: React.ReactNode;
  alternate?: boolean;
}) {
  return (
    <Box
      sx={{
        py: 3, // reduced padding
        px: { xs: 2, sm: 3 },
        backgroundColor: alternate ? '#ffffff' : '#f9f9f9',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
}
