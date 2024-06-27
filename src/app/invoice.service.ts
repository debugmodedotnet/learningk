import { Injectable } from '@angular/core';
import { Invoice } from './invoice';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoices : Invoice[] = [
    {InvoiceNumber: 'INV-001', InvoiceDate: '01/01/2021', InvoiceAmount: 1000, InvoiceName: 'Invoice 1'},
    {InvoiceNumber: 'INV-002', InvoiceDate: '01/02/2021', InvoiceAmount: 2000, InvoiceName: 'Invoice 2'},
    {InvoiceNumber: 'INV-003', InvoiceDate: '01/03/2021', InvoiceAmount: 3000, InvoiceName: 'Invoice 3'},
    {InvoiceNumber: 'INV-004', InvoiceDate: '01/04/2021', InvoiceAmount: 4000, InvoiceName: 'Invoice 4'},
    {InvoiceNumber: 'INV-005', InvoiceDate: '01/05/2021', InvoiceAmount: 5000, InvoiceName: 'Invoice 5'},
  ]
  private invoicetoedit :Invoice = {InvoiceNumber: '', InvoiceDate: '', InvoiceAmount: 0, InvoiceName: ''};
  public invoices$ : BehaviorSubject<Invoice[]>; 
  public invoicetoedit$: BehaviorSubject<Invoice>; 
  


  constructor() {
    this.invoices$ = new BehaviorSubject(this.invoices);
    this.invoicetoedit$ = new BehaviorSubject(this.invoicetoedit);
   }
   
   setInvoiceToEdit(invoice: Invoice){
    this.invoicetoedit$.next(invoice);
   }

   saveInvoice(invoice: Invoice){
    let findIndex = this.invoices.findIndex((inv) => inv.InvoiceNumber === invoice.InvoiceNumber);
     if(findIndex > -1){
       this.invoices[findIndex] = invoice;
     }
     this.invoices$.next(this.invoices);
   }

}
