var lastPressed = 0;
var timelineDescriptionAnim = document.getElementById("timeline-description").style.animationName

// call the switch description animation after 1 millisecond
function switch_desc() {
    document.getElementById("timeline-description").style.animationName = "timeline-description-switch";
    document.getElementById("timeline-description").style.animationDuration = "0.5s";
    document.getElementById("timeline-description").style.opacity = 1;
}

// when one of the 5 buttons are pressed, it will lift up to indicate that it has been pressed,
// and the corresponding text for it
function timelineItemPressed(item) {

    // description
    document.getElementById("timeline-description").style.animationName = "none";
    if (lastPressed == 0) 
    {
        document.getElementById("timeline-description").style.animationName = "timeline-description-on";
        document.getElementById("timeline-description").style.animationDuration = "0.3s";
        document.getElementById("timeline-description").style.opacity = 1
    }
    else if (lastPressed == item)
    {
        document.getElementById("timeline-description").style.animationName = "timeline-description-off";
        document.getElementById("timeline-description").style.animationDuration = "0.3s";
        document.getElementById("timeline-description").style.opacity = 0
    }
    else
    {
        document.getElementById("timeline-description").style.animation = "none";
        setTimeout(switch_desc, 1);
    }

    switch(item) 
    {
        case 1:
            setText(1)

            switch(lastPressed)
            {
                case 1:
                {
                    lastPressed = 0;
                    // item move
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item1").style.top = "-20px";
                    break;
                }
                case 2:
                {
                    lastPressed = 1;
                    // item move
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item1").style.top = "-40px";
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item2").style.top = "-20px";
                    break;
                } 
                case 3:
                {
                    lastPressed = 1;
                    // item move
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item1").style.top = "-40px";
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item3").style.top = "-20px";
                    break;
                }
                case 4:
                {
                    lastPressed = 1;
                    // item move
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item1").style.top = "-40px";
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item4").style.top = "-20px";
                    break;
                }
                case 5:
                {
                    lastPressed = 1;
                    // item move
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item1").style.top = "-40px";
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item5").style.top = "-20px";
                    break;
                }
                case 0:
                {
                    lastPressed = 1;
                    // item move
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item1").style.top = "-40px";
                    break;
                }
            }
            break;

        case 2:
            setText(2)

            switch(lastPressed)
            {
                case 1:
                {
                    lastPressed = 2;
                    // item move
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item2").style.top = "-40px";
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item1").style.top = "-20px";
                    break;
                }
                case 2:
                {
                    lastPressed = 0;
                    // item move
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item2").style.top = "-20px";
                    break;
                } 
                case 3:
                {
                    lastPressed = 2;
                    // item move
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item2").style.top = "-40px";
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item3").style.top = "-20px";
                    break;
                }
                case 4:
                {
                    lastPressed = 2;
                    // item move
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item2").style.top = "-40px";
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item4").style.top = "-20px";
                    break;
                }
                case 5:
                {
                    lastPressed = 2;
                    // item move
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item2").style.top = "-40px";
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item5").style.top = "-20px";
                    break;
                }
                case 0:
                {
                    lastPressed = 2;
                    // item move
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item2").style.top = "-40px";
                    break;
                }
            }
            break;
        
        case 3:
            setText(3)

            switch(lastPressed)
            {
                case 1:
                {
                    lastPressed = 3;
                    // item move
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item3").style.top = "-40px";
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item1").style.top = "-20px";
                    break;
                }
                case 2:
                {
                    lastPressed = 3;
                    // item move
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item3").style.top = "-40px";
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item2").style.top = "-20px";
                    break;
                } 
                case 3:
                {
                    lastPressed = 0;
                    // item move
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item3").style.top = "-20px";
                    break;
                }
                case 4:
                {
                    lastPressed = 3;
                    // item move
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item3").style.top = "-40px";
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item4").style.top = "-20px";
                    break;
                }
                case 5:
                {
                    lastPressed = 3;
                    // item move
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item3").style.top = "-40px";
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item5").style.top = "-20px";
                    break;
                }
                case 0:
                {
                    lastPressed = 3;
                    // item move
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item3").style.top = "-40px";
                    break;
                }
            }
            break;
        
        case 4:
            setText(4)

            switch(lastPressed)
            {
                case 1:
                {
                    lastPressed = 4;
                    // item move
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item4").style.top = "-40px";
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item1").style.top = "-20px";
                    break;
                }
                case 2:
                {
                    lastPressed = 4;
                    // item move
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item4").style.top = "-40px";
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item2").style.top = "-20px";
                    break;
                } 
                case 3:
                {
                    lastPressed = 4;
                    // item move
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item4").style.top = "-40px";
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item3").style.top = "-20px";
                    break;
                }
                case 4:
                {
                    lastPressed = 0;
                    // item move
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item4").style.top = "-20px";
                    break;
                }
                case 5:
                {
                    lastPressed = 4;
                    // item move
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item4").style.top = "-40px";
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item5").style.top = "-20px";
                    break;
                }
                case 0:
                {
                    lastPressed = 4;
                    // item move
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item4").style.top = "-40px";
                    break;
                }
            }
            break;
        
        case 5:
            setText(5)

            switch(lastPressed)
            {
                case 1:
                {
                    lastPressed = 5;
                    // item move
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item5").style.top = "-40px";
                    document.getElementById("timeline-item1").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item1").style.top = "-20px";
                    break;
                }
                case 2:
                {
                    lastPressed = 5;
                    // item move
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item5").style.top = "-40px";
                    document.getElementById("timeline-item2").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item2").style.top = "-20px";
                    break;
                } 
                case 3:
                {
                    lastPressed = 5;
                    // item move
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item5").style.top = "-40px";
                    document.getElementById("timeline-item3").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item3").style.top = "-20px";
                    break;
                }
                case 4:
                {
                    lastPressed = 5;
                    // item move
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item5").style.top = "-40px";
                    document.getElementById("timeline-item4").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item4").style.top = "-20px";
                    break;
                }
                case 5:
                {
                    lastPressed = 0;
                    // item move
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-cancel-pressed";
                    document.getElementById("timeline-item5").style.top = "-20px";
                    break;
                }
                case 0:
                {
                    lastPressed = 5;
                    // item move
                    document.getElementById("timeline-item5").style.animationName = "timeline-item-pressed";
                    document.getElementById("timeline-item5").style.top = "-40px";
                    break;
                }
            }
            break;
    }
}

