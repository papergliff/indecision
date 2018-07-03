'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Your options: ' + app.options.join(" ") : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Papergliff',
  age: 23,
  location: 'Russia'
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
