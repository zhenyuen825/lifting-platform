input.onButtonPressed(Button.A, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    SuperBit.Servo2(SuperBit.enServo.S1, 90)
})
basic.showIcon(IconNames.Heart)
SuperBit.Servo2(SuperBit.enServo.S1, 90)
