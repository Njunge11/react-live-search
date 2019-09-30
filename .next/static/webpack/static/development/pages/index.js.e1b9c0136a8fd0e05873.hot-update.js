webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var resources = {};

var search = function search() {
  console.log("search");
}; // const makeRequestCreator = () => {
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
//# sourceMappingURL=index.js.e1b9c0136a8fd0e05873.hot-update.js.map