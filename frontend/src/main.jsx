import React from 'react'
import ReactDom from 'react-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
)
