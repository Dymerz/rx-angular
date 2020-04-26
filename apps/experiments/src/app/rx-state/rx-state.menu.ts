import { MenuItem } from '../core/navigation/menu-item.interface';

export const MENU_ITEMS: MenuItem[] = [
  {
    link: 'rx-base-state',
    label: 'RxState Overview',
    children: [
      /* // 01.
      {
        link: 'rx-base-state-01',
        label: 'RxState 01'
      },*/
      {
        link: 'subscription',
        label: 'Subscription'
      },
      {
        link: 'composition',
        label: 'Composition'
      },
      {
        link: 'selections',
        label: 'Selections'
      },
      {
        link: 'connect',
        label: 'Connecting'
      }
    ]
  }
];
