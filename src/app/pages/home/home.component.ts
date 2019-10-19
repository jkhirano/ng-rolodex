import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("nameInput", null)
  nameInput: ElementRef;

  // contacts = [
  //   {
  //     Name: "Person1",
  //     Address: "Address1"
  //   },
  //   {
  //     Name: "Person2",
  //     Address: "Address2"
  //   },
  //   {
  //     Name: "Person3",
  //     Address: "Address3"
  //   }
  // ];

  searchData = {
    name: ""
  };

  nameValid = false;

  errors = {
    name: ""
  };

  // contacts;

  // gets run before component
  constructor(private backend: BackendService) {}

  // life cycle component similar to componentDidMount
  ngAfterViewInit() {
    // onInit (){
    // console.log(this.contacts);
    // this.backend.getContacts().then(data => {
    //   this.contacts = data;
    this.nameInput.nativeElement.focus();
  }

  validateName = () => {
    if (!this.searchData.name) {
      this.nameValid = false;
      this.errors.name = "Name is required for search";
    } else if (this.searchData.name.length < 1) {
      this.nameValid = false;
      this.errors.name = "Enter atleast 1 character";
    } else {
      this.nameValid = true;
      this.errors.name = "";
    }
  };

  submit = () => {
    console.log(this.searchData);
    this.backend.getContacts(this.searchData).then(response => {
      console.log(response);
    });
  };
}
