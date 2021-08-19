const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Submit</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    // if(url==='/message' && method==='POST'){
    //     fs.writeFileSync('message.txt','DUMMY');
    //     res.statusCode=302;
    //     res.setHeader('Location','/');
    //     return res.end();
    // }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt',message);
            // res.statusCode=302;
            // res.setHeader('Location','/');
            // return res.end();
            fs.writeFile('message2.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>hello from my Node.js server</h1></body>')
    res.write('</html>');
    res.end();
}
// module.exports=requestHandler;
module.exports={
    handler:requestHandler,
    someText:'Some hard coded value from routes.'
};