import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const education = [
  {
    degree: 'B.Tech',
    institute: 'VIT University, Vellore',
    year: '2011',
    score: '8.97 / 10 CGPA',
  },
  {
    degree: 'XII (CBSE)',
    institute: 'Kendriya Vidyalaya, Banswara',
    year: '2006',
    score: '75%',
  },
  {
    degree: 'X (RBSE)',
    institute: 'Vidya Niketan, Banswara',
    year: '2004',
    score: '85%',
  },
];

const Qualifications = () => (
  <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
    <Typography variant="h6" fontWeight={600} color="primary" mb={2}>
      🎓 Educational Qualifications
    </Typography>

    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#fff' }}>
      <List dense>
        {education.map((item, idx) => (
          <ListItem key={idx} disableGutters alignItems="flex-start">
            <ListItemIcon sx={{ minWidth: 32 }}>
              <SchoolIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.degree}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2">{item.institute}</Typography>
                  <Typography variant="caption" color="text.secondary">
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

export default Qualifications;
