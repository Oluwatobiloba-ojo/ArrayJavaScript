class AirConditioner{
    
    constructor(name){
        this._name = name;
        this._isOn = false;
        this._temperature = 16;
    }

    getName(){
        return this._name;
    }

    isOn(){
        return this._isOn;
    }

    toggle(){
        if(this._isOn){
            this._isOn = false;
        }else this._isOn = true;
    }

    temperature(){
        return this._temperature;
    }

    increaseTemp(){
        if(this._isOn && this._temperature < 21) this._temperature = this._temperature + 1;
    }

    decreaseTemp(){
        if(this._temperature > 16 && this._isOn) this._temperature = this._temperature - 1;
    }

}


module.exports = {AirConditioner};