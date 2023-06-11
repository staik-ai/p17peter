"use strict";
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 8843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Alert_AlertOptionPane)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(8684);
var server_default = /*#__PURE__*/__webpack_require__.n(server_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Alert/AlertContent.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AlertContent extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "disableAlert", async () => {
      return new Promise(resolve => {
        this.setState({
          disabled: true
        }, () => resolve());
      });
    });

    this.state = {
      hidden: true,
      disabled: false
    };
    this.renderContent = this.renderContent.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return {
          hidden: false
        };
      });
    }, AlertContent.ANIMATION_TIME);
  }

  removeAlert() {
    new Promise(resolve => {
      this.setState(() => {
        return {
          hidden: true
        };
      });
      setTimeout(() => {
        resolve();
      }, AlertContent.ANIMATION_TIME);
    }).then(() => {
      this.props.remove();
    });
  }

  renderContent(revealClass = "") {
    let {
      MAIN_CONTAINER,
      BACKDROP,
      CONTENT_CONTAINER,
      HEADER,
      TITLE,
      BUTTON_CONTAINER
    } = AlertContent.CLASS_NAMES;
    let {
      closeIcon,
      titleIcon,
      title,
      message,
      cancelText,
      confirmText,
      cancelButtonId,
      confirmButtonId,
      closeButtonId,
      showCancel,
      onCancel,
      onConfirm,
      onClose
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${BACKDROP} ${revealClass}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${MAIN_CONTAINER} ${revealClass}`,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${HEADER}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [titleIcon, /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: `${TITLE}`,
              children: title
            })]
          }), !this.state.disabled && /*#__PURE__*/jsx_runtime_.jsx("div", {
            id: closeButtonId,
            className: "close",
            onClick: event => {
              onClose !== undefined ? onClose(event, this.removeAlert) : this.removeAlert();
            },
            children: closeIcon
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${CONTENT_CONTAINER}`,
          children: message
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${BUTTON_CONTAINER}`,
          children: [showCancel ? /*#__PURE__*/jsx_runtime_.jsx("button", {
            id: cancelButtonId,
            className: "button secondary",
            disabled: this.state.disabled,
            onClick: event => {
              onCancel !== undefined ? onCancel(event, this.removeAlert, this.disableAlert) : this.removeAlert();
            },
            children: cancelText
          }) : null, /*#__PURE__*/jsx_runtime_.jsx("button", {
            id: confirmButtonId,
            className: "button secondary",
            autoFocus: true,
            disabled: this.state.disabled,
            onClick: event => {
              onConfirm !== undefined ? onConfirm(event, this.removeAlert, this.disableAlert) : this.removeAlert();
            },
            children: this.state.disabled ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "loader-tiny"
            }) : confirmText
          })]
        })]
      })
    });
  }

  render() {
    return this.state.hidden ? this.renderContent(AlertContent.CLASS_NAMES.HIDDEN) : this.renderContent(AlertContent.CLASS_NAMES.VISIBLE);
  }

}

_defineProperty(AlertContent, "CLASS_NAMES", {
  BACKDROP: "alert-backdrop",
  VISIBLE: "alert-visible",
  HIDDEN: "alert-hidden",
  MAIN_CONTAINER: "alert-main",
  CONTENT_CONTAINER: "alert-content",
  HEADER: "alert-header",
  TITLE: "alert-title",
  BUTTON_CONTAINER: "alert-buttons"
});

_defineProperty(AlertContent, "ANIMATION_TIME", 300);

AlertContent.defaultProps = {
  closeIcon: null,
  titleIcon: null,
  title: "",
  cancelText: "",
  confirmText: "",
  cancelButtonId: "",
  confirmButtonId: "",
  closeButtonId: "",
  showCancel: false
};
/* harmony default export */ const Alert_AlertContent = (AlertContent);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(2947);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);
;// CONCATENATED MODULE: ./components/Alert/Alert.js
function Alert_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Alert {
  constructor({
    type = Alert.TYPES.PLAIN,
    message = Alert.DEFAULT_TEXT.MESSAGE,
    title = Alert.DEFAULT_TEXT.TITLE,
    htmlMessage = undefined,
    titleIcon = null,
    closeIcon = /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "fas fa-times"
    }),
    confirmText = Alert.DEFAULT_TEXT.CONFIRM,
    cancelText = Alert.DEFAULT_TEXT.CANCEL,
    className = "",
    callbacks = {
      onCancel: undefined,
      onConfirm: undefined,
      onClose: undefined
    }
  }) {
    Alert.id += 1;
    this.id = Alert.id;
    this.type = type;
    this.title = title;
    this.message = htmlMessage !== undefined ? htmlMessage : /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: message
    });
    this.titleIcon = titleIcon;
    this.closeIcon = closeIcon;
    this.confirmText = confirmText;
    this.onClose = callbacks.onClose;
    this.onConfirm = callbacks.onConfirm;
    this.showCancel = callbacks.onCancel !== undefined;
    this.onCancel = callbacks.onCancel;
    this.className = className;
    this.cancelText = cancelText;
    this.selectors = {
      id: `${this.type}-alert-${this.id}`,
      alertType: `${this.type}-alert`,
      cancelButton: `${this.type}-cancel-${this.id}`,
      confirmButton: `${this.type}-confirm-${this.id}`,
      closeButton: `${this.type}-close-${this.id}`
    };
    this.show = this.show.bind(this);
    this.remove = this.remove.bind(this);
  }

  show() {
    let {
      id,
      alertType,
      confirmButton,
      cancelButton,
      closeButton
    } = this.selectors;
    let {
      ROOT_CONTAINER,
      ALERT_RENDERED,
      SCROLLBAR_FILLER
    } = Alert.CLASS_NAMES;
    let alertRoot = server_default().renderToStaticMarkup( /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: id,
      className: `${ROOT_CONTAINER} ${alertType} ${this.className}`
    }));
    let $body = external_jquery_default()("body");
    $body.append(alertRoot);

    if (!$body.hasClass(ALERT_RENDERED)) {
      $body.addClass(ALERT_RENDERED);

      if (external_jquery_default()(document).height() > external_jquery_default()(window).height()) {
        $body.addClass(SCROLLBAR_FILLER);
      }
    }

    external_jquery_default()("html, body").animate({
      scrollTop: 0
    }, 0);
    external_react_dom_default().render( /*#__PURE__*/jsx_runtime_.jsx(Alert_AlertContent, {
      closeIcon: this.closeIcon,
      titleIcon: this.titleIcon,
      title: this.title,
      cancelText: this.cancelText,
      confirmText: this.confirmText,
      cancelButtonId: cancelButton,
      confirmButtonId: confirmButton,
      closeButtonId: closeButton,
      message: this.message,
      showCancel: this.showCancel,
      onCancel: this.onCancel,
      onConfirm: this.onConfirm,
      onClose: this.onClose,
      remove: this.remove
    }), external_jquery_default()(`#${id}`)[0]);
    return this;
  }

  remove() {
    let $id = external_jquery_default()(`#${this.selectors.id}`);
    external_react_dom_default().unmountComponentAtNode($id[0]);
    $id.remove();
    Alert.id -= 1;

    if (Alert.id === 0) {
      let $body = external_jquery_default()("body");
      $body.removeClass(Alert.CLASS_NAMES.ALERT_RENDERED);
      $body.removeClass(Alert.CLASS_NAMES.SCROLLBAR_FILLER);
    }
  }

}

