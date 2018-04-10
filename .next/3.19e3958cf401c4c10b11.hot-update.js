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
          className: 'jsx-2447977225',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
          styleId: '2447977225',
          css: '.grid.jsx-2447977225{left:40px !important;}.grid-sizer.jsx-2447977225,.grid-item.jsx-2447977225{width:20em;}.grid-item--width2.jsx-2447977225{width:40em;}img.jsx-2447977225{width:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBR2tDLEFBSUEsQUFFUSxBQUNiLFdBSE0sQUFFUSxHQUNiLE9BTm5CIiwiZmlsZSI6ImNvbXBvbmVudHMvR2FsbGVyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2hhbm5vbi5yaXZlcnMvUHJvamVjdHMvR0xPQkUtTWVkaWFfR2FsbGVyeS9uZXh0LWJvaWxlcnBsYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcicsXG4gIGl0ZW1TZWxlY3RvcjogJy5ncmlkLWl0ZW0nLFxuICBwZXJjZW50UG9zaXRpb246IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZWRpYTogW11cbiAgICB9XG4gICAgdGhpcy5mZXRjaEltYWdlcyA9IHRoaXMuZmV0Y2hJbWFnZXMuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hJbWFnZXMoKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pbWFnZXMtYXBpLm5hc2EuZ292L3NlYXJjaD9xPWdsb2JlJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVkaWE6IGRhdGEuY29sbGVjdGlvbi5pdGVtcy5zbGljZSgwLDIpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhgTWVkaWEgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmNvbGxlY3Rpb24uaXRlbXMubGVuZ3RofWApXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaEltYWdlcygpXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgbGVmdDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBmbHVpZCA1IGNvbHVtbnMgKi9cbiAgICAgICAgICAuZ3JpZC1zaXplcixcbiAgICAgICAgICAuZ3JpZC1pdGVtIHsgd2lkdGg6IDIwZW07IH1cbiAgICAgICAgICAvKiAyIGNvbHVtbnMgd2lkZSAqL1xuICAgICAgICAgIC5ncmlkLWl0ZW0tLXdpZHRoMiB7IHdpZHRoOiA0MGVtOyB9XG4gICAgICAgICAgaW1nIHt3aWR0aDogaW5oZXJpdDt9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgxPkdMT0JFIE1lZGlhIEdhbGxlcnk8L2gxPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17J2dyaWQnfSAvLyBkZWZhdWx0ICcnXG4gICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IC8vIGRlZmF1bHQge31cbiAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX0gLy8gZGVmYXVsdCBmYWxzZVxuICAgICAgICAgIHVwZGF0ZU9uRWFjaEltYWdlTG9hZD17ZmFsc2V9IC8vIGRlZmF1bHQgZmFsc2UgYW5kIHdvcmtzIG9ubHkgaWYgZGlzYWJsZUltYWdlc0xvYWRlZCBpcyBmYWxzZVxuICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZWRpYS5tYXAoKG1lZGl1bSxpKSA9PiAoXG4gICAgICAgICAgICAgIChpJTIgPT09IDApID9cbiAgICAgICAgICAgICAgKDxMaW5rIGFzPXtgL21lZGlhLyR7bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH1gfVxuICAgICAgICAgICAgICAgIGhyZWY9e2AvbWVkaWE/aWQ9JHttZWRpdW0uZGF0YVswXS5uYXNhX2lkfWB9XG4gICAgICAgICAgICAgICAga2V5PXttZWRpdW0uZGF0YVswXS5uYXNhX2lkfT5cbiAgICAgICAgICAgICAgICAgIDxhPjxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttZWRpdW0ubGlua3NbMF0uaHJlZn0vPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICg8TGluayBhcz17YC9tZWRpYS8ke21lZGl1bS5kYXRhWzBdLm5hc2FfaWR9YH1cbiAgICAgICAgICAgICAgICBocmVmPXtgL21lZGlhP2lkPSR7bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH1gfVxuICAgICAgICAgICAgICAgIGtleT17bWVkaXVtLmRhdGFbMF0ubmFzYV9pZH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZ3JpZC1pdGVtLS13aWR0aDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21lZGl1bS5saW5rc1swXS5ocmVmfS8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz4pXG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Gallery.js */'
        }),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'h1',
          {
            className: 'jsx-2447977225',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
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
              lineNumber: 49
            }
          },
          this.state.media.map(function (medium, i) {
            return i % 2 === 0 ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
              { as: '/media/' + medium.data[0].nasa_id,
                href: '/media?id=' + medium.data[0].nasa_id,
                key: medium.data[0].nasa_id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2447977225',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2447977225' + ' ' + 'grid-item',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-2447977225',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
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
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2447977225' + ' ' + 'grid-item grid-item--width2',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  }
                },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('img', { src: medium.links[0].href, className: 'jsx-2447977225',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                })
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
//# sourceMappingURL=3.19e3958cf401c4c10b11.hot-update.js.map