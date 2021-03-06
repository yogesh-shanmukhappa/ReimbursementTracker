import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Globals } from '../shared';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    dataStream : any;

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private globals: Globals
    ) { }

    ngOnInit() {

        var checkInterval = setInterval(() => {
            if ( this.globals.basicDetailsLoaded ) {
                if (this.router.url === '/') {
                     this.router.navigate( ['/basic', sessionStorage.getItem('username')] );
                }
                clearInterval( checkInterval );
            }
        }, 500);

    }

}
