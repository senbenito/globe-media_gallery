module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
=======
/***/ "./components/Galleria.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Galleria.js";



var Galleria = function Galleria() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/galleria.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Galleria);

/***/ }),

>>>>>>> 2c4847f8ab8bd56b285d9f094d870f5ede22f3b6
/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Header.js";



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        "Home"
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: "/about", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        "About"
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js';



<<<<<<< HEAD
var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: layoutStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
=======
var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
>>>>>>> 2c4847f8ab8bd56b285d9f094d870f5ede22f3b6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 11
=======
        lineNumber: 5
>>>>>>> 2c4847f8ab8bd56b285d9f094d870f5ede22f3b6
      }
    }),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Galleria__ = __webpack_require__("./components/Galleria.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);

var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/pages/index.js';



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var galleriaTheme = function galleriaTheme() {
  return __WEBPACK_IMPORTED_MODULE_4__components_Galleria__["a" /* default */].loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.fullscreen.min.js').run('.galleria', {
    transition: 'fade',
    imageCrop: true
  });
};

var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'h1',
      {
        className: 'jsx-550562050',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      },
      'GLOBE Media Gallery'
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      {
        className: 'jsx-550562050' + ' ' + 'galleria',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      },
      props.media.map(function (medium) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
          { as: '/media/' + medium.data[0].nasa_id, href: '/media?id=' + medium.data[0].nasa_id, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'a',
            {
              className: 'jsx-550562050',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: 'https://images-assets.nasa.gov/image/' + medium.data[0].nasa_id + '/' + medium.data[0].nasa_id + '~thumb.jpg', className: 'jsx-550562050',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            })
          )
        );
      })
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Galleria__["a" /* default */], { onLoad: galleriaTheme, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
      styleId: '550562050',
      css: '.galleria{max-width:700px;height:100px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCdUIsQUFHeUIsZ0JBQ0gsYUFDSSxpQkFDbkIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NoYW5ub24ucml2ZXJzL1Byb2plY3RzL0dMT0JFLU1lZGlhX0dhbGxlcnkvbmV4dC1ib2lsZXJwbGF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgR2FsbGVyaWEgZnJvbSAnLi4vY29tcG9uZW50cy9HYWxsZXJpYSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IGdhbGxlcmlhVGhlbWUgPSAoKSA9PiAoXG4gIEdhbGxlcmlhXG4gIC5sb2FkVGhlbWUoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2dhbGxlcmlhLzEuNS43L3RoZW1lcy9jbGFzc2ljL2dhbGxlcmlhLmZ1bGxzY3JlZW4ubWluLmpzJylcbiAgLnJ1bignLmdhbGxlcmlhJywge1xuICAgIHRyYW5zaXRpb246ICdmYWRlJyxcbiAgICBpbWFnZUNyb3A6IHRydWUsXG4gIH0pXG4pXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkdMT0JFIE1lZGlhIEdhbGxlcnk8L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZ2FsbGVyaWEnfT5cbiAgICAgIHtwcm9wcy5tZWRpYS5tYXAobWVkaXVtID0+IChcbiAgICAgICAgPExpbmsgYXM9e2AvbWVkaWEvJHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfWB9IGhyZWY9e2AvbWVkaWE/aWQ9JHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfWB9PlxuICAgICAgICAgIDxhPjxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZXMtYXNzZXRzLm5hc2EuZ292L2ltYWdlLyR7bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH0vJHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfX50aHVtYi5qcGdgfS8+PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8R2FsbGVyaWEgb25Mb2FkPXtnYWxsZXJpYVRoZW1lfS8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5nYWxsZXJpYXtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2ltYWdlcy1hcGkubmFzYS5nb3Yvc2VhcmNoP3E9Z2xvYmUnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIC8vIGNvbnNvbGUubG9nKGBNZWRpYSBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEuY29sbGVjdGlvbi5pdGVtcy5sZW5ndGh9YClcbiAgY29uc29sZS5sb2coZGF0YS5jb2xsZWN0aW9uLml0ZW1zKTtcblxuICByZXR1cm4ge1xuICAgIG1lZGlhOiBkYXRhLmNvbGxlY3Rpb24uaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=pages/index.js */'
    })
  );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default()('https://images-api.nasa.gov/search?q=globe');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;


          console.log('Media data fetched. Count: ' + data.collection.items.length);
          // console.log(data.collection.items);

          return _context.abrupt('return', {
            media: data.collection.items
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map