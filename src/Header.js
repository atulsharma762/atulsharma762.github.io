import * as React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Divider,
  useTheme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '97%',
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 3 },
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 4,
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,255,255,0.3)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      {/* Profile Info */}
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt="Atul Sharma"
          src="/profile.jpg"
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
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight={700}
            lineHeight={1.2}
          >
            Atul Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Automation Wizard ⚙️ | Full-stack Dev 💻
          </Typography>
        </Box>
      </Stack>

      {/* Divider for small screens */}
      <Divider
        sx={{
          display: { xs: 'block', md: 'none' },
          width: '100%',
          my: 1,
        }}
      />

      {/* Experience */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ color: '#444', alignSelf: { xs: 'flex-start', md: 'center' } }}
      >
        <Tooltip title="Years of Professional Experience">
          <AccountBoxIcon color="primary" />
        </Tooltip>
        <Typography fontSize="0.95rem" fontWeight={600}>
          13+ Years of Experience
        </Typography>
      </Stack>

      {/* Contact Info */}
      <Stack spacing={0.8} alignSelf={{ xs: 'flex-start', md: 'center' }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon color="primary" />
          <Typography fontSize="0.9rem" noWrap>
            atul762@gmail.com
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CallIcon color="primary" />
          <Typography fontSize="0.9rem" noWrap>
            +91-893-960-9696
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
