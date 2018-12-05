"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Aggregate = _interopRequireDefault(require("../Aggregate"));

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

var Line =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line(props) {
    var _this;

    _classCallCheck(this, Line);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, props));
    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Line, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var object = this.props.object;
      var objText = JSON.stringify(object).slice(1, 50);
      return _react.default.createElement("div", {
        style: {
          padding: 0,
          display: 'contents'
        }
      }, _react.default.createElement("div", {
        style: {
          opacity: '0.3',
          margin: '0px',
          padding: '0px',
          display: 'inline-block',
          width: '0px',
          height: '0px',
          borderTop: '5px solid transparent',
          borderBottom: '5px solid transparent',
          borderLeft: '8px solid rgb(0, 0, 0)',
          transform: this.state.open ? 'rotate(90deg)' : '',
          transition: 'transform 0.15s ease 0s',
          cursor: 'pointer'
        },
        onClick: function onClick(e) {
          e.stopPropagation();

          _this2.setState({
            open: !_this2.state.open
          });
        }
      }), _react.default.createElement("span", {
        onClick: function onClick(e) {
          e.stopPropagation();
          !_this2.state.open && _this2.setState({
            open: true
          });
        },
        style: {
          color: '#303942'
        }
      }, ' ', '{', !this.state.open ? _react.default.createElement("span", {
        style: {
          color: '#c8c8c8',
          cursor: 'pointer'
        }
      }, objText, " ...") : _react.default.createElement(_Aggregate.default, {
        element: object,
        isOpen: true
      }), '}'));
    }
  }]);

  return Line;
}(_react.default.Component);

var _default = Line;
exports.default = _default;
//# sourceMappingURL=index.js.map