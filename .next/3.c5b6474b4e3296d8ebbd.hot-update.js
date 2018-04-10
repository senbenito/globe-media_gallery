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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_masonry_component__ = __webpack_require__("./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_masonry_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_masonry_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);

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
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true
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
                  media: data.collection.items.slice(0, 2)
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
          className: 'jsx-3200149312',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '3200149312',
          css: '.grid.jsx-3200149312{left:40px !important;}.grid-sizer.jsx-3200149312,.grid-item.jsx-3200149312{width:20em;position:relative !important;}.grid-item--width2.jsx-3200149312{width:40em;}img.jsx-3200149312{width:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBR2tDLEFBS1YsQUFJa0IsQUFDYixXQUphLEFBR0MsR0FDYixPQVRuQixtQkFNQSIsImZpbGUiOiJjb21wb25lbnRzL0dhbGxlcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NoYW5ub24ucml2ZXJzL1Byb2plY3RzL0dMT0JFLU1lZGlhX0dhbGxlcnkvbmV4dC1ib2lsZXJwbGF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbWFzb25yeU9wdGlvbnMgPSB7XG4gIGNvbHVtbldpZHRoOiAnLmdyaWQtc2l6ZXInLFxuICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcbiAgcGVyY2VudFBvc2l0aW9uOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVkaWE6IFtdXG4gICAgfVxuICAgIHRoaXMuZmV0Y2hJbWFnZXMgPSB0aGlzLmZldGNoSW1hZ2VzLmJpbmQodGhpcylcbiAgfVxuXG4gIGFzeW5jIGZldGNoSW1hZ2VzKCl7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaW1hZ2VzLWFwaS5uYXNhLmdvdi9zZWFyY2g/cT1nbG9iZScpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lZGlhOiBkYXRhLmNvbGxlY3Rpb24uaXRlbXMuc2xpY2UoMCwyKVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coYE1lZGlhIGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5jb2xsZWN0aW9uLml0ZW1zLmxlbmd0aH1gKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hJbWFnZXMoKVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIGxlZnQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogZmx1aWQgNSBjb2x1bW5zICovXG4gICAgICAgICAgLmdyaWQtc2l6ZXIsXG4gICAgICAgICAgLmdyaWQtaXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMjBlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiAyIGNvbHVtbnMgd2lkZSAqL1xuICAgICAgICAgIC5ncmlkLWl0ZW0tLXdpZHRoMiB7IHdpZHRoOiA0MGVtOyB9XG4gICAgICAgICAgaW1nIHt3aWR0aDogaW5oZXJpdDt9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPkdMT0JFIE1lZGlhIEdhbGxlcnk8L2gxPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17J2dyaWQnfSAvLyBkZWZhdWx0ICcnXG4gICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IC8vIGRlZmF1bHQge31cbiAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgICAgIHVwZGF0ZU9uRWFjaEltYWdlTG9hZD17ZmFsc2V9IC8vIGRlZmF1bHQgZmFsc2UgYW5kIHdvcmtzIG9ubHkgaWYgZGlzYWJsZUltYWdlc0xvYWRlZCBpcyBmYWxzZVxuICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZWRpYS5tYXAoKG1lZGl1bSxpKSA9PiAoXG4gICAgICAgICAgICAgIChpJTIgPT09IDApID9cbiAgICAgICAgICAgICAgKDxMaW5rIGFzPXtgL21lZGlhLyR7bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH1gfVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvbWVkaWE/aWQ9JHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfWB9XG4gICAgICAgICAgICAgICAga2V5PXttZWRpdW0uZGF0YVswXS5uYXNhX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttZWRpdW0ubGlua3NbMF0uaHJlZn0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICg8TGluayBhcz17YC9tZWRpYS8ke21lZGl1bS5kYXRhWzBdLm5hc2FfaWR9YH1cbiAgICAgICAgICAgICAgICBocmVmPXtgL21lZGlhP2lkPSR7bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH1gfVxuICAgICAgICAgICAgICAgIGtleT17bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH0+XG4gICAgICAgICAgICAgICAgPGE+PGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZ3JpZC1pdGVtLS13aWR0aDJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttZWRpdW0ubGlua3NbMF0uaHJlZn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPilcbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Gallery.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-3200149312',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
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
              lineNumber: 52
            }
          },
          this.state.media.map(function (medium, i) {
            return i % 2 === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
              { as: '/media/' + medium.data[0].nasa_id,
                href: '/media?id=' + medium.data[0].nasa_id,
                key: medium.data[0].nasa_id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-3200149312',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-3200149312' + ' ' + 'grid-item',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-3200149312',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
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
                  lineNumber: 68
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-3200149312',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-3200149312' + ' ' + 'grid-item grid-item--width2',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-3200149312',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    }
                  })
                )
              )
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
//# sourceMappingURL=3.c5b6474b4e3296d8ebbd.hot-update.js.map