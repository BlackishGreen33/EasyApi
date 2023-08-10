import { Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import NewInterface from '@/pages/Home/NewInterface'
// 定义路由对象类型
type RouteObject = {
	path: string
	element: React.ReactNode
}

// 路由映射表
const routes: RouteObject[] = [
	{
		//登录页面
		path: '/login',
		element: <Login />
	},
	{
		//注册页面
		path: '/register',
		element: <Register />
	},
	{
		//主页面
		path: '/home',
		element: <Home />
	},
	{
		// 新建接口页面
		path:'/new',
		element: <NewInterface />
	},
	// 路由重定向
	{
		path: '/',
		element: <Navigate to="/login" />
	}
]
export default routes
