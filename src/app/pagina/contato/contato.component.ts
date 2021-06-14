import { Component, OnInit } from '@angular/core';
import { Cometario } from '../../cometario';
import { FormControl,FormGroup } from '@angular/forms';
import { CometariosService } from 'src/app/cometarios.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  formCometario!: FormGroup;
  submitted = false;
  cometarios:Cometario[] = [];
  cometario  = new Cometario('','');

  constructor(private cometariosService:CometariosService){}

 //hasError(field:string){
//return this.formCometario.get(field).errors;

 //}
   

  ngOnInit(): void {
    this.createForm(new Cometario('',''));
    this.listarCometarios();

  }


  createForm(cometario: Cometario) {
    this.formCometario = new FormGroup({
      nome: new FormControl(cometario.nome),
      tipo: new FormControl(cometario.tipo),
      genero: new FormControl(cometario.genero),
      datanascimento: new FormControl(cometario.datanascimento),
      observacao: new FormControl(cometario.observacao),
      inativo: new FormControl(cometario.inativo)
    })
   
    
  }

  cadastrar(){
      
    this.cometariosService.cadastrarCometario({nome:this.formCometario.value.nome,observacao:this.formCometario.value.observacao}).subscribe( cometario => { 
      console.log("deu certo:", cometario);
    }, 
      (err: any)  => { console.log("Erro ao cadastrar comentário", err); })

}
  
  listarCometarios(){

    this.cometariosService.listarCometarios().subscribe(cometarios=>{
    
      this.cometarios = cometarios;
    
                  },err =>{console.log('Erro ao listar os comentarios', err); })
    
    }

    onSubmit() {

      this.submitted = true;
    
  
            if (this.formCometario.valid){
  
                       this.cometarios.push(new Cometario(this.formCometario.value.nome, this.formCometario.value.observacao))
  
                       this.cadastrar();
  
                        this.formCometario.reset(new Cometario('',''));
                }
  
     
   
    }
   
 
  

  onCancel() {
      this.submitted = false;
      this.formCometario.reset(new Cometario('',''));
       // console.log ('onCancel')

  }


}