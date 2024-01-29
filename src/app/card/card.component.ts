import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    InputTextModule,
    QRCodeModule,
    ButtonModule,
    FormsModule,
    ToastModule

    // BrowserModule,
    // FormsModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [MessageService]

})
export class CardComponent implements OnInit {

  ticketvalue:string ="www.tazkty.com/473847";

  constructor(private message :MessageService)
  {

  }
  ngOnInit(): void {


  }

  show()
  {
    const inputField = document.getElementById('inputField') as HTMLInputElement;

    if (inputField) {
      inputField.select();
      document.execCommand('copy');
      this.message.add({severity:'success', summary:'نجحت', detail:'تم نسخ كود التذكرة'})

    }


  }

}
