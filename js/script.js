// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("calculate-area").innerHTML = "<p>The area is: " + (5 * 3) + "cm^2</p>"  
  document.getElementById("calculate-perimeter").innerHTML = "<p>The perimeter is: " + (2 * (5 + 3)) + "cm</p>" 
}