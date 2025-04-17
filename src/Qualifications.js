import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    degree: 'B.Tech',
    institute: 'Vellore Institute of Technology (VIT University), Vellore',
    year: '2011',
    score: '8.97 / 10 (CGPA)',
  },
  {
    degree: 'XII (CBSE)',
    institute: 'Kendriya Vidyalaya, Banswara (Rajasthan)',
    year: '2006',
    score: '75%',
  },
  {
    degree: 'X (RBSE)',
    institute: 'Vidya Niketan, Banswara (Rajasthan)',
    year: '2004',
    score: '85%',
  },
];

const Qualifications = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        🎓 Educational Qualifications
      </Typography>

      <Paper elevation={3} sx={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: '#ffffff' }}>
        <List>
          {education.map((item, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemIcon>
                <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.degree}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {item.institute}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Year: {item.year} | Score: {item.score}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Qualifications;
