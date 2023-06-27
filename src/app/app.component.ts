import { Component, Inject } from '@angular/core';
import {
  NB_WINDOW,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
} from '@nebular/theme';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'funcionalidades';

  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: 'associacao/',
      expanded: true,
      children: [
        {
          title: 'Home Page',
          link: 'associacao/page',
          icon: 'home-outline',
        },
      ],
    },
    {
      title: 'Cadastros',
      icon: 'people-outline',
      children: [
        {
          title: 'Associação',
          link: 'associacao/list',
          icon: 'shuffle-outline',
        },
      ],
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window: any
  ) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  ngOnInit() {
    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title)
      )
      .subscribe((title: any) => this.window.alert(`${title} was clicked!`));
  }
}
