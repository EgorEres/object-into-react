"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataLine = _interopRequireDefault(require("../DataLine"));

var _NumberLine = _interopRequireDefault(require("../NumberLine"));

var _ArrayLine = _interopRequireDefault(require("../ArrayLine"));

var _FunctionLine = _interopRequireDefault(require("../FunctionLine"));

var _EmptyLine = _interopRequireDefault(require("../EmptyLine"));

var _BooleanLine = _interopRequireDefault(require("../BooleanLine"));

var _ObjectLine = _interopRequireDefault(require("../ObjectLine"));

var _StringLine = _interopRequireDefault(require("../StringLine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Aggregate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Aggregate, _React$Component);

  function Aggregate(props) {
    var _this;

    _classCallCheck(this, Aggregate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Aggregate).call(this, props));
    _this.state = {
      isOpen: _this.props.isOpen // this.styles = this.styles.bind(this)

    };
    return _this;
  } // styles (type) {
  //   switch (type) {
  //     case 'object': {
  //       return {
  //         closeObjectClassName: this.props.closeObjectClassName
  //       }
  //     }
  //   }
  // }


  _createClass(Aggregate, [{
    key: "isDate",
    value: function isDate(value) {
      return value instanceof Date;
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number' && isFinite(value);
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return value && _typeof(value) === 'object' && value.constructor === Array;
    }
  }, {
    key: "isFunction",
    value: function isFunction(value) {
      return typeof value === 'function';
    }
  }, {
    key: "isNullorUndefined",
    value: function isNullorUndefined(value) {
      return value === null || typeof value === 'undefined';
    }
  }, {
    key: "isBoolean",
    value: function isBoolean(value) {
      return typeof value === 'boolean';
    }
  }, {
    key: "isObject",
    value: function isObject(value) {
      return value && _typeof(value) === 'object' && value.constructor === Object;
    }
  }, {
    key: "setPayload",
    value: function setPayload(element) {
      if (this.isDate(element)) return _react.default.createElement(_DataLine.default, {
        date: element
      });
      if (this.isNumber(element)) return _react.default.createElement(_NumberLine.default, {
        number: element
      });
      if (this.isArray(element)) return _react.default.createElement(_ArrayLine.default, {
        array: element
      });
      if (this.isFunction(element)) return _react.default.createElement(_FunctionLine.default, {
        func: element
      });
      if (this.isNullorUndefined(element)) return _react.default.createElement(_EmptyLine.default, {
        type: element
      });
      if (this.isBoolean(element)) return _react.default.createElement(_BooleanLine.default, {
        boolean: element
      });
      if (this.isObject(element)) return _react.default.createElement(_ObjectLine.default, {
        object: element
      });
      return _react.default.createElement(_StringLine.default, {
        string: element
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var element = this.props.element;
      if (!this.state.isOpen) return _react.default.createElement(_ObjectLine.default, {
        object: element
      });
      return Object.keys(element).map(function (elemKey, index) {
        return _react.default.createElement("div", {
          key: index,
          style: {
            padding: '2px 10px'
          }
        }, _react.default.createElement("span", {
          style: {
            color: '#ac0093'
          },
          onClick: function onClick() {
            return console.log('for obj and arr');
          }
        }, ' ', elemKey), _react.default.createElement("span", {
          style: {
            color: '#303942'
          }
        }, ": "), _this2.setPayload(element[elemKey]));
      });
    }
  }]);

  return Aggregate;
}(_react.default.Component);

var _default = Aggregate;
exports.default = _default;
//# sourceMappingURL=aggregate.js.map