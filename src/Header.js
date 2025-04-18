import * as React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Divider,
  useTheme,
  Tooltip,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Header() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '96%',
        px: 3,
        py: 2,
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 4,
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.3)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      {/* Profile Info */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt="Atul Sharma"
          src="/profile.jpg" // Use your image or keep empty
          sx={{
            width: 64,
            height: 64,
            fontSize: '1.4rem',
            fontWeight: 'bold',
            bgcolor: theme.palette.primary.main,
          }}
        >
          A
        </Avatar>
        <Box>
          <Typography variant="h6" fontWeight={700}>
            Atul Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Automation Wizard ⚙️ | Full-stack Dev 💻
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ display: { xs: 'block', md: 'none' }, my: 1 }} />

      {/* Experience */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ color: '#444' }}
      >
        <Tooltip title="Years of Professional Experience">
          <AccountBoxIcon color="primary" />
        </Tooltip>
        <Typography fontSize="0.95rem" fontWeight={600}>
          13+ Years of Excellence
        </Typography>
      </Stack>

      {/* Contact Info */}
      <Stack spacing={0.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon color="primary" />
          <Typography fontSize="0.9rem" noWrap>
            atul762@gmail.com
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CallIcon color="primary" />
          <Typography fontSize="0.9rem">+91-893-960-9696</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
