const checkboxs = document.querySelectorAll('input[type=checkbox]')

checkboxs.forEach((e,i) => {
    e.addEventListener('click', function(event){
        if(this.checked && event.shiftKey){
            const elCek = [...checkboxs].splice(i, checkboxs.length + 1)
            elCek.forEach(e => e.checked = true)
        }
    })
})