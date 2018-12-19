
var eventType = window.prompt("Enter the event type: casual | formal | semi-formal");

var tempFahr = window.prompt("Enter the temperature:");

var casual = "something comfy";
var semiFormal = "a polo";
var formal = "a suit";
var cold = " and a coat.";
var mild = " and a jacket.";
var hot = " with no jacket.";
    
    if(eventType === "casual")
    {

        if(tempFahr < 54)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + casual + cold)
        }
        else if(tempFahr >= 54 && tempFahr <= 70)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + casual + mild)
        }
        else if(tempFahr > 70)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + casual + hot)
        }

    }if(eventType === "semi-formal")
    {

        if(tempFahr < 54)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType  + " event, you should wear " + semiFormal + cold)
        }
        else if(tempFahr >= 54 && tempFahr <= 70)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + semiFormal + mild)
        }
        else if(tempFahr > 70)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + semiFormal + hot)
        }

    }if(eventType === "formal")
    {

        if(tempFahr < 54)
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + formal + cold)
        }
        else if(tempFahr >= 54 && tempFahr <= 70)
        {
            document.write("Since it is " + tempFahr +  " degrees and you are going to a " + eventType + " event, you should wear " + formal + mild)
        }
        else if(tempFahr > 70) 
        {
            document.write("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + formal + hot)
        }
    }
