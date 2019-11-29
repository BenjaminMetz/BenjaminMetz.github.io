const photos = {
    membrane: {
        photoOne: 'assets/pic/cellmem.1',
        phototwo: 'assets/pic/security.png'  
    },
    mito:{
        photoOne: 'assets/pic/Mito.png',
        phototwo: 'assets/pic/power.png'

    },
    rib:{
        photoOne: 'assets/pic/rib.gif',
        phototwo: 'assets/pic/people.png'

    }, 
    endo:{
        photoOne: 'assets/pic/endo.1',
        phototwo: 'assets/pic/food.png'

    },
    nuc:{
        photoOne: 'assets/pic/nuc.png',
        phototwo: 'assets/pic/control.jpg'

    },
    vac:{
        photoOne: 'assets/pic/Vac.png',
        phototwo: 'assets/pic/Trash.png'

    },
    nuce:{
        photoOne: 'assets/pic/nuce.png',
        phototwo: 'assets/pic/gatesec.jpg'

    },
    gol:{
        photoOne: 'assets/pic/gol.jpg',
        phototwo: 'assets/pic/gate.jpg'

    },
    lys:{
        photoOne: 'assets/pic/lys.png',
        phototwo: 'assets/pic/garman.png'

    },
    cen:{
        photoOne: 'assets/pic/cen.png',
        phototwo: 'assets/pic/printer.png'

    },

}


$('.idk').on("click", function(){
    var part = $(this).attr('data-key');
    var img = $(`.idk[data-key=${part}]`).prev();
    var imgSrc = img.attr('src');
    if (imgSrc === photos[part].photoOne){
        img.attr('src', photos[part].phototwo);
    } else {
        img.attr('src', photos[part].photoOne);
    }
})

/*
$('span.idk').on('click', function(){
        $('span.idk').prev().attr('src','assets/pic/security.png');
    }
);
$('span.cool').on('click', function(){
    $('span.cool').prev().attr('src','assets/pic/power.png');
}
);

*/



