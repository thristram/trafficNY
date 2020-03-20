let list = [];
let names = [];
$(document).ready(function () {
    // $("#carNumberControl").on("click", function (e) {
    //     let carNumber = Math.floor(Math.random() * 200);
    //     world.carsNumber = carNumber;
    //     console.log(`Car Number ${carNumber}`)
    //     $(this).html(`Car Number ${carNumber}`)
    // })
    setInterval(function () {
        $.get( "/api/get?number=" + world.carsNumber, function( data ) {
            if(data.length > 0){
                console.log(data)
                for(let i in data){
                    let number = parseInt(data[i].value);
                    if(number){
                        adjustCarNumber(number > 0, Math.abs(number), data[i].name);
                    }
                }
            }
        });
        $("#carNumberDisplay").html(world.carsNumber);
    },500);
    $(document).keydown(function(event) {

        var key = (event.keyCode ? event.keyCode : event.which);
        switch(key){
            case 38:
                // alert("up")
                adjustCarNumber(true)
                break
            case 40:
                adjustCarNumber(false)
                // alert("up")
                break
        }

    })
    function adjustCarNumber(isUp, number, name){
        let increment = number ? number: 10;
        let max = 1000;
        let min = 10;
        let maxDisplayLength = 20;
        let currentCarsNumber = world.carsNumber;
        let commendString = "";
        name = name ? name : 'Admin';
        if(names.indexOf(name) < 0){
            names.push(name);
        }
        if(isUp){
            if((currentCarsNumber + increment) > max){
                world.carsNumber = max
            }   else    {
                world.carsNumber += increment
            }
            commendString = `<li class="text-${names.indexOf(name) % 5}">${name} just add another ${number} cars</li>`;
        }   else {
            if ((currentCarsNumber - increment) < min) {
                world.carsNumber = min;
            } else {
                world.carsNumber -= increment
            }
            commendString = `<li class="text-${names.indexOf(name) % 5}">${name} just remove ${number} cars</li>`;
        }
        list.unshift(commendString);
        if(list.length > maxDisplayLength){
            list = list.slice(0,maxDisplayLength);
        }

        $('#commendLists').html(list.join(''));
    }
})
