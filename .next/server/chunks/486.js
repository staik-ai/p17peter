"use strict";
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_": () => (/* binding */ constants)
/* harmony export */ });
const constants = {
  UPDATE_FACTORY_CONTRACT: "UPDATE_FACTORY_CONTRACT",
  UPDATE_TEMPLATE_CONTRACT: "UPDATE_TEMPLATE_CONTRACT",
  UPDATE_METAMASK_ACCOUNT: "UPDATE_METAMASK_ACCOUNT",
  UPDATE_PREVIOUS_CONTRACT: "UPDATE_PREVIOUS_CONTRACT",
  TURN_ON_DANGER_MODE: "TURN_ON_DANGER_MODE",
  TURN_OFF_DANGER_MODE: "TURN_OFF_DANGER_MODE"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constants);

/***/ }),

/***/ 8656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C5": () => (/* binding */ isClient),
/* harmony export */   "nS": () => (/* binding */ getChildProps),
/* harmony export */   "sk": () => (/* binding */ isServer),
/* harmony export */   "v6": () => (/* binding */ parseErrorString)
/* harmony export */ });
/* unused harmony export hasResponseData */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const isClient = () => false;
const isServer = () => true;
const getChildProps = async (ChildClass, appContext) => {
  let childProps = {};

  if (ChildClass.getInitialProps) {
    childProps = await ChildClass.getInitialProps(appContext);
  }

  return _objectSpread({}, childProps);
};
const hasResponseData = err => {
  if (!err.response) return false;
  return strings.isDefined(err.response.data);
};
const parseErrorString = err => {
  let error = hasResponseData(err) ? err.response.data : err.toString();

  if (Array.isArray(error)) {
    error = error[0];
  }

  error = error.replace(/Error: /g, "");
  error = error.replace(/Returned error: /g, "");
  return error;
};

/***/ })

};
;