Alert_defineProperty(Alert, "TYPES", {
  PLAIN: "plain",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success"
});

Alert_defineProperty(Alert, "DEFAULT_TEXT", {
  TITLE: "",
  CONFIRM: "Ok",
  MESSAGE: "",
  CANCEL: "Cancel"
});

Alert_defineProperty(Alert, "CLASS_NAMES", {
  ROOT_CONTAINER: "alert",
  ALERT_RENDERED: "alert-rendered",
  SCROLLBAR_FILLER: "alert-scrollbar-filler"
});

Alert_defineProperty(Alert, "id", 0);

/* harmony default export */ const Alert_Alert = (Alert);
;// CONCATENATED MODULE: ./components/Alert/AlertOptionPane.js
function AlertOptionPane_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AlertOptionPane {}

AlertOptionPane_defineProperty(AlertOptionPane, "showErrorAlert", ({
  message = Alert_Alert.DEFAULT_TEXT.MESSAGE,
  title = "Error",
  titleIcon = /*#__PURE__*/jsx_runtime_.jsx("i", {
    className: "fas fa-exclamation-circle"
  }),
  htmlMessage = undefined,
  confirmText = Alert_Alert.DEFAULT_TEXT.CONFIRM,
  cancelText = Alert_Alert.DEFAULT_TEXT.CANCEL,
  className = "",
  onClose = undefined,
  onConfirm = undefined,
  onCancel = undefined
}) => {
  return new Alert_Alert({
    type: Alert_Alert.TYPES.ERROR,
    message: message,
    htmlMessage: htmlMessage,
    title: title,
    titleIcon: titleIcon,
    confirmText: confirmText,
    cancelText: cancelText,
    className: className,
    callbacks: {
      onClose: onClose,
      onConfirm: onConfirm,
      onCancel: onCancel
    }
  }).show();
});

AlertOptionPane_defineProperty(AlertOptionPane, "showWarningAlert", ({
  message = Alert_Alert.DEFAULT_TEXT.MESSAGE,
  title = "Warning",
  titleIcon = /*#__PURE__*/jsx_runtime_.jsx("i", {
    className: "fas fa-exclamation-circle"
  }),
  htmlMessage = undefined,
  confirmText = Alert_Alert.DEFAULT_TEXT.CONFIRM,
  cancelText = Alert_Alert.DEFAULT_TEXT.CANCEL,
  className = "",
  onClose = undefined,
  onConfirm = undefined,
  onCancel = undefined
}) => {
  return new Alert_Alert({
    type: Alert_Alert.TYPES.WARNING,
    message: message,
    htmlMessage: htmlMessage,
    title: title,
    titleIcon: titleIcon,
    confirmText: confirmText,
    cancelText: cancelText,
    className: className,
    callbacks: {
      onClose: onClose,
      onConfirm: onConfirm,
      onCancel: onCancel
    }
  }).show();
});

AlertOptionPane_defineProperty(AlertOptionPane, "showInfoAlert", ({
  message = Alert_Alert.DEFAULT_TEXT.MESSAGE,
  title = "Information",
  titleIcon = /*#__PURE__*/jsx_runtime_.jsx("i", {
    className: "fas fa-info-circle"
  }),
  htmlMessage = undefined,
  confirmText = Alert_Alert.DEFAULT_TEXT.CONFIRM,
  cancelText = Alert_Alert.DEFAULT_TEXT.CANCEL,
  className = "",
  onClose = undefined,
  onConfirm = undefined,
  onCancel = undefined
}) => {
  return new Alert_Alert({
    type: Alert_Alert.TYPES.INFO,
    message: message,
    htmlMessage: htmlMessage,
    title: title,
    titleIcon: titleIcon,
    confirmText: confirmText,
    cancelText: cancelText,
    className: className,
    callbacks: {
      onClose: onClose,
      onConfirm: onConfirm,
      onCancel: onCancel
    }
  }).show();
});

