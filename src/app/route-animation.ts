import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            style({ height: '*' }),
            group([
                query(':leave',
                    [
                        style({ opacity: 1, position: 'absolute', height: '*' }),
                        animate('0.5s', style({ opacity: 0, height: '*' })),
                    ],
                    { optional: true },
                ),

                query(':enter',
                    [
                        style({ opacity: 0 }),
                        animate('0.5s', style({ opacity: 1, height: '*' })),
                    ],
                    { optional: true },
                ),
            ]),

        ]),
        
    ]);