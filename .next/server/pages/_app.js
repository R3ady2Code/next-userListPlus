/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ \"./styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ghalu\\\\Desktop\\\\js practic\\\\next\\\\react-next-userListPlus\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBRWlCO0FBRXpDLE1BQU1DLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDMUMscUJBQU8sOERBQUNELFNBQVM7UUFBRSxHQUFHQyxTQUFTOzs7OztpQkFBSSxDQUFDO0NBQ3JDO0FBRUQsaUVBQWVILDJEQUFpQixDQUFDQyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtdXNlcmxpc3RwbHVzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/reducers/filters.js":
/*!***********************************!*\
  !*** ./redux/reducers/filters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    sortBy: \"id\",\n    serachByName: \" \"\n};\nconst filters = (state = initialState, action)=>{\n    switch(action.type){\n        case \"SET_CORT_BY\":\n            return {\n                ...state,\n                sortBy: action.payload\n            };\n        case \"SET_SEARCH_BY_NAME\":\n            return {\n                ...state,\n                serachByName: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filters);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9maWx0ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUc7SUFDbkJDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFlBQVksRUFBRSxHQUFHO0NBQ2xCO0FBRUQsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR0osWUFBWSxFQUFFSyxNQUFNLEdBQUs7SUFDaEQsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUssYUFBYTtZQUNoQixPQUFPO2dCQUNMLEdBQUdGLEtBQUs7Z0JBQ1JILE1BQU0sRUFBRUksTUFBTSxDQUFDRSxPQUFPO2FBQ3ZCLENBQUM7UUFFSixLQUFLLG9CQUFvQjtZQUN2QixPQUFPO2dCQUNMLEdBQUdILEtBQUs7Z0JBQ1JGLFlBQVksRUFBRUcsTUFBTSxDQUFDRSxPQUFPO2FBQzdCLENBQUM7UUFFSjtZQUNFLE9BQU9ILEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRUQsaUVBQWVELE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtdXNlcmxpc3RwbHVzLy4vcmVkdXgvcmVkdWNlcnMvZmlsdGVycy5qcz85YTVhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBzb3J0Qnk6ICdpZCcsXHJcbiAgc2VyYWNoQnlOYW1lOiAnICcsXHJcbn07XHJcblxyXG5jb25zdCBmaWx0ZXJzID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdTRVRfQ09SVF9CWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc29ydEJ5OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlICdTRVRfU0VBUkNIX0JZX05BTUUnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlcmFjaEJ5TmFtZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlcnM7XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzb3J0QnkiLCJzZXJhY2hCeU5hbWUiLCJmaWx0ZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/filters.js\n");

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ \"./redux/reducers/filters.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ \"./redux/reducers/users.js\");\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    filters: _filters__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    users: _users__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUVSO0FBQ0o7QUFFckIsTUFBTUcsV0FBVyxHQUFHSCxzREFBZSxDQUFDO0lBQUVDLE9BQU87SUFBRUMsS0FBSztDQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5leHQtdXNlcmxpc3RwbHVzLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanM/ZmM2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgZmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnO1xyXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vycyc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoeyBmaWx0ZXJzLCB1c2VycyB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImZpbHRlcnMiLCJ1c2VycyIsInJvb3RSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/reducers/users.js":
/*!*********************************!*\
  !*** ./redux/reducers/users.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    items: []\n};\nconst users = (state = initialState, action)=>{\n    switch(action.type){\n        case \"SET_USERS\":\n            return {\n                ...state,\n                items: action.payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUUsRUFBRTtDQUNWO0FBRUQsTUFBTUMsS0FBSyxHQUFHLENBQUNDLEtBQUssR0FBR0gsWUFBWSxFQUFFSSxNQUFNLEdBQUs7SUFDOUMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUssV0FBVztZQUNkLE9BQU87Z0JBQ0wsR0FBR0YsS0FBSztnQkFDUkYsS0FBSyxFQUFFRyxNQUFNLENBQUNFLE9BQU87YUFDdEIsQ0FBQztRQUVKO1lBQ0UsT0FBT0gsS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7QUFFRCxpRUFBZUQsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dC11c2VybGlzdHBsdXMvLi9yZWR1eC9yZWR1Y2Vycy91c2Vycy5qcz8zMWFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5jb25zdCB1c2VycyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1VTRVJTJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpdGVtczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJzO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXRlbXMiLCJ1c2VycyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/users.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./redux/reducers/index.js\");\n\n\n\n\nconst makeStore = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_1__.legacy_createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.rootReducer, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_0___default())))\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUUyQztBQUN4QjtBQUVWO0FBRXpDLE1BQU1NLFNBQVMsR0FBRyxJQUFNSix5REFBVyxDQUFDRyxrREFBVyxFQUFFRixzREFBZSxDQUFDSCxvREFBSyxDQUFDLENBQUM7QUFBQztBQUVsRSxNQUFNTyxPQUFPLEdBQUdILGlFQUFhLENBQUNFLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtbmV4dC11c2VybGlzdHBsdXMvLi9yZWR1eC9zdG9yZS5qcz8zNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG5pbXBvcnQgeyBsZWdhY3lfY3JlYXRlU3RvcmUgYXMgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcblxyXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcbiJdLCJuYW1lcyI6WyJ0aHVuayIsImxlZ2FjeV9jcmVhdGVTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlV3JhcHBlciIsInJvb3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();