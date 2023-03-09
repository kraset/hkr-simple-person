import { PersonApiService } from './services/person-api.service';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appTitle = 'This is my first Angular App';
  fruitList = ['Apple', 'Banana', 'Orange'];
  vegatableList = ['Cucumber', 'Salad', 'Tomato'];
  personList: string[] = [];

  constructor(private personApiService: PersonApiService) {}

  async ngOnInit() {
    const fakePersons = await lastValueFrom(
      this.personApiService.getPersonsMock()
    );
    if (fakePersons) {
      this.personList = fakePersons;
    }

    const persons = await lastValueFrom(this.personApiService.getPersons());
    if (persons) {
      persons.forEach((c) => console.log(`id: ${c.id}, name: ${c.name}`));
    }

    const track = await lastValueFrom(this.personApiService.getTrack(1));
    if (track) {
      console.log(track.name);
      console.log(track.length);
    }
  }

  onButtonClicked() {
    console.log('Someone clicked.');
  }
}
