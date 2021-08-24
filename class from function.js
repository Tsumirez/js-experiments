/* 
A small task from course - create a class extending 
a parent that is created with function constructor.
*/

function Zed () {
    this.name = "Zed";
    this.weapon = "Doombringer"
  }
  
  Zed.attack = () => console.log('ganryu ichimongiri')
  
  class MonsterZed extends Zed {
    constructor() {
      super();
      this. name="MonsterZ";
    }
    
    attack() {console.log('Ultimate Zed')}
  }
  
  
  mz = new MonsterZed();
  
  console.log(mz.__proto__);
  mz.attack();