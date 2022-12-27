import { Navigate, RouteObject } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ArticlePage } from '../pages/ArticlePage'
import { SocureCodePage } from '../pages/SocureCodePage'
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to='/home' />
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
        element: <SocureCodePage />
    }
]