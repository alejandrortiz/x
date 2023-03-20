import {
  ArrowUpDownIcon,
  DashboardIcon,
  PieChartIcon,
  PiggyBank,
  SettingsIcon,
  TagsIcon
} from '@/icons/Icons'

export const AsideData = [
  {
    id: '288c9c53-f8ba-4619-8ee6-c55cf365db59',
    title: 'Dashboard',
    section: false,
    path: '/dashboard',
    icon: <DashboardIcon />,
    options: []
  },
  {
    id: '3826e881-964d-4748-9350-988f746d7398',
    title: 'Financial',
    section: true,
    path: null,
    icon: null,
    options: []
  },
  {
    id: 'f5146bbc-240a-45c0-a60a-be6292c48e04',
    title: 'Budgets',
    section: false,
    path: '/financial/budgets',
    icon: <PieChartIcon />,
    options: []
  },
  {
    id: '0d092415-b012-4400-83cc-5b8e21a61de2',
    title: 'Piggy banks',
    section: false,
    path: '/financial/piggy-banks',
    icon: <PiggyBank />,
    options: []
  },
  {
    id: '79dcf23e-3d1f-486b-8e34-286fa8f74122',
    title: 'Transactions',
    section: false,
    path: null,
    icon: <ArrowUpDownIcon />,
    options: [
      {
        id: 'e20e82a6-fd87-47f1-a403-78415e716c17',
        title: 'Incomes',
        path: '/financial/transactions/incomes',
        icon: null
      },
      {
        id: 'e6649ae8-2512-462c-9ef8-acd092980a26',
        title: 'Expenses',
        path: '/financial/transactions/expenses',
        icon: null
      }
    ]
  },
  {
    id: 'f27335a9-fb3a-43b4-bdd5-c2e2d6f20be3',
    title: 'Classifications',
    section: false,
    path: null,
    icon: <TagsIcon />,
    options: [
      {
        id: '51701029-d041-42d0-9d8c-3d63221d8f87',
        title: 'Categories',
        path: '/financial/classifications/categories',
        icon: null
      },
      {
        id: 'a22c1e9a-f838-4c6d-b3d6-435757cd1ff9',
        title: 'Tags',
        path: '/financial/classifications/tags',
        icon: null
      }
    ]
  },
  {
    id: '7d5c1506-f9a3-4b11-801d-9e8fca8d4c40',
    title: 'Reports',
    section: false,
    path: '/financial/reports',
    icon: <DashboardIcon />,
    options: []
  },
  {
    id: '7bbd5639-8397-4f90-b0b6-b974fe4c91e5',
    title: 'Options',
    section: true,
    path: null,
    icon: null,
    options: []
  },
  {
    id: '017f997d-c358-40c6-ad01-cd79de4cd212',
    title: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
    options: []
  }
]
