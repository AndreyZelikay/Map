import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fabric} from 'fabric';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  canvas: any;
  coordinateY = 0;

  constructor() {
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas');
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    });
    
    this.canvas.add(rect);
    this.canvas.setHeight(300);
    this.canvas.setWidth(300);
    this.canvas.add(new fabric.IText('Hello Fabric!'));
  }

  onWheel(event) {
    this.coordinateY += event.deltaY;
    this.canvas.setZoom(this.canvas.getZoom() * 2);
    console.log(this.coordinateY);
  }
}
