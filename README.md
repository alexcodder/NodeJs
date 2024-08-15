

PUT http://localhost:4040/task/update/66b4322877a10a457227ca3d: {
  "Network": {
    "addresses": {
      "local": {
        "address": "::1",
        "family": "IPv6",
        "port": 52193
      },
      "remote": {
        "address": "::1",
        "family": "IPv6",
        "port": 4040
      }
    }
  },
  "Request Headers": {
    "content-type": "application/json",
    "user-agent": "PostmanRuntime/7.41.1",
    "accept": "*/*",
    "postman-token": "1f8d0fbb-0718-4eae-aef1-3e274c5b1af5",
    "host": "localhost:4040",
    "accept-encoding": "gzip, deflate, br",
    "connection": "keep-alive",
    "content-length": "40"
  },
  "Request Body": "{\n\t\"name\": \"Add your name in the body\"\n}",
  "Response Headers": {
    "x-powered-by": "Express",
    "content-security-policy": "default-src 'none'",
    "x-content-type-options": "nosniff",
    "content-type": "text/html; charset=utf-8",
    "content-length": "175",
    "date": "Thu, 15 Aug 2024 07:55:54 GMT",
    "connection": "keep-alive",
    "keep-alive": "timeout=5"
  },
  "Response Body": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot PUT /task/update/66b4322877a10a457227ca3d</pre>\n</body>\n</html>\n"
}