AlertOptionPane_defineProperty(AlertOptionPane, "showSuccessAlert", ({
  message = Alert_Alert.DEFAULT_TEXT.MESSAGE,
  title = "Success",
  titleIcon = /*#__PURE__*/jsx_runtime_.jsx("i", {
    className: "fas fa-check-circle"
  }),
  htmlMessage = undefined,
  confirmText = Alert_Alert.DEFAULT_TEXT.CONFIRM,
  cancelText = Alert_Alert.DEFAULT_TEXT.CANCEL,
  className = "",
  onClose = undefined,
  onConfirm = undefined,
  onCancel = undefined
}) => {
  return new Alert_Alert({
    type: Alert_Alert.TYPES.SUCCESS,
    message: message,
    htmlMessage: htmlMessage,
    title: title,
    titleIcon: titleIcon,
    confirmText: confirmText,
    cancelText: cancelText,
    className: className,
    callbacks: {
      onClose: onClose,
      onConfirm: onConfirm,
      onCancel: onCancel
    }
  }).show();
});

AlertOptionPane_defineProperty(AlertOptionPane, "showPlainAlert", ({
  message = Alert_Alert.DEFAULT_TEXT.MESSAGE,
  title = Alert_Alert.DEFAULT_TEXT.TITLE,
  htmlMessage = undefined,
  titleIcon = null,
  confirmText = Alert_Alert.DEFAULT_TEXT.CONFIRM,
  cancelText = Alert_Alert.DEFAULT_TEXT.CANCEL,
  className = "",
  onClose = undefined,
  onConfirm = undefined,
  onCancel = undefined
}) => {
  return new Alert_Alert({
    type: Alert_Alert.TYPES.PLAIN,
    message: message,
    htmlMessage: htmlMessage,
    title: title,
    titleIcon: titleIcon,
    confirmText: confirmText,
    cancelText: cancelText,
    className: className,
    callbacks: {
      onClose: onClose,
      onConfirm: onConfirm,
      onCancel: onCancel
    }
  }).show();
});

/* harmony default export */ const Alert_AlertOptionPane = (AlertOptionPane);

/***/ }),

/***/ 9094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Space)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["danger", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Space = _ref => {
  let {
    danger,
    className = ""
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const spaceClass = (0,_services_className__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)({
    "danger": danger
  }, className);
  const fogClass = (0,_services_className__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .AK)({
    "danger": danger
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", _objectSpread(_objectSpread({
    id: "space",
    className: spaceClass
  }, props), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "fog",
      className: fogClass
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "fog-2",
      className: fogClass
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "glow"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "light"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "stars"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "stars-2"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "small-stars"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      id: "small-stars-2"
    })]
  }));
};

/***/ }),

/***/ 7219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_smart_contracts_Web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7205);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8656);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2358);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Alert_AlertOptionPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8843);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function withMetamaskAccount(WrappedComponent) {
  class MetamaskAccount extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "subscribeToAccountUpdate", () => {
        this.handleAccountUpdate = data => {
          const address = !data.selectedAddress ? null : data.selectedAddress.toLowerCase();
          const accountAddress = !this.props.metamaskAccount.address ? null : this.props.metamaskAccount.address.toLowerCase();

          if (address !== accountAddress) {
            return this.dispatchUpdateAccount();
          }
        };

        this.web3.onMetamaskUpdate(this.handleAccountUpdate);
      });

      _defineProperty(this, "dispatchUpdateAccount", async () => {
        return this.web3.fetchAccount().then(account => {
          this.props.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateMetamaskAccount */ .vn)(account));
        }).catch(err => {
          console.error(err);
          this.props.dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__/* .updateMetamaskAccount */ .vn)({}));
        });
      });

      _defineProperty(this, "unsubscribeToAccountUpdate", () => {
        if (this.web3.hasMetaMask()) {
          this.web3.unsubscribeToMetmaskUpdate(this.handleAccountUpdate);
        }
      });

      _defineProperty(this, "isModernDappBrowser", () => window.ethereum);

      _defineProperty(this, "isLegacyDappBrowser", () => window.web3);

      _defineProperty(this, "askForPermission", async () => {
        try {
          await ethereum.enable();
        } catch (err) {
          _Alert_AlertOptionPane__WEBPACK_IMPORTED_MODULE_4__/* ["default"].showInfoAlert */ .Z.showInfoAlert({
            message: "Please note that the site won't work properly without access " + "to your metamask account."
          });
          console.error(err);
          return false;
        }

        return true;
      });
    }

    static async getInitialProps(appContext) {
      return await (0,_services_utils__WEBPACK_IMPORTED_MODULE_6__/* .getChildProps */ .nS)(WrappedComponent, appContext);
    }

    async componentDidMount() {
      this.web3 = _services_smart_contracts_Web3__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getInstance */ .Z.getInstance();

      if (this.isModernDappBrowser()) {
        const hasPermission = await this.askForPermission();

        if (hasPermission) {
          await this.dispatchUpdateAccount();
          this.subscribeToAccountUpdate();
        }
      } else if (this.isLegacyDappBrowser()) {
        await this.dispatchUpdateAccount();
        this.subscribeToAccountUpdate();
      }
    }

    componentWillUnmount() {
      this.unsubscribeToAccountUpdate();
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(WrappedComponent, _objectSpread(_objectSpread({}, this.props), {}, {
        metamaskAccount: this.props.metamaskAccount
      }));
    }

  }

  const mapStateToProps = ({
    metamaskAccount
  }) => ({
    metamaskAccount
  });

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(MetamaskAccount);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withMetamaskAccount);

/***/ }),

