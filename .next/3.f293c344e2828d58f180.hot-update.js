webpackHotUpdate(3,{

/***/ "./components/Gallery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_masonry_component__ = __webpack_require__("./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_masonry_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_masonry_component__);

var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var masonryOptions = {
  transitionDuration: 0
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
                  media: data.collection.items
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
          className: 'jsx-1551276354',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '1551276354',
          css: '.image-element-class.jsx-1551276354{left:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ29CLEFBR3NCLFNBQ1giLCJmaWxlIjoiY29tcG9uZW50cy9HYWxsZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaGFubm9uLnJpdmVycy9Qcm9qZWN0cy9HTE9CRS1NZWRpYV9HYWxsZXJ5L25leHQtYm9pbGVycGxhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnXG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRHVyYXRpb246IDBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZWRpYTogW11cbiAgICB9XG4gICAgdGhpcy5mZXRjaEltYWdlcyA9IHRoaXMuZmV0Y2hJbWFnZXMuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hJbWFnZXMoKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pbWFnZXMtYXBpLm5hc2EuZ292L3NlYXJjaD9xPWdsb2JlJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVkaWE6IGRhdGEuY29sbGVjdGlvbi5pdGVtc1xuICAgIH0pXG4gICAgY29uc29sZS5sb2coYE1lZGlhIGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5jb2xsZWN0aW9uLml0ZW1zLmxlbmd0aH1gKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hJbWFnZXMoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pbWFnZS1lbGVtZW50LWNsYXNzIHtcbiAgICAgICAgICAgIGxlZnQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPkdMT0JFIE1lZGlhIEdhbGxlcnk8L2gxPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17J215LWdhbGxlcnktY2xhc3MnfSAvLyBkZWZhdWx0ICcnXG4gICAgICAgICAgLy8gZWxlbWVudFR5cGU9eyd1bCd9IC8vIGRlZmF1bHQgJ2RpdidcbiAgICAgICAgICBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc30gLy8gZGVmYXVsdCB7fVxuICAgICAgICAgIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfSAvLyBkZWZhdWx0IGZhbHNlXG4gICAgICAgICAgdXBkYXRlT25FYWNoSW1hZ2VMb2FkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZSBhbmQgd29ya3Mgb25seSBpZiBkaXNhYmxlSW1hZ2VzTG9hZGVkIGlzIGZhbHNlXG4gICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lZGlhLm1hcChtZWRpdW0gPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXttZWRpdW0uZGF0YVswXS5uYXNhX2lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLWVsZW1lbnQtY2xhc3NcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbWFnZS1lbGVtZW50LWNsYXNzXCI+aGVsbG88L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e21lZGl1bS5saW5rc1swXS5ocmVmfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Gallery.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-1551276354',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          'GLOBE Media Gallery'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_masonry_component___default.a,
          {
            className: 'my-gallery-class' // default ''
            // elementType={'ul'} // default 'div'
            , options: masonryOptions // default {}
            , disableImagesLoaded: false // default false
            , updateOnEachImageLoad: false // default false and works only if disableImagesLoaded is false
            , __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          this.state.media.map(function (medium) {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              {
                key: medium.data[0].nasa_id,
                className: 'jsx-1551276354' + ' ' + 'image-element-class',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-1551276354' + ' ' + 'image-element-class',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                },
                'hello'
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-1551276354',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              })
            );
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var _default = Gallery;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(masonryOptions, 'masonryOptions', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js');
  reactHotLoader.register(Gallery, 'Gallery', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js');
  reactHotLoader.register(_default, 'default', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.f293c344e2828d58f180.hot-update.js.map