animale1 = {
    specie: "mucca",
    razza: "canina",
    zampe: 4,
    caratteristicheComplete: function() {
        return this.specie + ", " + this.razza + ", " + this.zampe;
      }
}
animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4,
    caratteristicheComplete1: function(c) {
        return this.specie + ", " + this.razza + ", " + this.zampe + ", " + c;
      }
}
animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2,
    caratteristicheComplete2: function() {
        return this.specie + ", " + this.razza + ", " + this.zampe;
      }
}
function functionAnimal1() {
    document.getElementById("a1").innerHTML = animale1.caratteristicheComplete();
}
function functionAnimal2() {
    document.getElementById("a2").innerHTML = animale2.caratteristicheComplete1("pippo");
}
function functionAnimal3() {
    document.getElementById("a3").innerHTML = animale3.caratteristicheComplete2();
}