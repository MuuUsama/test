import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent {
  @ViewChild('textToCopy') textToCopyElement!: ElementRef;

  copyTextToClipboard() {
    const textToCopy = this.textToCopyElement.nativeElement.innerText;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}
