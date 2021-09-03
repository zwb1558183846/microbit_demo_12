let azimuth = 0
input.calibrateCompass()
basic.forever(function () {
    azimuth = input.compassHeading()
    if (azimuth >= 0 && azimuth < 45) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    }
    if (azimuth >= 45 && azimuth < 90) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (azimuth >= 90 && azimuth < 135) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    }
    if (azimuth >= 135 && azimuth < 180) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (azimuth >= 180 && azimuth < 225) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    }
    if (azimuth >= 225 && azimuth < 270) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (azimuth >= 270 && azimuth < 315) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    }
    if (azimuth >= 315 && azimuth < 360) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
