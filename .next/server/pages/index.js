"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./site-components/page/Page.js + 9 modules
var Page = __webpack_require__(4859);
// EXTERNAL MODULE: ./site-components/hocs/withContracts.js
var withContracts = __webpack_require__(1913);
// EXTERNAL MODULE: ./components/hocs/withMetamaskAccount.js
var withMetamaskAccount = __webpack_require__(7219);
// EXTERNAL MODULE: ./redux/actions.js
var actions = __webpack_require__(2358);
// EXTERNAL MODULE: ./services/utils.js
var utils = __webpack_require__(8656);
// EXTERNAL MODULE: ./components/Alert/AlertOptionPane.js + 2 modules
var AlertOptionPane = __webpack_require__(8843);
// EXTERNAL MODULE: ./settings.json
var settings = __webpack_require__(4194);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./site-components/Alerts.js






const TransactionHash = ({
  transaction
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "mb-0",
      children: "Transaction Hash:"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "lighter",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        style: {
          wordBreak: "break-all"
        },
        href: `${settings.etherscanUrl}/tx/${transaction.transactionHash}`,
        children: transaction.transactionHash
      })
    })]
  });
};

class Alerts {
  static showOraclizeError(transaction) {
    return AlertOptionPane/* default.showErrorAlert */.Z.showErrorAlert({
      title: "Oraclize Error",
      titleIcon: null,
      htmlMessage: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Unfortunately, we were unable to retrieve a random number from the HPB HRNG to start a new game."
        }), /*#__PURE__*/jsx_runtime_.jsx(TransactionHash, {
          transaction: transaction
        })]
      })
    });
  }

  static showNewGameCreated(transaction) {
    return AlertOptionPane/* default.showSuccessAlert */.Z.showSuccessAlert({
      title: "You have started a new game!",
      titleIcon: null,
      htmlMessage: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "A new game has now been started"
        }), /*#__PURE__*/jsx_runtime_.jsx(TransactionHash, {
          transaction: transaction
        })]
      })
    });
  }

  static showGuessResults(transaction, templateContract) {
    // if(templateContract.correctNumber === guess){
    //     return AlertOptionPane.showSuccessAlert({
    //         title: "You guessed correctly!",
    //         titleIcon: null,
    //         htmlMessage: (
    //             <div>
    //                 <p>
    //                     Congratulations! You guessed correctly! Please click on the "Start New Game" button
    //                     which will initiate the transfer of Eth from the smart contract to your wallet.
    //                 </p>
    //                 <TransactionHash transaction={transaction}/>
    //             </div>
    //         )
    //     });
    // }
    return AlertOptionPane/* default.showSuccessAlert */.Z.showSuccessAlert({
      title: "Transaction Completed",
      titleIcon: null,
      htmlMessage: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [templateContract.nextGuess < 18 ? /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "If your guess was successful, you will be informed in a few moments. If you guessed incorrectly, the timer will reset and the game will be available for another guess, but don\u2019t sweat it... Remember that if the countdown timer reaches 00:00 and nobody else makes a guess, you\u2019ll win all the HPB in the contract anyway!"
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "If your guess was successful, you will be informed in a few moments. If you guessed incorrectly, the game will have ended without a winner. If you would be so kind to click on the \"Start New Game\" button and generate a new HPB17 game contract, we will automatically refund you your HPB! We hope you enjoyed playing, and hope you\u2019ll join us for the next game. Remember the first guess of every game is free!"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(TransactionHash, {
          transaction: transaction
        })]
      })
    });
  }

}

/* harmony default export */ const site_components_Alerts = (Alerts);
// EXTERNAL MODULE: ./services/Dispatcher.js + 1 modules
var Dispatcher = __webpack_require__(2214);
// EXTERNAL MODULE: ./services/className.js
var services_className = __webpack_require__(616);
;// CONCATENATED MODULE: ./components/PositiveIntegerInput.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const filterObject = (objectToFilter, objectToFilterOut) => {
  let filteredObject = {};
  Object.keys(objectToFilter).filter(key => !Object.keys(objectToFilterOut).includes(key)).forEach(key => {
    filteredObject[key] = objectToFilter[key];
  });
  return filteredObject;
};

