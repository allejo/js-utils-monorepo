import { expect } from 'chai';
import dedent from 'dedent';
import * as prettier from 'prettier';

import PrettierOptions from './index.js';

describe('Expected Prettier output', () => {
	it('should order imports correctly', async () => {
		const source = dedent`
            import React from 'react';
            import ReactDOM from 'react-dom/client';
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
            import App from './App.tsx';
            import { FilteredJson, JsonObject } from '../contracts.ts';
            import { applyJMESPath, DisableGrammarlyProps } from '../utilities';
            import './App.css';
            import data from './something.json';
        `;
		const expected = dedent`
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
            import React from 'react';
            import ReactDOM from 'react-dom/client';
        
            import { applyJMESPath, DisableGrammarlyProps } from '../utilities';
        
            import { FilteredJson, JsonObject } from '../contracts.ts';
            import App from './App.tsx';
        
            import './App.css';
            import data from './something.json';
        `;

		const actual = await prettier.format(source, {
			parser: 'babel',
			...PrettierOptions,
		});

		expect(actual.trim()).to.equal(expected.trim());
	});
});
