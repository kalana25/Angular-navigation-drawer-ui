
import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger("fade",[
    state('void',style({opacity:0})),
    transition("void => *, * => void",[
      animate(270)
    ]),
])

export let slideDown = trigger("slideDown",[
    state('start',style({
        transform:'translateY(0px)',
        opacity:1
    })),
    state('end',style({
        transform:'translateY(120px)',
        opacity:0
    })),
    transition("start <=> end",[
        animate(270)
    ])
])

export let rotateAll = trigger("rotateAll",[
    state('start',style({transform:'rotate(0deg)'})),
    state('end',style({transform:'rotate(90deg)'})),
    transition('start <=> end',[
        animate(270)
    ])
])
