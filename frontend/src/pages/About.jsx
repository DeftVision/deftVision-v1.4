import { Box, Typography} from '@mui/material';

export default function About() {

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', marginTop: 5, justifyContent: 'center'}}>
            <Typography variant='overline' sx={{fontSize: '1rem'}}>
                welcome to the about page
            </Typography>
        </Box>
    );
}