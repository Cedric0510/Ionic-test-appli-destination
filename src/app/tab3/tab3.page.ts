import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserData {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userData: UserData[] = [];

  constructor(public http: HttpClient) {
    this.readAPI("http://localhost:3000/user/")
      .subscribe((data: UserData[]) => {
        console.log(data);
        this.userData = data;
      });
  }

  readAPI(URL: string) {
    return this.http.get<UserData[]>(URL);
  }
}