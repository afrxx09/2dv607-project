import {assert} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AsdNav from '../../../src/components/asd-nav';

describe('AsdNav', () => {
    
    let shallowRenderer = TestUtils.createRenderer(),
        asdNav,
        config,
        routes;
    
    describe('Default config, no routes', () => {
        
        beforeEach(() => {
            shallowRenderer.render(<AsdNav/>);
            asdNav = shallowRenderer.getRenderOutput();
        });

        it('has default id "asd-nav"', () => {
            assert.strictEqual(asdNav.props.config.id, 'asd-nav', 'does not set default id to "asd-nav".');
        });
        
        it('is root element', () => {
            assert.isTrue(asdNav.props.children.props.rootNav, 'is not set to root element.');
        });
        
        it('has no children', () => {
            assert.isTrue(!asdNav.props.children, 'should not have children');
        });
        
    });
    
    describe('Non-default config, no routes', () => {
        
        beforeEach(() => {
            config = {};
            routes = {}
        });
        
        it('can change id with config', () => {
            config.id = 'alt-id';
            shallowRenderer.render(<AsdNav config={config}/>);
            asdNav = shallowRenderer.getRenderOutput();
            assert.strictEqual(asdNav.props.config.id, 'alt-id', 'id not changed by config.');
        });
        
    });
    
});