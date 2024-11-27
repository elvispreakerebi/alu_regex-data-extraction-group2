# Regex Data Extraction Utility

## Overview

This project is a simple JavaScript-based utility for extracting specific types of data from a given text using **Regular Expressions (Regex)**. It identifies and extracts common data formats such as email addresses, URLs, phone numbers, credit card numbers, HTML tags, and more.

## Features

The application uses regex patterns to extract the following types of data:

1. **Email Addresses**  
   Matches common email formats like `user@example.com` and `firstname.lastname@company.co.uk`.

2. **URLs**  
   Identifies URLs starting with `http` or `https`, such as `https://www.example.com` or `http://subdomain.example.org/page`.

3. **Phone Numbers**  
   Extracts various phone number formats, including:
   - `(123) 456-7890`
   - `123-456-7890`
   - `123.456.7890`

4. **Credit Card Numbers**  
   Captures credit card numbers in formats like:
   - `1234 5678 9012 3456`
   - `1234-5678-9012-3456`

5. **HTML Tags**  
   Extracts HTML tags, such as:
   - `<p>`
   - `<div class="example">`
   - `<img src="image.jpg" alt="description">`

## Code Explanation

### Input Data
The `textData` variable contains the sample text, including various data types like emails, URLs, phone numbers, etc.

### Function to Extract Matches
The `matchedResult` function takes two arguments:  
- `text`: The input text to be scanned.  
- `regex`: The regular expression to search for matching patterns.  

The function uses the `match()` method to find all matches and returns the results. If no matches are found, it returns `null`.

### Regex Patterns
- **HTML Tags:** `/ <[^>]+> /g`  
  Matches any HTML tag, including attributes.

- **Email Addresses:** `/ [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,} /g`  
  Matches common email formats with domain extensions.

- **Credit Card Numbers:** `/ (\d{4}[ -])(\d{4}[ -])(\d{4}[ -])(\d{4}) /g`  
  Matches 16-digit credit card numbers separated by spaces or dashes.

- **Phone Numbers:** `/ (\d{3}|\d{3}[.-])(\d{3}[.-])(\d{4})|\(\d{3}\)[ ](\d{3}[-])(\d{4}) /g`  
  Matches various phone number formats.

- **URLs:** `/ (https?:\/\/[^\s]+) /g`  
  Matches URLs starting with `http` or `https`.

### Output
The script logs extracted matches for each regex pattern to the console.

## Example Usage

### Run the Script
To use the utility, copy the script into a `.js` file (e.g., `regexExtractor.js`) and run it using Node.js:

```bash
node regexExtractor.js
HTML Tags:
[ '<p>', '<div class="example">', '<img src="image.jpg" alt="description">' ]

Email Addresses:
[ 'user@example.com', 'firstname.lastname@company.co.uk' ]

Credit Card Numbers:
[ '1234 5678 9012 3456', '1234-5678-9012-3456' ]

Phone Numbers:
[ '(123) 456-7890', '123-456-7890', '123.456.7890' ]

URLs:
[ 'https://www.example.comLinks', 'http://subdomain.example.org/pageLinks' ]
