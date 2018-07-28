import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentRoute = 'main';


    constructor(private router: Router) {

    }

    login(email: string, password: string) {
        // this.firebaseAuth.auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(value => {
        //         localStorage.setItem('email', email);
        //         localStorage.setItem('password', password);
        //         this.router.navigate([this.currentRoute]);
        //     })
        //     .catch(err => {
        //         this.removeUserInfo();
        //         this.router.navigate(['login']);
        //     });
        this.router.navigate([this.currentRoute]);
    }

    private removeUserInfo() {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }

    logout() {
        this.removeUserInfo();
        this.router.navigate(['login']);
    }
}
