import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addressDto } from './Models/addressDto';
import { addressToParseDto } from './Models/addressToParseDto';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {
  private apiUrl = 'http://localhost:5013/api/AddressApi'; 

  constructor(private http: HttpClient) {}

  parseAddress(addressToParse: addressToParseDto, country: string): Observable<addressDto> {
    const endpoint = country === 'USA' ? 'parse' : 'parseCanada';
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<addressDto>(url, addressToParse);
  }
}
