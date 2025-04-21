import * as React from 'react';
import { Box, Typography, Chip, Grid, useTheme } from '@mui/material';

const skillCategories = {
  'Languages & Frameworks': ['Python', 'Java', 'ReactJS', 'VB Scripting', "Javascript", "React Native", 'HTML', 'CSS'],
  'Testing Tools': ['UFT / QTP', 'Selenium', 'Python Requests',"RestAssured"],
  'Automation Areas': ['API Testing', 'Database Testing', 'Web UI Testing'],
  'Database Skills': ['MS SQL', 'Postgres', 'SQL Server', "MongoDB"],
  'Other Skills': ["Jenkins", "Gitlab CI/CD", 'Git', 'Excel Macros']
};

export default function Skills() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        py: 4,
        px: 2,
        borderTop: '2px solid #e0e0e0',
        borderBottom: '2px solid #e0e0e0',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ color: theme.palette.primary.main, textAlign: 'center' }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <Grid key={category} item xs={12} sm={6}>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              sx={{ mb: 1, color: '#333' }}
            >
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} color="primary" size="small" />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
