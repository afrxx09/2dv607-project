import {assert} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AsdNav from '../../../lib/components/asd-nav';

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
        
    });
    
});