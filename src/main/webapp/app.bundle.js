/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _controllersModule = __webpack_require__(2);
	
	var _controllersModule2 = _interopRequireDefault(_controllersModule);
	
	var _config = __webpack_require__(13);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*import angular from 'angular';*/
	/*import uiRouter from 'angular-ui-router';*/
	
	
	angular.module('app', [uiRouter, _controllersModule2.default.name]).config(_config2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _about = __webpack_require__(3);
	
	var _about2 = _interopRequireDefault(_about);
	
	var _contact = __webpack_require__(5);
	
	var _contact2 = _interopRequireDefault(_contact);
	
	var _home = __webpack_require__(7);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _services = __webpack_require__(9);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _works = __webpack_require__(11);
	
	var _works2 = _interopRequireDefault(_works);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('controllers', [_about2.default.name, _contact2.default.name, _home2.default.name, _services2.default.name, _works2.default.name]); /*import angular from 'angular';*/

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _aboutController = __webpack_require__(4);
	
	var _aboutController2 = _interopRequireDefault(_aboutController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var aboutModule = angular.module("About", [_aboutController2.default.name]); /*import angular from 'angular';*/
	
	aboutModule.controller("AboutController", _aboutController2.default);
	exports.default = aboutModule;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AboutController = function AboutController() {
	    _classCallCheck(this, AboutController);
	
	    this.img = 'https://static01.nyt.com/images/2015/07/13/nyregion/OCEANS-SHIP-01/OCEANS-SHIP-01-facebookJumbo-v2.jpg';
	};
	
	exports.default = AboutController;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _contactController = __webpack_require__(6);
	
	var _contactController2 = _interopRequireDefault(_contactController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var contactModule = angular.module("Contact", [_contactController2.default.name]); /*import angular from 'angular';*/
	
	contactModule.controller("ContactController", _contactController2.default);
	exports.default = contactModule;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ContactController = function () {
	    function ContactController() {
	        _classCallCheck(this, ContactController);
	
	        this.img = 'http://www.hdwallpapera.com/wp-content/uploads/2015/06/nature-image-mountain-home-ar.jpg';
	        this.inquiryUIObject = new inquire.Inquiry().toUIObject();
	    }
	
	    _createClass(ContactController, [{
	        key: 'click',
	        value: function click(isValid) {
	            console.log($scope.inquiryUIObject);
	        }
	    }]);
	
	    return ContactController;
	}();
	
	exports.default = ContactController;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _homeController = __webpack_require__(8);
	
	var _homeController2 = _interopRequireDefault(_homeController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var homeModule = angular.module("Home", [_homeController2.default.name]); /*import angular from 'angular';*/
	
	homeModule.controller("HomeController", _homeController2.default);
	exports.default = homeModule;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HomeController = function HomeController() {
	    _classCallCheck(this, HomeController);
	
	    $scope.backgroundImg = 'http://everystockphoto.s3.amazonaws.com/california_cityscape_82108_o.jpg';
	    $scope.img1 = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Hoffl%C3%B6th(T%C3%B6Vo-Cl%C3%B6rath)-2(400x400).jpg';
	    $scope.img2 = 'https://cdn.tutsplus.com/vector/uploads/2014/01/howtodrawbears-400x400.jpg';
	    $scope.img3 = 'http://cdn-img.health.com/sites/default/files/styles/400x400/public/migration/img/web/2013/02/slides/breakfast-foods-400x400.jpg?itok=1h7iFRNF';
	};
	
	exports.default = HomeController;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _servicesController = __webpack_require__(10);
	
	var _servicesController2 = _interopRequireDefault(_servicesController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var servicesModule = angular.module("Services", [_servicesController2.default.name]); /*import angular from 'angular';*/
	
	servicesModule.controller("ContactController", _servicesController2.default);
	exports.default = servicesModule;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ServicesController = function ServicesController() {
	    _classCallCheck(this, ServicesController);
	
	    this.img = 'http://wanderingadams.com/wp-content/uploads/2014/10/IMG_7020.jpg';
	};
	
	exports.default = ServicesController;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _worksController = __webpack_require__(12);
	
	var _worksController2 = _interopRequireDefault(_worksController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var worksModule = angular.module("Works", [_worksController2.default.name]); /*import angular from 'angular';*/
	
	worksModule.controller("WorksController", _worksController2.default);
	exports.default = worksModule;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WorksController = function WorksController() {
	    _classCallCheck(this, WorksController);
	
	    this.img = 'https://c6.staticflickr.com/4/3594/3464353533_d5cf23f0fd_b.jpg';
	};
	
	exports.default = WorksController;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Config = function Config($stateProvider, $urlRouterProvider) {
	    _classCallCheck(this, Config);
	
	    $urlRouterProvider.otherwise("/home");
	
	    $stateProvider.state('home', {
	        url: '/home',
	        templateUrl: './components/home/homeView.html',
	        controller: 'HomeController as homeController'
	    }).state('services', {
	        url: '/services',
	        templateUrl: './components/services/servicesView.html',
	        controller: 'ServicesController as servicesController'
	    }).state('works', {
	        url: '/works',
	        templateUrl: './components/works/worksView.html',
	        controller: 'WorksController as worksController'
	    }).state('about', {
	        url: '/about',
	        templateUrl: './components/about/aboutView.html',
	        controller: 'AboutController as aboutController'
	    }).state('contact', {
	        url: '/contact',
	        templateUrl: './components/contact/contactView.html',
	        controller: 'ContactController as contactController'
	    });
	};
	
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	exports.default = Config;

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map