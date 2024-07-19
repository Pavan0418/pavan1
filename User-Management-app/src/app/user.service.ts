import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5110/api/Users';
  userList : User[] = [];
  userData : User = new User();

  // constructor(private http: HttpClient) { }

  // // getUsers(): Observable<any> {
  // //   return this.http.get<any>(this.apiUrl);
  // // }
  
  // // getUser (id: string): Observable<any> {
  // //   return this.http.get<any>('${this.apiUrl}/${id}');
  // // }
  
  // // createUsers(user: any): Observable<any> {
  // //   return this.http.post<any>(this.apiUrl, user);
  // // }
  
  // // updateUsers(id : string, user: any): Observable<any> {
  // //   return this.http.put<any>('${this.apiUrl}/${id}', user);
  // // }
  
  // // deleteUsers(id:string): Observable<any> {
  // //   return this.http.delete<any>('${this.apiUrl}/${id}');
  // // }



  // getUsers(): Observable<User[]> {
  //   console.log('Fetching users from API');
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  // getUser(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/${id}`);
  // }

  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, user);
  // }

  // updateUser(userId: number, user: User): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/${user.id}`, user);
  // }

  // deleteUser(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }





  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  // getUser(id: number): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}/${id}`);
  // }

  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, user);
  // }

  // updateUser(id: number, user: User): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/${id}`, user);
  // }

  // deleteUser(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, user);
  }

  // deleteUser(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}?id=${id}`);
  // }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}


