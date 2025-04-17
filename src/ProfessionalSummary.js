import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const experiences = [
  {
    company: 'Edifecs',
    title: 'Senior QA Automation Engineer',
    tenure: 'Sep 2022 – Present',
  },
  {
    company: 'S&P Global',
    title: 'QA Automation Engineer',
    tenure: 'Jan 2020 – Sep 2022',
  },
  {
    company: 'Capgemini',
    title: 'Automation Test Lead',
    tenure: 'Jun 2017 – Jan 2020',
  },
  {
    company: 'IBM',
    title: 'Test Specialist',
    tenure: 'Apr 2014 – Jun 2017',
  },
  {
    company: 'Cognizant Technology Solutions',
    title: 'QA Engineer',
    tenure: 'Jul 2012 – Apr 2014',
  },
];

export default function ProfessionalSummary() {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: 4,
        borderRadius: 2,
        marginTop: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ color: '#1976d2' }}
      >
        Professional Summary
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Skilled QA Automation Engineer and Software Developer with over{' '}
        <strong>11 years of experience</strong> in test automation for APIs, databases, and
        web apps using <strong>Python, Java, and ReactJS</strong>. Proficient in tools like
        UFT/QTP, Excel Macros, and Postman. Successfully delivered projects in agile
        environments across top-tier global companies.
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={2}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderLeft: '5px solid #1976d2',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: '#000' }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <WorkIcon fontSize="small" color="primary" />
                  {exp.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.tenure}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
