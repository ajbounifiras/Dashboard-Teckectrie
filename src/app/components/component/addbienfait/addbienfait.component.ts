import { Component, OnInit } from '@angular/core';
import { Bienfait } from 'src/app/models/bienfait';
import { Etablissement } from 'src/app/models/etablissement';
import { BienfaitService } from 'src/app/services/bienfait.service';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-addbienfait',
  templateUrl: './addbienfait.component.html',
  styleUrls: ['./addbienfait.component.css']
})
export class AddbienfaitComponent implements OnInit {
  listeEtablissement: Etablissement []=[]
  service=new Bienfait

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
  });
  constructor(private services:BienfaitService) { }


  ngOnInit(): void {
    this.services.getEtablissement().subscribe((data:any)=>{
      this.listeEtablissement=data.data
      console.log(data.data)
    })


    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem =async (item: any, status: any) => {

      console.log('Uploaded File Details:', item);
      console.log(status)
      let a=JSON.parse(status);

     this.service.image=await a.file
      if(this.service._id!=null){
        await this.services.edit(this.service).subscribe(data=>{
        
        });
        
      }else{
        await this.services.add(this.service).subscribe(data=>{
        console.log(data)
        });
        
      }
     
  
    };
    
  }

  

  async add(){
/*  this.services.add(this.service).subscribe(data=>{
    console.log(data);
 
  })*/
  await this.uploader.uploadAll()


  }

}
