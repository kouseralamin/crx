"use strict";

weather().then((value) => {
    toast("Weather: " + value, 10000)
})

time().then((value) => {
    toast(Math.abs(parseInt(value) - new Date().getTime()), 10000);
})