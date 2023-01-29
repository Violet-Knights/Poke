
//Class for offensive type matchups
class offTypes {
    constructor(inEff, supEff, noEff){
        this.inEff = inEff;
        this.supEff = supEff;
        this.noEff = noEff;
    }
}
//Class for tracking the type match up
class typeCounter {
    constructor(type, eff){
        this.type = type;
        this.eff = eff;
    }
}

//for easier varibles for the types
let norm = new typeCounter("normal", 1);
let fght = new typeCounter("fighting", 1);
let fly = new typeCounter("flying", 1);
let pois = new typeCounter("poison", 1);
let grnd = new typeCounter("ground", 1);
let rck = new typeCounter("rock", 1);
let bug = new typeCounter("bug", 1);
let ghst = new typeCounter("ghost", 1);
let stl = new typeCounter("steel", 1);
let fire = new typeCounter("fire", 1);
let wtr = new typeCounter("water", 1);
let grs = new typeCounter("grass", 1);
let elec = new typeCounter("electric", 1);
let psy = new typeCounter("psychic", 1);
let ice = new typeCounter("ice", 1);
let dgn = new typeCounter("dragon", 1);
let drk = new typeCounter("dark", 1);
let fay = new typeCounter("fairy", 1);
let none = new typeCounter("none", 1);


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

//Every Type in one array
let allOffTypes = [fireOff, waterOff, grassOff, normalOff, fightOff, flyingOff, poisonOff, groundOff, rockOff, bugOff, ghostOff, steelOff, electricOff, psychicOff, iceOff, dragonOff, darkOff, fairyOff];


let selecType = iceOff;
let type1;
let type2;

function checkDef() {
    //reset and collect the defensive typings
    let effec = 1;
    type1 = document.getElementById("type1").value;
    type2 = document.getElementById("type2").value;

    //checks the type
    // for (let selecType in allOffTypes)
        for ( let x in selecType){
            for (let y in selecType[x]){
                if (selecType[x][y].type == type1 || selecType[x][y].type == type2){
                    if(x == "inEff"){
                        effec*= 0.5;
                    }
                    else if(x == "supEff"){
                        effec*= 2;
                    }
                    else if(x == "noEff"){
                        effec*= 0;
                    }
                    
                }
                
            }
            
        }
    document.getElementById("test").innerHTML = effec;
}


    // 


function testing() {
    console.log("working");
}



document.getElementById("calc").addEventListener("click", checkDef);
