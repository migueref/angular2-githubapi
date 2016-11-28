# Github ReposList

This project was created with  angular 2, it shows a github repos list connected with github API.


## Usage

To change to your own github account just change the repositories service on repositories folder.
    
    ```typescript
    export class RepositoriesService {
		baseUrl: string = "https://api.github.com";
		username:  string = "YOURUSERNAME";
		constructor(private http: Http) { }
		getRepos(){
			return this.http.get(this.baseUrl+"/users/"+this.username+"/repos");
		}
	}
    

## Connect with me 

Linkedin https://www.linkedin.com/in/migueref
	
