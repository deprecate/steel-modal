'use strict';

import Modal from '../src/Modal';

describe('Modal', function() {
	it('should render component', function() {
		assert.doesNotThrow(function() {
			new Modal().render();
		});
	});
});
