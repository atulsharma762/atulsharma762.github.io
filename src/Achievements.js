import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './App.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography } from '@mui/material';

export default function Projects() {
  return (
    <div className="header">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          borderRadius: 1,
          alignItems: "center",

        }}
      >
       Achievementss
      </Box>


    </div>
  );
}
