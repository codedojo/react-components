import React from 'react';
import { createRoot } from 'react-dom/client';

import { Heading, ThemeProvider, lightTheme } from './lib';

import Buttons from './pages/button';
import Dialog from './pages/dialog';
import Tags from './pages/tag';
import Toast from './pages/toast';

import '../dist/index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ThemeProvider theme={lightTheme}>
        <Heading type="title1">CodeDojo UI</Heading>

        <Buttons />
        <Dialog />
        <Tags />
        <Toast />
    </ThemeProvider>
);