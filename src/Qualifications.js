import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    <Box sx={{ px: 1, py: 1 }}>
      <Accordion
        elevation={3}
        sx={{
          borderRadius: 2,
          bgcolor: '#ffffff',
          '&:before': { display: 'none' },
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="education-content"
          id="education-header"
        >
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            🎓 Educational Qualifications
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Qualifications;
