import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../models/AuthResponseData.model";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {  }

    login(email: string, password: string): Observable<AuthResponseData> {
       return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`, {email, password, returnSecureToken: true})
    }

    formatUser(data: AuthResponseData) {
        const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
        const user = new User(data.email, data.idToken, data.localId, expirationDate);
        return user;
    }

    getErrorMessage(message: string) {
        switch(message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            case 'EMAIL_EXISTS':
                return 'Email Address Is already exists';
            case 'OPERATION_NOT_ALLOWED':
                return 'Disabled Authorization, contact support';
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                return 'Too many attempts, Try again after some time...';
            default:
                return 'Unknwon error occurred, please try again later...'
        }
    }

    signup(email, password): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`, { email, password})

    }
}