import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  contacts = [
    {
      Name: "Person1",
      Address: "Address1"
    },
    {
      Name: "Person2",
      Address: "Address2"
    },
    {
      Name: "Person3",
      Address: "Address3"
    }
  ];

  // gets run before component
  constructor() {}

  // life cycle component similar to componentDidMount
  ngOnInit() {}
}
