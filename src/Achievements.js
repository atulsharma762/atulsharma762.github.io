import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
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
    text: 'Built multiple tools to automate processes; recognized across teams.',
  },
  {
    icon: <BoltIcon color="secondary" />,
    text: 'Contributed automation ideas as part of Aetna Innovation Team.',
  },
];

const Achievements = () => (
  <Box sx={{ p: 2, bgcolor: '#fafafa', borderRadius: 2 }}>
    <Typography variant="h6" fontWeight={600} color="primary" mb={2}>
      🌟 Achievements
    </Typography>

    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#fff' }}>
      <List dense>
        {achievements.map((item, idx) => (
          <ListItem key={idx} disableGutters alignItems="flex-start">
            <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ variant: 'body2', fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  </Box>
);

export default Achievements;
