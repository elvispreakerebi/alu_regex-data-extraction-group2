// Sample text data containing different types of information for extraction
const textData = `Email addresses:
user@example.com
firstname.lastname@company.co.uk
URLs:
https://www.example.comLinks to an external site.
http://subdomain.example.org/pageLinks to an external site.
Phone numbers (various formats):
(123) 456-7890
123-456-7890
123.456.7890
Credit card numbers:
1234 5678 9012 3456
1234-5678-9012-3456
Time:
14:30 (24-hour format)
2:30 PM (12-hour format)
HTML tags:
<p>
<div class="example">
<img src="image.jpg" alt="description">
Hashtags:
#example
#ThisIsAHashtag
Currency amounts:
$19.99
$1,234.56`;

// Arrow function to extract matches for a given regex pattern from the input text
const matchedResult = (text, regex) => {
  // Use the match() method to find all occurrences of the pattern
  const matches = text.match(regex);
  if (matches) {
    // If matches are found, return them as an array
    return matches;
  }
  // If no matches are found, return null
  return null;
}

// Regex pattern to match HTML tags (e.g., <p>, <div>, <img>)
const htmlTagRegex = /<[^>]+>/g;

// Regex pattern to match email addresses (e.g., user@example.com)
const emailAddressRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Regex pattern to match credit card numbers in formats like "1234 5678 9012 3456" or "1234-5678-9012-3456"
const creditCardRegex = /(\d{4}[ -])(\d{4}[ -])(\d{4}[ -])(\d{4})/g;

// Regex pattern to match various phone number formats, such as "(123) 456-7890" or "123-456-7890"
const phoneNumberRegex = /(\d{3}|\d{3}[.-])(\d{3}[.-])(\d{4})|\(\d{3}\)[ ](\d{3}[-])(\d{4})/g;

// Regex pattern to match URLs (e.g., https://www.example.com)
const urlRegex = /(https?:\/\/[^\s]+)/g;

// Log all extracted matches for HTML tags to the console
console.log(matchedResult(textData, htmlTagRegex));

// Log all extracted matches for email addresses to the console
console.log(matchedResult(textData, emailAddressRegex));

// Log all extracted matches for credit card numbers to the console
console.log(matchedResult(textData, creditCardRegex));

// Log all extracted matches for phone numbers to the console
console.log(matchedResult(textData, phoneNumberRegex));

// Log all extracted matches for URLs to the console
console.log(matchedResult(textData, urlRegex));
