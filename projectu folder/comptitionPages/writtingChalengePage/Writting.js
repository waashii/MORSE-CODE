function quistion1() {
    let awashi = "i hope you have fun learning did you know that their is a video for you to watch"  
    if (document.getElementById("texti").value == awashi) {
        document.getElementById("divu").innerHTML='👏كفو😎'
    }
    else{
        document.getElementById("divu").innerHTML='🤡 روح راجع عدل يا الذكي'
    }




     console.log(document.getElementById("texti").value)
}
