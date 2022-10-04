import { Component } from '@angular/core';
import {Producto} from './model/producto.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'angular-demo';
  imagen:string = 'https://www.oasysparquetematico.com/wp-content/uploads/2019/04/shutterstock_199591094-1280x720.jpg'
  btn: boolean = false;
  name:string = '';
  persona = {
    nombre: 'sebastian', 
    apellido: 'salas', 
    edad: 21, 
    imagen: 'https://media.admagazine.com/photos/61e0a5ca06c10ae95c71b8b0/1:1/w_2000,h_2000,c_limit/Jason-Momoa.jpg'
  }

  o_nombre: string = '';
  o_apellido: string = '';
  o_edad: number = 0;

  personas: any[] = [
    {
    nombre: 'sebastian', 
    apellido: 'salas', 
    edad: 21
    },
    {
      nombre: 'Ian', 
      apellido: 'Huaman', 
      edad: 22
      }
  ]

  nombres: string[] = [
    'Juan',
    'Pedro',
    'Luis',
    'Amanda',
    'Molie'
  ];
  numeros: number[] = [
    5,
    8,
    15,
    85
  ]

  p_nombre:string = '';
  p_imagen:string = '';
  p_precio:number = 0;

  productos: Producto[] = [
    {
      nombre: 'Para bebes',
      precio: 70,
      imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/361025-300-300/20199269.jpg?v=637308940982630000'
    },
    {
      nombre: 'muniecos',
      precio: 100,
      imagen: 'https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/240x300/productos/i/i/m/imaginext-super-amigos-3677-default-1.jpg'
    },
    {
      nombre: 'camion',
      precio: 50,
      imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/14343507-300-300/20282323.jpg?v=637941382896100000'
    },
    {
      nombre: 'kendama',
      precio: 90,
      imagen: 'https://juguetesjaku.com/wp-content/uploads/2021/10/Kendama-Catchy-Negro-300x300.jpeg'
    }

  ];

  cambioBoton(): void{
    this.btn = !this.btn;
  }

  incrementaEdad(): void{
    this.persona.edad += 1;
  }

  onscroll(event: Event): void{
    const elemento = event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }

  cambioNombre(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.persona.nombre = elemento.value;
  } 

  agregarNombre(): void {
    this.nombres.push(this.name);
    this.name = '';
  }

  eliminarNombre(posicion: number): void {
    this.nombres.splice(posicion, 1)
  }

  agregarPersona(): void{
    const nuevaPersona = {
      nombre: this.o_nombre,
      apellido: this.o_apellido,
      edad: this.o_edad
    };
    this.personas.push(nuevaPersona);
    this.o_nombre = "";
    this.o_apellido = "";
    this.o_edad = 0;
  }

  eliminarPersona(posicion:number):void{
    this.personas.splice(posicion, 1)
  }

  agregarProducto(): void {
    const nuevoProducto = {
      nombre: this.p_nombre,
      imagen: this.p_imagen,
      precio: this.p_precio
    };
    this.productos.push(nuevoProducto);
    this.p_nombre = '';
    this.p_imagen = '';
    this.p_precio = 0;
  }

}


// ------------------------------------------------------
// ---------------TYPESCRIP------------------------------
// ------------------------------------------------------

// var usuario: string | number = 'sebastian';
// console.log(typeof(usuario));
// console.log(usuario);
// usuario = 5;
// console.log(typeof(usuario));
// console.log(usuario);

// const sumaNumeros = (a:number,b:number): number => {
//   const salida = a + b
//   return salida
// }

// const valor01: number = 10;
// const valor02: number = 15;

// console.log(sumaNumeros(sumaNumeros(valor01,20),valor02) + 'hola');

// class Usuario{
//   // private nombre: string;
//   // private password: string;
//   // private edad: number;

//   constructor (private nombre: string, private password: string, private edad: number){
//       // this.nombre = nombre;
//       // this.password = password;
//       // this.edad = edad;
//     }
//     mostrar():string{
//       const salida = 'Nombre: ' + this.nombre + '\n' +
//       'Password: ' + this.password + '\n' +
//       'Edad: ' + this.edad
//       return salida;
//     }
// }

// const urs01: Usuario = new Usuario('sebastian','GATOga', 21);
// const urs02: Usuario = new Usuario('ian','gatoGA', 22);

// // console.log('Nombre: ' + urs01.nombre);
// // console.log('Password: ' + urs01.password);
// // console.log('Edad: ' + urs01.edad);

// console.log(urs01.mostrar());
// console.log(urs02.mostrar());