/***/ 2358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OL": () => (/* binding */ updatePreviousContract),
/* harmony export */   "_2": () => (/* binding */ updateTemplateContract),
/* harmony export */   "cV": () => (/* binding */ turnOffDangerMode),
/* harmony export */   "gy": () => (/* binding */ updateFactoryContract),
/* harmony export */   "p4": () => (/* binding */ turnOnDangerMode),
/* harmony export */   "vn": () => (/* binding */ updateMetamaskAccount)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(489);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


const turnOnDangerMode = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("body").addClass("danger");
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TURN_ON_DANGER_MODE */ .Z.TURN_ON_DANGER_MODE
  };
};
const turnOffDangerMode = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("body").removeClass("danger");
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].TURN_OFF_DANGER_MODE */ .Z.TURN_OFF_DANGER_MODE
  };
};
const updateMetamaskAccount = metamaskAccount => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UPDATE_METAMASK_ACCOUNT */ .Z.UPDATE_METAMASK_ACCOUNT,
  payload: metamaskAccount
});
const updateFactoryContract = factoryContract => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UPDATE_FACTORY_CONTRACT */ .Z.UPDATE_FACTORY_CONTRACT,
  payload: factoryContract
});
const updateTemplateContract = templateContract => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UPDATE_TEMPLATE_CONTRACT */ .Z.UPDATE_TEMPLATE_CONTRACT,
  payload: templateContract
});
const updatePreviousContract = previousContract => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].UPDATE_PREVIOUS_CONTRACT */ .Z.UPDATE_PREVIOUS_CONTRACT,
  payload: previousContract
});

/***/ }),

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services_Dispatcher)
});

// EXTERNAL MODULE: ./services/smart-contracts/factoryContract.js + 1 modules
var factoryContract = __webpack_require__(5854);
// EXTERNAL MODULE: ./redux/actions.js
var actions = __webpack_require__(2358);
// EXTERNAL MODULE: ./services/smart-contracts/TemplateContract.js + 1 modules
var TemplateContract = __webpack_require__(6896);
;// CONCATENATED MODULE: ./services/smart-contracts/PreviousContract.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PreviousContract extends TemplateContract/* default */.Z {
  constructor(address) {
    super(address);

    _defineProperty(this, "fetch", async () => {
      return Promise.all([this.getAddress(), this.getWinningNumber(), this.getGameEndTime(), this.getLastGuessAddress()]).then(this.arrayToObject);
    });
  }

}

_defineProperty(PreviousContract, "hasContractAddress", []);

_defineProperty(PreviousContract, "instance", null);

_defineProperty(PreviousContract, "getInstance", address => {
  if (PreviousContract.hasContractAddress[address]) {
    return PreviousContract.instance;
  }

  PreviousContract.instance = new PreviousContract(address);
  PreviousContract.hasContractAddress[address] = true;
  return PreviousContract.instance;
});

/* harmony default export */ const smart_contracts_PreviousContract = (PreviousContract);
;// CONCATENATED MODULE: ./services/Dispatcher.js





class Dispatcher {
  static async updateContracts(dispatch) {
    const masterContract = await factoryContract/* default.fetch */.Z.fetch();
    const templateContractRequest = TemplateContract/* default.getInstance */.Z.getInstance(masterContract.latestSpawnedContract);
    const templateContract = await templateContractRequest.fetch();
    dispatch((0,actions/* updateFactoryContract */.gy)(masterContract));
    dispatch((0,actions/* updateTemplateContract */._2)(templateContract));

    if (masterContract.previousContract) {
      const previousContractRequest = smart_contracts_PreviousContract.getInstance(masterContract.previousContract);
      const previousContract = await previousContractRequest.fetch();
      dispatch((0,actions/* updatePreviousContract */.OL)(previousContract));
    }
  }

}

/* harmony default export */ const services_Dispatcher = (Dispatcher);

/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AK": () => (/* binding */ classNames),
/* harmony export */   "Ch": () => (/* binding */ joinClassNames),
/* harmony export */   "uI": () => (/* binding */ spreadClassName)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);

const spreadClassName = (string = "") => {
  return string === "" ? {} : {
    className: string
  };
};
const classNames = (optionalClasses, className2 = "") => {
  return classnames__WEBPACK_IMPORTED_MODULE_0___default()(optionalClasses, className2);
};
const joinClassNames = (className1, className2 = "") => {
  return className2 === "" ? className1 : [className1, className2].join(" ");
};

/***/ }),

/***/ 7186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7205);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Contract {
  constructor(abi, contract) {
    _defineProperty(this, "fetch", async () => {
      return Promise.all([this.getAdmin(), this.getAddress(), this.getBalance()]).then(this.arrayToObject);
    });

    _defineProperty(this, "toMilliseconds", unixEpochTime => {
      return parseInt(unixEpochTime, 10) * 1000;
    });

    _defineProperty(this, "toEth", (wei, decimals = 6) => {
      return parseFloat(parseFloat(this.web3.utils.fromWei(wei)).toFixed(decimals));
    });

    _defineProperty(this, "arrayToObject", responses => {
      if (responses.length > 0) {
        return responses.reduce((accumulator, currentValue) => Object.assign({}, accumulator, currentValue));
      }

      return {};
    });

    _defineProperty(this, "getAdmin", async () => {
      return this.methods.admin().call().then(admin => ({
        admin
      }));
    });

    _defineProperty(this, "getAddress", async () => {
      return this.methods.thisContractAddress().call().then(address => ({
        address
      }));
    });

    _defineProperty(this, "getBalance", async () => {
      return this.methods.thisContractBalance().call().then(balance => ({
        balance: this.toEth(balance)
      }));
    });

    if (contract == "0x0000000000000000000000000000000000000000") {
      contract = "0xC20f8D4030Dae4Bb78Dbf6E620dA82F707F89932";
    }

    this.web3 = _Web3__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getInstance */ .Z.getInstance();
    this.contract = new this.web3.eth.Contract(abi, contract, {
      gasPrice: '18000000000'
    });
    this.methods = this.contract.methods;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contract);

/***/ }),

