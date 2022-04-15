const Manager = require('../lib/manager.js');

test('Creates new manager', () => {
    const manager = new Manager('jeff', 'jeff@mail', 3, 420);

    expect(manager.name).toBe('jeff');
    expect(manager.email).toBe('jeff@mail');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.office).toEqual(expect.any(Number))

    expect(manager.getName()).toEqual({"name": "jeff"});
    expect(manager.getId()).toEqual({"id": 3});
    expect(manager.getEmail()).toEqual({"email": "jeff@mail"});
    expect(manager.getRole()).toEqual("Manager");
});
