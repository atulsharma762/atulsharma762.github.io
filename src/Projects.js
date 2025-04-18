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
  useMediaQuery,
  useTheme,
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
  {
    title: 'Coke Automation - Capgemini',
    client: 'Coca-Cola',
    tech: 'Python, Selenium',
    duration: 'Nov 2017 – Dec 2018',
    teamSize: 5-8,
    role: 'Automation Lead',
    description:
      'This team deals with testing various system coke systems and applications .This is centralized automation team which deals with automation requirement in the whole account. Team gets the automation requirements from clients. Team analyzes the requirements, proposes automation solutions with estimates',
    responsibilities: [
      'Automation feasibility and preparation/presentation of Automation Proposal.',
      'Estimation and Resource allocation',
      'Status tracking and reporting.',
      'Timely escalation of any show-stopper.',
      'Understanding the requirements for automation, creating data and automation script.',
      'Creating suitable automation framework and approaches for automation.',
      'Preparation of Execution Report and Analysis of the report.',
      'Executing Regression every release in constraint timelines.',
      'Responsible for training of New resources and training session at accuont level.',

    ],
  },
  {
    title: 'Chubb Personal Risk Service - Capgemini',
    client: 'Chubb Insurance  (United States)',
    tech: 'QTP, Selenium',
    duration: 'Aug 2015 – Jun 2017',
    teamSize: 5-8,
    role: 'Automation Lead',
    description:
      'This team deals with testing various Policy Admin Systems and related End user Applications.This is centralized team which deals with automation requirement in the whole account. Team proactively idenitfies various automation area within the account and proposes the benefits to the clients. Based on the inputs and approval from client, automation work is commenced.',
    responsibilities: [
      'Automation feasibility and preparation/presentation of Automation Proposal.',
      'Estimation and Resource allocation',
      'Status tracking and reporting.',
      'Timely escalation of any show-stopper.',
      'Understanding the requirements for automation, creating data and automation script.',
      'Creating suitable automation framework and approaches for automation.',
      'Preparation of Execution Report and Analysis of the report.',
      'Executing Regression every release in constraint timelines.',
      'Responsible for training of New resources and training session at accuont level.',

    ],
  },
  {
    title: 'Fixed Income-FX Options - IBM',
    client: 'BNP Paribas  (Paris)',
    tech: 'QTP, VB Scripting',
    duration: 'Oct 2014 – Aug 2015',
    teamSize: 5,
    role: 'Automation Test Engineer',
    description:
      'This team deals with testing of deal booking and trading transactions across different currencies. For eg. EURUSD, EURGBP, JPYUSD, Bullions. This is a decentralized team which is responsible of automation scripting, functional and regression testing. There are various applications on which testing is performed. These application include Dotnet applications, XML comparison, Webservices testing and Cross-database testing.ing.',
    responsibilities: [
      'Automation feasibility and preparation/presentation of Automation Proposal.',
      'Estimation and Resource allocation',
      'Status tracking and reporting.',
      'Timely escalation of any show-stopper.',
      'Understanding the requirements for automation, creating data and automation script.',
      'Creating suitable automation framework and approaches for automation.',
      'Preparation of Execution Report and Analysis of the report.',
      'Executing Regression every release in constraint timelines.',
      'Responsible for training of New resources and training session at accuont level.',

    ],
  },
  {
    title: 'SIT Engagement in Automation - Coginzant',
    client: 'Aetna INC. (USA)',
    tech: 'QTP, VB Scripting',
    duration: 'Nov 2011 – Sept 2014',
    teamSize: 5-10,
    role: 'Automation Test Engineer',
    description:
      'This team works on automating Aetna applications across different domains, Member, Claims, Pharmacy, Medical Management etc. Aetna Inc.is an American managed health care company, providing a range of traditional and consumer directed health care insurance products and related services, including medical, pharmaceutical, dental, behavioral health, group life, long-term care, and disability plans, and medical management capabilities.',
    responsibilities: [
      'Automation feasibility and preparation/presentation of Automation Proposal.',
      'Estimation and Resource allocation',
      'Status tracking and reporting.',
      'Timely escalation of any show-stopper.',
      'Understanding the requirements for automation, creating data and automation script.',
      'Creating suitable automation framework and approaches for automation.',
      'Preparation of Execution Report and Analysis of the report.',
      'Executing Regression every release in constraint timelines.',
      'Responsible for training of New resources and training session at accuont level.',

    ],
  }
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, backgroundColor: '#f9f9f9' }}>
      <Typography
        variant={isMobile ? 'h6' : 'h5'}
        fontWeight={600}
        color="primary"
        mb={2}
      >
        🚀 Project Experience
      </Typography>

      {projects.map((project, idx) => (
        <Accordion key={idx} sx={{ mb: 2, borderRadius: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: '#e3f2fd',
              borderRadius: 2,
              flexDirection: isMobile ? 'column' : 'row',
              '& .MuiAccordionSummary-content': {
                alignItems: isMobile ? 'flex-start' : 'center',
                justifyContent: 'space-between',
                flexDirection: isMobile ? 'column' : 'row',
              },
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="#1976d2"
              >
                {project.title}
              </Typography>
              <Typography variant="caption">{project.client}</Typography>
            </Box>
            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={1}
              mt={isMobile ? 1 : 0}
            >
              <Chip
                icon={<AccessTimeIcon />}
                label={project.duration}
                size="small"
              />
              <Chip
                icon={<GroupIcon />}
                label={`Team: ${project.teamSize}`}
                size="small"
              />
              <Chip
                icon={<WorkIcon />}
                label={project.role}
                size="small"
                color="primary"
              />
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
