import { Component } from '@angular/core';
import { AddressApiService } from './address-api.service';
import { addressDto } from './Models/addressDto';
import { addressToParseDto } from './Models/addressToParseDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  address: string = '';
  addressResult: addressDto | undefined;
  error: boolean = false;
  selectedCountry: string = 'default';
  isPopupVisible: boolean = false;

  constructor(private addressApiService: AddressApiService) {}

  onCountrySelected(selectedCountry: string) {
    this.selectedCountry = selectedCountry;
  }
  onSubmit() {
    if (this.selectedCountry === 'default') {
     
      return;
    }

    const addressToParse: addressToParseDto = {
      country: this.selectedCountry,
      address: this.address
    };

    

    this.addressApiService.parseAddress(addressToParse, this.selectedCountry ).subscribe(
      (result: addressDto) => {
        this.error = false;
        this.addressResult = result;
      },
      (error: any) => {
        this.addressResult = undefined;
        console.error(error);
        this.error = true;
      }
    );
  }

  openPopup(): void {
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }
}