class PositiveIntegerInput extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getValueToDisplay = this.getValueToDisplay.bind(this);
  }

  handleKeyDown(event) {
    if (event.target.value === '') {
      this.props.onCorrectInput(event);
      this.setState({
        value: event.target.value
      });
    } else if (!/^\d+$/.test(event.target.value)) {
      this.props.onIncorrectInput(event);
    } else if (event.target.value.startsWith('00')) {
      this.props.onIncorrectInput(event);
    } else {
      let {
        lowestDigit,
        highestDigit
      } = this.props;
      let keyPressed = parseFloat(event.target.value);

      if (event.target.value.startsWith('0') && event.target.value.length > 1) {
        if (!event.target.value.startsWith("0.")) {
          return this.props.onIncorrectInput(event);
        }
      }

      if (isNaN(keyPressed)) {
        this.props.onIncorrectInput(event);
        return;
      }

      let cannotMatchLowYet = event.target.value.length < lowestDigit.toString().length;
      let isAboveOrEqualToLow = keyPressed >= lowestDigit || cannotMatchLowYet;
      let dontMatchHigh = highestDigit <= 0;
      let isBelowOrEqualToHigh = keyPressed <= highestDigit || dontMatchHigh;
      let numberIsInRange = isAboveOrEqualToLow && isBelowOrEqualToHigh;

      if (!numberIsInRange) {
        this.props.onIncorrectInput(event);
      } else {
        this.props.onCorrectInput(event);
        this.setState({
          value: event.target.value
        });
      }
    }
  }

  getValueToDisplay() {
    if (this.props.value) {
      return this.props.value;
    } else if (this.state.value) {
      return this.state.value;
    }

    return this.props.defaultValue !== '0' ? this.props.defaultValue : this.props.value;
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread(_objectSpread({
      type: "text"
    }, filterObject(this.props, PositiveIntegerInput.defaultProps)), {}, {
      className: (0,services_className/* joinClassNames */.Ch)("input", this.props.className),
      onChange: this.handleKeyDown,
      value: this.getValueToDisplay()
    }));
  }

}

_defineProperty(PositiveIntegerInput, "defaultProps", {
  lowestDigit: 0,
  highestDigit: 0,
  value: '',
  defaultValue: '',
  className: '',
  onIncorrectInput: event => {
    event.preventDefault();
  },
  onCorrectInput: () => {}
});

/* harmony default export */ const components_PositiveIntegerInput = (PositiveIntegerInput);
// EXTERNAL MODULE: ./components/containers/Message.js
var Message = __webpack_require__(6582);
// EXTERNAL MODULE: ./site-components/messages.js
var messages = __webpack_require__(7079);
;// CONCATENATED MODULE: ./components/Button.js
const _excluded = ["className", "loading", "outlined", "message", "segment", "disabled", "children"];

function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Button_ownKeys(Object(source), !0).forEach(function (key) { Button_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = _ref => {
  let {
    className,
    loading = false,
    outlined = false,
    message = false,
    segment = false,
    disabled = false,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const buttonClass = (0,services_className/* classNames */.AK)({
    "button": true,
    "message": message,
    "segment": segment,
    "outlined": outlined,
    "loading": loading,
    "disabled": disabled
  }, className);
  return /*#__PURE__*/jsx_runtime_.jsx("button", Button_objectSpread(Button_objectSpread({
    disabled: disabled,
    className: buttonClass
  }, props), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./site-components/containers/GuessForm.js
function GuessForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function GuessForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? GuessForm_ownKeys(Object(source), !0).forEach(function (key) { GuessForm_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : GuessForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function GuessForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class GuessForm extends external_react_.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.defaultGuess !== state.defaultGuess) {
      return GuessForm_objectSpread(GuessForm_objectSpread({}, state), {}, {
        guess: props.defaultGuess,
        defaultGuess: props.defaultGuess
      });
    }

    return null;
  }

  constructor(props) {
    super();

    GuessForm_defineProperty(this, "renderMessage", () => {
      const {
        lowValue,
        highValue
      } = this.props;
      return this.state.isHandlingGuess ? /*#__PURE__*/jsx_runtime_.jsx(messages/* TransactionMessage */.$Z, {}) : /*#__PURE__*/jsx_runtime_.jsx(Message/* Message */.v, {
        show: this.state.formInvalid,
        className: "message-secondary",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "normal",
          children: ["The guess must be between ", lowValue, " and ", highValue]
        })
      });
    });

    GuessForm_defineProperty(this, "handleGuess", () => {
      const {
        lowValue,
        highValue
      } = this.props;
      const guess = parseFloat(this.state.guess);

      if (guess < lowValue || guess > highValue || this.state.guess === "") {
        this.setState({
          formInvalid: true,
          isHandlingGuess: false
        });
      } else {
        return this.props.onGuess(this.state.guess).then(() => this.setState({
          isHandlingGuess: false
        }));
      }
    });

    this.state = {
      formInvalid: false,
      isHandlingGuess: false,
      guess: props.defaultGuess,
      defaultGuess: props.defaultGuess
    };
  }

  render() {
    const {
      highValue
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "input-with-button divider-2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_PositiveIntegerInput, {
          className: this.state.formInvalid ? "invalid" : "",
          highestDigit: highValue,
          disabled: this.state.isHandlingGuess,
          value: this.state.guess,
          onIncorrectInput: () => {
            this.setState({
              formInvalid: true
            });
          },
          onCorrectInput: event => {
            this.setState({
              formInvalid: false,
              guess: event.target.value
            });
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
          className: "secondary",
          loading: this.state.isHandlingGuess,
          disabled: this.state.isHandlingGuess,
          onClick: () => {
            this.setState({
              isHandlingGuess: true
            }, () => {
              this.handleGuess();
            });
          },
          children: "Guess"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wrapper-4",
        children: this.renderMessage()
      })]
    });
  }

}

