/* Setup testing framework module.
**
** This module will be executed before each test.
**
** Since setupFiles executes before the test framework is
** installed in the environment, this script file presents
** you the opportunity of running some code immediately
** after the test framework has been installed in the
** environment.
**
*/

// Core
const { configure, render, shallow, mount } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
configure({ adapter: new Adapter() });

global.React = require('react');
global.shallow = shallow;
global.mount = mount;
global.render = render;
