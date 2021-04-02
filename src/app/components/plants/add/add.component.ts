import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  qrResultString: string;
  
  ngOnInit(): void {
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  
  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    
  }

}
