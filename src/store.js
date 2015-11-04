var Redux = require('redux'),
    countReducer = require('./reducers/count'),
    initialState = require('./initial-state');

var reducers = Redux.combineReducers({
    count: countReducer
});

var store = Redux.createStore(reducers, initialState());

module.exports = store;