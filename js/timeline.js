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
            document.getElementById("timeline-description").innerHTML = "\
            111Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
            occaecat cupidatat non proident, sunt \
            in culpa qui officia deserunt mollit anim id est laborum.";
            
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
            document.getElementById("timeline-description").innerHTML = "\
            222Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
            occaecat cupidatat non proident, sunt \
            in culpa qui officia deserunt mollit anim id est laborum.";

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
            document.getElementById("timeline-description").innerHTML = "\
            333Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
            occaecat cupidatat non proident, sunt \
            in culpa qui officia deserunt mollit anim id est laborum.";

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
            document.getElementById("timeline-description").innerHTML = "\
            444Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
            occaecat cupidatat non proident, sunt \
            in culpa qui officia deserunt mollit anim id est laborum.";

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
            document.getElementById("timeline-description").innerHTML = "\
            555Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \
            occaecat cupidatat non proident, sunt \
            in culpa qui officia deserunt mollit anim id est laborum.";

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