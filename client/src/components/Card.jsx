import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
const OutlinedCard= ({name,last_name,phone,email}) => {
    return(
    <Box sx={{ minWidth: 275 }} className='card'>
        <React.Fragment>
            <Card variant="outlined">
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {phone}
                </Typography>
                <Typography variant="h5" component="div">
                    {name} {last_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {email}
                </Typography>

                </CardContent>

                <CardActions>
                    <Button variant="contained" color='success'>Edit Client</Button>
                    <Button variant="contained" color='error'>Delete Client</Button>
                </CardActions>

            </Card>
        </React.Fragment>
    </Box>
    )

}

export default OutlinedCard

