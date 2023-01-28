class offTypes {
    constructor(inEff, supEff, noEff){
        this.inEff = inEff;
        this.supEff = supEff;
        this.noEff = noEff;
    }
}

let norm = "normal";
let fght = "fighting";
let fly = "flying";
let pois = "poison";
let grnd = "ground";
let rck = "rock";
let bug = "bug";
let ghst = "ghost";
let stl = "steel";
let fire = "fire";
let wtr = "water";
let grs = "grass";
let elec = "electric";
let psy = "psychic";
let ice = "ice";
let dgn = "dragon";
let drk = "dark";
let fay = "fairy";
let none = "none"


//Offesive matchups
let fireOff = new offTypes([ rck, fire, wtr, dgn ],    [bug,stl,grs,ice],    []);
let waterOff = new offTypes([wtr,grs,dgn],    [grnd,rck,fire],    []);
let grassOff = new offTypes([fly,pois,bug,stl,fire,grs,dgn],    [grnd,rck,wtr],    []);
let normalOff = new offTypes([rck,stl],    [],    [ghst]);
let fightOff = new offTypes([fly,pois,bug,psy,fay],     [norm,rck,stl,ice,drk],     [ghst]);
let flyingOff = new offTypes([rck,stl,elec],    [fght,bug,grs],     []);
let poisonOff = new offTypes([rck,pois,grnd,ghst],    [grs,fay],    [stl]);
let groundOff = new offTypes([bug,grs],    [pois,rck,stl,fire,elec],     [fly]);
let rockOff = new offTypes([fght,grnd,stl],    [fly,bug,fire,ice],    []);
let bugOff = new offTypes([fght,fly,pois,ghst,stl,fire,fay],     [grs,psy,drk],    []);
let ghostOff = new offTypes([drk],     [ghst,psy],     [norm]);
let steelOff = new offTypes([stl,fire,elec],     [rck,ice,fay],      []);
let electricOff = new offTypes([grs,elec,dgn],   [fly,wtr],    [grnd]);
let psychicOff = new offTypes([stl,psy],    [fght,pois],      [drk]);
let iceOff = new offTypes([stl,fire,wtr,ice],    [fly,grnd,grs,dgn],    []);
let dragonOff = new offTypes([stl],     [dgn],     [fay]);
let darkOff = new offTypes([fght, drk, fay],     [ghst,psy],     []);
let fairyOff = new offTypes([pois,stl,fire],    [fght,dgn,drk],     []);



let typeOne = grs;
let typeTwo = drk;
let effec = 1;

function checkDef(type1, type2, otype) {

    // console.log(otype.inEff);

    //checks the type
    for ( let x in otype){
        
        // console.log(x + " " + otype[x]);
       for (let y in otype[x]){
            // console.log(y + " " + otype[x][y] + " " + x);
            if (otype[x][y] == type1 || otype[x][y] == type2){
                // console.log(x + " " + y);
                if(x == "inEff"){
                    effec*= 0.5;
                }
                else if(x == "supEff"){
                    effec*= 2
                }
                else if(x == "noEff"){
                    effec*= 0;
                }
            }
       }

    }


}

checkDef(typeOne, typeTwo, ghostOff);

document.getElementById("test").innerHTML = effec;