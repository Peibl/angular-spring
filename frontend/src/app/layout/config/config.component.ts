import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  titulo;
  color;


  constructor(private configService: ConfigService) {
    this.configService.titleObs.subscribe(response => {
      this.titulo = response;
    });

    this.configService.colorObs.subscribe(response => {
      this.color = response;
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    this.configService.updateTitulo(this.titulo);
    this.configService.updateColor(this.color);
    this.configService.saveConfig(this.titulo, this.color).subscribe(response => {
      console.log('ok');
    }, error => {
      console.error(error);
    });
  }

}
