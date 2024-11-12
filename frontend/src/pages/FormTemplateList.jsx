import { useState, useEffect } from "react";
import {Box, Button, TextField, List, ListItem, Typography, Stack} from '@mui/material';
import { getFormTemplates, createFormTemplate, updateFormTemplate, deleteFormTemplate } from '../services/formTemplateService';


function FormTemplateList() {
    const [templates, setTemplates] = useState([]);
    const [newTemplateName, setNewTemplateName] = useState('');

    useEffect(() => {
        fetchTemplates();
    }, [])


    const fetchTemplates = async () => {
        const data = await getFormTemplates();
        setTemplates(data);
    }

    const handleAddTemplate = async (e) => {
        if(newTemplateName.trim()) {
            const newTemplate = { name: newTemplateName, fields: []};
            await createFormTemplate(newTemplate);
            setNewTemplateName('');
            fetchTemplates();
        }
    }

    return (
        <Box sx={{justifyContent: 'center', marginTop: 5, textAlign: 'center'}}>
            <Typography variant='overline' sx={{fontSize: '1rem', marginBottom: 5}}>form template</Typography>
            <Stack direction='column' spacing={2} sx={{marginTop: 5}}>
                <TextField
                    label='New Template Name'
                    value={newTemplateName}
                    onChange={(e) => setNewTemplateName(e.target.value)}
                    variant='outlined'
                    margin='normal'
                />
                <Button variant='contained' color='primary' onClick={handleAddTemplate}>
                    Add Template
                </Button>
                <List>
                    {templates.map((template) => (
                        <ListItem key={template._id}>{template.name}</ListItem>
                    ))}
                </List>
            </Stack>
        </Box>
    );

}

export default FormTemplateList;