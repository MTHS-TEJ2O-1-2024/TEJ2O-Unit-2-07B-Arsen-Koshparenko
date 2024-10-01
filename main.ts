/* Copyright (c) 2020 MTHS All rights reserved 
 * 
 * Created by: Arsen 
 * Created on: Oct 2024 
 * This program add 1 if you press A 
*/

// setup 
basic.clearScreen()
let cookieNumber = 0
basic.showIcon(IconNames.Happy)

// turn on  
input.onButtonPressed(Button.A, function () {
    cookieNumber = cookieNumber + 1
    basic.showNumber(cookieNumber)
})

// turn off 
input.onButtonPressed(Button.B, function () {
    cookieNumber = 0
    basic.showNumber(cookieNumber)
})


