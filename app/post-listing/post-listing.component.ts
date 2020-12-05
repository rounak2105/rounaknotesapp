import { Component, OnInit, Input } from "@angular/core";
import { PostsService } from "../post-service";
import "rxjs/add/operator/map";

export interface myJSON {
  uid: string;
  note: string;
}

@Component({
  selector: "app-post-listing",
  templateUrl: "./post-listing.component.html",
  styleUrls: ["./post-listing.component.css"]
})
export class PostListingComponent implements OnInit {
  postDataListing: any = [];
  @Input() uid: any;
  id = 101;

  payload = {
    uid: "100",
    note: "Auto-generated"
  };

  data_a;

  ret_data: myJSON[] = [
    { uid: "101", note: "Hello" },
    { uid: "102", note: "Hello2" }
  ];

  constructor(private PostsServiceList: PostsService) {}

  ngOnInit() {
    console.log("Intialize");
    this.id = this.uid;
    this.get();
  }

  input(value) {
    this.id = value;
    console.log(this.id);
  }

  note(value) {
    this.payload.uid = this.id.toString();
    this.payload.note = value;
  }

  get() {
    this.PostsServiceList.getNotes(this.id).subscribe((response: any) => {
      console.log(response);
      this.ret_data = JSON.parse(response._body);
      this.data_a = true;
      console.log(this.ret_data);
    });
  }

  post() {
    this.PostsServiceList.sendNotes(this.payload).subscribe((response: any) => {
      console.log(response);
    });
    this.delay(2000).then(any => {
      this.wait();
    });
  }

  wait() {
    console.log("Yes");
    this.get();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() =>
      console.log("fired")
    );
  }
}
