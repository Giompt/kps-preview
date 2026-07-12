const KPS_PROGRAM = [
 {week:1,focus:'Impara le posizioni',sessions:[
  {code:'1A',title:'Hinge e fondamenta',minutes:30,items:[['Respirazione 90/90','2 × 5 respiri','Corpo libero'],['Hip hinge al muro','3 × 6','Corpo libero'],['Kettlebell deadlift','3 × 8','Medio/pesante'],['Goblet squat assistito','3 × 6','Medio'],['Suitcase carry','3 × 20–30 s/lato','Medio']]},
  {code:'1B',title:'Spinta, tirata e controllo',minutes:30,items:[['Halo controllato','2 × 5/direzione','Leggero'],['Floor press a un braccio','3 × 6/lato','Leggero/medio'],['Row con appoggio','3 × 8/lato','Medio'],['Dead bug','3 × 5/lato','Corpo libero'],['Front rack hold','3 × 20 s/lato','Leggero']]},
  {code:'1C',title:'Fondamenta a circuito',minutes:28,items:[['Mobilità dinamica','5 min','Corpo libero'],['Deadlift','6 ripetizioni','Medio'],['Goblet squat','5 ripetizioni','Leggero/medio'],['Floor press','5/lato','Leggero'],['Suitcase carry','20 s/lato','Medio'],['Circuito','3 giri · recupero 90 s','RPE 5–6']]}
 ]},
 {week:2,focus:'Consolida il controllo',sessions:[
  {code:'2A',title:'Forza di base',minutes:32,items:[['Hip hinge al muro','2 × 6','Corpo libero'],['Deadlift','4 × 8','Medio/pesante'],['Goblet squat','3 × 8','Medio'],['Row con appoggio','3 × 8/lato','Medio'],['Farmer hold','3 × 30 s','Medio/pesante']]},
  {code:'2B',title:'Stabilità monolaterale',minutes:32,items:[['Halo','2 × 5/direzione','Leggero'],['Press in mezzo inginocchio','3 × 5/lato','Leggero'],['Stacco rumeno con appoggio sfalsato','3 × 6/lato','Leggero/medio'],['Floor press','3 × 8/lato','Leggero/medio'],['Marcia con kettlebell a un braccio','3 × 20 s/lato','Medio']]},
  {code:'2C',title:'Qualità sotto tempo',minutes:30,items:[['Deadlift','8 ripetizioni','Medio'],['Goblet squat','6 ripetizioni','Medio'],['Row','6/lato','Medio'],['Marcia sul posto','30 s','Corpo libero'],['Circuito','4 giri · recupero 75 s','RPE 6']]}
 ]},
 {week:3,focus:'Introduci la potenza',sessions:[
  {code:'3A',title:'Preparazione allo swing',minutes:34,items:[['Hip hinge dinamico','2 × 6','Corpo libero'],['Swing con partenza e arresto','5 × 3','Leggero/medio'],['Swing singolo con ripartenza','6 × 5','Leggero/medio'],['Goblet squat','3 × 8','Medio'],['Suitcase carry','3 × 30 s/lato','Medio']]},
  {code:'3B',title:'Forza completa',minutes:35,items:[['Press in mezzo inginocchio','4 × 5/lato','Leggero'],['Rematore con appoggio','4 × 8/lato','Medio'],['Stacco rumeno con appoggio sfalsato','3 × 8/lato','Medio'],['Floor press','3 × 8/lato','Medio'],['Dead bug','3 × 6/lato','Corpo libero']]},
  {code:'3C',title:'Primo swing interval',minutes:30,items:[['Kettlebell swing a due mani','8 × 10 s','Leggero/medio'],['Goblet squat','3 × 6','Medio'],['Farmer carry','3 × 30 s','Medio/pesante']]}
 ]},
 {week:4,focus:'Costruisci capacità',sessions:[
  {code:'4A',title:'Hinge potente',minutes:35,items:[['Swing singolo con ripartenza','5 × 6','Medio'],['Kettlebell swing a due mani','8 × 10','Medio'],['Goblet squat','4 × 8','Medio'],['Suitcase carry','3 × 40 s/lato','Medio']]},
  {code:'4B',title:'Upper body e rack',minutes:35,items:[['Kettlebell clean assistito','4 × 3/lato','Leggero'],['Press in mezzo inginocchio','4 × 6/lato','Leggero/medio'],['Rematore a un braccio','4 × 10/lato','Medio'],['Affondo indietro in front rack assistito','3 × 5/lato','Leggero'],['Plank alto','3 × 20–30 s','Corpo libero']]},
  {code:'4C',title:'EMOM tecnico',minutes:32,items:[['Minuto 1: swing','10 ripetizioni','Medio'],['Minuto 2: goblet squat','6 ripetizioni','Medio'],['Minuto 3: recupero','Respirazione controllata','—'],['EMOM','5 giri · 15 minuti','RPE 6–7']]}
 ]},
 {week:5,focus:'Collega le abilità',sessions:[
  {code:'5A',title:'Swing e squat',minutes:36,items:[['Kettlebell swing a due mani','10 × 10','Medio'],['Goblet squat','4 × 10','Medio'],['Stacco rumeno con appoggio sfalsato','3 × 8/lato','Medio'],['Suitcase carry','3 × 45 s/lato','Medio']]},
  {code:'5B',title:'Clean introduttivo',minutes:36,items:[['Kettlebell clean assistito','5 × 3/lato','Leggero'],['Kettlebell clean a un braccio','5 × 3/lato','Leggero'],['Military press a un braccio','4 × 5/lato','Leggero'],['Rematore a un braccio','4 × 8/lato','Medio'],['Tenuta in front rack','3 × 30 s/lato','Medio']]},
  {code:'5C',title:'Circuito KPS base',minutes:34,items:[['Swing','10 ripetizioni','Medio'],['Goblet squat','6 ripetizioni','Medio'],['Floor press','6/lato','Leggero/medio'],['Suitcase carry','30 s/lato','Medio'],['Circuito','5 giri · recupero 60–90 s','RPE 7']]}
 ]},
 {week:6,focus:'Consolida e misura',sessions:[
  {code:'6A',title:'Forza consolidata',minutes:38,items:[['Kettlebell deadlift','4 × 10','Pesante tecnico'],['Goblet squat','4 × 8','Medio/pesante'],['Military press a un braccio','4 × 5/lato','Leggero/medio'],['Rematore a un braccio','4 × 10/lato','Medio'],['Tenuta farmer','3 × 45 s','Pesante tecnico']]},
  {code:'6B',title:'Potenza controllata',minutes:34,items:[['Kettlebell swing a due mani','12 × 10','Medio'],['Kettlebell clean a un braccio','5 × 3/lato','Leggero/medio'],['Affondo indietro in front rack assistito','3 × 6/lato','Leggero/medio'],['Suitcase carry','3 × 45 s/lato','Medio']]},
  {code:'6C',title:'KPS Start benchmark',minutes:35,items:[['Swing','10 ripetizioni','Medio'],['Goblet squat','8 ripetizioni','Medio'],['Floor press','6/lato','Leggero/medio'],['Row','8/lato','Medio'],['Suitcase carry','30 s/lato','Medio'],['Benchmark','4 giri · qualità prima del tempo','RPE max 7']]}
 ]}
];
