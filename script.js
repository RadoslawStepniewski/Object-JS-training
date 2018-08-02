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
document.write(customer.name + "lives" + customer.adress.street);
customer.adress.coutry = "Pol";
