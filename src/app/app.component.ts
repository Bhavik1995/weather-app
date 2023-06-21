import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  weatherData?: WeatherData;
  cityName: string = 'Mumbai';
  temp_city: any;
  temp_city_celsius: any;
  temp_max_celsius: any;
  temp_min_celsius: any;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){

    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (res) => {
          this.weatherData = res;

          const fTempMain = res.main.temp;
          this.temp_city_celsius = (fTempMain - 32) * 5 / 9;

          const fTempMax = res.main.temp_max;
          this.temp_max_celsius = (fTempMax - 32) * 5 / 9;

          const temp_min_celsius = res.main.temp_min;
          this.temp_min_celsius = (temp_min_celsius - 32) * 5 / 9;
        }
      })
  }
}
