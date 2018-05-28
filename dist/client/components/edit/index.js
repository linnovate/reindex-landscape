'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditComponent = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.mapStateToProps = mapStateToProps;
exports.mapDispatchToProps = mapDispatchToProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './style.css';


// import Downshift from 'downshift';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import MenuItem from '@material-ui/core/MenuItem';
// import Chip from '@material-ui/core/Chip';
var EditComponent = exports.EditComponent = function (_React$PureComponent) {
	(0, _inherits3.default)(EditComponent, _React$PureComponent);

	function EditComponent(props) {
		(0, _classCallCheck3.default)(this, EditComponent);

		var _this = (0, _possibleConstructorReturn3.default)(this, (EditComponent.__proto__ || (0, _getPrototypeOf2.default)(EditComponent)).call(this, props));

		_this.state = { objects: [{ type: "text", x: 10, y: 20, text: "Hello!", fill: "red" }, { type: "rect", x: 50, y: 70, fill: "red" }]
		};
		_this.handleChange = _this.handleChange.bind(_this);

		if (!(typeof _this.handleChange === 'function')) {
			throw new TypeError('Value of "this.handleChange" violates contract.\n\nExpected:\n(any) => any\n\nGot:\n' + _inspect(_this.handleChange));
		}

		return _this;
	}

	(0, _createClass3.default)(EditComponent, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			require('./image.js');
		}
	}, {
		key: 'handleChange',
		value: function handleChange(selectorFiles) {
			console.log('selectorFilesss ', selectorFiles);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ id: 'wrapper' },
					_react2.default.createElement(
						'header',
						{ id: 'header' },
						_react2.default.createElement(
							'nav',
							{ id: 'nav', className: 'clearfix' },
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									'li',
									{ id: 'save' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'save'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'load' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'load'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'from_html' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'from html'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'rect' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'rectangle'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'circle' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'circle'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'polygon' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'polygon'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'edit' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'edit'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'to_html' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'to html'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'preview' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'preview'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'clear' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'clear'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'new_image' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'new image'
									)
								),
								_react2.default.createElement(
									'li',
									{ id: 'show_help' },
									_react2.default.createElement(
										'a',
										{ href: '#' },
										'?'
									)
								)
							)
						),
						_react2.default.createElement('div', { id: 'coords' }),
						_react2.default.createElement('div', { id: 'debug' })
					),
					_react2.default.createElement(
						'div',
						{ id: 'image_wrapper' },
						_react2.default.createElement(
							'div',
							{ id: 'image' },
							_react2.default.createElement('img', { src: '', alt: '#', id: 'img' }),
							_react2.default.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', version: '1.2', baseProfile: 'tiny', id: 'svg' })
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'code' },
					_react2.default.createElement('span', { className: 'close_button', title: 'close' }),
					_react2.default.createElement('div', { id: 'code_content' })
				),
				_react2.default.createElement(
					'form',
					{ id: 'edit_details' },
					_react2.default.createElement(
						'h5',
						null,
						'Startup info'
					),
					_react2.default.createElement('span', { className: 'close_button', title: 'close' }),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'href_attr' },
							'href'
						),
						_react2.default.createElement('input', { type: 'text', id: 'href_attr' })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'startup_name_attr' },
							'Name'
						),
						_react2.default.createElement(
							'select',
							{ id: 'startup_name_attr', form: 'edit_details' },
							_react2.default.createElement(
								'option',
								{ value: 'volvo' },
								'Volvo'
							),
							_react2.default.createElement(
								'option',
								{ value: 'saab' },
								'Saab'
							),
							_react2.default.createElement(
								'option',
								{ value: 'opel' },
								'Opel'
							),
							_react2.default.createElement(
								'option',
								{ value: 'audi' },
								'Audi'
							)
						)
					),
					_react2.default.createElement(
						'button',
						{ id: 'save_details' },
						'Save'
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'from_html_wrapper' },
					_react2.default.createElement(
						'form',
						{ id: 'from_html_form' },
						_react2.default.createElement(
							'h5',
							null,
							'Loading areas'
						),
						_react2.default.createElement('span', { className: 'close_button', title: 'close' }),
						_react2.default.createElement(
							'p',
							null,
							_react2.default.createElement(
								'label',
								{ htmlFor: 'code_input' },
								'Enter your html code:'
							),
							_react2.default.createElement('textarea', { id: 'code_input' })
						),
						_react2.default.createElement(
							'button',
							{ id: 'load_code_button' },
							'Load'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ id: 'get_image_wrapper' },
					_react2.default.createElement(
						'div',
						{ id: 'get_image' },
						_react2.default.createElement(
							'div',
							{ id: 'loading' },
							'Loading'
						),
						_react2.default.createElement(
							'div',
							{ id: 'file_reader_support' },
							_react2.default.createElement(
								'label',
								null,
								'Drag an image'
							),
							_react2.default.createElement(
								'div',
								{ id: 'dropzone' },
								_react2.default.createElement(
									'span',
									{ className: 'clear_button', title: 'clear' },
									'x'
								),
								_react2.default.createElement('img', { src: '', alt: 'preview', id: 'sm_img' })
							),
							_react2.default.createElement(
								'b',
								null,
								'or'
							)
						),
						_react2.default.createElement(
							'label',
							{ htmlFor: 'url' },
							'type a url'
						),
						_react2.default.createElement(
							'span',
							{ id: 'url_wrapper' },
							_react2.default.createElement(
								'span',
								{ className: 'clear_button', title: 'clear' },
								'x'
							),
							_react2.default.createElement('input', { type: 'text', id: 'url' })
						),
						_react2.default.createElement(
							'button',
							{ id: 'button' },
							'OK'
						)
					)
				),
				_react2.default.createElement('div', { id: 'overlay' }),
				_react2.default.createElement(
					'div',
					{ id: 'help' },
					_react2.default.createElement('span', { className: 'close_button', title: 'close' }),
					_react2.default.createElement(
						'div',
						{ className: 'txt' },
						_react2.default.createElement(
							'section',
							null,
							_react2.default.createElement(
								'h2',
								null,
								'Main'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'F5'
								),
								' \u2014 reload the page and display the form for loading image again'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'S'
								),
								' \u2014 save map params in localStorage'
							)
						),
						_react2.default.createElement(
							'section',
							null,
							_react2.default.createElement(
								'h2',
								null,
								'Drawing mode (rectangle / circle / polygon)'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'ENTER'
								),
								' \u2014 stop polygon drawing (or click on first helper)'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'ESC'
								),
								' \u2014 cancel drawing of a new area'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'SHIFT'
								),
								' \u2014 square drawing in case of a rectangle and right angle drawing in case of a polygon'
							)
						),
						_react2.default.createElement(
							'section',
							null,
							_react2.default.createElement(
								'h2',
								null,
								'Editing mode'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'DELETE'
								),
								' \u2014 remove a selected area'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'ESC'
								),
								' \u2014 cancel editing of a selected area'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'SHIFT'
								),
								' \u2014 edit and save proportions for rectangle'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'I'
								),
								' \u2014 edit attributes of a selected area (or dblclick on an area)'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'CTRL'
								),
								' + ',
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'C'
								),
								' \u2014 a copy of the selected area'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'\u2191'
								),
								' \u2014 move a selected area up'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'\u2193'
								),
								' \u2014 move a selected area down'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'\u2190'
								),
								' \u2014 move a selected area to the left'
							),
							_react2.default.createElement(
								'p',
								null,
								_react2.default.createElement(
									'span',
									{ className: 'key' },
									'\u2192'
								),
								' \u2014 move a selected area to the right'
							)
						)
					),
					_react2.default.createElement(
						'footer',
						null,
						_react2.default.createElement(
							'a',
							{ href: 'http://github.com/summerstyle/summer' },
							'Summer html image map creator 0.5'
						),
						_react2.default.createElement('br', null),
						'\xA9 2014 Vera Lobatcheva',
						_react2.default.createElement('br', null),
						'GPL3 License'
					)
				)
			);
		}
	}]);
	return EditComponent;
}(_react2.default.PureComponent); /*
                                   * ChildrenData
                                   *
                                   * List all the features
                                   */

