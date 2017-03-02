"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import {Materia} from '../interfaces/materias'
var DetalleMateria = (function () {
    function DetalleMateria() {
        this.grupos = [
            {
                grupo: "8AW",
                materia: "Desarrollo web profesional",
                horario: "13 - 14 hrs",
                modalidad: ":D"
            }, {
                grupo: "7Y",
                materia: "Conmutación y enrutamiento de redes de datos",
                horario: "9 - 10 hrs",
                modalidad: "Distancia"
            }
        ];
    }
    DetalleMateria = __decorate([
        core_1.Component({
            selector: 'materia-detalle',
            template: "\n            <article class=\"articulo\" *ngFor=\"let grupo of grupos\">\n            <p class=\"datos\"> Grupo: <strong>{{grupo.grupo}}</strong></p>\n            <p class=\"datos\">Materia: <strong>{{grupo.materia}}</strong></p>\n            <p class=\"datos\">Horario: <strong>{{grupo.horario}}</strong></p>\n            <p class=\"datos\">Modalidad: <strong>{{grupo.modalidad}}</strong></p>\n            <br> \n        </article>"
        }), 
        __metadata('design:paramtypes', [])
    ], DetalleMateria);
    return DetalleMateria;
}());
exports.DetalleMateria = DetalleMateria;
//# sourceMappingURL=detalle_materia.component.js.map