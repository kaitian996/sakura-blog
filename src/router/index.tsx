import { Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'
const HomePage = lazy(() => import('../pages/HomePage'))
const ArticlePage = lazy(() => import('../pages/ArticlePage'))
const SocureCodePage = lazy(() => import('../pages/SocureCodePage'))
const CodeDetail = lazy(() => import('../pages/CodeDetailPage'))
const UtilPage = lazy(() => import('../pages/UtilPage'))
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/home' />,
    },
    {
        path: '/home',
        element: <HomePage />
    },
    {
        path: '/article',
        element: <ArticlePage />
    },
    {
        path: '/socureCode',
        element: <SocureCodePage />,
    },
    {
        path: '/detail',
        element: <CodeDetail />
    },
    {
        path: '/util',
        element: <UtilPage />
    }
]