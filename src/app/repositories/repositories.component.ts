import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from './repositories.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories : any = [];
  repository : IRepository = {name: "",description:""};;
  newRepository : IRepository={name:"",description:""};
  constructor(private repoService : RepositoriesService) { }

  ngOnInit() {
    // this.repository={name: "Django code",description:"Python project"};
    //   setTimeout(()=>{
    //     this.repositories = [
    //       {name: "Angular code for cyberdreams",description:"Angular project"},
    //       {name: "Laravel code for cyberdreams",description:"demo laravel project"},
    //       {name: "Rails code for ecommerce",description:"ROR project"},
    //       {name: "Go code",description:"go project, poo elementary"}
    //
    //     ];
    //
    //   },3000);
    this.repoService.getRepos().subscribe((data) => {
      this.repositories = data.json();

      this.repository = this.repositories[0];
      //console.log(this.repositories);
    });
  }
  setMainRepository(repository){
			this.repository = repository;
	}
  addNewRepo(){
		this.repositories.unshift(this.newRepository);
		this.newRepository = {name:"",description:""};
	}

}
interface IRepository{
	  name : string,
	  description : string
	}
