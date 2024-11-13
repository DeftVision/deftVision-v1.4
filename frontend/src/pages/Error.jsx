import { Box, Typography} from '@mui/material'

export default function Error() {

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', marginTop: 10, justifyContent: 'center'}}>
            <Typography variant='overline' sx={{fontSize: '1rem'}}>404: page not found</Typography>
        </Box>
    );
}