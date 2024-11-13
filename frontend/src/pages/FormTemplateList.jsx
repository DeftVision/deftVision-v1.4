import { useState, useEffect } from "react";
import {
    Box,
    List,
    ListItem,
    Typography,
    Stack,
    Checkbox,
    FormControlLabel,
    TextField,
    Select,
    MenuItem,
    Button,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TableContainer
} from '@mui/material';
import { getFormTemplates, createFormTemplate } from '../services/formTemplateService';


function FormTemplateList() {
    const [templates, setTemplates] = useState([]);
    const [newTemplateName, setNewTemplateName] = useState('');
    const [fields, setFields] = useState([]);
    const [fieldLabel, setFieldLabel] = useState('');
    const [fieldType, setFieldType] = useState('text');
    const [fieldRequired, setFieldRequired] = useState(false);



    const handleAddField = async (e) => {
        if(fieldLabel.trim()) {
            const newField = {
                label: fieldLabel,
                type: fieldType,
                isRequired: fieldRequired,
                options: [],
            };
            setFields([...fields, newField]);
            setFieldLabel('');
            setFieldType('text');
            setFieldRequired(false);
        }
    };

    const handleCreateTemplate = async (e) => {
        if (newTemplateName.trim()) {  // Ensure a template name is provided
            const newTemplate = {
                name: newTemplateName,
                fields: fields,
            };

            try {
                await createFormTemplate(newTemplate);
                setNewTemplateName('');
                setFields([]);
                await fetchTemplates();
            } catch (error) {
                console.error('Error creating template:', error);
            }
        }
    };

    const fetchTemplates = async () => {
        try {
            const data = await getFormTemplates();
            console.log('Data fetched from API in fetchTemplates:', data); // Log entire response
            console.log('Extracted templates:', data.templates); // Log extracted templates array

            setTemplates(Array.isArray(data.templates) ? data.templates : []);
            console.log('Templates state after setting:', templates); // Check templates state immediately after setting
        } catch (error) {
            console.error('Error fetching templates:', error);
        }
    };

    useEffect(() => {
        fetchTemplates();
    }, [])

    useEffect(() => {
        console.log('updated templates state: ', templates)
    }, [templates]);

    console.log('templates to render:', templates)
    return (
        <Box sx={{ justifyContent: 'center', marginTop: 5, textAlign: 'center'}}>
            <Typography variant='overline' sx={{fontSize: '1rem', marginBottom: 5}}>
                create form template
            </Typography>
            <Box sx={{justifyContent: 'center', marginBottom: 4}}>
               <Stack direction='column' spacing={3} sx={{justifyContent: 'center', alignItems: 'center',  marginTop: 5}}>
                   <TextField
                       label="template name"
                       value={newTemplateName}
                       onChange={(e) => setNewTemplateName(e.target.value)}
                       variant='outlined'
                       sx={{width: 600}}
                   />

                   <TextField
                       label='field label'
                       value={fieldLabel}
                       onChange={(e) => setFieldLabel(e.target.value)}
                       variant='outlined'
                       sx={{width: 600}}
                   />

                   <Select
                       value={fieldType}
                       onChange={(e) => setFieldType(e.target.value)}
                       variant='outlined'
                       displayEmpty
                       sx={{width: 600, textAlign: 'start'}}
                   >
                       <MenuItem value='text'>text</MenuItem>
                       <MenuItem value='number'>number</MenuItem>
                       <MenuItem value='date'>date</MenuItem>
                       <MenuItem value='checkbox'>checkbox</MenuItem>
                   </Select>

                   <FormControlLabel
                       control={
                        <Checkbox
                            checked={fieldRequired}
                            onChange={(e) => setFieldRequired(e.target.checked)}
                        />}
                       label='required'
                   />
                   <Button variant='contained' onClick={handleAddField}  sx={{marginBottom: 4}}>add field</Button>

               </Stack>
            </Box>

            <Box sx={{justifyContent: 'center', width: '50%', marginBottom: 5, alignItems: 'center', alignSelf: 'center', margin: 'auto'}}>
                    <Table size='small' sx={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginBottom: 8}} aria-label='custom form field list'>
                        <TableHead>
                            <TableRow>
                                <TableCell>displayed text</TableCell>
                                <TableCell>field type</TableCell>
                                <TableCell>is required</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(fields) && fields.map((field, index) => (
                                <TableRow key={index}>
                                    <TableCell>{field.label}</TableCell>
                                    <TableCell>{field.type}</TableCell>
                                    <TableCell>{field.isRequired ? "yes" : "no"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

            </Box>

            <Button variant='contained' color='primary' onClick={handleCreateTemplate}>
                create template
            </Button>

            <Stack direction="column" spacing={2} sx={{ marginTop: 5 }}>
                {templates.length === 0 ? (
                    <Typography variant="body1">No templates available</Typography>
                ) : (
                    templates.map((template) => (
                        <Box key={template._id} sx={{ border: '1px solid #ddd', padding: 2, borderRadius: 1 }}>
                            <Typography variant="h6">{template.name}</Typography>
                            <List>
                                {Array.isArray(template.fields) && template.fields.map((field) => (
                                    <ListItem key={field._id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography variant="subtitle2">
                                            <strong>Label: </strong>{field.label}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <strong>Type: </strong>{field.type}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <strong>Required: </strong>{field.isRequired ? "Yes" : "No"}
                                        </Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    ))
                )}
            </Stack>
        </Box>
    );

}

export default FormTemplateList;