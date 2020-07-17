const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require("path");
const bcrypt = require("bcryptjs");

require('dotenv').config();

const DB_URL = process.env.URL;

module.exports = {
    express,
    mongoose,
    DB_URL,
    jwt,
    cors,
    multer,
    path,
    bcrypt
}