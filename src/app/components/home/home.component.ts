import { Component, OnInit, OnDestroy } from '@angular/core';

import { ElectronService } from '../../providers/electron.service';
import { DataService } from '../../providers/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  channelInfo: any;
  channelSubscription: Subscription;

  constructor(private electron: ElectronService, private data: DataService) { }

  ngOnInit() {
    this.channel('UC_x5XG1OV2P6uZZ5FSM9Ttw');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.channelSubscription.unsubscribe();
  }

  closeWindow() {
    this.electron.window.close();
  }

  minimizeWindow() {
    this.electron.window.minimize();
  }

  channel(name: string) {
    this.channelSubscription = this.data.getStats(name).subscribe(res => {
      this.channelInfo = res;
      console.log(res);
    });
  }

}
