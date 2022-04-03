function changeLights(){
    if(document.getElementById("change-lightbulb").className === "interruptor-circle on"){
    document.getElementById("change-lightbulb").className = 'interruptor-circle off'
    document.getElementById("lightbulb").className = 'container-lamp-on hidden'
    document.getElementById("lightbulboff").className = 'container-lamp-off visible'
    document.getElementById("background").className = 'green-dark'
    } else {
        document.getElementById("change-lightbulb").className = 'interruptor-circle on'   
        document.getElementById("lightbulb").className = 'container-lamp-on visible'
        document.getElementById("lightbulboff").className = 'container-lamp-off hidden'
        document.getElementById("background").className = 'green-light'
    }
}  