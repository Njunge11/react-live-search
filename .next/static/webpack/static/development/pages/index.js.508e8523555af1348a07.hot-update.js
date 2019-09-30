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



var cancel;

var search =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {
    var res, result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (cancel) {
              cancel.cancel();
            }

            cancel = axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source();
            _context.prev = 2;
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_2___default()(query, {
              cancelToken: cancel.token
            });

          case 5:
            res = _context.sent;
            result = res.data.results;
            return _context.abrupt("return", result);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);

            if (axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel) {
              console.log("Request cancelled ", _context.t0.message);
            } else {
              console.log("Something went wrong: ", _context.t0.message);
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function search(_x) {
    return _ref.apply(this, arguments);
  };
}(); // const makeRequestCreator = () => {
//   let cancel;
//   return async query => {
//     if (cancel) {
//       // Cancel the previous request before making a new request
//       cancel.cancel();
//     }
//     // Create a new CancelToken
//     cancel = axios.CancelToken.source();
//     try {
//       if (resources[query]) {
//         // Return result if it exists
//         return resources[query];
//       }
//       const res = await axios(query, { cancelToken: cancel.token });
//       const result = res.data.results;
//       // Store response
//       resources[query] = result;
//       return result;
//     } catch (error) {
//       if (axios.isCancel(error)) {
//         // Handle if request was cancelled
//         console.log("Request canceled", error.message);
//       } else {
//         // Handle usual errors
//         console.log("Something went wrong: ", error.message);
//       }
//     }
//   };
// };
// export const search = makeRequestCreator();


/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ })

})
//# sourceMappingURL=index.js.508e8523555af1348a07.hot-update.js.map