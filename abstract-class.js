function Zed () {
    if (new.target === Zed) {
      throw Error('This is an abstract class!')
    }
  
    if(!new.target) {
      console.log(this);
      throw Error('Zed can only be used as constructor!')
    }
    
    this.name='Zed';
    this.weapon = 'Doombringer'
  }
  
  var z = new MonsterZed();
  //var y = Zed();
  console.log(z.hasOwnProperty('weapon'));