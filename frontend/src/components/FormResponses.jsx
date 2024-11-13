import {Box, Stack, Typography} from '@mui/material';

function FormResponses({ responses })  {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5, padding: 2, textAlign: 'center' }}>
           <Stack direction='column' spacing={2}>
               <Typography variant='overline' sx={{fontSize: '1rem'}}> Submitted Responses</Typography>
               {responses.length === 0 ? (
                   <Typography variant='overline'>no responses yet</Typography>
               ) : (
                   responses.map((response, index) => (
                       <Box key={index} sx={{border: '1px solid #ddd', padding: 2, borderRadius: 1}}>
                           <Typography variant='body2'>Response {index + 1}</Typography>
                           <ul>
                               {Object.entries(response).map(([fieldId, value]) => (
                                   <li key={fieldId}><strong>{fieldId}:</strong> {value.toString()}</li>
                               ))}
                           </ul>
                       </Box>

                   ))
               )}
           </Stack>
        </Box>
    )
}


export default FormResponses;