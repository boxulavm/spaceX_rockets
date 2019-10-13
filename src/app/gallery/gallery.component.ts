import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  rocketId;
  loading = false;
  rocketData = [];

  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.loading = true;

    // Get Id from router
    this.route.paramMap.subscribe(params => {
      this.rocketId = params.get('rocketId');
      console.log(this.rocketId)
    });

    // Send request to server with Id


    fetch(`https://api.spacexdata.com/v3/rockets/${this.rocketId}`)
    .then(response => response.json())
    .then(rocket => {
      this.rocketData = rocket;
      // console.log(this.rocketData)
        this.loading = false;
    });

}

}