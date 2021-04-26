    // PENJELASAN 
    // ctx.beginPath()
    // ini artinya bergerak ke x 100px dan y 100px
    // ctx.moveTo(100,100)

    // bergerak ke x 140px dan y 150px dari titik tumpu sehinnga akan membentuk garis
    // ctx.lineTo(140,150)

    // bergerak ke x 140px dan y 150px dari titik tumpu, titik tumpu = koordinat x,y yang terakhir kali berarti x = 140 dan y = 150
    // ctx.lineTo(60,150)

    // anda bisa menyambungkan bidang dengan menggunakan ctx.lineTo(koordinatXpertamaKali,koordinatYpertamaKali)
    // use this : ctx.lineTo(100,100) or this ctx.closePath()
    // stroke sesuai namanya penyakit struk || stroke = garis tepi
    // ctx.stroke()



    const canvas = document.querySelector('#draw')
    const ctx = canvas.getContext('2d')

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    ctx.lineWidth = 100
    

    let painting = false

    function startPosition(e){
        painting = true
        draw(e)
    }
    function finishedPosition(){
        painting = false
        ctx.beginPath()
    }
    let tambah = true
    let hue = 0;
    function draw(e){
        if(!painting) return;
        hue++
        ctx.lineCap = 'round'
        ctx.strokeStyle = `hsl(${hue},100%,50%)`
        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)

        ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ? tambah = !tambah : ''
        
        tambah ? ctx.lineWidth++ : ctx.lineWidth--;
    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseout', finishedPosition)
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)
