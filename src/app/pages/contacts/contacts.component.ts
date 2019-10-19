import { Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { stringify } from "@angular/compiler/src/util";
// import { Router } from "@angular/router";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  // contacts = [
  //   {
  //     name,
  //     email: ""
  //     // address,
  //     // mobile
  //   }
  // ];

  contacts;
  constructor(private backend: BackendService) {}
  // constructor(private backend: BackendService, private router: Router) {}

  ngOnInit() {
    // console.log(this.contacts);
    this.backend.getContacts().then(data => {
      this.contacts = data;
    });
  }

  // getContacts(data) {
  //   const index = data;
  //   this.router.navigate([`contacts/${index}`]);
  // }
}
