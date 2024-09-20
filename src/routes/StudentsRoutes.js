// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
// import Students from 'pages/students/index';

import { lazy } from 'react';

const Students = Loadable(lazy(() => import('../pages/students')));

const StudentsRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'students', // ruta asignada en menu-items
      element: <Students /> // la vista de estudiantes
    }
  ]
};

export default StudentsRoutes;
