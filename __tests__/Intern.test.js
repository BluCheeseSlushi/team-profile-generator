const Intern = require('../lib/intern.js');

test('Creates new intern', () => {
    const intern = new Intern('jeff', 'jeff@mail', 3, 'school of jeff');

    expect(intern.name).toBe('jeff');
    expect(intern.email).toBe('jeff@mail');
    expect(intern.id).toEqual(expect.any(Number));

    expect(intern.getName()).toEqual({"name": "jeff"});
    expect(intern.getId()).toEqual({"id": 3});
    expect(intern.getEmail()).toEqual({"email": "jeff@mail"});
    expect(intern.getRole()).toEqual("Intern");
    expect(intern.getSchool()).toEqual("school of jeff");
});
