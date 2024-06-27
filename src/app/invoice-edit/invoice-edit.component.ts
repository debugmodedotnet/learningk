import { Component, OnInit, inject } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './invoice-edit.component.html',
  styleUrl: './invoice-edit.component.scss',
})
export class InvoiceEditComponent implements OnInit {
  private invoiceService = inject(InvoiceService);
  invoiceNo?: string; 
  invoiceForm: FormGroup;
  constructor() {
    this.invoiceForm = new FormGroup({
      InvoiceNumber: new FormControl(''),
      InvoiceName: new FormControl(''),
      InvoiceDate: new FormControl(''),
      InvoiceAmount: new FormControl(''),
      
    });
  }
  ngOnInit(): void {

    this.invoiceService.invoicetoedit$.subscribe((invoice) => {
      this.invoiceForm.patchValue(invoice);
      this.invoiceNo = invoice.InvoiceNumber;
    });

  }

  saveInvoice(){
    console.log(this.invoiceForm.value);
    this.invoiceService.saveInvoice(this.invoiceForm.value);
    this.invoiceForm.reset();
    this.invoiceNo = '';
  }
}
