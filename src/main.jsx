import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

import HomePage from './components/Pages/HomePage.jsx';
import ProjectPage from './components/Pages/Projects/ProjectsPage.jsx';
import BLogsPage from './components/Pages/BuildLogs/BLogsPage.jsx';
import MediaPage from './components/Pages/Media/MediaPage.jsx';
import PhotosPage from './components/Pages/Photography/PhotosPage.jsx';
import AboutPage from './components/Pages/About/AboutPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/projects',
                element: <ProjectPage />
            },
            {
                path: '/build-logs',
                element: <BLogsPage />
            },
            {
                path: '/media',
                element: <MediaPage />
            },
            {
                path: '/photography',
                element: <PhotosPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
