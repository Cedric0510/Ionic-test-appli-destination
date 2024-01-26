import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DestinationData {
  name: string;
  description: string;
  photo: string;
  geolocalisation: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  destinationData: DestinationData[] = [];

  constructor(public http: HttpClient) {
    this.readAPI("http://localhost:3000/destination/")
      .subscribe((data: DestinationData[]) => {
        console.log(data);
        this.destinationData = data;
      });
  }

  ngOnInit() {
  }
  readAPI(URL: string) {
    return this.http.get<DestinationData[]>(URL);
  }
}
