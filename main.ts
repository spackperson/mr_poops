input.onButtonPressed(Button.A, function () {
    Need_to_go_outside = 0
    basic.showIcon(IconNames.Rollerskate)
    basic.showLeds(`
        . . . # #
        . . . # #
        # # # # #
        # # # # #
        . . # . #
        `)
    basic.showIcon(IconNames.Rollerskate)
    basic.showLeds(`
        . . . # #
        . . . # #
        # # # # #
        # # # # #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Need_to_go_outside))
})
input.onButtonPressed(Button.B, function () {
    Servo.Servo(8, 180)
    basic.pause(200)
    Servo.Servo(8, 90)
})
let Need_to_go_outside = 0
radio.setGroup(2)
Need_to_go_outside = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(1000)
    Need_to_go_outside += 1
    if (Need_to_go_outside < 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    }
    if (Need_to_go_outside > 10 && Need_to_go_outside < 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (Need_to_go_outside > 20 && Need_to_go_outside < 30) {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            `)
    }
    if (Need_to_go_outside == 25) {
        Servo.Servo(8, 180)
        basic.pause(200)
        Servo.Servo(8, 90)
    }
    if (Need_to_go_outside == 35) {
        Servo.Servo(8, 180)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(2000)
        Servo.Servo(8, 90)
    }
})
