## 5: Explain how Access Modifiers (`public`, `private`, `protected`, and `readonly`) work in TypeScript OOP with examples.

Access modifiers control the visibility of class members such as properties and methods, and from where they can be accessed from. They help to organize code and protect internal class data. 

-   **`public`:** Members can be accessed from anywhere, both inside and
    outside the class. It is the default access level.
-   **`private`:** Members can only be accessed inside the class where
    they are declared. They cannot be accessed directly from outside the
    class or from inherited subclasses.
-   **`protected`:** Members can be accessed inside the declaring class
    and its subclasses, but not directly from outside.
-   **`readonly`:** Assignable only when a property is declared or
    inside the constructor, but it cannot be reassigned later.

For example:

``` ts
class Employee {
  public name: string;
  private salary: number;
  protected department: string;
  readonly employeeId: number;

  constructor(
    name: string,
    salary: number,
    department: string,
    employeeId: number
  ) {
    this.name = name;
    this.salary = salary;
    this.department = department;
    this.employeeId = employeeId;
  }

  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  showDepartment() {
    console.log(this.department); // Allowed because protected property.
    console.log(this.salary); // Error because private property.
  }
}

const employee = new Employee("John", 50000, "IT", 1011);
console.log(employee.name); // Allowed because public property.
console.log(employee.getSalary()); // Allowed through public method by default.

employee.employeeId = 102; // Error because readonly property.

```

I would use 'private' to protect internal data, 'protected' when subclasses need access, 'public' for the class members meant to be used externally and 'readonly' for values that should not be changed or reassigned.

These access modifiers improve encapsulation, code readability, and prevent unintended modifications to class properties. In TypeScript OOP, they are essential for organizing and structuring code effectively.