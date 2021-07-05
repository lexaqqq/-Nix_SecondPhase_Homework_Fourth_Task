import { Component} from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';
@Component({
  selector: 'app-last-child',
  templateUrl: './last-child.component.html',
  styleUrls: ['./last-child.component.scss']
})
export class LastChildComponent {

  constructor(private subjectService: SubjectService) {}
  public sendMessage(): void{
    this.subjectService.sendMessage("Message from Last Child Component to Parent Component!");
  }
  public clearMessage(): void{
    this.subjectService.clearMessage();
  }

}
