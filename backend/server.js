const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' package
const fs = require('fs');

// Use the cors middleware
app.use(cors());

app.use(bodyParser.json());

app.post('/store-email', (req, res) => {
  const { email } = req.body;

  if (email) {
    // Read the existing data from records.json (if any)
    let existingData = [];
    try {
      const rawData = fs.readFileSync('records.json');
      existingData = JSON.parse(rawData);
    } catch (err) {
      // Handle read error (e.g., if records.json doesn't exist)
    }

    // Add the new email to the existing data
    existingData.push(email);

    // Save the updated data back to records.json
    fs.writeFileSync('records.json', JSON.stringify(existingData, null, 2));

    console.log('Email stored:', email);

    res.status(200).send('Email stored successfully.');
  } else {
    res.status(400).send('Invalid email data.');
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
