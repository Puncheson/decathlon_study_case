import { UsersPage } from "pages/UsersPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"
import { UserPage } from "pages/UserPage"

export enum AppRoutes  {
    MAIN = 'main',
    USERS = 'users',
    USER = 'user'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.USER]: '/user/:userId',

}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.users,
        element: <UsersPage/>
    },
    {
        path: RoutePath.user,
        element: <UserPage/>
    }
]