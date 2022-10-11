import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  getPartners() : Promise<any> {
    // let url: string = 'https://andys-ap.herokuapp.com/api/partners';
        let url: string = 'http://localhost:8081/api/partners';
    return new Promise<any>((resolve, reject)=>{
      this.http.get(url).subscribe((data)=>{resolve(<any>data)}, (err) => reject(err));       
      })
  }

  getLocations() : Promise<any> {
    // let url: string = 'https://andys-ap.herokuapp.com/api/contacts';
        let url: string = 'http://localhost:8081/api/contacts';
    return new Promise<any>((resolve, reject)=>{
      this.http.get(url).subscribe((data)=>{resolve(<any>data)}, (err) => reject(err));       
      })
  }

  getNavItems() : Promise<any> {
    // let url: string = 'https://andys-ap.herokuapp.com/api/nav';
        let url: string = 'http://localhost:8081/api/nav';
    return new Promise<any>((resolve, reject)=>{
      this.http.get(url).subscribe((data)=>{resolve(<any>data)}, (err) => reject(err));       
      })
  }

  getFooterItems() : Promise<any> {
    // let url: string = 'https://andys-ap.herokuapp.com/api/footer';
        let url: string = 'http://localhost:8081/api/footer';
    return new Promise<any>((resolve, reject)=>{
      this.http.get(url).subscribe((data)=>{resolve(<any>data)}, (err) => reject(err));       
      })
  }

  getMenu(title?) : Promise<any> {
    // let url: string = 'https://andys-ap.herokuapp.com/menu';
        let url: string = 'http://localhost:8081/menu';
    if (title) url = url+'/'+title; 
    return new Promise<any>((resolve, reject)=>{
      this.http.get(url).subscribe((data)=>{resolve(<any>data)}, (err) => reject(err));       
      })
  }

  
}
