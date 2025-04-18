import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Stack,
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
        bgcolor: '#fafafa',
        p: 2,
        borderRadius: 2,
        mt: 2,
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <Typography variant="h6" fontWeight={600} color="primary" mb={2}>
        Professional Summary
      </Typography>

      <Typography
        variant="body2"
        sx={{ mb: 2, lineHeight: 1.6, color: 'text.primary' }}
      >
        QA Automation Engineer & Software Developer with <strong>11+ years</strong>{' '}
        experience in API, DB, and Web App test automation using <strong>Python, Java, ReactJS</strong>. 
        Skilled with UFT/QTP, Excel Macros, and Postman. Agile-focused, with a proven track record across top MNCs.
      </Typography>

      <Divider sx={{ mb: 1 }} />

      <Grid container spacing={1}>
        {experiences.map((exp, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card variant="outlined" sx={{ borderLeft: '4px solid #1976d2' }}>
              <CardContent sx={{ p: 1.5 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ mb: 0.5, fontSize: '0.95rem' }}
                >
                  {exp.company}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.5 }}>
                  <WorkIcon sx={{ fontSize: 16, color: '#1976d2' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                    {exp.title}
                  </Typography>
                </Stack>
                <Typography variant="caption" color="text.secondary">
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
