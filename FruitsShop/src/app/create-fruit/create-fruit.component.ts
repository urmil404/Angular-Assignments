import { Component } from '@angular/core';
type fruitType = { id: number; name: string; benefits: string; type: string };
@Component({
  selector: 'app-create-fruit',
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.css'],
})
export class CreateFruitComponent {
  fruits: fruitType[] = [
    {
      id: 1,
      name: 'Apple',
      benefits: 'High in fiber',
      type: 'Dry',
    },
    {
      id: 2,
      name: 'Banana',
      benefits: 'May help regulate blood sugar levels',
      type: 'Dry',
    },
    {
      id: 3,
      name: 'Orange',
      benefits: 'High in vitamin C & May help boost immune system',
      type: 'Juicy',
    },
    {
      id: 4,
      name: 'Grapes',
      benefits: 'Rich in antioxidants & May improve heart health',
      type: 'Juicy',
    },
  ];

  fruitName!: string;

  addFruit(): void {
    let type;
    let counter: number = 5;
    const benefit: string = 'High fiber';
    const randomNum = Math.random();

    if (randomNum < 0.2) {
      type = 'Juicy';
    } else {
      type = 'Dry';
    }

    // pushing object into fruits array
    this.fruits.push({
      id: counter,
      name: this.fruitName,
      benefits: benefit,
      type: type,
    });
    counter++;
  }
}
