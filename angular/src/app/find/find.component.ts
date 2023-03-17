import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../auth/token-storage.service";
import {FindSericeService} from "./find-serice.service";
import {FindRequest} from "./findRequest";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  text!: string;

  users: String[]=[];

  constructor(private tokenStorage: TokenStorageService,
              private f:AppComponent,

              private findServices: FindSericeService) { }

  getUser(user: string){
    console.log(user)
    let find = new FindRequest(this.f.text);
    this.findServices.findInfo(find, this.tokenStorage.getBearerToken()).subscribe( data => {
      console.log(data);
      console.log(data.users);
      this.users = data.users;
      console.log(this.users);
      alert("success")
    },error=>alert("unsuccess"))
  }
  findUsers() {
    console.log("find users"+this.f.text,this.tokenStorage.getToken());
    let find = new FindRequest(this.f.text);
    this.findServices.findInfo(find, this.tokenStorage.getBearerToken()).subscribe( data => {
      console.log(data);
      console.log(data.users);
      this.users = data.users;
      console.log(this.users);
      alert("success")
    },error=>alert("unsuccess"))
  }

  ngOnInit(): void {
    this.findUsers()
  }
}
