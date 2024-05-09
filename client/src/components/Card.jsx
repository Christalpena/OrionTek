import * as React from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { deleteClient } from '../api';

// eslint-disable-next-line react/prop-types
const OutlinedCard= ({name,last_name,phone,email,id}) => {
    const navigate = useNavigate();
    return(
    <Box sx={{ minWidth: 275}} >
        <React.Fragment>
            <Card variant="outlined" className='card'>
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

                <CardActions className='cardBtns'>
                    <Button onClick={() => {
                        navigate('/client/' + id)
                    }} variant="contained" color='success'>Edit Client</Button>
                    <Button variant="contained" color='error' onClick={async() => {
                        const yes = window.confirm("Do you want delete this client?")
                        if(yes){
                            await deleteClient(id)
                            navigate('/')
                        }
                    }}>Delete Client</Button>
                </CardActions>

            </Card>
        </React.Fragment>
    </Box>
    )

}

export default OutlinedCard

