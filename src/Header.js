import * as React from 'react';
import { Box, Avatar, Typography, Stack, Divider } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Header() {
  return (
    <Box
      sx={{
        width: '99%',
        py: 2.5,
        px: 3,
        bgcolor: '#f5f5f5',
        color: '#333',
        borderRadius: '12px',
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      {/* Profile Section */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          sx={{
            bgcolor: '#3f51b5',
            color: '#fff',
            fontWeight: 'bold',
            width: 56,
            height: 56,
            fontSize: '1.2rem',
          }}
        >
          A
        </Avatar>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Atul Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Software Developer
          </Typography>
        </Box>
      </Stack>

      {/* Divider for small screens */}
      <Divider
        flexItem
        sx={{ display: { xs: 'block', md: 'none' }, my: 1 }}
      />

      {/* Experience */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <AccountBoxIcon fontSize="small" color="action" />
        <Typography variant="body2" fontWeight={500}>
          13+ Yrs Experience
        </Typography>
      </Stack>

      {/* Contact Section */}
      <Stack spacing={0.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon fontSize="small" color="action" />
          <Typography variant="body2">atul762@gmail.com</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CallIcon fontSize="small" color="action" />
          <Typography variant="body2">+91-893-960-9696</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
