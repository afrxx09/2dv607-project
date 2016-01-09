import {assert} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AsdNav from '../../../lib/components/asd-nav';
import Nav from '../../../lib/components/vanillanav/nav';
import List from '../../../lib/components/vanillanav/list';
import ListItem from '../../../lib/components/vanillanav/list-item';

describe('AsdNav', () => {
    
    let shallowRenderer = TestUtils.createRenderer();
    let asdNav;
    
    describe('Default, no options or routes', () => {
        
        beforeEach(function() {
            shallowRenderer.render(<AsdNav/>);
            asdNav = shallowRenderer.getRenderOutput();
        });
        
        it('has no links', () => {
            assert.strictEqual(asdNav.props.children.props.links.length, 0, 'should not have links when no routes are supplied.');
        });

        it('has vanilla nav as default nav component', () => {
            assert.deepEqual(
                asdNav.props.config.components.Nav,
                Nav,
                'Nav does not defaults to vanilla nav'
            );
        });
        
        it('has vanilla nav\'s ListItem as default list item component', () => {
            assert.deepEqual(
                asdNav.props.config.components.ListItem,
                ListItem,
                'ListItem does not defaults to vanilla nav ListItem'
            );
        });
        
        it('has vanilla nav\'s List as default list component', () => {
            assert.deepEqual(
                asdNav.props.config.components.List,
                List,
                'List does not defaults to vanilla nav List'
            );
        });
        
    });
    
});