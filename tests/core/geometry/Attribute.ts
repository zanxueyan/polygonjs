import type {QUnit} from '../../helpers/QUnit';
import {CoreAttribute} from '../../../src/core/geometry/Attribute';
export function testcoregeometryAttribute(qUnit: QUnit) {

qUnit.test('array to indexed array', (assert) => {
	const array = ['a', 'b', 'c', 'a', 'd', 'c'];
	const indexed_arrays = CoreAttribute.arrayToIndexedArrays(array);
	assert.equal(indexed_arrays['values'].join(','), 'a,b,c,d');
	assert.equal(indexed_arrays['indices'].join(','), '0,1,2,0,3,2');
});

}