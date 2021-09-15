const functions = require("firebase-functions");
const express = require("express");
const cors  = require("cors")
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51J5XlNBZwluRTTPEcwBDW8dqz2estasJG7nORt1yKL6QZeZdAmHfpbIqWRzzcs7n2deGhXAPlgMbEhfoIQO6iYkh003LVKPxFu");


// API

// App config

const app = express();

app.use(cors());

// Middlewares
// app.use(cors());
app.use(express.json());

// Api routes
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});


// Listen command
exports.api = functions.https.onRequest(app);


