import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-grid-a-outline',
    link: '/pages/dashboard',
    home: true,
  },

  {
    title: 'Simulations',
    icon: 'nb-lightbulb',
    children: [
      {
        title: 'Singal Run',
        link: '/pages/simulations',
      },
      {
        title: 'simulation companion',
        link: '/pages/miscellaneous/404',
      },
    ],
    
       
  },
  {
    title: 'Simulations Manager',
    icon: 'nb-gear',
    link: '/pages/tables/jobTable',
     
  },
  {
    title: 'Statistics',
    icon: 'nb-bar-chart',
    link: '/pages/statistics',
     
  },
];