/***/ 6896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ smart_contracts_TemplateContract)
});

// EXTERNAL MODULE: ./services/smart-contracts/Contract.js
var Contract = __webpack_require__(7186);
;// CONCATENATED MODULE: ./services/smart-contracts/templateAbi.js
const templateAbi = [{
  "constant": false,
  "inputs": [],
  "name": "destroy",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_guess",
    "type": "uint256"
  }],
  "name": "guessNumber",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_admin",
    "type": "address"
  }],
  "name": "setAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "showRandomNumber",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "spawnNewContract",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "spawnNewContractSeventeenGuesses",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "startNewGame",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "name": "_admin",
    "type": "address"
  }],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "",
    "type": "bytes32"
  }],
  "name": "newRandomNumber_bytes",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "name": "",
    "type": "uint256"
  }],
  "name": "newRandomNumber_uint256",
  "type": "event"
}, {
  "constant": true,
  "inputs": [],
  "name": "admin",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "contractHasBeenSpawned",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "costOfNextGuess",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "currentRange",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "factoryAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "fixDevAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameAbandoned",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameEnd",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "guessedCorrectly",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "highValue",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "lastGuessAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "lowValue",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "masterAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "mutex",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "nextGuess",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "randomNumberRetrieved",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "randomPublic",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "theCorrectNumber",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "timeReset",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
;// CONCATENATED MODULE: ./services/smart-contracts/TemplateContract.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TemplateContract extends Contract/* default */.Z {
  constructor(_address) {
    super(templateAbi, _address);

    _defineProperty(this, "fetch", async () => {
      return Promise.all([this.getAdmin(), this.getAddress(), this.getBalance(), this.getLowValue(), this.getHighValue(), this.getCostOfNextGuess(), this.getNextGuess(), this.getLastGuessAddress(), this.getGameEndTime(), this.getGuessedCorrectly(), this.getCorrectNumber(), this.randomNumberWasRetrieved()]).then(this.arrayToObject);
    });

    _defineProperty(this, "makeGuess", async ({
      guessedNumber,
      walletAddress
    }) => {
      return this.methods.costOfNextGuess().call().then(costOfNextGuess => this.methods.guessNumber(guessedNumber).send({
        from: walletAddress,
        value: costOfNextGuess
      }));
    });

    _defineProperty(this, "startNewGame", async address => {
      return this.methods.startNewGame().send({
        from: address
      });
    });

    _defineProperty(this, "startNewGameError", async address => {
      return this.methods.startNewGameError().send({
        from: address
      });
    });

    _defineProperty(this, "randomNumberWasRetrieved", async () => {
      return this.methods.randomNumberRetrieved().call().then(randomNumberRetrieved => ({
        randomNumberRetrieved
      }));
    });

    _defineProperty(this, "getCorrectNumber", async () => {
      return this.methods.theCorrectNumber().call().then(correctNumber => ({
        correctNumber
      }));
    });

    _defineProperty(this, "getGuessedCorrectly", async () => {
      return this.methods.guessedCorrectly().call().then(guessedCorrectly => ({
        guessedCorrectly
      }));
    });

    _defineProperty(this, "getWinningNumber", async () => {
      return this.methods.randomPublic().call().then(winningNumber => ({
        winningNumber: parseInt(winningNumber, 10)
      }));
    });

    _defineProperty(this, "getGameEndTime", async () => {
      return this.methods.gameEnd().call().then(gameEndTime => ({
        gameEndTime: this.toMilliseconds(gameEndTime)
      }));
    });

    _defineProperty(this, "getLastGuessAddress", async () => {
      return this.methods.lastGuessAddress().call().then(lastGuessAddress => ({
        lastGuessAddress
      }));
    });

    _defineProperty(this, "getLowValue", async () => {
      return this.methods.lowValue().call().then(lowValue => ({
        lowValue: parseInt(lowValue, 10)
      }));
    });

    _defineProperty(this, "getHighValue", async () => {
      return this.methods.highValue().call().then(highValue => ({
        highValue: parseInt(highValue, 10)
      }));
    });

    _defineProperty(this, "getNextGuess", async () => {
      return this.methods.nextGuess().call().then(nextGuess => ({
        nextGuess: parseInt(nextGuess, 10)
      }));
    });

    _defineProperty(this, "getCostOfNextGuess", async () => {
      return this.methods.costOfNextGuess().call().then(costOfNextGuess => ({
        costOfNextGuess: this.toEth(costOfNextGuess)
      }));
    });
  }

}

_defineProperty(TemplateContract, "hasContractAddress", []);

_defineProperty(TemplateContract, "instance", null);

_defineProperty(TemplateContract, "getInstance", address => {
  if (TemplateContract.hasContractAddress[address]) {
    return TemplateContract.instance;
  }

  TemplateContract.instance = new TemplateContract(address);
  TemplateContract.hasContractAddress[address] = true;
  return TemplateContract.instance;
});

/* harmony default export */ const smart_contracts_TemplateContract = (TemplateContract);

/***/ }),

/***/ 7205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8656);
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4194);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let instance = null;

const getProvider = () => {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isClient */ .C5)() && window.ethereum) {
    return window.ethereum;
  } else if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isClient */ .C5)() && window.web3) {
    return window.web3.currentProvider;
  }

  return new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(_settings_json__WEBPACK_IMPORTED_MODULE_1__.httpProvider);
};

