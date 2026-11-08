
const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        return value * 2;
    } else {
        return value * multiplier;
    }
}


const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    } 
    else if (typeof value === 'number') {
        return value * 10;
    } 
    else {
        if (value === true) {
            return "Active";
        } else {
            return "Inactive";
        }
    } 
}


const formatCoordinate = (cord: readonly [lat: number, lng: number, location: string]): string => {
    const [latitude, longitude, locationName] = cord;
    return `Location: ${locationName} (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`;
}


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const finalArray= [];
    for (const array of arrays) {
        finalArray.push(...array);
    }
    return finalArray;
}


interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses = ( courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course => course.students >= minStudents && course.isPublished);
}

 
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const newArr : T[K][] = [];
    newArr.push(...items.map(item => item[key]));
    return newArr;
}


class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    // get baseSalaryFunc(): number {
    //     return this.baseSalary;
    // }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }

}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string ) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }

}



const validateAgeAsync = async (age: number): Promise<string> => {
    if ( age >= 18) {
        return new Promise<string>(
            (resolve: (value: string)=> void, reject: (value: Error)=> void) : void => {
                setTimeout((): void => {
                    resolve("Access Granted");
                }, 1000);
            });
    } else {
        return new Promise<string>(
            (resolve: (value: string)=> void, reject: (value: Error)=> void): void  => {
                reject(new Error ("Access Denied: Must be 18 or older"))
            }
        );
            
    }
}



