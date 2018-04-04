webpackHotUpdate(4,{

/***/ "./components/Galleria.js":
false,

/***/ "./components/Header.js":
false,

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: Adjacent JSX elements must be wrapped in an enclosing tag (20:2)\n\n\u001b[0m \u001b[90m 18 | \u001b[39m    \u001b[33m<\u001b[39m\u001b[33mGalleria\u001b[39m onLoad\u001b[33m=\u001b[39m{galleriaTheme}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 19 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m  \u001b[33m<\u001b[39m\u001b[33mstyle\u001b[39m jsx\u001b[33m>\u001b[39m{\u001b[32m'\u001b[39m\n \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 21 | \u001b[39m  \u001b[33m.\u001b[39mgalleria{\n \u001b[90m 22 | \u001b[39m    max\u001b[33m-\u001b[39mwidth\u001b[33m:\u001b[39m \u001b[35m700\u001b[39mpx\u001b[33m;\u001b[39m height\u001b[33m:\u001b[39m \u001b[35m400\u001b[39mpx\u001b[33m;\u001b[39m background\u001b[33m:\u001b[39m \u001b[37m\u001b[41m\u001b[1m#\u001b[22m\u001b[49m\u001b[39m\u001b[35m000\u001b[39m }\n \u001b[90m 23 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/foreach/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/lib/link.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./pages/media.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Layout_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);

var _jsxFileName = '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/pages/media.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Media = function Media(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout_js__["default"],
    { className: 'galleria', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      props.medium.collection.items[0].data[0].title
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      props.medium.collection.items[0].data[0].description
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: props.medium.collection.items[0].links[0].href, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    })
  );
};

Media.getInitialProps = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var id, res, medium;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('https://images-api.nasa.gov/search?q=&nasa_id=' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            medium = _context.sent;


            console.log('Fetched media: ' + medium.collection.items[0].data[0].title);

            return _context.abrupt('return', { medium: medium });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = Media;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Media, 'Media', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/pages/media.js');
  reactHotLoader.register(_default, 'default', '/Users/shannon.rivers/Projects/GLOBE-Media_Gallery/next-boilerplate/pages/media.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/media")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8a1375ca56f6e347cc25.hot-update.js.map