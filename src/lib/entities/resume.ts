export interface PersonalInformation {
    name : string
    birth : string
}

export interface Address {
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
    country: string;
}

export interface Phone {
    code: string;
    ddd: string;
    number: string;
}

export interface ContactInformation {
    address : Address
    phone : Phone
    email : string
    linkedin : string
    github : string
}

export interface Date {
    year : number
    month? : number
}

export interface WorkExperience {
    position : string
    company : string
    start : Date
    end : Date
    description : string
}

export interface Education {
    course : string
    institution : string
    start : Date
    end : Date
}

export interface Course {
    course : string
    end : Date
}

export interface Prize {
    prize : string
    event : string
}

export default interface Resume {
    info : PersonalInformation
    contact : ContactInformation
    experience : WorkExperience[]
    education : Education[]
    courses : Course[]
    prizes : Prize[]
    skills : string[]
}
