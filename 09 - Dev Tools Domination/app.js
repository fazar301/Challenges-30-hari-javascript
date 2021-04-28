    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello, world')
    // Interpolated
    console.log('hello,','world')
    // Styled
    console.log('%c console dengan style', 'background:red; color: white; padding: 100px;')
    // warning!
    console.warn('ini peringatan')
    // Error :|
    console.error('ini error')
    // Info
    console.info('ini info')
    // Testing
    console.assert(dogs[0].name === 'hugo','ini salah')
    // clearing
    console.clear() 
    // Viewing DOM Elements
    const p = document.querySelector('p')
    console.log(p)
    // Grouping together
    dogs.forEach(e => {
      console.groupCollapsed(e.name)
      console.log(`This is ${e.name}`)
      console.log(`${e.name} is ${e.age} years old`)
      console.log(`${e.name} is ${e.age * 7} dog years old`)
      console.groupEnd()
    })
    console.table(dogs)
    // counting
    console.count('satu')
    console.count('dua')
    console.count('satu')
    console.count('dua')
    console.count('satu')
    console.count('dua')
    console.count('Dua')
    // timing
    console.time('mengambil data')
    
    fetch('https://api.github.com/users/fazar301')
      .then(response => response.json())
      .then(data => {
        console.timeEnd('mengambil data')
        console.log(data)
      })