import { dispatch } from '@wordpress/data';

import { store } from '../store';

export function addProblems(problems) {
	dispatch(store).addProblems(problems);
}
