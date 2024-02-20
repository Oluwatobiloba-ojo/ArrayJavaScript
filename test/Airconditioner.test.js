const {AirConditioner} = require("../src/Airconditioner")

test("test that airconditioner can be created and it is not null", ()=>{
    let airconditioner = new AirConditioner("hisense");
    expect(airconditioner.getName()).toEqual("hisense");
});

test("test that when airconditioner is created the ac isOn is false ", ()=>{
    let airconditioner = new AirConditioner("hisense");
    expect(airconditioner.isOn()).toEqual(false);
});

test("test that the airconditioner when created and called method on and when we are to check if on return true", ()=>{
    let airconditioner = new AirConditioner("lG");
    expect(airconditioner.isOn()).toEqual(false);

    airconditioner.toggle();

    expect(airconditioner.isOn()).toEqual(true);
});

test("test that airconditioner temperature is always 16 when it is the temperature has not been manipulated", ()=>{
    let airconditioner = new AirConditioner("LG");

    expect(airconditioner.temperature()).toEqual(16);
});

test("test that airconditioner can not be increase if the temperature is off", ()=>{
    let airconditioner = new AirConditioner("LG");
    
    expect(airconditioner.temperature()).toEqual(16);
    expect(airconditioner.isOn()).toEqual(false);

    airconditioner.increaseTemp();

    expect(airconditioner.temperature()).toEqual(16);
});

test("test that when airconditioner is on and temperature is increase to 17", ()=>{
    let airconditioner = new AirConditioner("LG");
    
    expect(airconditioner.temperature()).toEqual(16);
    expect(airconditioner.isOn()).toEqual(false);
    airconditioner.toggle();

    airconditioner.increaseTemp();

    expect(airconditioner.temperature()).toEqual(17);
})

test("test that airconditioner temperature level can not be increase beyond 21", ()=>{
    let airconditioner = new AirConditioner("LG");
    airconditioner.toggle();
    for(let count = 0; count < 10; count++){
        airconditioner.increaseTemp();
    }
    expect(airconditioner.temperature()).toEqual(21);
});

test("test that the airconditioner of can not be decrease when it is within 16", ()=>{
    let airconditioner = new AirConditioner("Hisense");
    airconditioner.toggle();

    expect(airconditioner.temperature()).toEqual(16);

    airconditioner.decreaseTemp();

    expect(airconditioner.temperature()).toEqual(16);
});

test("test that the air conditioner of can be decrease from 21 to 18", ()=>{
    let airconditioner = new AirConditioner("LG");

    airconditioner.toggle();

    for(let count = 0; count < 6; count++){
        airconditioner.increaseTemp();
    }

    expect(airconditioner.temperature()).toEqual(21);

    for(let count = 3; count > 0; count--){
        airconditioner.decreaseTemp();
    }

    expect(airconditioner.temperature()).toEqual(18);
});

test("test that is the tempreture of an ac is not on the can not perform decrease on the airconditioner", ()=>{
    let airconditioner = new AirConditioner("Hisense");
    airconditioner.toggle();
    expect(airconditioner.isOn()).toEqual(true);

   for(let count = 0; count < 4; count++){
    airconditioner.increaseTemp();
   }

   expect(airconditioner.temperature()).toEqual(20);

   airconditioner.toggle();

   expect(airconditioner.isOn()).toEqual(false);

   airconditioner.decreaseTemp();
   airconditioner.decreaseTemp();

   expect(airconditioner.temperature()).toEqual(20);
});

