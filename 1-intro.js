// const myName = "Nguyen Thanh Nhat"
// console.log(myName)
class Person {
    constructor(id,name,address,phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    getInfor()
    {
        return this.name + " " + this.address + " " +  this.phone;
    }
    setInfor(infor){
        this.infor = infor;
    }
    setName(name){
        this.name = name;
    }
    getName()
    {
        return this.name;
    }
    setAddress(address){
        this.address = address;
    }
    getPhone(){
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
}
const person = new Person(1,"Nguyen Thanh Nhat","Quang Nam","0764078204");
console.log(person.getInfor());