webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/searchContainer/list/list.tsx":
/*!**************************************************!*\
  !*** ./components/searchContainer/list/list.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/searchContainer/list/styles.ts");
var _jsxFileName = "/Users/wfaizy/Desktop/github-search-wali-faizy/components/searchContainer/list/list.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // image fetching

var github = '/static/images/github.svg';

var List = function List(props) {
  var data = props.data,
      repos = props.repos,
      isReposLoading = props.isReposLoading; //PROFULE CARD

  var profile = __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "itemctr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "imageCtr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, data && data.avatar_url && __jsx("img", {
    src: data && data.avatar_url,
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "summaryCtr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, data && data.name, "\xA0", data && data.bio && __jsx("span", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "(", data && data.bio || '-', ")")), __jsx("a", {
    href: data && data.html_url,
    target: "_blank",
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "anchor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "View Profile"), __jsx("span", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, ' ', __jsx("strong", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "email: "), " ", data && data.email || '-'))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"])); //REPO LIST


  var reposList = repos && repos.map(function (repo, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "listItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("img", {
      src: github,
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "repoImg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), ' ', __jsx("div", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      href: repo && repo.html_url,
      target: "_blank",
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, repo.html_url), __jsx("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "repoName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("strong", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Repo name"), ": ", repo.name))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
      __self: this
    }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
  });
  return __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, profile, repos && repos.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "repoTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Repository List"), __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "reposWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, isReposLoading ? __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Loading...") : reposList)) : __jsx("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash) + " " + "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "No repository found"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles__WEBPACK_IMPORTED_MODULE_2__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.7cd360a4b624849296e6.hot-update.js.map