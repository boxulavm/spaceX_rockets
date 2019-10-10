import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  loading = false;
  rockets = [];
  endpoint = 'https://api.spacexdata.com/v3/rockets';

  constructor() { }

  ngOnInit() {
    this.loading = true;
    fetch(this.endpoint)
      .then(blob => blob.json())
      .then(data => {
        this.rockets = [...data]
        console.log(this.rockets)
        this.loading = false;
      });
  }

}