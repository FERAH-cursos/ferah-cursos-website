module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/SocialLoginButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/SocialLoginButton.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SocialLoginButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_SocialLoginButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/SocialLoginButton.module.css */ \"./src/styles/components/SocialLoginButton.module.css\");\n/* harmony import */ var _styles_components_SocialLoginButton_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_SocialLoginButton_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/hellyson/Projects/ferah-cursos-website/src/components/SocialLoginButton.tsx\";\n\nfunction SocialLoginButton({\n  image\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: _styles_components_SocialLoginButton_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.socialLoginButton,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: image,\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxMb2dpbkJ1dHRvbi50c3g/ZTFiZSJdLCJuYW1lcyI6WyJTb2NpYWxMb2dpbkJ1dHRvbiIsImltYWdlIiwic3R5bGUiLCJzb2NpYWxMb2dpbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQVFlLFNBQVNBLGlCQUFULENBQTJCO0FBQUNDO0FBQUQsQ0FBM0IsRUFBeUM7QUFDcEQsc0JBQ0k7QUFBUSxhQUFTLEVBQUVDLHNGQUFLLENBQUNDLGlCQUF6QjtBQUFBLDJCQUNJO0FBQUssU0FBRyxFQUFFRixLQUFWO0FBQWlCLFNBQUcsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0giLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Tb2NpYWxMb2dpbkJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24ubW9kdWxlLmNzcydcblxuaW50ZXJmYWNlIFByb3Bze1xuICAgIGltYWdlOiBzdHJpbmcsXG4gICAgXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsTG9naW5CdXR0b24oe2ltYWdlfTpQcm9wcyl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc29jaWFsTG9naW5CdXR0b259PlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJcIi8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SocialLoginButton.tsx\n");

