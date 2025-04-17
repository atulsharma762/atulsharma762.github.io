import React from 'react';
import { Box, Typography, Paper, Divider, Chip, List, ListItem, ListItemText } from '@mui/material';

const projects = [
  {
    title: 'IT Dashboard – Edifecs Technologies',
    client: 'IT Team',
    tech: 'Python, Selenium, Requests, PyODBC',
    duration: 'May 2024 – Present',
    teamSize: 10,
    role: 'Lead Automation Engineer',
    description:
      'Developing IT dashboards for OC Reports, providing key IT metrics to support data-driven decision-making at management level.',
    responsibilities: [
      'Leading the entire initiative on creating IT Dashboards.',
      'Understanding requirements from all stakeholders.',
      'Proposing possible solutions.',
      'Creating Automation scripts using Python to communicate with various systems and fetching data.',
      'Fetching Data using API/Selenium and processing the data to desired format.',
      'Creating DB tables for storing data for various metrics.',
      'Scripting for updating data in DB.',
      'Demo to all the stakeholders.',
    ],
  },
  {
    title: 'Automation COE – S&P Global',
    client: 'S&P Global – Market Intelligence',
    tech: 'Python, Selenium',
    duration: 'Oct 2020 – Apr 2024',
    teamSize: 16,
    role: 'Software Developer Engineer in Test III',
    description:
      'Providing technical automation solutions including frameworks, web portals, low-code tools, CI/CD integrations for QA community.',
    responsibilities: [
      'Understanding requirements with QA stakeholders.',
      'Proposing possible solutions.',
      'Creating/Maintaining Automation Frameworks.',
      'Creating Web Portal in ReactJS and Enhancements.',
      'Creating new Low/No-Code automation tool for wider adoption.',
      'Creating/Maintaining Jenkins Jobs.',
      'Providing support to QA community with framework setup and technical issues.',
    ],
  },
  {
    title: 'BankRates – S&P Global',
    client: 'S&P Global – Market Intelligence',
    tech: 'Python, Selenium',
    duration: 'Dec 2018 – Oct 2020',
    teamSize: 12,
    role: 'Software Developer Engineer in Test III',
    description:
      'Agile team testing end-to-end functionality of Bank Rates pages and automating manual test cases in Market Intelligence platform.',
    responsibilities: [
      'Participating in Scrum Ceremonies – Grooming, Daily Scrum, Retrospective, Review Meetings.',
      'Testing the user stories in the sprint, log bugs and provide sign-off.',
      'Automation of the feasible scenarios.',
      'Status tracking and reporting.',
    ],
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
        🚀 Project Experience
      </Typography>

      {projects.map((project, idx) => (
        <Paper
          key={idx}
          elevation={4}
          sx={{ padding: '1.5rem', marginBottom: '2rem', borderRadius: '16px' }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            <strong>Client:</strong> {project.client}
          </Typography>
          <Divider sx={{ my: 1 }} />

          <Box sx={{ mb: 1 }}>
            <Chip label={`Duration: ${project.duration}`} sx={{ mr: 1 }} />
            <Chip label={`Team Size: ${project.teamSize}`} sx={{ mr: 1 }} />
            <Chip label={`Role: ${project.role}`} color="primary" />
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Technical Skills Used:</strong> {project.tech}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Description:</strong> {project.description}
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>Responsibilities:</Typography>
          <List dense>
            {project.responsibilities.map((item, i) => (
              <ListItem key={i}>
                <ListItemText primary={`✔️ ${item}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Box>
  );
};

export default Projects;
