import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {CreateComponent} from "../user/create/create.component";

@Component({
  selector: 'asg-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  isHome = false;

  constructor(private dialog: MatDialog, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.url.subscribe((url) => {
      if (url[0].path === '') {
        this.isHome = true;
      }
    });
  }

  read(): void {
    this.isHome = true;
  }

  create(): void {
    // @ts-ignore
    let dialogRef = this.dialog.open(CreateComponent, {
      maxHeight: '80vh',
      width: '500px',
      hasBackdrop: true,
      panelClass: 'dialog-responsive-mid',
      backdropClass: 'dialog-backdrop',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
