const urlRegex = /^(https?:\/\/)[\w.\-]+[a-zA-Z]$/;

function checkUrl(url) {
  if (urlRegex.test(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
}

// Testing some URLs
checkUrl("http://www.example.com");
checkUrl("https://www.example.com/path/to/file.html");
checkUrl("ftp://example.com");
checkUrl("https://www.example..com");
checkUrl("http://www.example.com?query=1");