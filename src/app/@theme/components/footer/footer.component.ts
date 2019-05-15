import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://avalon.ens-lyon.fr/" target="_blank"> Avalon Team - </a> </b> <b><a href="https://www.inria.fr/en/" target="_blank">INRIA - </a></b><b><a href="http://www.ens-lyon.fr/" target="_blank">ENS de Lyon - </a></b><b><a href="http://www.esi.dz" target="_blank">ESI d'Alger-</a></b> 2019</span>
    <div class="socials">
    
    </div>
  `,
})
export class FooterComponent {
}
