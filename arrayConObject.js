var arrayofObjects = [
    { name:"Adam", profession:"Engineer", company: "Google" },
    { name:"Sam", profession:"Manager", company: "Amazon" },
    { name:"Gerogia", profession:"Designer", company: "Netflix" },
    { name:"Kate", profession:"Engineer", company: "Microscoft" },
    { name:"James", profession:"Sales", company: "Amazon" },
];
arrayofObjects.forEach(object =>{
    object.name = "ronald";
});
arrayofObjects.forEach(object =>{
    console.log(object);
});