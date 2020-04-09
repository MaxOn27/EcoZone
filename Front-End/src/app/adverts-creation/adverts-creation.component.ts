import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AdvertService } from "../services/advert.service";

@Component({
  selector: "app-adverts-creation",
  templateUrl: "./adverts-creation.component.html",
  styleUrls: ["./adverts-creation.component.css"]
})
export class AdvertsCreationComponent implements OnInit {
  advert = {
    title: "",
    name: "",
    surname: "",
    price: "",
    city: "",
    address: "",
    photoURL: "",
    description: "",
    published: false
  };
  submitted = false;

  constructor(private advertService: AdvertService) {}

  formAdvert: FormGroup;

  ngOnInit() {
    this.formAdvert = new FormGroup({
      title: new FormControl("", Validators.required),
      // name: new FormControl('', Validators.required),
      // surname: new FormControl('', Validators.required),
      price: new FormControl(""),
      city: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    console.log("Submited", this.formAdvert);
  }

  saveAdvert() {
    const data = {
      title: this.advert.title,
      description: this.advert.description,
      price: this.advert.price,
      city: this.advert.city,
      photoURL: this.advert.photoURL,
      address: this.advert.address
    };

    this.advertService.create(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    // this.submitted = true;
  }
//   newAdvert() {
//     this.submitted = false;
//     this.advert = {
//       title: "",
//       price: "",
//       name: "",
//       surname: "",
//       city: "",
//       address: "",
//       photoURL: "",
//       description: "",
//       published: false
//     };
//   }
 }
