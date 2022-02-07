const { User } = require('../models');

const userdata = [
  {
    username: 'sterling',
    email: 'sterling@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
  {
    username: 'lana',
    email: 'lana@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
  {
    username: 'marjorie',
    email: 'marjorie@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
  {
    username: 'pam',
    email: 'pam@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
  {
    username: 'krieger',
    email: 'krieger@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
  {
    username: 'ray',
    email: 'ray@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
  {
    username: 'cyril',
    email: 'cyril@isis.com',
    password: '$2b$10$UezQIAWfk3JqlG76yq6WH.54Za2XGq/J4ddTyNrOrhj6dKqolOKUy',
    created_at: 'April 20, 2021 07:00:00',
    updated_at: 'April 22, 2021 07:00:00'
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
