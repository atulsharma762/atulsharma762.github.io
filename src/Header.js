import * as React from 'react';
import { Box, Avatar, Typography, Stack } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        py: 2,
        px: 3,
        background: 'linear-gradient(to right, #3f51b5, #6573c3)',
        color: '#fff',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      {/* Profile */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{ bgcolor: '#fff', color: '#3f51b5', fontWeight: 'bold' }}>A</Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Atul Sharma</Typography>
          <Typography variant="caption">Software Developer</Typography>
        </Box>
      </Stack>

      {/* Experience */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <AccountBoxIcon fontSize="small" />
        <Typography variant="body2">13+ Yrs Experience</Typography>
      </Stack>

      {/* Contact */}
      <Stack spacing={0.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon fontSize="small" />
          <Typography variant="body2">atul762@gmail.com</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CallIcon fontSize="small" />
          <Typography variant="body2">+91-893-960-9696</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
