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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticlesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function ArticlesPage(props) {\n    _s();\n    const articles = await props.params.articles.news;\n    const [carouselIdx, setCarouselIdx] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5);\n    function handleNavClick(direction) {\n        if (direction == \"right\") {\n            setCarouselIdx();\n        } else {}\n    }\n    const article = articles[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-img\",\n                    children: (article === null || article === void 0 ? void 0 : article.image) != \"None\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: article.image\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 49\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"oops\"\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 79\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-desc\",\n                    children: article === null || article === void 0 ? void 0 : article.description\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-title\",\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            onClick: ()=>handleNavClick(\"right\"),\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight,\n                            style: {\n                                color: \"#ffffff\"\n                            },\n                            size: \"2xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            onClick: ()=>handleNavClick(\"left\"),\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowLeft,\n                            style: {\n                                color: \"#ffffff\"\n                            },\n                            size: \"2xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(ArticlesPage, \"hRNMSJhutAmlU4FxoN0MkrL4/DQ=\");\n_c = ArticlesPage;\nvar _c;\n$RefreshReg$(_c, \"ArticlesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2FydGljbGVzL3BhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR2dFO0FBQ2E7QUFDNUM7QUFPbEIsZUFBZUksYUFBYUMsS0FBSyxFQUFDOztJQUM3QyxNQUFNQyxXQUFZLE1BQU1ELE1BQU1FLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxJQUFJO0lBQ2xELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUsvQyxTQUFTUSxlQUFlQyxTQUFTLEVBQUU7UUFDL0IsSUFBSUEsYUFBYSxTQUFRO1lBQ3JCRjtRQUNKLE9BQU8sQ0FFUCxDQUFDO0lBQ0w7SUFFQSxNQUFNRyxVQUFVUCxRQUFRLENBQUMsRUFBRTtJQUUzQixxQkFDSSw4REFBQ1E7a0JBQ0csNEVBQUNEOzs4QkFDRyw4REFBQ0U7b0JBQUlDLFdBQVU7OEJBQ1ZILENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU0ksS0FBSyxLQUFJLHVCQUFTLDhEQUFDQzt3QkFBSUMsS0FBS04sUUFBUUksS0FBSzs7Ozs7NkNBQU8sOERBQUNHO2tDQUFHOzs7Ozs0QkFBUzs7Ozs7OzhCQUUzRSw4REFBQ0w7b0JBQUlDLFdBQVU7OEJBQTRCSCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNRLFdBQVc7Ozs7Ozs4QkFDL0QsOERBQUNOO29CQUFJQyxXQUFVOzhCQUE2QkgsUUFBUVMsS0FBSzs7Ozs7OzhCQUN6RCw4REFBQ1A7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDaEIsMkVBQWVBOzRCQUFDdUIsU0FBUyxJQUFNWixlQUFlOzRCQUFVYSxNQUFNdkIsMkVBQVlBOzRCQUFFd0IsT0FBTztnQ0FBQ0MsT0FBTzs0QkFBUzs0QkFBR0MsTUFBTTs7Ozs7O3NDQUM5Ryw4REFBQzNCLDJFQUFlQTs0QkFBQ3VCLFNBQVMsSUFBTVosZUFBZTs0QkFBU2EsTUFBTXRCLDBFQUFXQTs0QkFBRXVCLE9BQU87Z0NBQUNDLE9BQU87NEJBQVM7NEJBQUdDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hJLENBQUM7R0FoQzZCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FydGljbGVzL3BhZ2UuanN4PzZhYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiXG5pbXBvcnQgeyBmYUFycm93UmlnaHQsIGZhQXJyb3dMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQXJ0aWNsZXNQYWdlKHByb3BzKXtcbiAgICBjb25zdCBhcnRpY2xlcyAgPSBhd2FpdCBwcm9wcy5wYXJhbXMuYXJ0aWNsZXMubmV3c1xuICAgIGNvbnN0IFtjYXJvdXNlbElkeCwgc2V0Q2Fyb3VzZWxJZHhdID0gdXNlU3RhdGUoNSlcblxuXG4gICAgXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZDbGljayhkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgc2V0Q2Fyb3VzZWxJZHgoKVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhcnRpY2xlID0gYXJ0aWNsZXNbMF07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtc2VjdGlvbiBhcnQtaW1nXCI+XG4gICAgICAgICAgICAgICAgICAgIHthcnRpY2xlPy5pbWFnZSAhPSAnTm9uZScgPyA8aW1nIHNyYz17YXJ0aWNsZS5pbWFnZX0gLz4gOiA8aDE+b29wczwvaDE+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIGFydC1kZXNjXCI+e2FydGljbGU/LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIGFydC10aXRsZVwiPnthcnRpY2xlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIGFydC1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZDbGljaygncmlnaHQnKX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSBzdHlsZT17e2NvbG9yOiBcIiNmZmZmZmZcIn19IHNpemU9e1wiMnhsXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2Q2xpY2soJ2xlZnQnKX0gaWNvbj17ZmFBcnJvd0xlZnR9IHN0eWxlPXt7Y29sb3I6IFwiI2ZmZmZmZlwifX0gc2l6ZT17XCIyeGxcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT4gXG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkZvbnRBd2Vzb21lSWNvbiIsImZhQXJyb3dSaWdodCIsImZhQXJyb3dMZWZ0IiwidXNlU3RhdGUiLCJBcnRpY2xlc1BhZ2UiLCJwcm9wcyIsImFydGljbGVzIiwicGFyYW1zIiwibmV3cyIsImNhcm91c2VsSWR4Iiwic2V0Q2Fyb3VzZWxJZHgiLCJoYW5kbGVOYXZDbGljayIsImRpcmVjdGlvbiIsImFydGljbGUiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJoMSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJvbkNsaWNrIiwiaWNvbiIsInN0eWxlIiwiY29sb3IiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/articles/page.jsx\n"));

/***/ })

});