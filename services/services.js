export function infoUserService(userGithub){
	return fetch('https://api.github.com/users/'+userGithub+'/repos', {
		method: 'GET',
	}).then((response) => {
		return response.json();
	});
}

export function issuesFromRepoService(userGithub, repo){
	return fetch('https://api.github.com/repos/'+userGithub+'/'+repo+'/issues', {
		method: 'GET',
	}).then((response) => {
		return response.json();
	});
}