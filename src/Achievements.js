import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const achievements = [
  {
    icon: <BoltIcon color="primary" />,
    text: 'Secured 2nd place in Automation Hackathon in S&P Global in 2022 by creating a community portal',
  },
  {
    icon: <StarIcon sx={{ color: '#FFD700' }} />,
    text: 'Winner of Automation Contest in S&P Global Organization level.',
  },
  {
    icon: <EmojiEventsIcon sx={{ color: '#CD7F32' }} />,
    text: 'Received ‘Associate of the Quarter’ award for October 2013 – December 2013 in Cognizant.',
  },
  {
    icon: <EmojiEventsIcon sx={{ color: '#CD7F32' }} />,
    text: 'Three times winner of ‘Associate of the Month’ award during 2013-2014.',
  },
  {
    icon: <ThumbUpAltIcon color="success" />,
    text: 'Conducted Regular Value Innovation Sessions in Chubb to showcase the utilities and macros built through automation.',
  },
  {
    icon: <ThumbUpAltIcon color="success" />,
    text: 'Received several appreciations from clients for contributions in projects, especially Agile projects.',
  },
  {
    icon: <StarIcon sx={{ color: '#00BFFF' }} />,
    text: 'Developed many tools and value-adds to automate organizational processes and received appreciations for the same.',
  },
  {
    icon: <BoltIcon color="secondary" />,
    text: 'Regular participant of Aetna Innovation Team; contributed ideas to simplify and automate existing processes.',
  },
];

const Achievements = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#fafafa' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        🌟 Achievements
      </Typography>

      <Paper elevation={3} sx={{ padding: '1.5rem', borderRadius: '16px', backgroundColor: '#ffffff' }}>
        <List>
          {achievements.map((achievement, index) => (
            <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
              <ListItemIcon>{achievement.icon}</ListItemIcon>
              <ListItemText
                primary={achievement.text}
                primaryTypographyProps={{ variant: 'body1', sx: { fontWeight: 500 } }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Achievements;