EditComponent.propTypes = {};

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditComponent);

function _inspect(input, depth) {
	var maxDepth = 4;
	var maxKeys = 15;

	if (depth === undefined) {
		depth = 0;
	}

	depth += 1;

	if (input === null) {
		return 'null';
	} else if (input === undefined) {
		return 'void';
	} else if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
		return typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input);
	} else if (Array.isArray(input)) {
		if (input.length > 0) {
			if (depth > maxDepth) return '[...]';

			var first = _inspect(input[0], depth);

			if (input.every(function (item) {
				return _inspect(item, depth) === first;
			})) {
				return first.trim() + '[]';
			} else {
				return '[' + input.slice(0, maxKeys).map(function (item) {
					return _inspect(item, depth);
				}).join(', ') + (input.length >= maxKeys ? ', ...' : '') + ']';
			}
		} else {
			return 'Array';
		}
	} else {
		var keys = (0, _keys2.default)(input);

		if (!keys.length) {
			if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
				return input.constructor.name;
			} else {
				return 'Object';
			}
		}

		if (depth > maxDepth) return '{...}';
		var indent = '  '.repeat(depth - 1);
		var entries = keys.slice(0, maxKeys).map(function (key) {
			return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(key) ? key : (0, _stringify2.default)(key)) + ': ' + _inspect(input[key], depth) + ';';
		}).join('\n  ' + indent);

		if (keys.length >= maxKeys) {
			entries += '\n  ' + indent + '...';
		}

		if (input.constructor && input.constructor.name && input.constructor.name !== 'Object') {
			return input.constructor.name + ' {\n  ' + indent + entries + '\n' + indent + '}';
		} else {
			return '{\n  ' + indent + entries + '\n' + indent + '}';
		}
	}
}