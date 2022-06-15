import * as React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material/';
import { products } from '../../pages/data';
const VendorProducts = () => {
    return (
        <List
            sx={{
                borderRadius: '4px',
                flexGrow: 1,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 350,
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
