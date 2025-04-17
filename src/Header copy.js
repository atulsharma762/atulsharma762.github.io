import * as React from 'react';
import { Box, Avatar, Typography, useTheme } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TextWithIcon from './components/TextWithIcon';

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        color: '#333',
        padding: 3,
        borderBottom: '2px solid #e0e0e0',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 4,
        }}
      >
        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 56, height: 56 }}>A</Avatar>
          <Box>
            <Typography variant="h5" fontWeight="bold">Atul Sharma</Typography>
            <Typography variant="body2" color="text.secondary">Software Developer</Typography>
          </Box>
        </Box>

        {/* Experience Section */}
        <Box sx={{ textAlign: 'center' }}>
          <AccountBoxIcon fontSize="large" sx={{ color: theme.palette.primary.main }} />
          <Typography variant="subtitle1" fontWeight={500}>11+ Years Experience</Typography>
        </Box>

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon color="action" />
            <Typography variant="body1">atul762@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CallIcon color="action" />
            <Typography variant="body1">+91-893-960-9696</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