/* harmony default export */ const containers_GuessForm = (GuessForm);
// EXTERNAL MODULE: ./site-components/Address.js
var Address = __webpack_require__(678);
;// CONCATENATED MODULE: ./components/containers/HideFragment.js
function HideFragment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Hides an element which may change between the initial server and client
 * side rendering.
 */



class HideFragment extends external_react_.Component {
  constructor(...args) {
    super(...args);

    HideFragment_defineProperty(this, "state", {
      hide: true
    });
  }

  componentDidMount() {
    this.setState({
      hide: false
    });
  }

  render() {
    return !this.state.hide ? /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
      children: this.props.children
    }) : null;
  }

}

/* harmony default export */ const containers_HideFragment = (HideFragment);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./external-components/react-flip-counter/Flipper/schema.js

/* harmony default export */ const schema = ({
  types: {
    reverse: external_prop_types_namespaceObject.bool,
    now: external_prop_types_namespaceObject.number,
    min: external_prop_types_namespaceObject.number,
    max: external_prop_types_namespaceObject.number
  },
  defaults: {
    reverse: false,
    now: 0,
    min: 0,
    max: 9
  }
});
;// CONCATENATED MODULE: ./external-components/react-flip-counter/Flipper/index.js





class Flipper extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {object} toggle - flag for switching index of current digit index
     */

    this.state = {};
  }
  /**
   * Inverse state.toggle flag
   */


  tick() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  /**
   * Returns next/prev value of digits linked list
   * @param {number} current - currently active value
   * @param {string} direction - list move direction
   * @return {number} linked list value
   */


  getCount(current, direction) {
    let isRev = this.props.reverse,
        isNext = direction == "next",
        head = this.props[isRev ? "min" : "max"],
        tail = this.props[isRev ? "max" : "min"];
    return isNext ? current == head ? tail : current + (isRev ? -1 : 1) : current == tail ? head : current + (isRev ? 1 : -1);
  }
  /**
   * Execute flip action in "props.now" value has been changed
   * @param {object} newProps - next props object
   */


  componentWillReceiveProps(newProps) {
    newProps.now !== this.props.now && this.tick();
  }
  /**
   * Generate semi linked list structure with siblings of active number
   * Index of active number depends of "state.toggle" flag
   * @param {object} newProps - next props object
   * @return {array} linked list slice
   */


  getRange(initial) {
    let prev = this.getCount(initial, "prev"),
        arr = [initial, prev, this.getCount(prev, "prev")];
    arr[!this.state.toggle ? "unshift" : "push"](!this.state.toggle ? this.getCount(initial, "next") : this.getCount(prev, "prev"));
    return arr;
  }
  /**
   * Render card sets for number
   * @return {ReactElement} markup
   */


  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()("cards", this.props.className),
      children: this.getRange(this.props.now).map((val, i) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()("card", this.props.cardClassName, {
            "now": val == this.props.now
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_classnames_default()("sides", this.props.sidesWrapClassName),
            children: ["front", "back"].map(key => /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: external_classnames_default()("side", this.props.sideClassName, key),
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: external_classnames_default()("side-num", this.props.numClassName),
                children: key == "front" ? val : this.getCount(val, "next")
              })
            }, `side${key}`))
          })
        }, `flip-card${i}`);
      })
    });
  }

}

;
Flipper.defaultProps = schema.defaults;
/* harmony default export */ const react_flip_counter_Flipper = (Flipper);
;// CONCATENATED MODULE: ./external-components/react-flip-counter/schema.js

