import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

const StyledList = styled(List)(({ theme }) => ({
    width: '250px',
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column'
}));
export const Sidenav = () => {
    return (
        <StyledList>
            <ListItem disablePadding>
                <ListItemButton>
                    <Typography variant="h6" fontWeight={600} sx={{ flexGrow: 1 }}>
                        <Link to="/">Instant Grocery</Link>
                    </Typography>
                </ListItemButton>
            </ListItem>

            {[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </StyledList>
    );
};
