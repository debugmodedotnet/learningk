import { Component, OnInit, inject } from '@angular/core';
import { DataproviderService } from '../dataprovider.service';

@Component({
  selector: 'app-consumer',
  standalone: true,
  imports: [],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss'
})
export class ConsumerComponent implements OnInit {

  private dservice = inject(DataproviderService); 
  count? : number; 

  ngOnInit(): void {
      this.dservice.counter$.subscribe((c:number)=>{
        this.count = c; 
      })
  }

}
