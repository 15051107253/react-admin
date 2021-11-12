import DashboardHome from '@/views/dashboard/home'

import UserManage from '@/views/system/userManage'
import RoleManage from '@/views/system/roleManage'

const routers = [
  {
    path: '/dashboard/home',
    component: DashboardHome,
  },
  {
    path: '/system/userManage',
    component: UserManage,
  },
  {
    path: '/system/roleManage',
    component: RoleManage,
  },
]

export default routers
