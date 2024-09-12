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

// arrow function to extract data from text
const matchedResult = (text, regex) => {
  const matches = text.match(regex);
  if (matches) {
    return matches;
  }
  return null;
}

// all regexes for data type extraction
const htmlTagRegex = /<[^>]+>/g;
const emailAddressRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const creditCardRegex = /(\d{4}[ -])(\d{4}[ -])(\d{4}[ -])(\d{4})/g;
const phoneNumberRegex = /(\d{3}|\d{3}[.-])(\d{3}[.-])(\d{4})|\(\d{3}\)[ ](\d{3}[-])(\d{4})/g;

// command to display result on the console
console.log(matchedResult(textData, htmlTagRegex));
console.log(matchedResult(textData, emailAddressRegex));
console.log(matchedResult(textData, creditCardRegex));
console.log(matchedResult(textData, phoneNumberRegex));