/* harmony default export */ const react_flip_counter_schema = ({
  types: {
    stop: external_prop_types_default().instanceOf(Date),
    onStart: (external_prop_types_default()).func,
    onStop: (external_prop_types_default()).func,
    isStopped: (external_prop_types_default()).bool,
    notifyAt: (external_prop_types_default()).number,
    notify: (external_prop_types_default()).func,
    hasNotified: (external_prop_types_default()).bool
  },
  defaults: {
    stop: new Date("Mon Nov 30 2020 00:00:00 GMT+0300 (MSK)")
  }
});
;// CONCATENATED MODULE: ./external-components/react-flip-counter/index.js






class Countdown extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {object} diff - initial diff object
     */

    this.state = {
      diff: this.getDiffObject()
    };
  }
  /**
   * Create second interval
   */


  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        diff: this.getDiffObject()
      });
      this.isTimeOver() && this.stopCount();

      if (this.isTimeToNotify()) {
        this.notify();
      }

      this.isTimeOver() && this.stopCount();
    }, 1000);
  }

  notify() {
    if (!this.props.hasNotified) {
      this.props.notify();
    }
  }
  /**
   * Clears interval and drop notification
   */


  stopCount() {
    if (!this.props.isStopped) {
      this.props.onStop && this.props.onStop();
    }
  }
  /**
   * Destroy second interval
   */


  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  /**
   * Calculate diff object between stop and current date
   * @return {Object} formatted value
   */


  getDiffObject() {
    let ms = Math.abs(this.props.stop.getTime() - new Date().getTime()),
        s = Math.floor(ms / 1000),
        m = Math.floor(s / 60),
        h = Math.floor(m / 60),
        d = Math.floor(h / 24);
    return {
      hours: h % 24,
      minutes: m % 60,
      seconds: s % 60
    };
  }

  isTimeToNotify() {
    if (!this.props.notifyAt) return false;
    return new Date().getTime() + this.props.notifyAt > this.props.stop.getTime();
  }
  /**
   * Return flag stop date reached
   * @return {Boolean}
   */


  isTimeOver() {
    return new Date().getTime() > this.props.stop.getTime();
  }
  /**
   * Returns formated to 2 digits string
   * @param {Number} data - raw value
   * @return {String} formatted value
   */


  getFormattedVal(data) {
    return (data < 10 ? "0" + data : data) + "";
  }
  /**
   * Render Flipper component for each digit of diff object vals
   * @return {ReactElement} markup
   */


  render() {
    let forks = {
      hours: [[0, 2], [0, 4]],
      minutes: [[0, 5], [0, 9]],
      seconds: [[0, 5], [0, 9]]
    },
        isOver = this.isTimeOver();
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()("countdown", this.props.className),
      children: Object.keys(this.state.diff).map(key => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: external_classnames_default()(`countdown-${key}`, this.props.slotClassName),
        children: Array(2).fill(0).map((_, i) => /*#__PURE__*/jsx_runtime_.jsx(react_flip_counter_Flipper, {
          reverse: true,
          className: this.props.cardsClassName,
          cardClassName: this.props.cardClassName,
          sidesWrapClassName: this.props.sidesWrapClassName,
          sideClassName: this.props.sideClassName,
          numClassName: this.props.numClassName,
          now: !isOver ? +this.getFormattedVal(this.state.diff[key])[i] : 0,
          min: forks[key][i][0],
          max: forks[key][i][1]
        }, `${key}${i}`))
      }, key))
    });
  }

}

;
Countdown.defaultProps = react_flip_counter_schema.defaults;
/* harmony default export */ const react_flip_counter = (Countdown);
;// CONCATENATED MODULE: ./site-components/containers/GameDetails.js






const GameDetails = ({
  nextGuess,
  lowValue,
  highValue,
  metamaskAddress,
  costOfNextGuess,
  lastGuessAddress,
  counterIsStopped,
  onCounterStop = () => {},
  gameEndTime,
  hasNotified,
  notify,
  notifyAt,
  balance
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["The correct number is between ", lowValue, " and ", highValue]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["The next guess will be guess ", nextGuess, " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["cost of next guess: ", costOfNextGuess === 0 ? "FREE!" : `${costOfNextGuess} HPB`]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["The last HPB wallet address to make a guess was: ", /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: lastGuessAddress === "0x0000000000000000000000000000000000000000" ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Nobody has made a guess yet!"
        }) : metamaskAddress === lastGuessAddress ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "YOU, my friend!"
        }) : /*#__PURE__*/jsx_runtime_.jsx(Address/* Address */.k, {
          address: lastGuessAddress
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "divider-2",
      children: /*#__PURE__*/jsx_runtime_.jsx(containers_HideFragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_flip_counter, {
          isStopped: counterIsStopped,
          onStop: onCounterStop,
          stop: new Date(gameEndTime),
          hasNotified: hasNotified,
          notifyAt: notifyAt,
          notify: notify
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["Amount of HPB currently stored in this contract: ", balance]
    }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Remember, even if you guess incorrectly, you will still win the HPB if the countdown timer reaches zero!"
    })]
  });
};
;// CONCATENATED MODULE: ./site-components/containers/AdContainer.js
const AdContainer_excluded = ["className", "children"];

