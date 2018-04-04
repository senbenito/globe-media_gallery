webpackHotUpdate(4,{

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Galleria__ = __webpack_require__("./components/Galleria.js");
var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var galleriaTheme = function galleriaTheme() {
  return __WEBPACK_IMPORTED_MODULE_3__Galleria__["a" /* default */].loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.fullscreen.min.js').run('.galleria', {
    transition: 'fade',
    imageCrop: true
  });
};

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-91125835',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-91125835' + ' ' + 'galleria',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Galleria__["a" /* default */], { onLoad: galleriaTheme, __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '91125835',
      css: '.galleria.jsx-91125835{max-width:700px;height:400px;background:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHeUIsZ0JBQ0gsYUFDRyxnQkFDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NoYW5ub24ucml2ZXJzL1Byb2plY3RzL0dMT0JFLU1lZGlhX0dhbGxlcnkvbmV4dC1ib2lsZXJwbGF0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5pbXBvcnQgR2FsbGVyaWEgZnJvbSAnLi9HYWxsZXJpYSdcblxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XG4gIG1hcmdpbjogMjAsXG4gIHBhZGRpbmc6IDIwLFxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcbn1cblxuY29uc3QgZ2FsbGVyaWFUaGVtZSA9ICgpID0+IChcbiAgR2FsbGVyaWFcbiAgLmxvYWRUaGVtZSgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZ2FsbGVyaWEvMS41LjcvdGhlbWVzL2NsYXNzaWMvZ2FsbGVyaWEuZnVsbHNjcmVlbi5taW4uanMnKVxuICAucnVuKCcuZ2FsbGVyaWEnLCB7XG4gICAgdHJhbnNpdGlvbjogJ2ZhZGUnLFxuICAgIGltYWdlQ3JvcDogdHJ1ZSxcbiAgfSlcbilcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWRlciAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZ2FsbGVyaWEnfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgICA8R2FsbGVyaWEgb25Mb2FkPXtnYWxsZXJpYVRoZW1lfS8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmdhbGxlcmlhe1xuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=components/Layout.js */'
    })
  );
};

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(layoutStyle, 'layoutStyle', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  reactHotLoader.register(galleriaTheme, 'galleriaTheme', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  reactHotLoader.register(Layout, 'Layout', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  reactHotLoader.register(_default, 'default', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.b098c6202e50a58b47e5.hot-update.js.map