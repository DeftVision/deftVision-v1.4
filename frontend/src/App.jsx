import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import Home from './pages/Home.jsx';
import FormRenderer from './components/FormRenderer.jsx';
import FormResponses from './components/FormResponses.jsx';
import FormTemplateList from './components/FormTemplateList.jsx'
import Error from './pages/Error.jsx'
import {useState} from "react";



function App() {
    const [responses, setResponses] = useState([]);

  return (
    <Router>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>

              <AppBar>
                  <Toolbar>
                      <Typography variant='overline' component='div' sx={{flexGrow: 1}}>
                          application
                      </Typography>
                      <Button color='inherit' component={Link} to='/'>Home</Button>
                      <Button color='inherit' component={Link} to='/form-templates'>Template</Button>
                      <Button color='inherit' component={Link} to='/responses'>Responses</Button>

                  </Toolbar>
              </AppBar>


            <Container sx={{marginTop: 5}}>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Error />} />
                    <Route path='/form-templates' element={<FormTemplateList />} />
                    <Route path='/form/:templateId' element={<FormRenderer />} />
                    <Route path='/responses' element={<FormResponses  responses={responses} />} />

                </Routes>
            </Container>
          </Box>
    </Router>
  )
}

export default App
