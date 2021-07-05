import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject = new Subject<any>();
  public sendMessage(message: string): void{
    this.subject.next({text: message});
  }
  public clearMessage(): void{
    this.subject.next();
  }
  public getMessage():Observable<string>{
    return this.subject.asObservable();
  }
}
