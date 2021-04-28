import Toutou from './toutou.js';
import Board from './board.js';

//const sert à définir une variable qu'on ne réassignera jamais
//let sert à définir une variable qui est autorisée à être réassignée

//on récupère le canvas dans le HTML avec un querySelector;
const canvas = document.querySelector('#canvas');
//ctx sert à définir le contexte (2d ou 3d);
const ctx = canvas.getContext('2d');

//on définit 2 variables pour la largeur et hauteur du canvas, pour ne pas avoir à réécrire les valeurs en dur à chaque fois
//j'ai mis une valeur de 800*600 au début pour pouvoir splitter l'édteur de code et la page web sans que le canvas dépasse de la page
const c_width = 800;
const c_height = 600;

//on définit le ratio; on en aura peut-etre besoin plus tard pour rendre le jeu responsive
//const c_ratio = c_width / c_height;
//console.log(c_ratio)

//on assigne les dimensions au canvas
canvas.width = c_width;
canvas.height = c_height;

//on remplit le canvas
//on définit d'abord la couleur
//ctx.fillStyle = '#000000';
//ici les paramètres sont définis comme suit:
//(point de départ x, point de départ y, point d'arrivée x, point d'arrivée y);
//ctx.fillRect(0, 0, c_width, c_height);

let board = new Board(ctx, c_width, c_height);
board.fillBoard();