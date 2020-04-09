import { Component, OnInit } from "@angular/core";
import { AdvertService } from "../../services/advert.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  adverts: any;
  currentDetail: any = 0;
  // currentIndex = -1;
  // title = '';

  constructor(
    private advertService: AdvertService,
    private route: ActivatedRoute,
    // private router: Router
  ) {}

  ngOnInit() {
    // this.retrieveAdverts();
    this.getAdvert(this.route.snapshot.paramMap.get("id"));
  }

  getAdvert(id) {
    this.advertService.get(id).subscribe(
      data => {
        this.currentDetail = data;
        console.log(this.currentDetail);
      },
      error => {
        console.log(error);
      }
    );
  }


  // retrieveAdverts() {
  //   this.advertService.getAll()
  //     .subscribe(
  //       data => {
  //         this.adverts = data;
  //         console.log("Data:",data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // refreshList() {
  //   this.retrieveAdverts();
  //   this.currentAdvert = null;
  //   this.currentIndex = -1;
  // }

  // setActiveAdvert(advert, index) {
  //   this.currentAdvert = advert;
  //   this.currentIndex = index;
  // }

  // removeAllAdverts() {
  //   this.advertService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveAdverts();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // searchTitle() {
  //   this.advertService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.adverts = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
