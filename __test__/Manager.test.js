
const Manager = require('../lib/Manager');


test('creates an Manager object', () => {
    const manager = new Manager('Pepe', 90, 'Pepe29@gmail', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Pepe', 90, 'Pepe29@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 