// set the timeline description text
//
// if no item is selected, immediately change the text before appearing
//
// if an item is selected, time the switch between text to be exactly halfway
// through the animation, at the exact moment when the text is invisible, to make the 
// functionality seem as smooth as possible
//
function setText(itemNum) {
    // if none is selected
    if (lastPressed == 0)
    {
        if (itemNum == 1) {
            document.getElementById("timeline-description").innerHTML = 
                "<b>The project has been \
                kickstarted</b> once our STEAM teacher, Mr Ellison, encouraged us to take part \
                in the FLL competition. Without it, we \
                wouldn't have even began upon what we have today."
        }
        else if (itemNum == 2) {
            document.getElementById("timeline-description").innerHTML = "<b>Our idea went through \
                many phases,</b> each filled with a ton of polishing in order to maximize the outcome. \
                In fact, before coming up with the Dragonfly, our idea was a drone that \
                could be held on a truck and move between them, but we figured we can go \
                in a much more viable direction."
        }
        else if (itemNum == 3) {
            document.getElementById("timeline-description").innerHTML = "<b>By December 3rd,</b> our idea \
                has been finally set and our trajectory became much more clear. We knew exactly \
                where we were heading with it, but we still had a lot of work ahead of us."
        }
        else if (itemNum == 4) {
            document.getElementById("timeline-description").innerHTML = "<b>We presented a mockup of our \
                idea</b> to Mr Ellison and got some very instrumental feedback that helped \
                us forward our progression. This event helped us get a better grasp on how to \
                further move along with the project."
        }
        else if (itemNum == 5) {
            document.getElementById("timeline-description").innerHTML = 
                "<b>To be announced...</b>"
        }
    }
    // switching from one to another
    else
    {
        if (itemNum == 1) {
            setTimeout(
                function () {document.getElementById("timeline-description").innerHTML = 
                "<b>The project has been \
                kickstarted</b> once our STEAM teacher, Mr Ellison, encouraged us to take part \
                in the FLL competition. Without it, we \
                wouldn't have even began upon what we have today."}, 150
            );
        }
        else if (itemNum == 2) {
            setTimeout(
                function () {document.getElementById("timeline-description").innerHTML = "<b>Our idea went through \
                many phases,</b> each filled with a ton of polishing in order to maximize the outcome. \
                In fact, before coming up with the Dragonfly, our idea was a drone that \
                could be held on a truck and move between them, but we figured we can go \
                in a much more viable direction."}, 150
            );
        }
        else if (itemNum == 3) {
            setTimeout(
                function () {document.getElementById("timeline-description").innerHTML = "<b>By December 3rd,</b> our idea \
                has been finally set and our trajectory became much more clear. We knew exactly \
                where we were heading with it, but we still had a lot of work ahead of us."}, 150
            );
        }
        else if (itemNum == 4) {
            setTimeout(
                function () {document.getElementById("timeline-description").innerHTML = "<b>We presented a mockup of our \
                idea</b> to Mr Ellison and got some very instrumental feedback that helped \
                us forward our progression. This event helped us get a better grasp on how to \
                further move along with the project."}, 150
            );
        }
        else if (itemNum == 5) {
            setTimeout(
                function () {document.getElementById("timeline-description").innerHTML = 
                "<b>To be announced...</b>"}, 150
            );
        }
    }

}