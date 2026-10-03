import {resolveTargets} from "./anatomyMap.js";
export class AnatomyTargetController{
 constructor(onChange=()=>{}){this.onChange=onChange;this.targets=[]}
 setTargets(ids=[]){this.targets=resolveTargets(ids);this.onChange(this.targets);return this.targets}
 clear(){return this.setTargets([])}
}
export const atlasVisualTest=[
 {label:"Pineal",frequency:7.83,targets:["pineal"]},
 {label:"Hipófise",frequency:10,targets:["pituitary"]},
 {label:"Tireoide",frequency:20,targets:["thyroid"]},
 {label:"Coração",frequency:432,targets:["heart"]},
 {label:"Fígado",frequency:528,targets:["liver"]},
 {label:"Suprarrenais",frequency:14.2,targets:["adrenals"]},
 {label:"Circulação das pernas",frequency:33,targets:["vascular_legs"]}
];
