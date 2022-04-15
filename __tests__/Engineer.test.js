const Engineer = require('../lib/engineer.js');

test('Creates new engineer', () => {
    const engineer = new Engineer('jeff', 'jeff@mail', 3, 'jeff420');

    expect(engineer.name).toBe('jeff');
    expect(engineer.email).toBe('jeff@mail');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.username).toBe('jeff420');

    expect(engineer.getName()).toEqual({"name": "jeff"});
    expect(engineer.getId()).toEqual({"id": 3});
    expect(engineer.getEmail()).toEqual({"email": "jeff@mail"});
    expect(engineer.getRole()).toEqual("Engineer");
});
