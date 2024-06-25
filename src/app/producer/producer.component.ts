import { Component, inject } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producer.component.html',
  styleUrl: './producer.component.scss'
})
export class ProducerComponent {
    private dservice = inject(DataproviderService);
    count? : number;

    produce(){
      
        this.dservice.setCount(this.count);
       
    }

}
