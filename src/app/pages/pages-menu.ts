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
        title: 'Single Run',
        link: '/pages/simulations',
      },
      {
        title: 'Simulation Campaign',
        link: '/pages/campaignSim',
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
