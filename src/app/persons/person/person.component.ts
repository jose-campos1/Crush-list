import { Component, Input , Injectable, OnInit} from '@angular/core';
import { Person } from '../../person.model';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

@Injectable()

export class PersonComponent implements OnInit{

  @Input() person:Person
  @Input() i:number

  ngOnInit(): void {
    
    }

}
