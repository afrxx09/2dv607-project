import {assert} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AsdNav from '../../../src/components/asd-nav';
import Nav from '../../../src/components/vanillanav/nav';
import List from '../../../src/components/vanillanav/list';
import ListItem from '../../../src/components/vanillanav/list-item';

describe('AsdNav', () => {
    
    let shallowRenderer = TestUtils.createRenderer();
    let asdNav;
    
    describe('Default, no options or routes', () => {
        
        beforeEach(function() {
            shallowRenderer.render(<AsdNav/>);
            asdNav = shallowRenderer.getRenderOutput();
        });

        it('has default id "asd-nav"', () => {
            assert.strictEqual(asdNav.props.config.id, 'asd-nav', 'does not set default id to "asd-nav".');
        });
        
        it('has no links', () => {
            assert.strictEqual(asdNav.props.children.props.links.length, 0, 'should not have links when no routes are supplied.');
        });
        
        it('is root element', () => {
            assert(asdNav.props.children.props.rootNav, 'is not set to root element.');
        });
        
        it('has vanilla nav as default', () => {
            assert.deepEqual(
                asdNav.props.config.components.Nav,
                Nav,
                'Nav defaults to vanilla nav'
            );
        });
        
        it('has vanilla nav\'s ListItem as default', () => {
            assert.deepEqual(
                asdNav.props.config.components.ListItem,
                ListItem,
                'ListItem defaults to vanilla nav ListItem'
            );
        });
        
    });
    
});