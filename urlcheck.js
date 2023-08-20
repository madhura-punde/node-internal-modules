const url = require('url');
// provides utilities for URL resolution and parsing

const address = 'https://www.youtube.com/user/programmingwithmosh'

const parsedurl = url.parse(address);

const host = parsedurl.hostname
const ref = parsedurl.href
console.log({host, ref});


// {
//   host: 'www.youtube.com',
//   ref: 'https://www.youtube.com/user/programmingwithmosh'
// }