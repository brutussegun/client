interface Login {

    email: string,
    password: string
}


interface RegistrationForm {

    name: string;
    password: any;
    email: string;
    businessName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

interface Client {
}

interface Server {
}

interface Project {
}

interface User {
}

interface Invoice {
}

interface Account {
}

interface Breadcrumb {
}

interface Statistics {
}

export {
    Client,
    Server,
    Project,
    User,
    Invoice,
    Account,
    Breadcrumb,
    Statistics,
    RegistrationForm
};
