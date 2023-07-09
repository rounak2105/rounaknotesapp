import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class PostsService {
  readonly ROOT_URL;

  constructor(private http: Http) {
    this.ROOT_URL = "https://notes-app-flash.onrender.com/";
  }

  getNotes(id) {
    console.log("ID is " + id);
    return this.http.get(`${this.ROOT_URL}/${id}`);
  }

  sendNotes(payload) {
    return this.http.post(this.ROOT_URL, payload);
  }
}
