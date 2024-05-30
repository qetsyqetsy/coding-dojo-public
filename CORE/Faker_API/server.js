const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

class User {
  constructor() {
    this._id = faker.string.uuid();
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();  // Updated method name
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.string.uuid();
    this.name = faker.company.name();  // Updated method name
    this.location = {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    };
  }
}

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Faker API!');
});

app.get('/api/users/new', (req, res) => {
  const newUser = new User();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = new Company();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = new User();
  const newCompany = new Company();
  res.json({ user: newUser, company: newCompany });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
