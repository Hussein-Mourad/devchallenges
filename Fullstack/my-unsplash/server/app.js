const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");

require("dotenv").config();

const indexRouter = require("./routes/imageRouter");

const app = express();

const password = process.env.PASSWORD;

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.message || "error");
});

module.exports = app;
