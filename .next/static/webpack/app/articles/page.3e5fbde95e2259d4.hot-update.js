"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/articles/page",{

/***/ "(app-client)/./app/articles/page.jsx":
/*!*******************************!*\
  !*** ./app/articles/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticlesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nasync function ArticlesPage(props) {\n    const articles = await props.params.articles.news;\n    const article = articles[0];\n    console.log(article);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-img\",\n                    children: (article === null || article === void 0 ? void 0 : article.image) != \"None\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: article.image\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 49\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"oops\"\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 79\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-desc\",\n                    children: article === null || article === void 0 ? void 0 : article.description\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-title\",\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                        icon: \"fa-solid fa-arrow-right0\"\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_c = ArticlesPage;\nvar _c;\n$RefreshReg$(_c, \"ArticlesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2FydGljbGVzL3BhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHZ0U7QUFDQTtBQU9qRCxlQUFlRSxhQUFhQyxLQUFLLEVBQUM7SUFDN0MsTUFBTUMsV0FBWSxNQUFNRCxNQUFNRSxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsSUFBSTtJQUNsRCxNQUFNQyxVQUFVSCxRQUFRLENBQUMsRUFBRTtJQUUzQkksUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNJLDhEQUFDRztrQkFDRyw0RUFBQ0g7OzhCQUNHLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDVkwsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTTSxLQUFLLEtBQUksdUJBQVMsOERBQUNDO3dCQUFJQyxLQUFLUixRQUFRTSxLQUFLOzs7Ozs2Q0FBTyw4REFBQ0c7a0NBQUc7Ozs7OzRCQUFTOzs7Ozs7OEJBRTNFLDhEQUFDTDtvQkFBSUMsV0FBVTs4QkFBNEJMLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1UsV0FBVzs7Ozs7OzhCQUMvRCw4REFBQ047b0JBQUlDLFdBQVU7OEJBQTZCTCxRQUFRVyxLQUFLOzs7Ozs7OEJBQ3pELDhEQUFDUDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ1osMkVBQWVBO3dCQUFDbUIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO0tBcEI2QmpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hcnRpY2xlcy9wYWdlLmpzeD82YWMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5cbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIlxuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBBcnRpY2xlc1BhZ2UocHJvcHMpe1xuICAgIGNvbnN0IGFydGljbGVzICA9IGF3YWl0IHByb3BzLnBhcmFtcy5hcnRpY2xlcy5uZXdzXG4gICAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVzWzBdO1xuXG4gICAgY29uc29sZS5sb2coYXJ0aWNsZSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIGFydC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAge2FydGljbGU/LmltYWdlICE9ICdOb25lJyA/IDxpbWcgc3JjPXthcnRpY2xlLmltYWdlfSAvPiA6IDxoMT5vb3BzPC9oMT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gYXJ0LWRlc2NcIj57YXJ0aWNsZT8uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gYXJ0LXRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gYXJ0LW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmYS1zb2xpZCBmYS1hcnJvdy1yaWdodDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd1JpZ2h0IiwiQXJ0aWNsZXNQYWdlIiwicHJvcHMiLCJhcnRpY2xlcyIsInBhcmFtcyIsIm5ld3MiLCJhcnRpY2xlIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZSIsImltZyIsInNyYyIsImgxIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/articles/page.jsx\n"));

/***/ })

});