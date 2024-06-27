import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [NgFor],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit{
   private invoiceService = inject(InvoiceService);
   invoices : Invoice[] = [];

   ngOnInit(){
      this.invoiceService.invoices$.subscribe((invoices) => {
         console.log(invoices);
         this.invoices = invoices;
      });
   }

   editInvoice(invoice: Invoice){
      console.log(invoice);
      this.invoiceService.setInvoiceToEdit(invoice);
   }
}
