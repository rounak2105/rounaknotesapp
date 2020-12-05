import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  uid = "11";
  check;
  main = true;
  input(value) {
    this.uid = value;
    this.check = true;
    this.main = false;
  }
  getID() {
    this.uid = Math.random()
      .toString(36)
      .substring(7);
    this.check = true;
    this.main = false;
  }
  returnID() {
    return this.uid;
  }
  
}
