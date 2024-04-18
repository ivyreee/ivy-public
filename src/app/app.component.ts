import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  pet = ''

  data = [{
    id: 0,
    name: 'name',
    status: 0
  }]

  onSubmit() {
    const newPet = {
      id: this.data.length,
      name: this.pet,
      status: 0
    }

    this.data.push(newPet)

    console.log(newPet)
  }

  onNext(a:any) {

    console.log(a)

    const pet = this.data.find(data => data.id == a) as any

    const newData = {
      id: pet.id,
      name: pet.name,
      status: pet.status + 1
    }

    Object.assign(pet, newData)

  }

}
