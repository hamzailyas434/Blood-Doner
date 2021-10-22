const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log(`Uncaught Exception Shutting down ...`);
    console.log(err.name, err.message);
    process.exit(1);

});


const app = require('./app');

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to DB");
    }
});


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`);
});

// Unhandller Rejection Error
process.on('unhandledRejection', err => {
    console.log(`Unhandler Rejection Shutting down ...`);
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
