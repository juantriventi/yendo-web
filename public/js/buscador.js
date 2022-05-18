document.addEventListener("keyup",e =>{
    
    if(e.key == "Escape")e.target.value = ""

    if (e.target.matches("#buscador")){
        document.querySelectorAll(".title").forEach(playa => {
            playa.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?playa.classList.remove("filtro")
            :playa.classList.add("filtro")
        })
    }

})