class CustomWeb3 extends (web3__WEBPACK_IMPORTED_MODULE_0___default()) {
  static getInstance() {
    if (!instance) {
      instance = new CustomWeb3(getProvider());
    }

    return instance;
  }

  constructor(provider) {
    super(provider);

    _defineProperty(this, "hasMetaMask", () => {
      return this.currentProvider.isMetaMask !== undefined;
    });

    _defineProperty(this, "onMetamaskUpdate", callback => {
      if (window.ethereum) {
        window.ethereum.on("accountsChanged", callback);
      }
    });

    _defineProperty(this, "unsubscribeToMetmaskUpdate", callback => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", callback);
      }
    });

    _defineProperty(this, "fetchAccountAddress", () => {
      return this.eth.getAccounts().then(accounts => accounts[0]);
    });

    _defineProperty(this, "fetchEthBalance", accountAddress => {
      return this.eth.getBalance(accountAddress).then(balance => {
        return balance / 1000000000000000000;
      });
    });

    _defineProperty(this, "fetchAccount", () => {
      const account = {
        address: null,
        balance: null,
        network: null
      };
      return this.fetchNetworkId().then(netId => {
        account.network = CustomWeb3.getNetworkName(netId);
        return this.fetchAccountAddress();
      }).then(accountAddress => {
        account.address = accountAddress;
        return this.fetchEthBalance(account.address);
      }).then(balance => {
        account.balance = balance;
        return account;
      });
    });

    _defineProperty(this, "fetchNetworkId", () => {
      return this.eth.net.getId();
    });
  }

  static getNetworkName(networkId) {
    switch (networkId) {
      case 1:
        return "Mainnet";

      case 2:
        return "Morden";

      case 3:
        return "Ropsten";

      case 4:
        return "Rinkeby";

      case 8:
        return "Ubiq";

      case 42:
        return "Kovan";

      case 77:
        return "Sokol";

      case 99:
        return "Core";

      case 7762959:
        return "Musicoin";

      case 61717561:
        return "Aquachain";

      default:
        return "Unknown";
    }
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomWeb3);

/***/ }),

/***/ 5854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ factoryContract)
});

// EXTERNAL MODULE: ./services/smart-contracts/Contract.js
var Contract = __webpack_require__(7186);
// EXTERNAL MODULE: ./settings.json
var settings = __webpack_require__(4194);
;// CONCATENATED MODULE: ./services/smart-contracts/factoryAbi.js
const factoryAbi = [{
  "constant": false,
  "inputs": [],
  "name": "destroy",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "firstSpawn",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "newSpawn",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_admin",
    "type": "address"
  }],
  "name": "setAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_address",
    "type": "address"
  }],
  "name": "setMasterAddress",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "transferEth",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "transferEthSeventeenGuesses",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
}, {
  "constant": true,
  "inputs": [],
  "name": "admin",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "contracts",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "devWallets",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "fixDevAmount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameCost",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "gameLengthSeconds",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getContractCount",
  "outputs": [{
    "name": "contractCount",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getGameCost",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getLatestSpawnedContract",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "",
    "type": "uint256"
  }],
  "name": "guessCost",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "latestSpawnedContract",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "masterAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "previousContract",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractAddress",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "thisContractBalance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
;// CONCATENATED MODULE: ./services/smart-contracts/factoryContract.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  masterContract
} = settings;

class FactoryContract extends Contract/* default */.Z {
  constructor() {
    super(factoryAbi, masterContract);

    _defineProperty(this, "fetch", async () => {
      return Promise.all([this.getAddress(), this.getBalance(), this.getCount(), this.getLatestSpawnedContract(), this.getPreviousContract(), this.getAdmin()]).then(this.arrayToObject);
    });

    _defineProperty(this, "getLatestSpawnedContract", async () => {
      return this.methods.getLatestSpawnedContract().call().then(latestSpawnedContract => ({
        latestSpawnedContract
      }));
    });

    _defineProperty(this, "getPreviousContract", async () => {
      return this.methods.previousContract().call().then(previousContract => ({
        previousContract
      })).catch(() => null);
    });

    _defineProperty(this, "getCount", async () => {
      return this.methods.getContractCount().call().then(count => ({
        count: parseInt(count, 10)
      }));
    });
  }

}

/* harmony default export */ const factoryContract = (new FactoryContract());

/***/ }),

/***/ 1913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_smart_contracts_factoryContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5854);
/* harmony import */ var _services_smart_contracts_TemplateContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6896);
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8656);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_Dispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2214);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4194);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageComponent => {
  class ContractFetcher extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static async getInitialProps(appContext) {
      const {
        reduxStore
      } = appContext;
      await _services_Dispatcher__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateContracts */ .Z.updateContracts(reduxStore.dispatch);
      return await (0,_services_utils__WEBPACK_IMPORTED_MODULE_7__/* .getChildProps */ .nS)(PageComponent, appContext);
    }

    constructor(props) {
      super();

      _defineProperty(this, "addContractUpdateTimer", () => {
        this.timer = setInterval(() => {
          return _services_Dispatcher__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateContracts */ .Z.updateContracts(this.props.dispatch);
        }, _settings__WEBPACK_IMPORTED_MODULE_5__.contractUpdateInterval.seconds * 1000);
      });

      this.templateContractRequest = new _services_smart_contracts_TemplateContract__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(props.factoryContract.latestSpawnedContract);
    }

    componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }

    render() {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(PageComponent, _objectSpread({
        addContractUpdateTimer: this.addContractUpdateTimer,
        templateContractRequest: this.templateContractRequest,
        factoryContractRequest: _services_smart_contracts_factoryContract__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
      }, this.props));
    }

  }

  _defineProperty(ContractFetcher, "mapStateToProps", ({
    factoryContract,
    templateContract,
    previousContract
  }) => ({
    factoryContract,
    templateContract,
    previousContract
  }));

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(ContractFetcher.mapStateToProps)(ContractFetcher);
});

