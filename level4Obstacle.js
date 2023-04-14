kaboom()
function addObs() {

    loop(1.5,() => {
        add([
            pos(500,100),
            rect(20,40),
            color(255,0,0),
            area(),
            body(),
            "Object"
            ])
    })
}

module.exports = addObs