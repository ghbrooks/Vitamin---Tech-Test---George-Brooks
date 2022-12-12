

eventer = () => {

    let name = document.getElementById("name").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;
    // let class_name = "event-" + day + "-" time;

    let total = name + day + time

    console.log(total);



    document.getElementById("event-mon-09").innerHTML+= name


}
