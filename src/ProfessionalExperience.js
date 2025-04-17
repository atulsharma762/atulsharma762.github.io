import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProjectExperience = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Project Experience
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Project Name: Automated Testing Framework</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Company:</strong> Cognizant Technology Solutions
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Tenure:</strong> January 2018 - March 2020
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Role:</strong> QA Automation Engineer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            <strong>Responsibilities:</strong> 
            <ul>
              <li>Developed and maintained an automation framework using Python and Selenium WebDriver for web applications.</li>
              <li>Implemented automated API testing using Postman and Rest Assured, integrated with Jenkins for continuous integration.</li>
              <li>Worked closely with the development team to ensure a smooth CI/CD pipeline and quality assurance processes.</li>
              <li>Conducted performance testing and test data generation for API and DB interactions.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Project Name: Global E-commerce Platform Testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Company:</strong> IBM
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Tenure:</strong> June 2020 - August 2021
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Role:</strong> Senior QA Automation Engineer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Designed and implemented end-to-end automation test scripts for a large-scale global e-commerce platform.</li>
              <li>Developed automated DB testing solutions using Python, Pytest, and SQL.</li>
              <li>Collaborated with cross-functional teams to define and execute testing strategies for high-priority features.</li>
              <li>Mentored junior automation engineers and reviewed test scripts for quality and efficiency.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Project Name: Cloud Migration Testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Company:</strong> Capgemini
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Tenure:</strong> September 2021 - December 2022
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Role:</strong> Automation Architect
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Led the migration testing for a cloud infrastructure project, ensuring smooth transition with minimal downtime.</li>
              <li>Developed and maintained automated scripts for testing cloud services and APIs using UFT/QTP and Selenium.</li>
              <li>Collaborated with system architects to define test scenarios for cloud migration.</li>
              <li>Used Excel macros and VBA to automate reporting of test results and performance metrics.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Project Name: Data Integration Testing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Company:</strong> S&P Global
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Tenure:</strong> January 2023 - Present
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Role:</strong> Lead QA Engineer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Designed and executed test cases for the integration of real-time financial data into global market solutions.</li>
              <li>Utilized Python, Selenium, and REST API testing tools to automate test scenarios.</li>
              <li>Developed and maintained automated test scripts to verify the data flow across various platforms and databases.</li>
              <li>Worked closely with DevOps to integrate automated tests into the CI/CD pipeline for continuous testing.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Project Name: Healthcare Claims Processing System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Company:</strong> Edifecs
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Tenure:</strong> February 2022 - Present
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '0.5rem' }}>
            <strong>Role:</strong> QA Engineer
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Automated testing for healthcare claims processing system to ensure compliance with industry standards.</li>
              <li>Developed automation scripts using Selenium WebDriver, integrated with JIRA for real-time bug tracking.</li>
              <li>Performed integration and regression testing on the platform's API and database.</li>
              <li>Created custom Excel macros to facilitate automated reporting of test execution and results.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default ProjectExperience;
