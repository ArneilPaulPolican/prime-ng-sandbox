import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable()
export class ApplicationRouterActivate implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate() {
        // if (localStorage.getItem("access_token") == null) {
        //     this.router.navigate(["/landing"]);
        //     return false;
        // } else {
            return true;
        // }
    }
}