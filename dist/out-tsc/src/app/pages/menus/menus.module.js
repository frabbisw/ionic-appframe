import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenusPage } from './menus.page';
var routes = [
    {
        path: '',
        component: MenusPage,
        children: [
            { path: 'tabs', loadChildren: '../tabs/tabs.module#TabsPageModule' },
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' }
        ]
    }
];
var MenusPageModule = /** @class */ (function () {
    function MenusPageModule() {
    }
    MenusPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MenusPage]
        })
    ], MenusPageModule);
    return MenusPageModule;
}());
export { MenusPageModule };
//# sourceMappingURL=menus.module.js.map