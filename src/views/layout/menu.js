const menu = [
  {
    id: '10000',
    parentId: '',
    title: '仪表盘',
    icon: 'icon-dashboard',
    path: '',
  },
  {
    id: '10001',
    parentId: '10000',
    title: '首页',
    tabDisabled: true, // 是否能tab栏中删除该标签
    path: '/dashboard/home',
  },
  {
    id: '10100',
    parentId: '',
    title: '系统管理',
    icon: 'icon-setting',
    path: '',
  },
  {
    id: '10101',
    parentId: '10100',
    title: '用户管理',
    path: '/system/userManage',
  },
  {
    id: '10102',
    parentId: '10100',
    title: '角色管理',
    path: '/system/roleManage',
  },
  {
    id: '10103',
    parentId: '10100',
    title: '资源管理',
    path: '',
  },
  {
    id: '10200',
    parentId: '',
    title: '交易管理',
    icon: 'icon-transaction',
    path: '',
  },
  {
    id: '10201',
    parentId: '10200',
    title: '商品分类',
    path: '',
  },
  {
    id: '10202',
    parentId: '10200',
    title: '商品列表',
    path: '',
  },
  {
    id: '10300',
    parentId: '',
    title: '订单管理',
    icon: 'icon-orderedlist',
    path: '',
  },
  {
    id: '10301',
    parentId: '10300',
    title: '订单列表',
    path: '',
  },
]

export default menu
