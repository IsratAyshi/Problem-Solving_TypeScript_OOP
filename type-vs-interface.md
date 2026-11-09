## 1: What are the core differences between `type` aliases and `interface` in TypeScript? When should you choose one over the other?

In TypeScript, both `type` aliases and `interface` are used to define the structure of data, especially objects. However, an `interface` is mainly used to describe the shape of an object. One interface can be declared more than once, and TypeScript combines the declarations. Moreover, interfaces can use 'extends' to extend other interfaces.

``` ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// User now has both name and age.

interface Employee extends User {
    employeeId: number;
    department: string;
}

const emoployee: Employee = {
    name: "John Doe",
    age: 28,
    employeeId: 185,
    department: "IT"
};
```

A `type alias` cannot be redeclared but it is more flexible as it can describe objects, union types, tuples, primitive types and more. Furthermore, type aliases can combine types using intersections (`&`) instead of extending.

``` ts
type User = {
  name: string;
  age: number;
};

type ID = string | number;

type Employee = User & {
  employeeId: ID;
  department: string;
};

const employee: Employee = {
  name: "John Doe",
  age: 28,
  employeeId: 185,
  department: "IT"
};

const employee2: Employee = {
  name: "Jane Doe",
  age: 26,
  employeeId: "EMP-102",
  department: "HR"
};

// both are valid
```

I would generally choose `interface` when defining object shapes or class contracts that may need to be extended. I would choose `type` when working with unions, primitives, intersections, tuples, or complex type combinations. For simple object definitions, either can be used based on the specific needs of the project.