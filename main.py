def on_pin_pressed_p1():
    while pins.digital_read_pin(DigitalPin.P1) >= 1:
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                847,
                1,
                255,
                0,
                888,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)
