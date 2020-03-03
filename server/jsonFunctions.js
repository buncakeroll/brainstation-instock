const fs = require('fs');
const express = require('express');

const jsonReader = (jsonFile) => {
    fs.readFile(jsonFile, 'utf8', (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            const jsObj = JSON.parse(jsonString)
            return jsObj;
    } catch(err) {
            console.log('Error parsing JSON string:', err)
        }
    })
}

const jsonWriter = (jsonFile, jsString) => {
    fs.writeFile(jsonFile, jsString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

module.exports = jsonReader, jsonWriter;
