import {assert} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AsdNav from '../../../src/components/asd-nav';

const shallowRenderer = TestUtils.createRenderer();

describe('Components', () => {
    describe('AsdNav', () => {
        it('Returns something bla', () => {
            assert.typeOf(AsdNav, 'function');
        });
    });
});