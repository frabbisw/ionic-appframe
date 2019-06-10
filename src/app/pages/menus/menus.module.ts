import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenusPage } from './menus.page';

const routes: Routes = [
  {
    path: '',
    component: MenusPage,
    children: [
       { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
       { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
       { path: 'tabs', loadChildren: '../tabs/tabs.module#TabsPageModule' },
       { path: 'temp', loadChildren: '../temp/temp.module#TempPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenusPage]
})
export class MenusPageModule { }
