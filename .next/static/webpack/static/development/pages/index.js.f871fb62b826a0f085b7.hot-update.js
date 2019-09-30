webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var source;
var resources = {};

var search =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {
    var CancelToken, res, result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (source) {
              source.cancel();
            }

            CancelToken = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken;
            source = CancelToken.source();
            _context.prev = 3;

            if (!resources[query]) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", resources[query]);

          case 6:
            _context.next = 8;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(query, {
              cancelToken: source.token
            });

          case 8:
            res = _context.sent;
            result = res.data.results;
            resources[query] = reslt;
            return _context.abrupt("return", result);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);

            if (axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel) {
              console.log("Request cancelled ", _context.t0.message);
            } else {
              console.log("Something went wrong: ", _context.t0.message);
            }

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));

  return function search(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ })

})
//# sourceMappingURL=index.js.f871fb62b826a0f085b7.hot-update.js.map