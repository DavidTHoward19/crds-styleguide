import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiComponentsComponent } from './ui-components.component';

import { CardsComponent } from './cards/cards.component';
import { ComponentListComponent } from './component-list/component-list.component';

/* typography */
import { TypographyComponent } from './typography/typography.component';
import { TypefacesComponent } from './typography/typefaces/typefaces.component';
import { HeadingsComponent } from './typography/headings/headings.component';
import { TypesettingComponent } from './typography/typesetting/typesetting.component';
import { AddressComponent } from './typography/address/address.component';
import { BlockquoteComponent } from './typography/blockquote/blockquote.component';
import { ListsComponent } from './typography/lists/lists.component';
import { WebFontsComponent } from './typography/web-fonts/web-fonts.component';

/* colors */
import { ColorsComponent } from './colors/colors.component';

/* buttons */
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonStylesComponent } from './buttons/styles/styles.component';
import { ButtonSizesComponent } from './buttons/sizes/sizes.component';
import { ButtonGroupsComponent } from './buttons/groups/groups.component';

/* tables */
import { TablesComponent } from './tables/tables.component';
import { TablesStyledComponent } from './tables/styled/styled.component';

const uiRoutes: Routes = [
  {
    path: 'ui',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        component: ComponentListComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        children: [
          {
            path: '',
            redirectTo: 'styles',
            pathMatch: 'full'
          },
          {
            path: 'styles',
            component: ButtonStylesComponent
          },
          {
            path: 'sizes',
            component: ButtonSizesComponent
          },
          {
            path: 'groups',
            component: ButtonGroupsComponent
          }
        ]
      },
      {
        path: 'typography',
        component: TypographyComponent,
        children: [
          {
            path: '',
            redirectTo: 'typefaces',
            pathMatch: 'full'
          },
          {
            path: 'typefaces',
            component: TypefacesComponent
          },
          {
            path: 'web-fonts',
            component: WebFontsComponent
          },
          {
            path: 'headings',
            component: HeadingsComponent
          },
          {
            path: 'typesetting',
            component: TypesettingComponent
          },
          {
            path: 'address',
            component: AddressComponent
          },
          {
            path: 'blockquote',
            component: BlockquoteComponent
          },
          {
            path: 'lists',
            component: ListsComponent
          }
        ]
      },
      {
        path: 'tables',
        component: TablesComponent,
        children: [
          {
            path: '',
            redirectTo: 'styled',
            pathMatch: 'full'
          },
          {
            path: 'styled',
            component: TablesStyledComponent
          }
        ]
      },
      {
        path: 'cards',
        component: CardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(uiRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UiRoutingModule {}