import * as React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material/';
import { products } from '../../pages/data';
const VendorProducts = () => {
    return (
        <List
            sx={{
                width: '100%',
                borderRadius: '4px',
                margin: '1%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 }
            }}
            subheader={<li />}
        >
            <ListSubheader>Products</ListSubheader>
            <Divider component="li" />
            {products.map((item, index) => (
                <div key={index}>
                    <ListItem>
                        <ListItemText primary={`${item.name}`} secondary={`${item.description}`} />
                    </ListItem>
                    <Divider component="li" />
                </div>
            ))}
        </List>
    );
};
export default VendorProducts;
