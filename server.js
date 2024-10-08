const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Profile.html'));
});


app.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Education.html'));
});


app.get('/professional skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Professional skills.html'));
});

app.get('/activitties', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Activitties.html'));
});

app.get('/contact', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'public', 'Contact.html'));
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});