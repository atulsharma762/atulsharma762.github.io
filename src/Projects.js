import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';

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
    <Box sx={{ p: { xs: 2, sm: 4 }, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h6" fontWeight={600} color="primary" mb={2}>
        🚀 <span>Project Experience</span>
      </Typography>

      {projects.map((project, idx) => (
        <Accordion key={idx} sx={{ mb: 2, borderRadius: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#e3f2fd',
              borderRadius: 2,
              '& .MuiAccordionSummary-content': {
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" color="#1976d2">
                {project.title}
              </Typography>
              <Typography variant="caption">{project.client}</Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <Chip icon={<AccessTimeIcon />} label={project.duration} size="small" />
              <Chip icon={<GroupIcon />} label={`Team: ${project.teamSize}`} size="small" />
              <Chip icon={<WorkIcon />} label={project.role} size="small" color="primary" />
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ backgroundColor: '#fff' }}>
            <Typography variant="body2" mb={1}>
              <strong>Tech Used:</strong> {project.tech}
            </Typography>
            <Typography variant="body2" mb={1}>
              <strong>Description:</strong> {project.description}
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Responsibilities:
            </Typography>
            <List dense>
              {project.responsibilities.map((res, i) => (
                <ListItem key={i} sx={{ pl: 0 }}>
                  <ListItemText primary={`✅ ${res}`} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Projects;
