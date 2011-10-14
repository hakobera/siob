siob
====

Simple load test or benchmark tool for Socket.IO server.

Installation
------------

  $ npm install -g siob

Usage
-----

  Usage: siob [options]

  Options:

    -h, --help                       output usage information
    -v, --version                    output the version number
    -t, --times <requests>           number of requests to perform. If not set this value, run forever
    -c, --connections <connections>  number of multiple connections to make, default value is 100
    -i, --interval <interval>        request inteval time, unit is milisecouns, default value is 1000
    -u, --url <url>                  url to test Socket.IO server
    -e, --event <event>              event name to test, default value is "message"
    -r, --receiveEvent <event>       recieve event name to test, default value is same as event option
    -d, --data <data>                test data to send test server, default value is "{}"
    -V, --verbose                    output detail log

License
-------

(The MIT License)

Copyright (c) 2011 Kazuyuki Honda <hakobera@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.