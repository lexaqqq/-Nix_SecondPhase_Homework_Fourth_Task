import { Component, OnDestroy } from '@angular/core';
import { SubjectService } from '../service/subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnDestroy {
  public message: any;
  public subscription!: Subscription;
  constructor(private subjectService: SubjectService) {
    this.subscription = this.subjectService.getMessage().subscribe({
      next:(message)=>{
        this.message = message;
      }
    }) 
   }
   ngOnDestroy(): void{
      this.subscription.unsubscribe();
   }


}