/***/ }),

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SocialLoginButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SocialLoginButton */ \"./src/components/SocialLoginButton.tsx\");\n/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Login.module.css */ \"./src/styles/pages/Login.module.css\");\n/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/hellyson/Projects/ferah-cursos-website/src/pages/login.tsx\";\n\n\n\n\nfunction Login() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Login page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.loginContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"Welcome to AOT \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n            action: \"\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.inputGroup,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                id: \"inputEmail\",\n                required: true,\n                type: \"text\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                htmlFor: \"inputEmail\",\n                children: \"Email\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 23,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.inputGroup,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                id: \"inputPassword\",\n                required: true,\n                type: \"password\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 27,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n                htmlFor: \"inputPassword\",\n                children: \"Senha\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"submit\",\n              children: \"Entrar\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 19\n              }, this), \"Ou entre com \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 43\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonGroup,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialLoginButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              image: \"icons/github.svg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialLoginButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              image: \"icons/google.svg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SocialLoginButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              image: \"icons/twitter.svg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4udHN4PzhkMTkiXSwibmFtZXMiOlsiTG9naW4iLCJzdHlsZXMiLCJtYWluIiwiY29udGVudCIsImxvZ2luQ29udGFpbmVyIiwiaW5wdXRHcm91cCIsImJ1dHRvbkdyb3VwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFNLGVBQVMsRUFBRUMscUVBQU0sQ0FBQ0MsSUFBeEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVELHFFQUFNLENBQUNFLE9BQXZCO0FBQUEsK0JBQ0E7QUFBSyxtQkFBUyxFQUFFRixxRUFBTSxDQUFDRyxjQUF2QjtBQUFBLGtDQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBS0U7QUFBTSxrQkFBTSxFQUFDLEVBQWI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVILHFFQUFNLENBQUNJLFVBQXZCO0FBQUEsc0NBQ0U7QUFBTyxrQkFBRSxFQUFDLFlBQVY7QUFBdUIsd0JBQVEsTUFBL0I7QUFBZ0Msb0JBQUksRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBTyx1QkFBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBTUU7QUFBSyx1QkFBUyxFQUFFSixxRUFBTSxDQUFDSSxVQUF2QjtBQUFBLHNDQUNFO0FBQU8sa0JBQUUsRUFBQyxlQUFWO0FBQTBCLHdCQUFRLE1BQWxDO0FBQW1DLG9CQUFJLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQU8sdUJBQU8sRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORixlQVlFO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpGLGVBYUU7QUFBQSxzQ0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFOLGdDQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBb0JFO0FBQUsscUJBQVMsRUFBRUoscUVBQU0sQ0FBQ0ssV0FBdkI7QUFBQSxvQ0FDRSxxRUFBQyxxRUFBRDtBQUFtQixtQkFBSyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFtQixtQkFBSyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsZUFHRSxxRUFBQyxxRUFBRDtBQUFtQixtQkFBSyxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUF3Q0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNvY2lhbExvZ2luQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24nXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Mb2dpbi5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Mb2dpbiBwYWdlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5Db250YWluZXJ9PlxuICAgICAgICAgIHsvKiA8c3Bhbj52b2PDqiBuw6NvIHRlbSB1bWEgY29udGE/PGEgaHJlZj1cIiNcIj5DcmlhcjwvYT48L3NwYW4+ICovfVxuICAgICAgICAgIDxoMT5XZWxjb21lIHRvIEFPVCA8L2gxPlxuICAgICAgICAgIHsvKiA8cD5CbGFuZGl0IGxpYmVybyB2b2x1dHBhdCBzZWQgY3JhcyBvcm5hcmUgYXJjdSBkdWkuPGJyIC8+QWNjdW1zYXMgaW4gbmlzaSBzY2VsZXJpc3F1ZSBldTwvcD4gKi99XG5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImlucHV0RW1haWxcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRFbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgcmVxdWlyZWQgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCI+U2VuaGE8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9idXR0b24+XG4gICAgICAgICAgICA8c3Bhbj48ZGl2PjwvZGl2Pk91IGVudHJlIGNvbSA8ZGl2PjwvZGl2Pjwvc3Bhbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgICA8U29jaWFsTG9naW5CdXR0b24gaW1hZ2U9XCJpY29ucy9naXRodWIuc3ZnXCIgLz5cbiAgICAgICAgICAgIDxTb2NpYWxMb2dpbkJ1dHRvbiBpbWFnZT1cImljb25zL2dvb2dsZS5zdmdcIiAvPlxuICAgICAgICAgICAgPFNvY2lhbExvZ2luQnV0dG9uIGltYWdlPVwiaWNvbnMvdHdpdHRlci5zdmdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cblxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "./src/styles/components/SocialLoginButton.module.css":
/*!************************************************************!*\
  !*** ./src/styles/components/SocialLoginButton.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"socialLoginButton\": \"SocialLoginButton_socialLoginButton__ueUEQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvU29jaWFsTG9naW5CdXR0b24ubW9kdWxlLmNzcz81NjljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1NvY2lhbExvZ2luQnV0dG9uLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzb2NpYWxMb2dpbkJ1dHRvblwiOiBcIlNvY2lhbExvZ2luQnV0dG9uX3NvY2lhbExvZ2luQnV0dG9uX191ZVVFUVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/components/SocialLoginButton.module.css\n");

/***/ }),

/***/ "./src/styles/pages/Login.module.css":
/*!*******************************************!*\
  !*** ./src/styles/pages/Login.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Login_main__3fmDe\",\n\t\"content\": \"Login_content__Qw3zm\",\n\t\"loginContainer\": \"Login_loginContainer__2fWnz\",\n\t\"inputGroup\": \"Login_inputGroup__2M67X\",\n\t\"buttonGroup\": \"Login_buttonGroup__3rCfR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0xvZ2luLm1vZHVsZS5jc3M/MTFjNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Mb2dpbi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkxvZ2luX21haW5fXzNmbURlXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2luX2NvbnRlbnRfX1F3M3ptXCIsXG5cdFwibG9naW5Db250YWluZXJcIjogXCJMb2dpbl9sb2dpbkNvbnRhaW5lcl9fMmZXbnpcIixcblx0XCJpbnB1dEdyb3VwXCI6IFwiTG9naW5faW5wdXRHcm91cF9fMk02N1hcIixcblx0XCJidXR0b25Hcm91cFwiOiBcIkxvZ2luX2J1dHRvbkdyb3VwX18zckNmUlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/pages/Login.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });