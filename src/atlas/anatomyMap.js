export const anatomyMap={
 pineal:{label:"Glândula Pineal",layer:"ENDOCRINE",focus:[50,8]},
 pituitary:{label:"Hipófise",layer:"ENDOCRINE",focus:[50,10]},
 thyroid:{label:"Tireoide",layer:"ENDOCRINE",focus:[50,20]},
 heart:{label:"Coração",layer:"ORGANS",focus:[52,31]},
 liver:{label:"Fígado",layer:"ORGANS",focus:[45,40]},
 adrenal_left:{label:"Suprarrenal E.",layer:"ENDOCRINE",focus:[43,42]},
 adrenal_right:{label:"Suprarrenal D.",layer:"ENDOCRINE",focus:[57,42]},
 vascular_legs:{label:"Circulação das pernas",layer:"VASCULAR",focus:[50,73]},
 whole_body:{label:"Corpo inteiro",layer:"REGION",focus:[50,50]}
};
export const groups={adrenals:["adrenal_left","adrenal_right"]};
export function resolveTargets(ids=[]){return ids.flatMap(id=>groups[id]||[id]).map(id=>({id,...anatomyMap[id]})).filter(x=>x.label)}
