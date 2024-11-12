import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import FormTemplateList from './pages/FormTemplateList.jsx'
import FormBuilder from './pages/FormBuilder.jsx';
function App() {


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
                  <Button color='inherit' component={Link} to='/form-builder'>Builder</Button>
              </Toolbar>
          </AppBar>

            <Container sx={{ marginTop: 5}}>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/form-templates' element={<FormTemplateList />} />
                    <Route path='form-builder' element={<FormBuilder />} />
                </Routes>
            </Container>
          </Box>
    </Router>
  )
}

export default App
