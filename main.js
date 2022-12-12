eventer = () => {

    let name = document.getElementById("name").value;
    let day = document.getElementById("day").value;
    let timeVar = document.getElementById("timeVar").value;
    let className = "event-" + day + "-" + timeVar;

    console.log(className);

    document.getElementById(className).innerHTML+= `<div class="event">${name}</div>`
}
