

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
        var todoList = [
            "hi",
            "hello",
            "what's goign on"
        ];

        return res.send(todoList);
    });

}

module.exports = appRouter;
