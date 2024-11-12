import { useState } from "react";
import {
    Box,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    List,
    ListItem,
    Typography,
    Stack
} from '@mui/material';
import { getFormTemplates, createFormTemplate, updateFormTemplate, deleteFormTemplate } from '../services/formTemplateService';


function FormBuilder() {
    const [fields, setFields] = useState([]);
    const [fieldType, setFieldType] = useState("text");
    const [fieldLabel, setFieldLabel] = useState('');

    const handleAddField = () => {
        if(fieldLabel.trim()) {
            setFields([...fields, {label: fieldLabel, type: fieldType, required: false}]);
            setFieldLabel('');
        }
    };

    return (
        <Box
            component='form'
            sx={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
            <Typography variant='overline' sx={{fontSize: '1rem', textAlign: 'center'}}>
                Form Builder
            </Typography>
            <Stack direction='column' spacing={2}>

                    <TextField
                        label='Field Label'
                        value={fieldLabel}
                        onChange={(e) => setFieldLabel(e.target.value)}
                    />
                <FormControl fullWidth>
                    <InputLabel>Field Type</InputLabel>
                    <Select
                        variant='outlined'
                        value={fieldType}
                        label='Field Type'
                        onChange={(e) => setFieldType(e.target.value)}
                    >
                        <MenuItem value='text'>Text</MenuItem>
                        <MenuItem value='number'>Number</MenuItem>
                        <MenuItem value='date'>Date</MenuItem>
                        <MenuItem value='checkbox'>Checkbox</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' color='primary' onClick={handleAddField}>
                    Add Field
                </Button>
            </Stack>
        </Box>
    );
}

export default FormBuilder;