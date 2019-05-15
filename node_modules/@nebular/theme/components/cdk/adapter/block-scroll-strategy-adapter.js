var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from '@angular/core';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { NB_DOCUMENT } from '../../../theme.options';
import { NbViewportRulerAdapter } from './viewport-ruler-adapter';
var NbBlockScrollStrategyAdapter = /** @class */ (function (_super) {
    __extends(NbBlockScrollStrategyAdapter, _super);
    function NbBlockScrollStrategyAdapter(ruler, document) {
        return _super.call(this, ruler, document) || this;
    }
    NbBlockScrollStrategyAdapter = __decorate([
        Injectable(),
        __param(1, Inject(NB_DOCUMENT)),
        __metadata("design:paramtypes", [NbViewportRulerAdapter, Object])
    ], NbBlockScrollStrategyAdapter);
    return NbBlockScrollStrategyAdapter;
}(BlockScrollStrategy));
export { NbBlockScrollStrategyAdapter };
//# sourceMappingURL=block-scroll-strategy-adapter.js.map