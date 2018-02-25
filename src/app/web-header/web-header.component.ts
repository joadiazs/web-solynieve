import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import { AnonymousSubscription } from "rxjs/Subscription";

@Component({
    selector: 'app-web-header',
    templateUrl: './web-header.component.html',
    styleUrls: ['./web-header.component.css']
})

export class WebHeaderComponent implements OnInit {


    constructor(
    ) { }

    ngOnInit() { }

    logout() {
    }

    closePopUp(event) {
    }

}