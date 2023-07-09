input.onPinPressed(TouchPin.P1, function () {
    pins.setEvents(DigitalPin.P1, PinEventType.Touch)
    while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        847,
        1,
        255,
        0,
        888,
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), music.PlaybackMode.UntilDone)
    }
})