function AdContainer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function AdContainer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AdContainer_ownKeys(Object(source), !0).forEach(function (key) { AdContainer_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AdContainer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function AdContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AdContainer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AdContainer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AdContainer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AdContainer = _ref => {
  let {
    className = "",
    children
  } = _ref,
      props = AdContainer_objectWithoutProperties(_ref, AdContainer_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", AdContainer_objectSpread(AdContainer_objectSpread({
    className: (0,services_className/* joinClassNames */.Ch)("ad", className)
  }, props), {}, {
    children: children
  }));
};
;// CONCATENATED MODULE: ./site-components/images/AdSidebar.js




const AdSidebar = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(AdContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        href: "https://t.me/HPBglobal",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ads/hpbtelegram.png"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        href: "https://hpbcentral.com",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ads/HPBcentral.png"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        href: "https://waxlyrical.medium.com",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ads/waxlyrical.png"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        href: "https://www.gate.io/en/coininfo/HPB",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ads/gateio.png"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        href: "https://trade.kucoin.com/HPB-BTC",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ads/kucoin.png"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AdContainer, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        target: "_blank",
        href: "https://mytrade.org/",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/static/images/ads/mytrade.png"
        })
      })
    })]
  });
};
;// CONCATENATED MODULE: ./site-components/containers/StartNewGame.js







