export function addProblems(problems) {
	return {
		type: 'ADD_PROBLEMS',
		problems,
	};
}

export function removeProblem(name) {
	return {
		type: 'REMOVE_PROBLEM',
		name,
	};
}