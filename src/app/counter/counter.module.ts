import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { counterReducer } from "./state/counter.reducer";


const routes: Routes = [
    { path: '', component: CounterComponent},
];

@NgModule({
    declarations: [CounterComponent,
        CounterButtonsComponent,
        CounterOutputComponent,
        CustomInputComponent,],
    imports:[CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature('counter', counterReducer)]
})
export class CounterModule {

}