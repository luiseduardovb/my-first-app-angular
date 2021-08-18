import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles : ['h3 { color: red; }'] //alternative inline style
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() { }

  ngOnInit(): void {
  }

}
