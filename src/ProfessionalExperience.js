import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const projects = [
  {
    name: 'Automated Testing Framework',
    company: 'Cognizant Technology Solutions',
    tenure: 'January 2018 - March 2020',
    role: 'QA Automation Engineer',
    responsibilities: [
      'Developed and maintained an automation framework using Python and Selenium WebDriver for web applications.',
      'Implemented automated API testing using Postman and Rest Assured, integrated with Jenkins for continuous integration.',
      'Worked closely with the development team to ensure a smooth CI/CD pipeline and quality assurance processes.',
      'Conducted performance testing and test data generation for API and DB interactions.'
    ]
  },
  {
    name: 'Global E-commerce Platform Testing',
    company: 'IBM',
    tenure: 'June 2020 - August 2021',
    role: 'Senior QA Automation Engineer',
    responsibilities: [
      'Designed and implemented end-to-end automation test scripts for a large-scale global e-commerce platform.',
      'Developed automated DB testing solutions using Python, Pytest, and SQL.',
      'Collaborated with cross-functional teams to define and execute testing strategies for high-priority features.',
      'Mentored junior automation engineers and reviewed test scripts for quality and efficiency.'
    ]
  },
  {
    name: 'Cloud Migration Testing',
    company: 'Capgemini',
    tenure: 'September 2021 - December 2022',
    role: 'Automation Architect',
    responsibilities: [
      'Led the migration testing for a cloud infrastructure project, ensuring smooth transition with minimal downtime.',
      'Developed and maintained automated scripts for testing cloud services and APIs using UFT/QTP and Selenium.',
      'Collaborated with system architects to define test scenarios for cloud migration.',
      'Used Excel macros and VBA to automate reporting of test results and performance metrics.'
    ]
  },
  {
    name: 'Data Integration Testing',
    company: 'S&P Global',
    tenure: 'January 2023 - Present',
    role: 'Lead QA Engineer',
    responsibilities: [
      'Designed and executed test cases for the integration of real-time financial data into global market solutions.',
      'Utilized Python, Selenium, and REST API testing tools to automate test scenarios.',
      'Developed and maintained automated test scripts to verify the data flow across various platforms and databases.',
      'Worked closely with DevOps to integrate automated tests into the CI/CD pipeline for continuous testing.'
    ]
  },
  {
    name: 'Healthcare Claims Processing System',
    company: 'Edifecs',
    tenure: 'February 2022 - Present',
    role: 'QA Engineer',
    responsibilities: [
      'Automated testing for healthcare claims processing system to ensure compliance with industry standards.',
      'Developed automation scripts using Selenium WebDriver, integrated with JIRA for real-time bug tracking.',
      'Performed integration and regression testing on the platform\'s API and database.',
      'Created custom Excel macros to facilitate automated reporting of test execution and results.'
    ]
  }
];

const ProjectExperience = () => {
  return (
   <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h6" fontWeight={600} color="primary" mb={2}>
        Project Experience
      </Typography>

      {projects.map((project, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Project Name: {project.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
              <strong>Company:</strong> {project.company}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
              <strong>Tenure:</strong> {project.tenure}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
              <strong>Role:</strong> {project.role}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
              <strong>Responsibilities:</strong>
              <List sx={{ pl: 3, mb: 0 }}>
                {project.responsibilities.map((responsibility, index) => (
                  <ListItem key={index} sx={{ paddingLeft: 0 }}>
                    {responsibility}
                  </ListItem>
                ))}
              </List>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default ProjectExperience;
