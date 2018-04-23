export function infoUserService(userGithub){
	return fetch('https://api.github.com/users/'+userGithub+'/repos', {
		method: 'GET',
		headers: new Headers({
			'Authorization': 'token f18ce718e3dc8564b4b80b97d94323368a0851e0', 
   		}), 
	}).then((response) => {
		return response.json();
	});
}

export function issuesFromRepoService(userGithub, repo){
	return fetch('https://api.github.com/repos/'+userGithub+'/'+repo+'/issues', {
		method: 'GET',
		headers: new Headers({
			'Authorization': 'token f18ce718e3dc8564b4b80b97d94323368a0851e0', 
   		}),
	}).then((response) => {
		return response.json();
	});
}