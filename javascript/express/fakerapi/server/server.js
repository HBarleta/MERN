const express = require('express');

const app = express();

const port = 8000;

const {faker} = require('@faker-js/faker')


const createUser = () => {
    
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
        
    }
}


const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    
    const User1 = createUser();
    res.json({User1});
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    
    res.json({newCompany});
});

app.get("/api/user/company", (req, res) => {
    const newCompany = createCompany();
    const User1 = createUser();
    res.json({User1, newCompany});
});


app.use(express.json());

app.use(express.urlencoded({extended : true}));




app.listen(port, () => console.log(`Welcome friend! you are on port ${port}`));