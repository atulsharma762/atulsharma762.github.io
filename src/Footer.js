import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#f5f5f5',
        color: 'black',
        p: 3,
        textAlign: 'center',
        mt: 5,
        borderTop: '1px solid #ccc',
      }}
    >
      <Stack spacing={1}>
        <Typography variant="body1">
          © 2025 Atul Sharma | Software Developer | Automation Enthusiast
        </Typography>
        <Typography variant="body2">
          <Link href="mailto:atul1762@gmail.com" underline="hover">
            atul762@gmail.com
          </Link>{' '}
          |{' '}
          <Link href="https://github.com/atulsharma762" target="_blank" underline="hover">
            GitHub
          </Link>{' '}
          |{' '}
          <Link href="https://linkedin.com/in/atulsharma762" target="_blank" underline="hover">
            LinkedIn
          </Link>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Built with ❤️ using React & Material UI
        </Typography>
      </Stack>
    </Box>
  );
}
