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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Gallery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_masonry_component__ = __webpack_require__("react-masonry-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_masonry_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_masonry_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);

var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var masonryOptions = {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: 10
};

var Gallery = function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.state = {
      media: []
    };
    _this.fetchImages = _this.fetchImages.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'fetchImages',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default()('https://images-api.nasa.gov/search?q=globe');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;

                this.setState({
                  media: data.collection.items.slice(0, 4)
                });
                console.log('Media data fetched. Count: ' + data.collection.items.length);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchImages() {
        return _ref.apply(this, arguments);
      }

      return fetchImages;
    }()
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchImages();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2076494497',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '2076494497',
          css: '.grid.jsx-2076494497{left:40px !important;}.grid-sizer.jsx-2076494497,.grid-item.jsx-2076494497{width:20em;display:inline;position:static !important;}.grid-item--width2.jsx-2076494497{width:40em;}img.jsx-2076494497{width:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBR2tDLEFBS1YsQUFLa0IsQUFDYixXQUxELEFBSWUsR0FDYixPQVZuQixLQU02QiwyQkFDN0IiLCJmaWxlIjoiY29tcG9uZW50cy9HYWxsZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaGFubm9uLnJpdmVycy9Qcm9qZWN0cy9HTE9CRS1NZWRpYV9HYWxsZXJ5L25leHQtYm9pbGVycGxhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICBjb2x1bW5XaWR0aDogJy5ncmlkLXNpemVyJyxcbiAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXG4gIHBlcmNlbnRQb3NpdGlvbjogdHJ1ZSxcbiAgZ3V0dGVyOiAxMFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lZGlhOiBbXVxuICAgIH1cbiAgICB0aGlzLmZldGNoSW1hZ2VzID0gdGhpcy5mZXRjaEltYWdlcy5iaW5kKHRoaXMpXG4gIH1cblxuICBhc3luYyBmZXRjaEltYWdlcygpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2ltYWdlcy1hcGkubmFzYS5nb3Yvc2VhcmNoP3E9Z2xvYmUnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtZWRpYTogZGF0YS5jb2xsZWN0aW9uLml0ZW1zLnNsaWNlKDAsNClcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGBNZWRpYSBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEuY29sbGVjdGlvbi5pdGVtcy5sZW5ndGh9YClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoSW1hZ2VzKClcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICBsZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIGZsdWlkIDUgY29sdW1ucyAqL1xuICAgICAgICAgIC5ncmlkLXNpemVyLFxuICAgICAgICAgIC5ncmlkLWl0ZW0ge1xuICAgICAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIDIgY29sdW1ucyB3aWRlICovXG4gICAgICAgICAgLmdyaWQtaXRlbS0td2lkdGgyIHsgd2lkdGg6IDQwZW07IH1cbiAgICAgICAgICBpbWcge3dpZHRoOiBpbmhlcml0O31cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+R0xPQkUgTWVkaWEgR2FsbGVyeTwvaDE+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXsnZ3JpZCd9IC8vIGRlZmF1bHQgJydcbiAgICAgICAgICBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc30gLy8gZGVmYXVsdCB7fVxuICAgICAgICAgIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfSAvLyBkZWZhdWx0IGZhbHNlXG4gICAgICAgICAgdXBkYXRlT25FYWNoSW1hZ2VMb2FkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZSBhbmQgd29ya3Mgb25seSBpZiBkaXNhYmxlSW1hZ2VzTG9hZGVkIGlzIGZhbHNlXG4gICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lZGlhLm1hcCgobWVkaXVtLGkpID0+IChcbiAgICAgICAgICAgICAgKGklMiA9PT0gMCkgP1xuICAgICAgICAgICAgICAoPExpbmsgYXM9e2AvbWVkaWEvJHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfWB9XG4gICAgICAgICAgICAgICAgaHJlZj17YC9tZWRpYT9pZD0ke21lZGl1bS5kYXRhWzBdLm5hc2FfaWR9YH1cbiAgICAgICAgICAgICAgICBrZXk9e21lZGl1bS5kYXRhWzBdLm5hc2FfaWR9PlxuICAgICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21lZGl1bS5saW5rc1swXS5ocmVmfS8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj48L2E+XG4gICAgICAgICAgICAgIDwvTGluaz4pXG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgKDxMaW5rIGFzPXtgL21lZGlhLyR7bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH1gfVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvbWVkaWE/aWQ9JHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfWB9XG4gICAgICAgICAgICAgICAga2V5PXttZWRpdW0uZGF0YVswXS5uYXNhX2lkfT5cbiAgICAgICAgICAgICAgICA8YT48ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbSBncmlkLWl0ZW0tLXdpZHRoMlwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21lZGl1bS5saW5rc1swXS5ocmVmfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Gallery.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-2076494497',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          'GLOBE Media Gallery'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_masonry_component___default.a,
          {
            className: 'grid' // default ''
            , options: masonryOptions // default {}
            , disableImagesLoaded: false // default false
            , updateOnEachImageLoad: false // default false and works only if disableImagesLoaded is false
            , __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          this.state.media.map(function (medium, i) {
            return i % 2 === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
              { as: '/media/' + medium.data[0].nasa_id,
                href: '/media?id=' + medium.data[0].nasa_id,
                key: medium.data[0].nasa_id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2076494497',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2076494497' + ' ' + 'grid-item',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-2076494497',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    }
                  })
                )
              )
            ) : __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
              { as: '/media/' + medium.data[0].nasa_id,
                href: '/media?id=' + medium.data[0].nasa_id,
                key: medium.data[0].nasa_id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2076494497',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2076494497' + ' ' + 'grid-item grid-item--width2',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-2076494497',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  })
                )
              )
            );
          })
        )
      );
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Gallery);

/***/ }),

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
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Gallery__ = __webpack_require__("./components/Gallery.js");
var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/pages/index.js';




var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Gallery__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
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

/***/ "react-masonry-component":
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map