/***/ }),

/***/ 4859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ page_Page)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./site-components/images/Favicon.js



const Favicon = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "144x144",
    href: "/static/images/favicon/android-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/images/favicon/android-icon-192x192.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "36x36",
    href: "/static/images/favicon/android-icon-36x36.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "48x48",
    href: "/static/images/favicon/android-icon-48x48.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "72x72",
    href: "/static/images/favicon/android-icon-72x72.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "96x96",
    href: "/static/images/favicon/android-icon-96x96.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/static/images/favicon/apple-icon-114x114.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/static/images/favicon/apple-icon-120x120.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/static/images/favicon/apple-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/static/images/favicon/apple-icon-152x152.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/images/favicon/apple-icon-180x180.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/static/images/favicon/apple-icon-57x57.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/static/images/favicon/apple-icon-60x60.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/static/images/favicon/apple-icon-72x72.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/static/images/favicon/apple-icon-76x76.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "16x16",
    href: "/static/images/favicon/favicon-16x16.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "32x32",
    href: "/static/images/favicon/favicon-32x32.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "96x96",
    href: "/static/images/favicon/favicon-96x96.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "144x144",
    href: "/static/images/favicon/ms-icon-144x144.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "150x150",
    href: "/static/images/favicon/ms-icon-150x150.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "310x310",
    href: "/static/images/favicon/ms-icon-310x310.png"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    sizes: "70x70",
    href: "/static/images/favicon/ms-icon-70x70.png"
  })]
});
;// CONCATENATED MODULE: ./site-components/page/Head.js






class Head extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "HPB17 - The newest FOMO game for the HPB blockchain"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
        integrity: "sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",
        crossOrigin: "anonymous"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      }), /*#__PURE__*/jsx_runtime_.jsx(Favicon, {}), this.props.children]
    });
  }

}

/* harmony default export */ const page_Head = (Head);
// EXTERNAL MODULE: ./services/className.js
var services_className = __webpack_require__(616);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./site-components/menus/MainMenu.js
const _excluded = ["className", "router"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MainMenu extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getActiveClass", page => {
      return this.props.router.route === page ? "active" : "";
    });
  }

  render() {
    const _this$props = this.props,
          {
      className,
      router
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    return /*#__PURE__*/jsx_runtime_.jsx("nav", _objectSpread({
      className: (0,services_className/* joinClassNames */.Ch)("menu", className)
    }, props));
  }

}

_defineProperty(MainMenu, "defaultProps", {
  className: ""
});

/* harmony default export */ const menus_MainMenu = ((0,router_.withRouter)(MainMenu));
;// CONCATENATED MODULE: ./site-components/images/Logo.js


const Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "logo",
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: "https://hpb17.com",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/static/images/ads/hpb17.png"
      })
    })
  });
};
;// CONCATENATED MODULE: ./site-components/page/Header.js
const Header_excluded = ["children"];

function Header_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Header_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Header_ownKeys(Object(source), !0).forEach(function (key) { Header_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Header_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







class Header extends external_react_.Component {
  render() {
    const _this$props = this.props,
          {
      children
    } = _this$props,
          props = Header_objectWithoutProperties(_this$props, Header_excluded);

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", Header_objectSpread(Header_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        target: "_blank",
        href: "https://t.me/joinchat/IEQSIQ3co32NW-2J",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/favicon/telegram_bot.png",
          alt: "Metamask",
          width: "480",
          height: "60"
        }), "      "]
      }), children, /*#__PURE__*/jsx_runtime_.jsx(menus_MainMenu, {})]
    }));
  }

}

/* harmony default export */ const page_Header = (Header);
;// CONCATENATED MODULE: ./components/icons.js
const icons_excluded = (/* unused pure expression or super */ null && (["className"])),
      _excluded2 = (/* unused pure expression or super */ null && (["className"])),
      _excluded3 = (/* unused pure expression or super */ null && (["className"])),
      _excluded4 = ["className"],
      _excluded5 = ["className"],
      _excluded6 = ["className"],
      _excluded7 = ["className"],
      _excluded8 = ["className"];

function icons_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function icons_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? icons_ownKeys(Object(source), !0).forEach(function (key) { icons_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : icons_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function icons_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function icons_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = icons_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function icons_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Loader = _ref => {
  let {
    className = ""
  } = _ref,
      props = icons_objectWithoutProperties(_ref, icons_excluded);

  return /*#__PURE__*/_jsx("div", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: joinClassNames("loader", className)
  }));
};
const LoaderSmall = _ref2 => {
  let {
    className = ""
  } = _ref2,
      props = icons_objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/_jsx("div", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: joinClassNames("loader-small", className)
  }));
};
const LoaderTiny = _ref3 => {
  let {
    className = ""
  } = _ref3,
      props = icons_objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/_jsx("div", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: joinClassNames("loader-tiny", className)
  }));
};
const Twitter = _ref4 => {
  let {
    className = ""
  } = _ref4,
      props = icons_objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/jsx_runtime_.jsx("i", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: (0,services_className/* joinClassNames */.Ch)("fab fa-twitter", className)
  }));
};
const Medium = _ref5 => {
  let {
    className = ""
  } = _ref5,
      props = icons_objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/jsx_runtime_.jsx("i", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: (0,services_className/* joinClassNames */.Ch)("fab fa-medium", className)
  }));
};
const Reddit = _ref6 => {
  let {
    className = ""
  } = _ref6,
      props = icons_objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/jsx_runtime_.jsx("i", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: (0,services_className/* joinClassNames */.Ch)("fab fa-reddit", className)
  }));
};
const Telegram = _ref7 => {
  let {
    className = ""
  } = _ref7,
      props = icons_objectWithoutProperties(_ref7, _excluded7);

  return /*#__PURE__*/jsx_runtime_.jsx("i", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: (0,services_className/* joinClassNames */.Ch)("fab fa-telegram", className)
  }));
};
const Github = _ref8 => {
  let {
    className = ""
  } = _ref8,
      props = icons_objectWithoutProperties(_ref8, _excluded8);

  return /*#__PURE__*/jsx_runtime_.jsx("i", icons_objectSpread(icons_objectSpread({}, props), {}, {
    className: (0,services_className/* joinClassNames */.Ch)("fab fa-github", className)
  }));
};
;// CONCATENATED MODULE: ./site-components/menus/SocialMenu.js
const SocialMenu_excluded = ["className"];

