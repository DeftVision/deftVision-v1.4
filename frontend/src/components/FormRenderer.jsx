import {useEffect, useState} from 'react';
import {Box, Button, Checkbox, FormControlLabel, Skeleton, Stack, TextField, Typography} from "@mui/material";
import { useParams } from 'react-router-dom'
import { getFormTemplateById } from '../services/formTemplateService'

const FormRenderer = ({ onSubmit }) => {
    const [formData, setFormData] = useState({})
    const {templateId} = useParams();
    const [template, setTemplate] = useState(null);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const data = await getFormTemplateById(templateId);
                setTemplate(data);
            } catch (error) {
                console.log('Error fetching template: ', error);
            }
        }
        fetchTemplate();
    }, [templateId]);

    const handleChange = (fieldId, value) => {
        setFormData(prevData => ({...prevData, [fieldId]: value}));
    }

    const handleSubmit = (e) => {
        if (typeof onSubmit === 'function') {
            onSubmit(formData); // Check that onSubmit is a function before calling
        } else {
            console.error('onSubmit is not a function');
        }
    }

    if(!template) {
        return <Box sx={{marginTop: 10, justifyContent: 'center', display: 'flex'}}>
            <Stack spacing={2}>
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                <Skeleton variant="rounded" width={610} height={100} />
                <Skeleton variant="rounded" width={610} height={100} />
            </Stack>
        </Box>;
    }

    return (
        <Box component='form' onSubmit={handleSubmit} sx={{padding: 2, border: '1px solid #ddd', borderRadius: 1, marginTop: 10}}>
            <Typography variant='overline' sx={{mb: 2}}>{template.name}</Typography>
            {template?.fields?.map((field) => (
                <Box key={field._id} sx={{mb: 2}}>
                    {field.type === 'text' || field.type === 'number' || field.type === 'date' ? (
                        <TextField
                            type={field.type}
                            label={field.label}
                            required={field.isRequired}
                            value={formData[field._id || '']}
                            onChange={(e) => handleChange(field._id, e.target.value)}
                            InputLabelProps={field.type === 'date' ? {shrink: true} : {}}
                        />
                    ) : field.type === 'checkbox' ? (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={!!formData[field._id]}
                                    onChange={(e) => handleChange(field._id, e.target.checked)}
                                />
                            }
                            label={field.label}
                        />
                    ) : null}
                </Box>
            ))}
            <Button type='submit' variant='contained' color='primary'>submit</Button>
        </Box>
    );
};

export default FormRenderer;