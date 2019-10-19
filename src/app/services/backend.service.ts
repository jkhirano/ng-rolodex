// similar to redux store

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  // each method represents each route

  // this is saying we need HttpClient, once its ready, we can pass it in
  constructor(private http: HttpClient) {}

  // "data" is equivalent to server.js' "body"
  create(data) {
    // return Promise.resolve({});
    return this.http.post("/api/create", data).toPromise();
  }

  getContacts() {
    return this.http.get("/api/contacts").toPromise();
  }
}
