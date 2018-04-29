import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  PaperScope,
  Path,
  Point,
  Project,
  Segment,
  IFrameEvent,
  Size,
  Color
} from 'paper';
import {
  translateX,
  getYFrom1To100,
  translateXHandleBounds,
  translateXHandleBoundsThenStop,
  getXFrom1To100
} from '../paper.utilities';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  public step = 1;

  private size: Size;
  private line1: Path;
  private line2: Path;
  private line3: Path;

  private hasFinalShape1: boolean;
  private hasFinalShape2: boolean;
  private hasFinalShape3: boolean;
  private scope: PaperScope;
  private project: Project;

  constructor() {}

  ngOnInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvas.nativeElement);
    this.size = this.scope.view.viewSize;
    this.scope.view.onFrame = (ev: IFrameEvent) => this.onFrame(ev);
    this.addLines();
    setTimeout(() => {
      this.step = 2;
    }, 2000);
  }

  onFrame(ev: IFrameEvent): void {
    if (this.step === 1) {
      this.frame1();
    } else if (this.step === 2) {
      this.frame2();
    } else {
      this.frame3();
    }
  }

  private frame1() {
    translateXHandleBounds(this.line1, 7, this.size);
    translateXHandleBounds(this.line2, 14, this.size);
    translateXHandleBounds(this.line3, 10, this.size);
  }
  private frame2() {
    const stopped1 = translateXHandleBoundsThenStop(
      this.line1,
      7,
      this.size,
      getXFrom1To100(this.size, 10)
    );
    const stopped2 = translateXHandleBoundsThenStop(
      this.line2,
      14,
      this.size,
      getXFrom1To100(this.size, 40)
    );
    const stopped3 = translateXHandleBoundsThenStop(
      this.line3,
      10,
      this.size,
      getXFrom1To100(this.size, 70)
    );
    if (stopped1 && stopped2 && stopped3) {
      this.morphLines();
      this.step = 3;
    }
  }

  morphLines() {
    this.line1.add(new Point(this.line1.position.x, this.line1.position.y));

    this.line2.add(
      new Point(this.line2.lastSegment.point.x, this.line2.position.y)
    );

    this.line2.add(
      new Point(this.line2.firstSegment.point.x, this.line2.position.y)
    );

    this.line3.add(new Point(this.line3.position.x, this.line3.position.y));
  }

  private gray = 0;
  private frame3() {
    if (this.gray++ <= 255 * 2) {
      this.line1.strokeColor = new Color(this.gray / 2);
      this.line2.strokeColor = new Color(this.gray / 2);
      this.line3.strokeColor = new Color(this.gray / 2);
    }

    if (!this.hasFinalShape1) {
      this.line1.lastSegment.point.y--;
      const a = this.line1.firstSegment.point.getDistance(
        this.line1.segments[1].point
      );

      const b = this.line1.lastSegment.point.getDistance(
        this.line1.firstSegment.point
      );

      this.hasFinalShape1 = Math.round(a + 50) === Math.round(b);
    }

    if (!this.hasFinalShape2) {
      this.line2.segments[2].point.y--;
      this.line2.segments[3].point.y--;
      const a = this.line2.firstSegment.point.getDistance(
        this.line2.segments[1].point
      );

      const b = this.line2.lastSegment.point.getDistance(
        this.line2.firstSegment.point
      );
      this.hasFinalShape2 = a === b;
    }
    if (!this.hasFinalShape3) {
      this.line3.lastSegment.point.y--;
      const a = this.line3.firstSegment.point.getDistance(
        this.line3.segments[1].point
      );

      const b = this.line3.lastSegment.point.getDistance(
        this.line3.firstSegment.point
      );

      this.hasFinalShape3 = Math.round(a) === Math.round(b);
    }
  }
  private frame4() {}

  addLines() {
    // 1
    this.line1 = new Path([
      new Point(10, getYFrom1To100(this.size, 60)),
      new Point(210, getYFrom1To100(this.size, 60))
    ]);
    this.line1.strokeColor = 'black';
    this.line1.closed = true;
    this.project.activeLayer.addChild(this.line1);

    // 2
    this.line2 = new Path([
      new Point(200, getYFrom1To100(this.size, 70)),
      new Point(300, getYFrom1To100(this.size, 70))
    ]);
    this.line2.closed = true;
    this.line2.strokeColor = 'black';
    this.project.activeLayer.addChild(this.line2);

    // 3
    this.line3 = new Path([
      new Point(320, getYFrom1To100(this.size, 80)),
      new Point(470, getYFrom1To100(this.size, 80))
    ]);
    this.line3.closed = true;
    this.line3.strokeColor = 'black';
    this.project.activeLayer.addChild(this.line3);
  }
}
