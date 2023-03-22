input.onButtonPressed(Button.A, function () {
    cakLandMotor.turnLeft(25)
    basic.pause(1000)
    cakLandMotor.stop()
    basic.pause(1000)
})
let seedsDropped = 0
