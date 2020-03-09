// const express = require('express');
const Sequelize = require('sequelize');


// let sequelize = new Sequelize('mysql://localhost:3306/kayak_db');

const sequelize = new Sequelize('kayak_db', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
        operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
 }); 
//fattmarrow
let Customer = sequelize.define('customer', {
	custFirstName: {
        type: Sequelize.STRING,
    },
	custSurname: {
        type: Sequelize.STRING,
    },
    emergFirstName: {
        type: Sequelize.STRING,
    },
    emergSurname: {
        type: Sequelize.STRING,
    },
	emergContactNumber: {
        type: Sequelize.INTEGER,
    },
	emergRelation: {
        type: Sequelize.STRING,
    },
});


let Equipment = sequelize.define('equipment', {
    equipType: {
         type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.INTEGER,
    },
});



Customer.hasMany(Equipment);

Equipment.belongsTo(Customer, {
    foreignKey: 'id'
});

Customer.sync().then(() => {
    console.log('New customer table created');
}).then(() => Equipment.sync().then(() => {
    console.log('New equipment table created');
}).finally(()=> {
    sequelize.close()
}) );

// Equipment.sync().then(() => {
//     console.log('New equipment table created');
// }).finally(() => {
//     sequelize.close();
// });