function SocialMenu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SocialMenu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SocialMenu_ownKeys(Object(source), !0).forEach(function (key) { SocialMenu_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SocialMenu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SocialMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SocialMenu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SocialMenu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SocialMenu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SocialMenu = _ref => {
  let {
    className = ''
  } = _ref,
      props = SocialMenu_objectWithoutProperties(_ref, SocialMenu_excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", SocialMenu_objectSpread(SocialMenu_objectSpread({
    className: (0,services_className/* joinClassNames */.Ch)("social-menu round", className)
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: "https://t.me/hpb17bot",
      children: /*#__PURE__*/jsx_runtime_.jsx(Telegram, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: "https://github.com/hpb17/hpb17/",
      children: /*#__PURE__*/jsx_runtime_.jsx(Github, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: "https://twitter.com/HPB_Global",
      children: /*#__PURE__*/jsx_runtime_.jsx(Twitter, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: "https://www.reddit.com/r/hpb17/",
      children: /*#__PURE__*/jsx_runtime_.jsx(Reddit, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      target: "_blank",
      href: "https://waxlyrical.medium.com/hpb17-the-hottest-new-fomo-game-for-blockchain-8d4298d04736",
      children: /*#__PURE__*/jsx_runtime_.jsx(Medium, {})
    })]
  }));
};
;// CONCATENATED MODULE: ./site-components/page/Footer.js
const Footer_excluded = ["children"];

function Footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Footer_ownKeys(Object(source), !0).forEach(function (key) { Footer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






class Footer extends external_react_.Component {
  render() {
    let _this$props = this.props,
        {
      children
    } = _this$props,
        props = Footer_objectWithoutProperties(_this$props, Footer_excluded);

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", Footer_objectSpread(Footer_objectSpread({}, props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SocialMenu, {}), children]
    }));
  }

}

/* harmony default export */ const page_Footer = (Footer);
;// CONCATENATED MODULE: ./site-components/page/Sidebar.js
const Sidebar_excluded = ["children"];

function Sidebar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Sidebar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Sidebar_ownKeys(Object(source), !0).forEach(function (key) { Sidebar_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Sidebar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Sidebar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Sidebar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Sidebar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




class Sidebar extends external_react_.Component {
  render() {
    const _this$props = this.props,
          {
      children
    } = _this$props,
          props = Sidebar_objectWithoutProperties(_this$props, Sidebar_excluded);

    return /*#__PURE__*/jsx_runtime_.jsx("aside", Sidebar_objectSpread(Sidebar_objectSpread({}, props), {}, {
      children: children
    }));
  }

}

/* harmony default export */ const page_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./site-components/page/Page.js
function Page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Page_ownKeys(Object(source), !0).forEach(function (key) { Page_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Page extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", Page_objectSpread(Page_objectSpread({
      id: "page"
    }, (0,services_className/* spreadClassName */.uI)(this.props.pageClass)), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(page_Head, {
        children: this.props.head
      }), /*#__PURE__*/jsx_runtime_.jsx(page_Header, Page_objectSpread(Page_objectSpread({
        id: "page-header"
      }, (0,services_className/* spreadClassName */.uI)(this.props.headerClass)), {}, {
        children: this.props.header
      })), /*#__PURE__*/jsx_runtime_.jsx("section", Page_objectSpread(Page_objectSpread({
        id: "page-content"
      }, (0,services_className/* spreadClassName */.uI)(this.props.contentClass)), {}, {
        children: this.props.children
      })), /*#__PURE__*/jsx_runtime_.jsx(page_Sidebar, {
        id: "page-sidebar",
        children: this.props.sidebar
      }), /*#__PURE__*/jsx_runtime_.jsx(page_Footer, Page_objectSpread(Page_objectSpread({
        id: "page-footer"
      }, (0,services_className/* spreadClassName */.uI)(this.props.footerClass)), {}, {
        children: this.props.footer
      }))]
    }));
  }

}

Page_defineProperty(Page, "defaultProps", {
  head: null,
  header: null,
  sidebar: null,
  footer: null,
  pageClass: "",
  headerClass: "",
  contentClass: "",
  footerClass: ""
});

/* harmony default export */ const page_Page = (Page);

/***/ }),

/***/ 4194:
/***/ ((module) => {

module.exports = JSON.parse('{"masterContract":"0xed7e73df79149d648f0975978b138c43e73bbb6e","httpProvider":"https://hpbnode.com","etherscanUrl":"https://hscan.org","contractUpdateInterval":{"seconds":3},"randomNumberWaitTime":{"seconds":60},"dangerModeStartTime":{"minutes":3,"seconds":0}}');

/***/ })

};
;