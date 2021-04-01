webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./components/Button.jsx\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ \"./components/Input.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/mnt/d/vscode/webdev-challenges/Fullstack/my-unsplash/client/components/NavBar.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction NavBar(_ref) {\n  _s();\n\n  var className = _ref.className,\n      onBtnClick = _ref.onBtnClick,\n      filterByTerm = _ref.filterByTerm;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isMenuOpen = _useState[0],\n      setIsMenuOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: className,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"px-2 sm:px-5 py-4 flex justify-between \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/my_unsplash_logo.svg\",\n          alt: \"logo\",\n          lazy: \"true\",\n          className: \"cursor-pointer\",\n          onClick: function onClick() {\n            filterByTerm(\"\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"border border-gray-300 rounded-md hidden sm:inline-flex items-center relative ml-2 hover:\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"w-5 text-gray-400 hover:text-gray-800 absolute left-3 top-1/2 transform -translate-y-1/2\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              xmlns: \"http://www.w3.org/2000/svg\",\n              fill: \"none\",\n              viewBox: \"0 0 24 24\",\n              stroke: \"currentColor\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                strokeLinecap: \"round\",\n                strokeLinejoin: \"round\",\n                strokeWidth: 2,\n                d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"text\",\n            placeholder: \"Search by name\",\n            className: \"pl-11\",\n            value: value,\n            onChange: function onChange(e) {\n              setValue(e.target.value);\n            },\n            onKeyPress: function onKeyPress(e) {\n              if (e.key === \"Enter\" || e.keyCode === 13) {\n                filterByTerm(value);\n                setValue(\"\");\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        className: \"hidden sm:block\",\n        color: \"primary\",\n        onClick: onBtnClick,\n        children: \"Add a photo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"sm:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"w-7 focus:outline-none\",\n          onClick: function onClick() {\n            setIsMenuOpen(function (isMenuOpen) {\n              return !isMenuOpen;\n            });\n          },\n          children: !isMenuOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-7 cursor-pointer\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M4 6h16M4 12h16M4 18h16\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-7 cursor-pointer\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M6 18L18 6M6 6l12 12\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), isMenuOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"sm:hidden shadow-md px-2 py-5 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"border border-gray-300 rounded-md inline-flex items-center relative w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n          className: \"w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          type: \"text\",\n          placeholder: \"Search by name\",\n          className: \"pl-11 w-full\",\n          value: value,\n          onChange: function onChange(e) {\n            setValue(e.target.value);\n          },\n          onKeyPress: function onKeyPress(e) {\n            if (e.key === \"Enter\" || e.keyCode === 13) {\n              filterByTerm(value);\n              setValue(\"\");\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-end\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          className: \"block my-5 \",\n          color: \"primary\",\n          onClick: onBtnClick,\n          children: \"Add a photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NavBar, \"Ed2WlYtQeCr+QGcLHD1Vtqg+rAw=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4PzMzNjYiXSwibmFtZXMiOlsiTmF2QmFyIiwiY2xhc3NOYW1lIiwib25CdG5DbGljayIsImZpbHRlckJ5VGVybSIsInVzZVN0YXRlIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJ2YWx1ZSIsInNldFZhbHVlIiwiZSIsInRhcmdldCIsImtleSIsImtleUNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxTQUF1QztBQUFBLE1BQTVCQyxVQUE0QixRQUE1QkEsVUFBNEI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLGtCQUNsQ0Msc0RBQVEsQ0FBQyxLQUFELENBRDBCO0FBQUEsTUFDL0RDLFVBRCtEO0FBQUEsTUFDbkRDLGFBRG1EOztBQUFBLG1CQUU1Q0Ysc0RBQVEsQ0FBQyxFQUFELENBRm9DO0FBQUEsTUFFL0RHLEtBRitEO0FBQUEsTUFFeERDLFFBRndEOztBQUd0RSxzQkFDRTtBQUFRLGFBQVMsRUFBRVAsU0FBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0U7QUFDRSxhQUFHLEVBQUMsdUJBRE47QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVMsRUFBQyxnQkFKWjtBQUtFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkUsd0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFXRTtBQUFLLG1CQUFTLEVBQUMsMkZBQWY7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsMEZBQWxCO0FBQUEsbUNBQ0U7QUFDRSxtQkFBSyxFQUFDLDRCQURSO0FBRUUs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YXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHsgY2xhc3NOYW1lLCBvbkJ0bkNsaWNrLCBmaWx0ZXJCeVRlcm0gfSkge1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInB4LTIgc206cHgtNSBweS00IGZsZXgganVzdGlmeS1iZXR3ZWVuIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvbXlfdW5zcGxhc2hfbG9nby5zdmdcIlxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgICAgICBsYXp5PVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGZpbHRlckJ5VGVybShcIlwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGhpZGRlbiBzbTppbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmUgbWwtMiBob3ZlcjpcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy01IHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTgwMCBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgbmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTExXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgZmlsdGVyQnlUZXJtKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2tcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBhIHBob3RvXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJc01lbnVPcGVuKChpc01lbnVPcGVuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc01lbnVPcGVuO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyFpc01lbnVPcGVuID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAge2lzTWVudU9wZW4gJiYgKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBzaGFkb3ctbWQgcHgtMiBweS01IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInctNSB0ZXh0LWdyYXktNDAwIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIFwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTIxIDIxbC02LTZtMi01YTcgNyAwIDExLTE0IDAgNyA3IDAgMDExNCAwelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2k+XG5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IG5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0xMSB3LWZ1bGxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJCeVRlcm0odmFsdWUpO1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXktNSBcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgYSBwaG90b1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgKX1cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.jsx\n");

/***/ })

})