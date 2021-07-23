function MetalDemon (){
    this.allegiance = 'evil';
    this.commander = 'Mother';
  }
  
  MetalDemon.prototype.assemble = function (){console.log('Quarter Knight assembly!')}
  
  function Zed () {
    MetalDemon.call(this);
    this.name="Zed";
    this.weapon="Doombringer"
  }
  
  Zed.prototype = Object.create(MetalDemon.prototype)
  Object.defineProperty(Zed.prototype,'constructor',{value: Zed, enumerable:false, writable:true})
  //Zed.prototype.__proto__ = MetalDemon.prototype;
  
  
  function MonsterZed (){
    Zed.call(this);
    this.health = 55000;
    this.power = 'huge';
  }
  
  MonsterZed.prototype.__proto__ =Zed.prototype;
  
  zed = new Zed();
  zed.weapon = 'replacement sword';
  
  MonsterZ = new MonsterZed();
  console.log(Object.getPrototypeOf(Zed.prototype));