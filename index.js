const current = document.getElementById("current");
const previous = document.getElementById("previous");
function onClick(clicked_id) {
    console.log(clicked_id)
    switch(clicked_id) {
        case "DEL":
            del()
            break
        case "NEGATIVE":
            if (current.innerHTML === "") {
                current.innerHTML = "-"
                return
            }
            return
        case "÷":
        case "*":
        case "-":
        case "+":
        case "^":
        case "EQUALS":
            if(current.innerHTML == "") {break}
            equals(clicked_id)
            break
        default:
        console.log(current.innerHTML);
        if (current.innerHTML.includes(".") & clicked_id == ".") {
            break
        }
        addNumb(clicked_id);
        break
    }
}
function equals(clicked_id) {
    if (clicked_id == "EQUALS" & previous.innerHTML == "") {return}
    if (previous.innerHTML === "" & clicked_id != "EQUALS") {
        previous.innerHTML = current.innerHTML + " " + clicked_id
        current.innerHTML = ""
        return
    }
    console.log("slice= "+ previous.innerHTML.charAt(previous.innerHTML.length-1))
    switch (previous.innerHTML.charAt(previous.innerHTML.length-1)) {
        case "+":
            previous.innerHTML = parseFloat(previous.innerHTML) + parseFloat(current.innerHTML)
            break
        case "-":
            previous.innerHTML = parseFloat(previous.innerHTML) - parseFloat(current.innerHTML)
            break
        case "*":
            previous.innerHTML = parseFloat(previous.innerHTML) * parseFloat(current.innerHTML)
            break
        case "÷":
            previous.innerHTML = parseFloat(previous.innerHTML) / parseFloat(current.innerHTML)
            break
        case "^":
            previous.innerHTML = parseFloat(previous.innerHTML) ** parseFloat(current.innerHTML)
            break
    }
    if (clicked_id == "EQUALS") {
        current.innerHTML = previous.innerHTML
        previous.innerHTML = ""
    }
    else {
        previous.innerHTML += " " + clicked_id
        current.innerHTML = ""
    }
}

function del() {
    current.innerHTML = current.innerHTML.slice(0, -1);
}

function addNumb(theId) {
    current.innerHTML = current.innerHTML + theId
}