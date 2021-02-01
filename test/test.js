const {assert} = require('chai');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

const processor = postcss([tailwindcss('./test/tailwind.test.config.js')]);

describe('Pseudo classes', () => {
	it('invalid should work', async () => {
		const testData = `@variants invalid{.text-red-500{color:red}}`;
		const result = await processor.process(testData, {from: '', to: ''});
		assert.include(result.css, '.invalid\\:text-red-500:invalid');
	});

	it('valid should work', async () => {
		const testData = `@variants valid{.text-green-500{color:green}}`;
		const result = await processor.process(testData, {from: '', to: ''});
		assert.include(result.css, '.valid\\:text-green-500:valid');
	});
});

describe('Pseudo elements', () => {
	it('before should work', async () => {
		const testData = `@variants before{.text-red-500{color:red}}`;
		const result = await processor.process(testData, {from: '', to: ''});
		assert.include(result.css, '.before\\:text-red-500::before');
	});

	it('after should work', async () => {
		const testData = `@variants after{.text-green-500{color:green}}`;
		const result = await processor.process(testData, {from: '', to: ''});
		assert.include(result.css, '.after\\:text-green-500::after');
	});
});
