import { Box, Typography} from '@mui/material';

export default function Home() {

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', marginTop: 5, justifyContent: 'center'}}>
            <Typography variant='overline' sx={{fontSize: '1rem'}}>
                welcome to the home page
            </Typography>
        </Box>
    );
}