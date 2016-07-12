

var appRouter = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/todos", function(req, res) {

        let data = [
            "hi",
            "hello",
            "what's goign on"
        ];

        return res.send(data);
    });

}

module.exports = appRouter;
