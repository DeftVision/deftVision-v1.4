import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
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
                  <Button color='inherit' component={Link} to='/about'>About</Button>
              </Toolbar>
          </AppBar>

            <Container sx={{ marginTop: 5}}>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />

                </Routes>
            </Container>
          </Box>
    </Router>
  )
}

export default App
