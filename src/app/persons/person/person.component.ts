import { Component, Input , Injectable, OnInit} from '@angular/core';
import { LogginService } from '../../logginService.service';
import { Person } from '../../person.model';
import { PersonService } from '../../personService.service';


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
