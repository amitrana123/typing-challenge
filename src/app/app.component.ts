import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  success: boolean = false;
  randomText = faker.lorem.sentence();
  enteredText = '';
  onInput(value: string) {
    console.log(value);
    this.enteredText = value;
     if (this.randomText === value) {
       this.success = true;
     } else {
       this.success = false;
     }
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) {
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
