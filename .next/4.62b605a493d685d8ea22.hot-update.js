webpackHotUpdate(4,{

/***/ "./components/Galleria.js":
false,

/***/ "./components/Gallery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var scriptTest = function scriptTest() {
  return $("body").text("jQuery works");
};

var Galleria = function Galleria() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "button",
      { onClick: scriptTest, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      "Test Script"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/galleria.min.js", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })
    )
  );
};

var _default = Galleria;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(scriptTest, "scriptTest", "/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js");
  reactHotLoader.register(Galleria, "Galleria", "/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js");
  reactHotLoader.register(_default, "default", "/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Gallery.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Gallery__ = __webpack_require__("./components/Gallery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Gallery__);
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

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: layoutStyle, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Galleria, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    props.children
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
  reactHotLoader.register(Layout, 'Layout', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  reactHotLoader.register(_default, 'default', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/components/Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.62b605a493d685d8ea22.hot-update.js.map