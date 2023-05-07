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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArticlesPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ArticlesPage(props) {\n    _s();\n    const articles = props.params.articles.news;\n    const [carouselIdx, setCarouselIdx] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);\n    function handleNavClick(direction) {\n        if (direction == \"right\") {\n            setCarouselIdx(carouselIdx + 1);\n        } else {\n            setCarouselIdx(carouselIdx - 1);\n        }\n    }\n    const article = articles[carouselIdx];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-img\",\n                    children: (article === null || article === void 0 ? void 0 : article.image) != \"None\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: article.image\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 49\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"oops\"\n                    }, void 0, false, {\n                        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 79\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-desc\",\n                    children: article === null || article === void 0 ? void 0 : article.description\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-title\",\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"article-section art-nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            onClick: ()=>handleNavClick(\"right\"),\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight,\n                            style: {\n                                color: \"#ffffff\"\n                            },\n                            size: \"2xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            onClick: ()=>handleNavClick(\"left\"),\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowLeft,\n                            style: {\n                                color: \"#ffffff\"\n                            },\n                            size: \"2xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/madfarm/code-sandbox/Nextjs/backendNextTest/app/articles/page.jsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(ArticlesPage, \"nbhzOQuVE0u17jxAjlUyKfbEA80=\");\n_c = ArticlesPage;\nvar _c;\n$RefreshReg$(_c, \"ArticlesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2FydGljbGVzL3BhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR2dFO0FBQ2E7QUFDNUM7QUFPbEIsU0FBU0ksYUFBYUMsS0FBSyxFQUFDOztJQUN2QyxNQUFNQyxXQUFZRCxNQUFNRSxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsSUFBSTtJQUM1QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFLL0MsU0FBU1EsZUFBZUMsU0FBUyxFQUFFO1FBQy9CLElBQUlBLGFBQWEsU0FBUTtZQUNyQkYsZUFBZUQsY0FBYztRQUNqQyxPQUFPO1lBQ0hDLGVBQWVELGNBQWM7UUFDakMsQ0FBQztJQUNMO0lBRUEsTUFBTUksVUFBVVAsUUFBUSxDQUFDRyxZQUFZO0lBRXJDLHFCQUNJLDhEQUFDSztrQkFDRyw0RUFBQ0Q7OzhCQUNHLDhEQUFDRTtvQkFBSUMsV0FBVTs4QkFDVkgsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTSSxLQUFLLEtBQUksdUJBQVMsOERBQUNDO3dCQUFJQyxLQUFLTixRQUFRSSxLQUFLOzs7Ozs2Q0FBTyw4REFBQ0c7a0NBQUc7Ozs7OzRCQUFTOzs7Ozs7OEJBRTNFLDhEQUFDTDtvQkFBSUMsV0FBVTs4QkFBNEJILG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU1EsV0FBVzs7Ozs7OzhCQUMvRCw4REFBQ047b0JBQUlDLFdBQVU7OEJBQTZCSCxRQUFRUyxLQUFLOzs7Ozs7OEJBQ3pELDhEQUFDUDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNoQiwyRUFBZUE7NEJBQUN1QixTQUFTLElBQU1aLGVBQWU7NEJBQVVhLE1BQU12QiwyRUFBWUE7NEJBQUV3QixPQUFPO2dDQUFDQyxPQUFPOzRCQUFTOzRCQUFHQyxNQUFNOzs7Ozs7c0NBQzlHLDhEQUFDM0IsMkVBQWVBOzRCQUFDdUIsU0FBUyxJQUFNWixlQUFlOzRCQUFTYSxNQUFNdEIsMEVBQVdBOzRCQUFFdUIsT0FBTztnQ0FBQ0MsT0FBTzs0QkFBUzs0QkFBR0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEksQ0FBQztHQWhDdUJ2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXJ0aWNsZXMvcGFnZS5qc3g/NmFjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCJcbmltcG9ydCB7IGZhQXJyb3dSaWdodCwgZmFBcnJvd0xlZnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlc1BhZ2UocHJvcHMpe1xuICAgIGNvbnN0IGFydGljbGVzICA9IHByb3BzLnBhcmFtcy5hcnRpY2xlcy5uZXdzXG4gICAgY29uc3QgW2Nhcm91c2VsSWR4LCBzZXRDYXJvdXNlbElkeF0gPSB1c2VTdGF0ZSgxMClcblxuXG4gICAgXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVOYXZDbGljayhkaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInJpZ2h0XCIpe1xuICAgICAgICAgICAgc2V0Q2Fyb3VzZWxJZHgoY2Fyb3VzZWxJZHggKyAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q2Fyb3VzZWxJZHgoY2Fyb3VzZWxJZHggLSAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVzW2Nhcm91c2VsSWR4XTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1zZWN0aW9uIGFydC1pbWdcIj5cbiAgICAgICAgICAgICAgICAgICAge2FydGljbGU/LmltYWdlICE9ICdOb25lJyA/IDxpbWcgc3JjPXthcnRpY2xlLmltYWdlfSAvPiA6IDxoMT5vb3BzPC9oMT59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gYXJ0LWRlc2NcIj57YXJ0aWNsZT8uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gYXJ0LXRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb24gYXJ0LW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdkNsaWNrKCdyaWdodCcpfSBpY29uPXtmYUFycm93UmlnaHR9IHN0eWxlPXt7Y29sb3I6IFwiI2ZmZmZmZlwifX0gc2l6ZT17XCIyeGxcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZDbGljaygnbGVmdCcpfSBpY29uPXtmYUFycm93TGVmdH0gc3R5bGU9e3tjb2xvcjogXCIjZmZmZmZmXCJ9fSBzaXplPXtcIjJ4bFwifSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPiBcbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd1JpZ2h0IiwiZmFBcnJvd0xlZnQiLCJ1c2VTdGF0ZSIsIkFydGljbGVzUGFnZSIsInByb3BzIiwiYXJ0aWNsZXMiLCJwYXJhbXMiLCJuZXdzIiwiY2Fyb3VzZWxJZHgiLCJzZXRDYXJvdXNlbElkeCIsImhhbmRsZU5hdkNsaWNrIiwiZGlyZWN0aW9uIiwiYXJ0aWNsZSIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZSIsImltZyIsInNyYyIsImgxIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsIm9uQ2xpY2siLCJpY29uIiwic3R5bGUiLCJjb2xvciIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/articles/page.jsx\n"));

/***/ })

});