'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.mapStateToProps = mapStateToProps;
exports.mapDispatchToProps = mapDispatchToProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ChildrenData
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * List all the features
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EditComponent = exports.EditComponent = function (_React$PureComponent) {
  _inherits(EditComponent, _React$PureComponent);

  function EditComponent(props) {
    _classCallCheck(this, EditComponent);

    var _this = _possibleConstructorReturn(this, (EditComponent.__proto__ || Object.getPrototypeOf(EditComponent)).call(this, props));

    _this.state = { objects: [{ type: "text", x: 10, y: 20, text: "Hello!", fill: "red" }, { type: "rect", x: 50, y: 70, fill: "red" }]
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(EditComponent, [{
    key: 'handleChange',
    value: function handleChange(selectorFiles) {
      console.log('selectorFilesss ', selectorFiles);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        'Upload Image',
        _react2.default.createElement('input', { type: 'file', onChange: function onChange(e) {
            return _this2.handleChange(e.target.files);
          } }),
        _react2.default.createElement(Designer, { width: 250, height: 350,
          objectTypes: {
            'text': Text,
            'rect': Rect
          },
          onUpdate: function onUpdate(objects) {
            return _this2.setState({ objects: objects });
          },
          objects: this.state.objects })
      );
    }
  }]);

  return EditComponent;
}(_react2.default.PureComponent);

EditComponent.propTypes = {};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditComponent);