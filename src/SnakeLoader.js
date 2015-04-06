var React = require('react');
var assign = require('./assign');
var insertKeyframesRule = require('./insertKeyframesRule');

var keyframes = {
    '0%': {
        opacity: 1
    },
    '50%': {
		opacity: 0
    },
	'100%': {
		opacity: 0
    }
};

var animationName = insertKeyframesRule(keyframes);

var Loader = React.createClass({displayName: "Loader",
    propTypes: {
        color: React.PropTypes.string,
        size: React.PropTypes.string,
        margin: React.PropTypes.string
    },
    getDefaultProps: function(){
        return {
            color: '#ffffff',
            size: '15px',
            margin: '2px'
        };
    },
    getBallStyle: function () {
        return {
            backgroundColor: this.props.color,
            width: this.props.size,
            height: this.props.size,
            margin: this.props.margin,
            borderRadius: '100%'
        }
    },
    getAnimationStyle: function (i) {
        var animation = [animationName, '1.75s', (i * 0.12) + 's', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' ');
        var animationFillMode = 'both';

        return {

            animation: animation,
            animationFillMode: animationFillMode
        }
    },
    getStyle: function (i) {

        return assign(
            this.getBallStyle(i),
            this.getAnimationStyle(i),
            {
                display: 'inline-block'
            }
        )
    },
    render: function () {

        return (React.createElement("div", null, 
            React.createElement("div", {style: this.getStyle(1)}), 
            React.createElement("div", {style: this.getStyle(2)}), 
            React.createElement("div", {style: this.getStyle(3)}),
			React.createElement("div", {style: this.getStyle(4)}),
			React.createElement("div", {style: this.getStyle(5)}),
			React.createElement("div", {style: this.getStyle(6)})
        ));
    }
});

module.exports = Loader;
