import React from 'react';
import { createRoot } from 'react-dom/client';

import { Heading, ThemeProvider, lightTheme } from './lib';

import Buttons from './pages/buttons';

import '../dist/index.css';

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider theme={lightTheme}>
        <Heading>CodeDojo UI</Heading>

        <Buttons />
    </ThemeProvider>
);