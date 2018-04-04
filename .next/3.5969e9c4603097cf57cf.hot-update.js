webpackHotUpdate(3,{

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
      className: 'jsx-821103885',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-821103885',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      props.children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Galleria__["a" /* default */], { onLoad: galleriaTheme, __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '821103885',
      css: '.galleria{max-width:700;height:100;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CdUIsQUFHdUIsY0FDSCxXQUNNLGlCQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2hhbm5vbi5yaXZlcnMvUHJvamVjdHMvR0xPQkUtTWVkaWFfR2FsbGVyeS9uZXh0LWJvaWxlcnBsYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBHYWxsZXJpYSBmcm9tICcuL0dhbGxlcmlhJ1xuXG5jb25zdCBnYWxsZXJpYVRoZW1lID0gKCkgPT4gKFxuICBHYWxsZXJpYVxuICAubG9hZFRoZW1lKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9nYWxsZXJpYS8xLjUuNy90aGVtZXMvY2xhc3NpYy9nYWxsZXJpYS5mdWxsc2NyZWVuLm1pbi5qcycpXG4gIC5ydW4oJy5nYWxsZXJpYScsIHtcbiAgICB0cmFuc2l0aW9uOiAnZmFkZScsXG4gICAgaW1hZ2VDcm9wOiB0cnVlLFxuICB9KVxuKVxuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGRpdj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgICA8R2FsbGVyaWEgb25Mb2FkPXtnYWxsZXJpYVRoZW1lfS8+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5nYWxsZXJpYXtcbiAgICAgICAgbWF4LXdpZHRoOiA3MDA7XG4gICAgICAgIGhlaWdodDogMTAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=components/Layout.js */'
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

  reactHotLoader.register(galleriaTheme, 'galleriaTheme', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  reactHotLoader.register(Layout, 'Layout', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  reactHotLoader.register(_default, 'default', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.5969e9c4603097cf57cf.hot-update.js.map