const StartNewGame = ({
  isWaitingForRandomNumber,
  oraclizeError,
  startingGame,
  gameWinner,
  metamaskAddress,
  onClick
}) => {
  const startNewGameButton = title => {
    return /*#__PURE__*/jsx_runtime_.jsx(Button, {
      loading: startingGame || isWaitingForRandomNumber,
      disabled: startingGame,
      className: "primary",
      onClick: onClick,
      children: title
    });
  };

  if (isWaitingForRandomNumber) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(messages/* RandomNumberWaitMessage */.F9, {}), startNewGameButton("Start New Game")]
    });
  } else if (oraclizeError) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(messages/* OraclizeErrorMessage */.qV, {}), startNewGameButton("Start New Game")]
    });
  }

  return gameWinner === metamaskAddress ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "wrapper-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Message/* Message */.v, {
      className: "message-success mb-20",
      heading: "Contratulations!",
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Congratulations! You won the game, click on the Claim Prize button to collect your HPB!"
      })
    }), startNewGameButton("Claim Prize")]
  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "The game has now completed"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
      children: ["Wallet address ", /*#__PURE__*/jsx_runtime_.jsx(Address/* Address */.k, {
        address: gameWinner
      }), " was the winner!"]
    }), !metamaskAddress ? /*#__PURE__*/jsx_runtime_.jsx(messages/* LoginMessage */.gB, {}) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "It looks like the winner hasn't claimed their prize just yet, which means a new game hasn't been generated. If you don't want to wait, you can click the New Game button to generate a new smart contract and start a completely new game. A small fee will apply to generate a new smart contract game."
      }), startNewGameButton("Start New Game")]
    })]
  });
};
// EXTERNAL MODULE: ./components/Moment.js
var Moment = __webpack_require__(5315);
// EXTERNAL MODULE: ./components/Space.js
var Space = __webpack_require__(9094);
;// CONCATENATED MODULE: ./pages/index.js
function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? pages_ownKeys(Object(source), !0).forEach(function (key) { pages_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























class Index extends external_react_.Component {
  constructor(props) {
    super();

    pages_defineProperty(this, "timerIsStopped", () => {
      return Date.now() > this.props.templateContract.gameEndTime;
    });

    pages_defineProperty(this, "handleGuess", async guess => {
      return this.props.templateContractRequest.makeGuess({
        guessedNumber: guess,
        walletAddress: this.props.metamaskAccount.address
      }).then(transaction => this.handleTransaction(transaction, parseInt(guess, 10))).then(() => this.props.dispatch((0,actions/* turnOffDangerMode */.cV)())).catch(this.handleTransactionError);
    });

    pages_defineProperty(this, "handleTransactionError", err => {
      console.error(err);
      AlertOptionPane/* default.showErrorAlert */.Z.showErrorAlert({
        title: "Transaction Error",
        message: (0,utils/* parseErrorString */.v6)(err)
      });
    });

    pages_defineProperty(this, "handleTransaction", async (transaction, guess) => {
      return this.props.templateContractRequest.fetch().then(templateContract => {
        this.props.dispatch((0,actions/* updateTemplateContract */._2)(templateContract));
        site_components_Alerts.showGuessResults(transaction, this.props.templateContract, guess);

        if (this.gameIsOver()) {
          return this.handleGameOver();
        }
      });
    });

    pages_defineProperty(this, "handleGameOver", async () => {
      return Dispatcher/* default.updateContracts */.Z.updateContracts(this.props.dispatch);
    });

    pages_defineProperty(this, "gameIsOver", () => {
      const {
        templateContract
      } = this.props;
      return templateContract.nextGuess > 1 && templateContract.gameEndTime > 0 && Date.now() > templateContract.gameEndTime || templateContract.guessedCorrectly || !templateContract.randomNumberRetrieved || this.state.isWaitingForRandomNumber;
    });

    pages_defineProperty(this, "calcDefaultGuess", () => {
      return (this.props.templateContract.lowValue + (this.props.templateContract.highValue - this.props.templateContract.lowValue - 1) / 2).toFixed(0);
    });

    pages_defineProperty(this, "waitForRandomNumber", async () => new Promise(resolve => {
      let tries = 0;
      let maxTries = settings.randomNumberWaitTime.seconds;
      this.timer = setInterval(() => {
        tries++;
        Dispatcher/* default.updateContracts */.Z.updateContracts(this.props.dispatch);

        if (this.props.templateContract.randomNumberRetrieved || tries >= maxTries) {
          this.setState({
            isWaitingForRandomNumber: false
          });
          resolve(clearInterval(this.timer));
        }
      }, 1000);
    }));

    pages_defineProperty(this, "handleStartNewGame", () => {
      this.props.dispatch((0,actions/* turnOffDangerMode */.cV)());
      this.setState({
        isHandlingTransaction: true
      }, () => {
        const startNewGameMethod = !this.props.templateContract.randomNumberRetrieved ? this.props.templateContractRequest.startNewGameError : this.props.templateContractRequest.startNewGame;
        return startNewGameMethod(this.props.metamaskAccount.address).then(transaction => {
          this.setState({
            isWaitingForRandomNumber: true
          });
          return Dispatcher/* default.updateContracts */.Z.updateContracts(this.props.dispatch).then(() => transaction);
        }).then(transaction => this.waitForRandomNumber().then(() => transaction)).then(transaction => this.props.templateContract.randomNumberRetrieved ? site_components_Alerts.showNewGameCreated(transaction) : site_components_Alerts.showOraclizeError(transaction)).catch(this.handleTransactionError).finally(() => this.setState({
          isHandlingTransaction: false
        }));
      });
    });

    pages_defineProperty(this, "renderPreviousContractInformation", previousContract => {
      return /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "list-table",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Contract address:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                target: "_blank",
                href: `${settings.etherscanUrl}/address/${previousContract.address}`,
                children: /*#__PURE__*/jsx_runtime_.jsx(Address/* Address */.k, {
                  address: previousContract.address
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Winning Number:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: previousContract.winningNumber
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Last Guess Address:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Address/* Address */.k, {
                address: previousContract.lastGuessAddress
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              children: "Game End Time:"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: /*#__PURE__*/jsx_runtime_.jsx(Moment/* Moment */.W, {
                unixTime: previousContract.gameEndTime
              })
            })]
          })]
        })
      });
    });

    this.state = {
      isHandlingTransaction: false,
      isWaitingForRandomNumber: false
    };
    this.defaultGuess = (props.templateContract.lowValue + (props.templateContract.highValue - props.templateContract.lowValue - 1) / 2).toFixed(0);
    this.dangerModeStartTime = settings.dangerModeStartTime.minutes * 60000 + settings.dangerModeStartTime.seconds * 1000;
  }

  componentWillMount() {
    this.props.addContractUpdateTimer();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const {
      factoryContract,
      templateContract,
      metamaskAccount
    } = this.props;
    const isLoggedIntoMetamask = Object.keys(metamaskAccount).length > 0;
    const {
      previousContract
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Page/* default */.Z, {
      header: /*#__PURE__*/jsx_runtime_.jsx(Space/* Space */.T, {
        danger: this.props.dangerMode
      }),
      sidebar: /*#__PURE__*/jsx_runtime_.jsx(AdSidebar, {}),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "glass container bg-color-white br-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "display-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            href: `${settings.etherscanUrl}/address/${templateContract.address}`,
            target: "_blank",
            children: ["Game Number ", factoryContract.count]
          })
        }), this.gameIsOver() ? /*#__PURE__*/jsx_runtime_.jsx(StartNewGame, {
          isWaitingForRandomNumber: this.state.isWaitingForRandomNumber,
          oraclizeError: !this.props.templateContract.randomNumberRetrieved,
          startingGame: this.state.isHandlingTransaction,
          metamaskAddress: metamaskAccount.address,
          gameWinner: templateContract.lastGuessAddress,
          onClick: this.handleStartNewGame
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(GameDetails, pages_objectSpread(pages_objectSpread({}, templateContract), {}, {
            metamaskAddress: metamaskAccount.address,
            counterIsStopped: this.timerIsStopped(),
            onCounterStop: this.handleGameOver,
            hasNotified: this.props.dangerMode || this.timerIsStopped(),
            notifyAt: this.dangerModeStartTime,
            notify: () => this.props.dispatch((0,actions/* turnOnDangerMode */.p4)())
          })), !isLoggedIntoMetamask ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "wrapper-4",
            children: /*#__PURE__*/jsx_runtime_.jsx(messages/* LoginMessage */.gB, {})
          }) : /*#__PURE__*/jsx_runtime_.jsx(containers_GuessForm, pages_objectSpread({
            defaultGuess: this.calcDefaultGuess(),
            onGuess: guess => this.handleGuess(guess)
          }, templateContract))]
        }), this.state.isHandlingTransaction && !this.state.isWaitingForRandomNumber && /*#__PURE__*/jsx_runtime_.jsx(messages/* TransactionMessage */.$Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "glass container bg-color-white br-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "normal display-6",
            children: "Previous Game"
          }), Object.keys(previousContract).length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "No previous game exists"
          }) : this.renderPreviousContractInformation(previousContract), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["HPB17 Master Contract can be verified here:", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://hpbscan.org/tx/0xadf10c7e09b4d9c25dd22f2f855f987fe1350f7d",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: "0xadf10c7e09b4d9c25dd22f2f855f987fe1350f7d"
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: ["HPB17 Factory Contract can be verified here:", /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://hpbscan.org/tx/0xed7e73df79149d648f0975978b138c43e73bbb6e",
              target: "_blank",
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: "0xed7e73df79149d648f0975978b138c43e73bbb6e"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "glass container bg-color-white br-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "normal display-6",
          children: "Game Details"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          align: "left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "HPB17 is a really simple guessing game, which harnesses the power of the HPB Hardware Random Numbe Generator (HRNG) where you try to guess a number between 1 and 1,000,000"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "If you guess the hidden number, you win the entire pot of HPB stored in the game!"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "But don't worry if you guess incorrectly. As soon as you make a guess, a countdown timer starts. It begins counting down from 17 hours, and if the timer reaches zero and nobody else makes a guess, then the last person who made a guess wins all the HPB anyway!"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "But what happens if someone else makes a guess? Well that person immediately becomes the \"last player to guess\" and the countdown timer resets to 17 hours - Once again, if the timer reaches zero then that \"last player to guess\" wins all the HPB!"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "After each subsequent guess, the contract will even tell you that you that you need to go higher or lower for the next guess and the \"guessing range\" shrinks after each subsequent guess."
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases."
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of Eth in the contract that is up for grabs gets bigger and bigger!"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "glass container bg-color-white br-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "normal display-6",
          children: "FAQ"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "The chances of actually guessing the correct number obviously improves after each guess. Now because it gets easier to guess the number, the cost of the guess also increases. The first guess costs 1.01 HPB, the second guess costs 1.02 HPB, the third guess costs 1.03 HPB, etc, all the way up to the final (17th) guess, which costs 1.17 HPB"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "If nobody guesses correctly by the 17th guess, then the game ends and the HPB in the contract gets automatically transferred to the next game (minus a small dev fee) so as each game rolls over, the amount of HPB in the contract that is up for grabs gets bigger and bigger!"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
          class: "faq",
          children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq1_desc",
              children: "How is the number to guess generated?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              id: "faq1_desc",
              class: "desc",
              children: ["We harness the power of the HPB Hardware Random Number Generator (HRNG) to generate a random number for each game. - Please see ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://www.hpb.io/post-423",
                  target: "_blank",
                  children: "HPB RNG Q&A"
                })
              }), " for more information."]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq2_desc",
              children: "What do I need to be able to play?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              id: "faq2_desc",
              class: "desc",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["All that is required is a ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://www.hpb.io/wallet",
                    target: "_blank",
                    children: "HPB Wallet"
                  })
                }), ", some ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://www.gate.io/trade/HPB_USDT",
                    target: "_blank",
                    children: "HPB Coin"
                  })
                }), "and ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://metamask.io/",
                    target: "_blank",
                    children: "Metamask"
                  })
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq3_desc",
              children: "What if I make a guess at the same time as someone else?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              id: "faq3_desc",
              class: "desc",
              children: "All transactions are timestamped, so whichever guess is written to the blockchain first will be the official guess, and the other guess will be rejected. Please check your transaction hash or click on the game number header on the home page, which will show you the game transactions. If you were unsuccessful, you will see the transaction will have been reverted."
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq5_desc",
              children: "How do I setup Metamask to work with the HPB blockchain?"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dd", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              id: "faq4_desc",
              class: "desc",
              children: "When you open Metamask, you'll need to switch from the default \"Ethereum Main-net\" network option, to the \"Custom RPC\" option. At this point, you'll need to supply the following information: \"Network Name\" = HPB Network | \"New RPC URL\" = https://hpbnode.com | \"Chain ID\" = 269 | \"Currency Symbol\" = HPB | \"Block Explorer URL\" = https://hpbscan.org/"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/static/images/ads/metamask.png",
              alt: "Metamask",
              width: "900",
              height: "600"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq6_desc",
              children: "I'm receiving a Metamask error?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              id: "faq4_desc",
              class: "desc",
              children: "Occasionally there may be a delay with processing to the blockchain. In this instance, we'd recommend completely cancelling/rejecting the transaction in Metamask, and try guessing again."
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq8_desc",
              children: "Can I interact with the smart contract game directly?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              id: "faq4_desc",
              class: "desc",
              children: ["YES! And that is the beauty of HPB and the decentralized blockchain! So for example, you could launch", /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://remix.hpb.io.io/",
                  target: "_blank",
                  children: "REMIX"
                })
              }), " and then copying the source code of the contract into the code window, then switch to the \"Run\" tab, and pasting in the current game contract address into the \"At Address\" field, then clicking on the blue button, which will launch all of the public function calls for the contract. You can retrieve the source code from our gitHub repository, and the current game contract can be retrieved from HPBScan, by clicking on the \"current\" game heading on the main game page."]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq9_desc",
              children: "Can I play the game from my mobile phone?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              id: "faq4_desc",
              class: "desc",
              children: "Sure! Simply install the Metamask app, then setup your network in settings to point to the HPB network using the following information - following information: \"Network Name\" = HPB Network | \"New RPC URL\" = https://hpbnode.com | \"Chain ID\" = 0x10D | \"Currency Symbol\" = HPB | \"Block Explorer URL\" = https://explorer.myhpbwallet.com/ Once you have done this you can switch to browser mode in the app and navigate to the website."
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq10_desc",
              children: "Can I use the Edge Browser on my PC?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              id: "faq4_desc",
              class: "desc",
              children: "Yes, althought you will still need to setup Metamask. You can install it by going into \"Extensions\" and then allowing other third party extensions."
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq11_desc",
              children: "Do you have real-time support?"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              id: "faq4_desc",
              class: "desc",
              children: ["Visit the community on the ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: " https://t.me/HPBglobal",
                  target: "_blank",
                  children: "HPB Global Telegram Chat"
                })
              }), " and stay in touch with a great community!"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dt", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              "aria-expanded": "false",
              "aria-controls": "faq11_desc",
              children: "How do I play from the telegram bot??"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              id: "faq4_desc",
              class: "desc",
              children: ["Visit the HPB17 bot at: ", /*#__PURE__*/jsx_runtime_.jsx("b", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: " https://t.me/PlayHPB17bot",
                  target: "_blank",
                  children: "HPB17 Telegram bot"
                })
              }), " and type in /help for more details."]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        align: "left",
        children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "HPB17 Was developed by jeffpUK (jeff@hpb17.com) and jayden (jayden@hpb17.com)- "
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "You can also find us both on Telegram (@jeffpUK | @jxyden) usually frequenting the HPB_Global Telegram group"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      })]
    });
  }

}

pages_defineProperty(Index, "mapStateToProps", ({
  dangerMode
}) => ({
  dangerMode
}));

/* harmony default export */ const pages = ((0,external_redux_.compose)(withMetamaskAccount/* default */.Z, withContracts/* default */.Z, (0,external_react_redux_.connect)(Index.mapStateToProps))(Index));

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 2947:
/***/ ((module) => {

module.exports = require("jquery");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 8684:
/***/ ((module) => {

module.exports = require("react-dom/server");

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

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,664,486,5,79,535], () => (__webpack_exec__(6545)));
module.exports = __webpack_exports__;

})();