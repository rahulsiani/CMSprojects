import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = 'http://localhost:1337/'
  constructor(public httpClient : HttpClient) { }
  
  public login(user) : Observable<any>{
    return this.httpClient.post(this.url + 'api/auth/local',user)
  }
  public signUp(user) : Observable<any>{
    return this.httpClient.post(this.url + 'api/auth/local/register',user)
  }
  public changePass(user): Observable<any> {
    return this.httpClient.patch(this.url + 'api/auth/change-password', user);
  }
  public analytics(startDate?:string, endDate?:string): Observable<any> {
    if(startDate) {
      return this.httpClient.get(this.url + `api/line-charts?filters[date][$between]=${startDate}&filters[date][$between]=${endDate}`)
    } else{
      return this.httpClient.get(this.url + 'api/line-charts');
    }
    
    // public analytics(startDate, endDate): Observable<any> {
    // return this.httpClient.get(this.url + `api/line-charts/?start=${startDate}&end=${endDate}`)
  }
  public barChart(): Observable<any> {
    return this.httpClient.get(this.url + 'api/bar-charts')
  }
}
