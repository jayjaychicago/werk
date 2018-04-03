webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">Werk</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li><a routerLink=\"/break-room\" routerLinkActive=\"active\">Break Room</a></li>\r\n      <li><a routerLink=\"/user\" routerLinkActive=\"active\">Users</a></li>\r\n      <li><a routerLink=\"/room-test\" routerLinkActive=\"active\">Room Test</a></li>\r\n    </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n        </ul>\r\n</div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_room_service__ = __webpack_require__("../../../../../src/app/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_faction_service__ = __webpack_require__("../../../../../src/app/services/faction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(socketService, roomService, factionService, userService) {
        this.socketService = socketService;
        this.roomService = roomService;
        this.factionService = factionService;
        this.userService = userService;
        this.title = 'Werk';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_2__services_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_3__services_faction_service__["a" /* FactionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_break_room_break_room_component__ = __webpack_require__("../../../../../src/app/components/break-room/break-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_chat_item_user_chat_item_component__ = __webpack_require__("../../../../../src/app/components/user-chat-item/user-chat-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_room_service__ = __webpack_require__("../../../../../src/app/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_faction_service__ = __webpack_require__("../../../../../src/app/services/faction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_room_tree_room_tree_component__ = __webpack_require__("../../../../../src/app/components/room-tree/room-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_room_test_room_test_component__ = __webpack_require__("../../../../../src/app/components/room-test/room-test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: "break-room", component: __WEBPACK_IMPORTED_MODULE_7__components_break_room_break_room_component__["a" /* BreakRoomComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: "user", component: __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__["a" /* UserComponent */] },
    { path: "room-test", component: __WEBPACK_IMPORTED_MODULE_15__components_room_test_room_test_component__["a" /* RoomTestComponent */] },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    } /*,
    { path: "**", component: PageNotFoundComponent }*/
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_break_room_break_room_component__["a" /* BreakRoomComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_chat_item_user_chat_item_component__["a" /* UserChatItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_room_tree_room_tree_component__["a" /* RoomTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_room_test_room_test_component__["a" /* RoomTestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_11__services_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_12__services_faction_service__["a" /* FactionService */], __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/break-room/break-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/break-room/break-room.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to the Break Room</h1>\r\n<room-tree></room-tree>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/break-room/break-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreakRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreakRoomComponent = (function () {
    function BreakRoomComponent() {
    }
    BreakRoomComponent.prototype.ngOnInit = function () {
    };
    BreakRoomComponent.prototype.ngOnDestroy = function () {
    };
    BreakRoomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "break-room",
            template: __webpack_require__("../../../../../src/app/components/break-room/break-room.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/break-room/break-room.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreakRoomComponent);
    return BreakRoomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-title{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<div class=\"container pt-4 pb-5\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" *ngFor=\"let user of companyUserItems\">\r\n      <div class=\"card\">\r\n        <img class=\"img-fluid\" src=\"{{user.UserAvatar}}\" alt=\"{{user.UserName}}\" style=\"width:100%\">\r\n\r\n        <div class=\"card-body\">-->\r\n          <!--Company Name-->\r\n          <!--<p><button class=\"button\">{{user.CompanyName}}</button></p>-->\r\n\r\n          <!--Text-->\r\n          <!--<p class=\" card-text text-center\"><a href=\".\">{{user.CompanyMissionStatement}}</a></p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n\r\n<div class=\"container pt-4 pb-5\">\r\n  <div class=\"row\">\r\n    <div class=\"column\" *ngFor=\"let user of companyUserItems\" width=\"10%\">\r\n\r\n      <!--Card-->\r\n      <div class=\"card\" style=\"width: 10%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\">\r\n\r\n        <!--Card image-->\r\n        <div class=\"view overlay hm-white-slight waves-light\" mdbRippleRadius>\r\n          <img src=\"{{user.Avatar}}\" alt=\"{{user.UserName}}\" style=\"width: 100%\" class=\"card-img-top\">\r\n          <p class=\"text-center\"><button class=\"button\" style=\"width: 100%\">{{user.CompanyName}}</button></p>\r\n        </div>\r\n        <!--/.Card image-->\r\n        <!--Card content-->\r\n        <div class=\"card-body\">\r\n          <!--Title-->\r\n          <p class=\"text-center\" style=\"width: 100%\"><a href=\".\">{{user.CompanyMissionStatement}}</a></p>\r\n\r\n        </div>\r\n        <!--/.Card content-->\r\n\r\n      </div>\r\n      <!--/.Card-->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_userService) {
        this._userService = _userService;
        this._companyUserItems = new Array();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this._companyUserItems = new Array();
        this._companyUsersSubscription = this._userService.allCompanyUsersAvailable().subscribe(function (data) {
            _this._companyUserItems = data[0];
        });
        console.log("Calling getCompanyUsers on client");
        this._userService.getCompanyUsers();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this._companyUsersSubscription && !this._companyUsersSubscription.closed)
            this._companyUsersSubscription.unsubscribe;
    };
    Object.defineProperty(HomeComponent.prototype, "companyUserItems", {
        get: function () {
            return this._companyUserItems;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/room-test/room-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/room-test/room-test.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\r\n  <tr>\r\n    <td><input id=\"roomInput\" type=\"text\" (change)=\"changeRoomText($event.target.value)\" /></td>\r\n    <td><button id=\"roomInputButton\" (click)=\"joinRoom()\">Join Room</button></td>\r\n    <td><input id=\"messageInput\" type=\"text\" (change)=\"changeMessageText($event.target.value)\" /></td>\r\n    <td><button id=\"messageInputButton\" (click)=\"sendMessage()\">Send Message</button></td>\r\n  </tr>\r\n  <tr *ngFor=\"let message of messages\">\r\n    <td style=\"color: black;\">{{message}}</td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/room-test/room-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomTestComponent = (function () {
    function RoomTestComponent(socketService) {
        this.socketService = socketService;
        this.setupSocket();
    }
    RoomTestComponent.prototype.changeRoomText = function (room) {
        this._currentRoom = room;
    };
    RoomTestComponent.prototype.changeMessageText = function (message) {
        this._currentMessage = message;
    };
    RoomTestComponent.prototype.joinRoom = function () {
        console.log("Calling joinRoom for room " + this._currentRoom);
        this.socketService.joinRoom(this._currentRoom);
    };
    RoomTestComponent.prototype.sendMessage = function () {
        console.log("Calling sendMessage for room " + this._currentRoom + " with a message of " + this._currentMessage);
        this.socketService.sendMessage(this._currentRoom, this._currentMessage);
    };
    RoomTestComponent.prototype.setupSocket = function () {
        var _this = this;
        this._roomMessageSubscription = this.socketService.roomMessageAvailable().subscribe(function (data) {
            _this._messages.push(data);
        });
    };
    RoomTestComponent.prototype.ngOnInit = function () {
        this._messages = new Array();
    };
    RoomTestComponent.prototype.ngOnDestroy = function () {
        if (this._roomMessageSubscription && !this._roomMessageSubscription.closed)
            this._roomMessageSubscription.unsubscribe;
    };
    Object.defineProperty(RoomTestComponent.prototype, "currentRoom", {
        get: function () {
            return this._currentRoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTestComponent.prototype, "currentMessage", {
        get: function () {
            return this._currentMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTestComponent.prototype, "messages", {
        get: function () {
            return this._messages;
        },
        enumerable: true,
        configurable: true
    });
    RoomTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "room-test",
            template: __webpack_require__("../../../../../src/app/components/room-test/room-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/room-test/room-test.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]])
    ], RoomTestComponent);
    return RoomTestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/room-tree/room-tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/room-tree/room-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n  <div class=\"container-fluid\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"dropdown\">\r\n        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>-->\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"roomDropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{selectedRoom}}\r\n          <span class=\"caret\"></span>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li *ngFor=\"let room of rooms\"><a (click)=\"roomSelected(room)\">{{room.RoomName}}</a></li>\r\n        </ul>\r\n      </li>\r\n\r\n      <li class=\"dropdown\">\r\n        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>-->\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"factionsDropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{selectedFaction}}\r\n          <span class=\"caret\"></span>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li *ngFor=\"let faction of factions\"><a (click)=\"factionSelected(faction)\">{{faction.FactionName}}</a></li>\r\n        </ul>\r\n      </li>\r\n\r\n      <li class=\"dropdown\">\r\n        <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>-->\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"usersDropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{selectedUser}}\r\n          <span class=\"caret\"></span>\r\n        </button>\r\n        <ul class=\"dropdown-menu\">\r\n          <li *ngFor=\"let user of users\"><a (click)=\"userSelected(user)\">{{user.UserName}}</a></li>\r\n        </ul>\r\n      </li>\r\n      </ul>\r\n</div>\r\n</nav>\r\n\r\n<table>\r\n  <tr *ngFor=\"let user of users\">\r\n    <td>\r\n\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n  <!--<br />\r\n  <tree-root [nodes]=\"nodes\"></tree-root>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/room-tree/room-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_service__ = __webpack_require__("../../../../../src/app/services/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_faction_service__ = __webpack_require__("../../../../../src/app/services/faction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomTreeComponent = (function () {
    /*nodes = [
      {
        id: 1,
        name: 'root1',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: 'root2',
        children: [
          { id: 5, name: 'child2.1' },
          {
            id: 6,
            name: 'child2.2',
            children: [
              { id: 7, name: 'subsub' }
            ]
          }
        ]
      }
    ];*/
    function RoomTreeComponent(roomService, factionService, userService) {
        this.roomService = roomService;
        this.factionService = factionService;
        this.userService = userService;
    }
    RoomTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this._selectedRoom = "Room";
        this._selectedFaction = "Faction";
        this._selectedUser = "User";
        this._rooms = new Array();
        this.allRoomsSubscription = this.roomService.allRoomsAvailable().subscribe(function (data) {
            console.log("all rooms received");
            _this._rooms = data[0];
        });
        this.allFactionsSubscription = this.factionService.allFactionsAvailable().subscribe(function (data) {
            console.log("all factions received");
            _this._factions = data[0];
        });
        this.factionUsersSubscription = this.userService.factionUsersAvailable().subscribe(function (data) {
            console.log("all users received");
            _this._users = data[0];
        });
        console.log("Calling getRooms on client");
        this.roomService.getRooms();
    };
    RoomTreeComponent.prototype.ngOnDestroy = function () {
        if (this.allRoomsSubscription && !this.allRoomsSubscription.closed)
            this.allRoomsSubscription.unsubscribe;
        if (this.allFactionsSubscription && !this.allFactionsSubscription.closed)
            this.allFactionsSubscription.unsubscribe;
    };
    RoomTreeComponent.prototype.roomSelected = function (room) {
        this._selectedRoom = room.RoomName;
        this._selectedFaction = "Faction";
        this._selectedUser = "User";
        this._factions = new Array();
        this._users = new Array();
        this.getFactions(room.Id);
    };
    RoomTreeComponent.prototype.factionSelected = function (faction) {
        this._selectedFaction = faction.FactionName;
        this._selectedUser = "User";
        this._users = new Array();
        this.getUsers(faction.Id);
    };
    RoomTreeComponent.prototype.userSelected = function (user) {
        this._selectedUser = user.UserName;
    };
    RoomTreeComponent.prototype.getRooms = function () {
        this.roomService.getRooms();
    };
    RoomTreeComponent.prototype.getFactions = function (roomId) {
        this._selectedFaction = "Faction";
        this._selectedUser = "User";
        this.factionService.getFactions(roomId);
    };
    RoomTreeComponent.prototype.getUsers = function (factionId) {
        this._selectedUser = "User";
        this.userService.getFactionUsers(factionId);
    };
    Object.defineProperty(RoomTreeComponent.prototype, "rooms", {
        get: function () {
            return this._rooms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTreeComponent.prototype, "factions", {
        get: function () {
            return this._factions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTreeComponent.prototype, "users", {
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTreeComponent.prototype, "selectedRoom", {
        get: function () {
            return this._selectedRoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTreeComponent.prototype, "selectedFaction", {
        get: function () {
            return this._selectedFaction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomTreeComponent.prototype, "selectedUser", {
        get: function () {
            return this._selectedUser;
        },
        enumerable: true,
        configurable: true
    });
    RoomTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "room-tree",
            template: __webpack_require__("../../../../../src/app/components/room-tree/room-tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/room-tree/room-tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_2__services_faction_service__["a" /* FactionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], RoomTreeComponent);
    return RoomTreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-chat-item/user-chat-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatTable{\r\n  width: 100%;\r\n}\r\n.detailsRow{\r\n  height: 15%;\r\n  border-bottom-width: 1px;\r\n  border-color: black;\r\n}\r\n.detailsCell {\r\n  text-align: center;\r\n}\r\n.chatRow{\r\n  height: 85%;\r\n  border-bottom-width: 1px;\r\n  border-color: black;\r\n}\r\n.chatCell {\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-chat-item/user-chat-item.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"chatTable\">\r\n  <tr class=\"detailsRow\">\r\n    <td class=\"detailsCell\"></td>\r\n  </tr>\r\n  <tr class=\"chatRow\">\r\n    <td class=\"chatCell\"></td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-chat-item/user-chat-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserChatItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserChatItemComponent = (function () {
    function UserChatItemComponent() {
    }
    UserChatItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "user-chat-item",
            template: __webpack_require__("../../../../../src/app/components/user-chat-item/user-chat-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-chat-item/user-chat-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserChatItemComponent);
    return UserChatItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to users</h1>\r\n<br /><br />\r\n\r\n<table>\r\n  <tr *ngFor=\"let user of users\">\r\n    <td style=\"color: black\">{{user.UserName}}</td>\r\n    <td style=\"color: black;\">{{user.Level}}</td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(_userService) {
        this._userService = _userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.users = new Array();
        this._allUsersSubscription = this._userService.allUsersAvailable().subscribe(function (data) {
            console.log("All Users");
            _this.users = data[0];
            alert(JSON.stringify(_this.users));
        });
        this._factionUsersAvailable = this._userService.factionUsersAvailable().subscribe(function (data) {
        });
        console.log("Calling getUsers on client");
        this._userService.getUsers();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        if (this._allUsersSubscription && !this._allUsersSubscription.closed)
            this._allUsersSubscription.unsubscribe;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-component',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/faction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FactionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FactionService = (function () {
    function FactionService(socketService) {
        this.socketService = socketService;
        this._io = socketService.io;
    }
    FactionService.prototype.allFactionsAvailable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on("allFactionsAvailable", function (data) {
                observer.next(data);
            });
        });
    };
    FactionService.prototype.getFactions = function (roomId) {
        console.log("Emiting getFactions in _io.service on Client");
        this._io.emit("getFactions", roomId);
    };
    FactionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], FactionService);
    return FactionService;
}());



/***/ }),

/***/ "../../../../../src/app/services/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomService = (function () {
    function RoomService(socketService) {
        this.socketService = socketService;
        this._io = socketService.io;
    }
    RoomService.prototype.allRoomsAvailable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on("allRoomsAvailable", function (data) {
                observer.next(data);
            });
        });
    };
    RoomService.prototype.getRooms = function () {
        console.log("Emiting getRooms in RoomService.service on Client");
        this._io.emit("getRooms");
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SERVER_URL = "http://localhost:3000";
//const SERVER_URL: string = "http://www.squwak.com:3000";
var SocketService = (function () {
    function SocketService() {
        this.start();
    }
    SocketService.prototype.start = function () {
        console.log("connecting to _io in client");
        this._io = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(SERVER_URL);
    };
    // Room test items
    SocketService.prototype.joinRoom = function (room) {
        this._io.emit("joinRoom", room);
    };
    SocketService.prototype.roomMessageAvailable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on("roomMessageAvailable", function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.sendMessage = function (room, message) {
        this._io.emit("sendRoomMessage", room, message);
    };
    // End room test items
    SocketService.prototype.connect = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on('connect', function () { return observer.next(); });
        });
    };
    SocketService.prototype.disconnect = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on('disconnect', function () { return observer.next(); });
        });
    };
    Object.defineProperty(SocketService.prototype, "io", {
        get: function () {
            return this._io;
        },
        enumerable: true,
        configurable: true
    });
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_socket_service__ = __webpack_require__("../../../../../src/app/services/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(socketService) {
        this.socketService = socketService;
        this._io = socketService.io;
    }
    UserService.prototype.allUsersAvailable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on("allUsersAvailable", function (data) {
                observer.next(data);
            });
        });
    };
    UserService.prototype.allCompanyUsersAvailable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on("allCompanyUsersAvailable", function (data) {
                observer.next(data);
            });
        });
    };
    UserService.prototype.factionUsersAvailable = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this._io.on("factionUsersAvailable", function (data) {
                observer.next(data);
            });
        });
    };
    UserService.prototype.getUsers = function () {
        console.log("Emiting getUsers in socket.service on Client");
        this._io.emit("getUsers");
    };
    UserService.prototype.getCompanyUsers = function () {
        console.log("Emiting getCompanyUsers in socket.service on Client");
        this._io.emit("getCompanyUsers");
    };
    UserService.prototype.getFactionUsers = function (factionId) {
        this._io.emit("getFactionUsers", factionId);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_socket_service__["a" /* SocketService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map