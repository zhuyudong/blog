import { Observable } from 'rxjs';

const $input = <HTMLInputElement>document.querySelector('.todo-val');
const input$ = Observable.fromEvent<KeyboardEvent>($input, 'keydown').do(e => console.log(e));
const app$ = input$;
app$.subscribe();