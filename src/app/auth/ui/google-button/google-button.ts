import { Component, output } from "@angular/core";

@Component({
  selector: "app-google-button",
  imports: [],
  templateUrl: "./google-button.html",
  styles: ``,
})
export class GoogleButton {
  onClick = output<void>();
}
