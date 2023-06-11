"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__(489);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
;// CONCATENATED MODULE: ./redux/reducers.js


const initialState = {
  factoryContract: {},
  templateContract: {},
  previousContract: {},
  metamaskAccount: {},
  dangerMode: false
};
const dangerMode = (dangerMode = false, action) => {
  switch (action.type) {
    case constants/* constants.TURN_OFF_DANGER_MODE */._.TURN_OFF_DANGER_MODE:
      return false;

    case constants/* constants.TURN_ON_DANGER_MODE */._.TURN_ON_DANGER_MODE:
      return true;

    default:
      return dangerMode;
  }
};
const metamaskAccount = (metamaskAccount = {}, action) => {
  switch (action.type) {
    case constants/* constants.UPDATE_METAMASK_ACCOUNT */._.UPDATE_METAMASK_ACCOUNT:
      return action.payload;

    default:
      return metamaskAccount;
  }
};
const previousContract = (previousContract = {}, action) => {
  switch (action.type) {
    case constants/* constants.UPDATE_PREVIOUS_CONTRACT */._.UPDATE_PREVIOUS_CONTRACT:
      return action.payload;

    default:
      return previousContract;
  }
};
const factoryContract = (factoryContract = {}, action) => {
  switch (action.type) {
    case constants/* constants.UPDATE_FACTORY_CONTRACT */._.UPDATE_FACTORY_CONTRACT:
      return action.payload;

    default:
      return factoryContract;
  }
};
const templateContract = (templateContract = {}, action) => {
  switch (action.type) {
    case constants/* constants.UPDATE_TEMPLATE_CONTRACT */._.UPDATE_TEMPLATE_CONTRACT:
      return action.payload;

    default:
      return templateContract;
  }
};
/* harmony default export */ const reducers = ((0,external_redux_.combineReducers)({
  factoryContract,
  templateContract,
  metamaskAccount,
  previousContract,
  dangerMode
}));
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: ./redux/store.js





const initStore = (state = initialState) => {
  return (0,external_redux_.createStore)(reducers, state, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_.applyMiddleware)((external_redux_thunk_default()))));
};
// EXTERNAL MODULE: ./services/utils.js
var utils = __webpack_require__(8656);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/hocs/withReduxStore.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  if ((0,utils/* isServer */.sk)()) {
    return initStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ const withReduxStore = (App => {
  return class Redux extends external_react_.Component {
    static async getInitialProps(appContext) {
      const reduxStore = getOrCreateStore();
      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return /*#__PURE__*/jsx_runtime_.jsx(App, _objectSpread(_objectSpread({}, this.props), {}, {
        reduxStore: this.reduxStore
      }));
    }

  };
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function NextApp(props) {
  const {
    Component,
    pageProps,
    reduxStore
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: reduxStore,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ const _app = (withReduxStore(NextApp));

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,544,486], () => (__webpack_exec__(1371)));
module.exports = __webpack_exports__;

})();