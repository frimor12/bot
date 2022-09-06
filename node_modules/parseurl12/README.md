# parse-url

## Requirements

- UNIX or GNU/Linux
- [Git](https://git-scm.com/)
- [GNU/Make](https://www.gnu.org/software/make/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

```console
$ git clone https://github.com/esgi-javascript-lab/parse-url.git
$ cd parse-url
```

## Install

```console
$ make install
```

Note: this will install the necessary Node.js dependencies for testing.

## Test


```console
$ make test
```

Note: this will test the `./test/url.js` file.

## Uninstall

```console
$ make uninstall
```

Note: this will remove the `.config`, `.npm`, `.nyc_output`, & `node_modules` files and will remove the local Docker image as well as the generated volumes & orphans.

## Goal

Edit the `./src/url.js` file and fill the `parseUrl` function according to the following rules.

The function will take only one parameter. It will only take a single string as argument. The string will always be a valid HTML5 URL. The function will always return an object following the below rules.

An URL (in this challenge) has 4 parts:
- Scheme (if any). Ex: https, http, ftp, ...
- Domain. Ex: ebay.com, amazon.com, google.com, ...
- Query (if any). Ex: ?id=123, ?attribute=name&filter=motorcycle, ...
- Fragment (if any). Ex: #blackfriday, #header, #cookies, ...

## Example

```javascript
"use strict";

console.log(parseUrl("ebay.com"));
// { domain: "ebay.com" }

console.log(parseUrl("https://ebay.com"));
// { scheme: "https", domain: "ebay.com" }

console.log(parseUrl("https://ebay.com?id=123"));
// { scheme: "https", domain: "ebay.com", query: "?id=123" }

console.log(parseUrl("https://ebay.com#blackfriday"));
// { scheme: "https", domain: "ebay.com", fragment: "?id=123" }
```
