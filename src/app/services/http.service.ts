import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({providedIn: 'root'})
export class HttpService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.url
    }

    getCall(url: string) {
        return this.http.get(this.baseUrl + url);
    }

    postCall(url: string, body: Object) {
        return this.http.post(this.baseUrl + url, body);
    }
}