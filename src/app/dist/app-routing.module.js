"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var telefoni_component_1 = require("./telefoni/telefoni.component");
var modeli_component_1 = require("./modeli/modeli.component");
var postavi_oglas_component_1 = require("./postavi-oglas/postavi-oglas.component");
var telefon_detalji_component_1 = require("./telefon-detalji/telefon-detalji.component");
var admin_bord_component_1 = require("./admin-bord/admin-bord.component");
var admin_login_component_1 = require("./admin-login/admin-login.component");
var routes = [
    { path: '', redirectTo: 'telefon', pathMatch: 'full' },
    { path: 'telefon', component: telefoni_component_1.TelefoniComponent },
    { path: 'model', component: modeli_component_1.ModeliComponent },
    { path: 'postavi_oglas', component: postavi_oglas_component_1.PostaviOglasComponent },
    { path: 'telefon-detalji/:id', component: telefon_detalji_component_1.TelefonDetaljiComponent },
    { path: 'admin', component: admin_bord_component_1.AdminBordComponent },
    { path: 'admin-login', component: admin_login_component_1.AdminLoginComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
