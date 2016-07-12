var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
    });

    app.get("/todo", function(req, res) {
        var todoList = [
            "hi",
            "hello",
            "what's goign on"
        ]
        return res.send(todoList);
    });

}

module.exports = appRouter;
