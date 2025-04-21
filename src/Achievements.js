import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const achievements = [
  {
    icon: <BoltIcon color="primary" />,
    text: '2nd place in Automation Hackathon at S&P Global (2022) for building a community portal.',
  },
  {
    icon: <StarIcon sx={{ color: '#FFD700' }} />,
    text: 'Winner of Organization-level Automation Contest at S&P Global.',
  },
  {
    icon: <EmojiEventsIcon sx={{ color: '#CD7F32' }} />,
    text: '“Associate of the Quarter” at Cognizant (Oct–Dec 2013).',
  },
  {
    icon: <EmojiEventsIcon sx={{ color: '#CD7F32' }} />,
    text: '3× “Associate of the Month” awardee at Cognizant (2013–14).',
  },
  {
    icon: <ThumbUpAltIcon color="success" />,
    text: 'Led Value Innovation Sessions at Chubb showcasing automation tools/macros.',
  },
  {
    icon: <ThumbUpAltIcon color="success" />,
    text: 'Consistently appreciated by clients for Agile project contributions.',
  },
  {
    icon: <StarIcon sx={{ color: '#00BFFF' }} />,
    text: 'Created several tools to automate and optimize workflows for multiple cross-functional teams.',
  },

];

const Achievements = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: 2, py: 3 }}>
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
          aria-controls="achievements-content"
          id="achievements-header"
        >
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            🌟 Achievements
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ pt: 0 }}>
          <List dense>
            {achievements.map((item, idx) => (
              <ListItem key={idx} disableGutters alignItems="flex-start">
                <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Achievements;
