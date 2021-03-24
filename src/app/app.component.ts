import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ColorSampleComponent} from './color-sample/color-sample.component';
import {ColorPickerDirective} from 'ngx-color-picker';
import { MatIcon } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {

  primary = '#1976d2';

  //ElementRef simply wraps the native DOM element,
  //and we can retrieve it by accessing the nativeElement property.
  // default behavior of @ViewChild when using injection by template reference name:

  // when injecting a reference applied to a component,
  //we get back the component instance

  // when injecting a reference to a plain HTML element,
  // we get back the corresponding wrapped DOM element

  //This read property will specify exactly what we are trying to inject,
  // in case that there are multiple possible injectables available.
   @ViewChild('primaryColorSample')
  primarySampleComponent: ColorSampleComponent;
  @ViewChild(MatIcon)
  matIcon: MatIcon;
  @ViewChild('primaryColorSample', {read: ElementRef})
  primarySampleDiv: ElementRef;

  @ViewChild('primaryInput')
  primaryInput: ElementRef;

  @ViewChild('primaryInput', {read:ColorPickerDirective})
  colorPickerDirective: ColorPickerDirective;

  ngAfterViewInit() {

    console.log('Values on ngAfterViewInit():');

    console.log("primaryColorSample:", this.primarySampleComponent);

    console.log("maticon ",this.matIcon);
    //The @ViewChild decorator cannot see across component boundaries!
    //To summarize: the @ViewChild decorator is a template querying mechanism
    //that is local to the component.
    console.log("primarySampleDiv:", this.primarySampleDiv);

    console.log("primaryInput:", this.primaryInput);

  }

  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }



}
