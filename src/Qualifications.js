import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  useTheme,
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

const Qualifications = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Typography
        variant="h6"
        fontWeight={600}
        color="primary"
        mb={2}
        textAlign="center"
      >
        🎓 Educational Qualifications
      </Typography>

      <Paper
        variant="outlined"
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: '#fff',
          overflowX: 'auto',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
        >
          {education.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                minWidth: { xs: '100%', md: '30%' },
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
              }}
            >
              <SchoolIcon color="primary" fontSize="small" />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {item.degree}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {item.institute}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Year: {item.year} | Score: {item.score}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default Qualifications;
