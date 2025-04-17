import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './App.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TextWithIcon from './components/TextWithIcon'
export default function Header() {
  return (
    <div style={{ background: "white", color: "black", width: "100%" }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          borderRadius: 1,
          alignItems: "center",
          border: "0px solid red"

        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            alignItems: "center",
            border: "0px solid green",
            width: "20%"
          }}
        >
          <TextWithIcon text="Atul Sharma" icon={[<Avatar>A</Avatar>]} sx={{ width: "100%" }} />

        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            alignItems: "center",
            border: "0px solid green",
            width: "20%"
          }}
        >
          <TextWithIcon text="Software Developer" icon={[<AccountBoxIcon />]} />
          <TextWithIcon text="11+ years experience" icon={[<AccountBoxIcon />]} />

        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 1,
            border: "0px solid blue",
            alignItems: "center",
            width: "20%"
          }}
        >
          <TextWithIcon text="atul762@gmail.com" icon={[<EmailIcon />]} />
          <TextWithIcon text="+91-893-XXX-XXX" icon={[<CallIcon />]} />
        </Box>
      </Box>


    </div>
  );
}
