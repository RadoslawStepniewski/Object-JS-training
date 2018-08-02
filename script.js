let customer = {
    name: "Radek Nowak",
    speak : function () {
        
        return `My name is ${this.name}`
    },

    adress: {
        street: "Polsna",
        city: "Radom",
        state: "Maz"

    }
}
document.write(customer.speak() + "<br />")
document.write(customer.name + "lives" + customer.adress.street + "<br />");
customer.adress.coutry = "Pol";


function Person(name, street){
    this.name = name;
    this.street = street;

    this.info = function(){
        return "My name is " + this.name + " and I live on " + this.street;
    }
}

let bobSmith = new Person("Bob", "Polsna");
let ewaNowak = new Person("Ewa", "Duża")

document.write(bobSmith.info() + "<br />")
document.write(ewaNowak.info() + "<br />")