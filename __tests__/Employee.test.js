const Employee = require('../lib/Employee.js');

test('Creates new employee', () => {
    const employee = new Employee('jeff', 'jeff@mail', 3);

    expect(employee.name).toBe('jeff');
    expect(employee.email).toBe('jeff@mail');
    expect(employee.id).toEqual(expect.any(Number));

    expect(employee.getName()).toEqual({"name": "jeff"});
    expect(employee.getId()).toEqual({"id": 3});
    expect(employee.getEmail()).toEqual({"email": "jeff@mail"});
    expect(employee.getRole()).toEqual("Employee");
});
