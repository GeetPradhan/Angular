import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
    public Name1 : string = "";
    public Name2 : string = "";

    public UpperCase()
    {
      this.Name1 = "MARVELLOUS INFOSYSTEMS";
    }

    public LowerCase()
    {
      this.Name2 = "marvellous infosystems";
    }
}
