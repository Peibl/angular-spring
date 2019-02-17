import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private title = 'Web Gonzales';
  private color = 'BLUE';
  public $titleObs = new BehaviorSubject<string>(this.title);
  public $colorObs = new BehaviorSubject<string>(this.color);


  constructor() {
  }
}
