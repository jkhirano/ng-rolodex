import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements AfterViewInit {
  @ViewChild("nameInput", null)
  nameInput: ElementRef;

  formData = {
    name: "",
    email: "",
    address: "",
    mobile: ""
  };

  nameValid = false;
  emailValid = false;
  addressValid = false;
  mobileValid = false;

  errors = {
    name: "",
    email: "",
    address: "",
    mobile: ""
  };

  constructor(private backend: BackendService) {}

  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
  }

  validateName = () => {
    if (!this.formData.name) {
      this.nameValid = false;
      this.errors.name = "Name is required";
    } else if (this.formData.name.length < 3) {
      this.nameValid = false;
      this.errors.name = "Name should be at least 3 characters";
    } else {
      this.nameValid = true;
      this.errors.name = "";
    }
  };

  validateEmail = () => {
    if (!this.formData.email) {
      this.emailValid = false;
      this.errors.email = "Email is required";
    } else if (this.formData.email.length < 3) {
      this.emailValid = false;
      this.errors.email = "Email should be at least 3 characters";
    } else if (!this.formData.email.includes("@")) {
      this.emailValid = false;
      this.errors.email = "Badly formatted email";
    } else {
      this.emailValid = true;
      this.errors.email = "";
    }
  };

  validateAddress = () => {
    if (!this.formData.address) {
      this.addressValid = false;
      this.errors.address = "Address is required";
    } else if (this.formData.address.length < 3) {
      this.addressValid = false;
      this.errors.address = "Address should be at least 3 characters";
    } else {
      this.addressValid = true;
      this.errors.address = "";
    }
  };

  // have to figure out why less than 10 digits can still be submitted
  validateMobile = () => {
    if (!this.formData.mobile) {
      this.mobileValid = false;
      this.errors.mobile = "Mobile number is required";
    } else if (this.formData.mobile.length < 10) {
      this.mobileValid = false;
      this.errors.mobile = "Mobile number should be at least 10 numbers";
    } else {
      this.mobileValid = true;
      this.errors.mobile = "";
    }
  };

  submit = () => {
    console.log(this.formData);
    this.backend.create(this.formData).then(response => {
      console.log(response); // {success: 200}
    });
  };
}
