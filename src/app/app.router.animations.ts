import {trigger, animate, style, group, animateChild, query,
    stagger, transition} from '@angular/animations';

export const routerTransition =
trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('0.5s ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.5s ease', style({ transform: 'translateY(100%)' }))
      ], { optional: true }),
    ]),
  ]),
]);
