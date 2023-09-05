interface Interns {
    name: string,
    age: number,
    skills: string[]
}

interface Juniors {
    name: string,
    age: number,
    skills: string[],
    date_of_promotion: Date,
    domain: "Web" | "Connect" | "Backend"
}

interface Company {
    Interns: Interns[],
    Juniors: Juniors[],
    Country: string
}