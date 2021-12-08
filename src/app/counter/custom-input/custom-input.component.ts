import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeText, customIncrement } from '../state/counter.actions';
import { getText } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {

value: number;
text: string;
text$: Observable<string>

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.text$ = this.store.select(getText);
  }

  onAdd() {
    this.store.dispatch( customIncrement({ value: +this.value }))
  }

  onChangeText() {
    this.store.dispatch(changeText())
  }
}
