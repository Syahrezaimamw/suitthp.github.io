const komputer = document.getElementsByClassName('komputer')[0]
const user = document.getElementsByClassName('user')[0]
const slideKomp = document.getElementsByClassName('slideKomputer')
const slideUser = document.getElementsByClassName('slideUser')

 for(i=0; i<slideKomp.length;i++){
   slideKomp[i].addEventListener('input', function(){
    const merah = slideKomp[0].value
    const blue = slideKomp[1].value
    const green = slideKomp[2].value
    komputer.style.backgroundColor='rgb('+merah+','+green+','+blue+')'
   })
}
 for(i=0; i<slideUser.length;i++){
   slideUser[i].addEventListener('input', function(){
       const merah = slideUser[0].value
       const blue = slideUser[1].value
    const green = slideUser[2].value
    user.style.backgroundColor='rgb('+merah+','+green+','+blue+')'
   })
}

// --------------------------------------------------------------------------------
function randomKomp (){
    let comp =Math.round(Math.random()*30+1)
    if(comp <=10){
        return comp='semut'
    }else if(comp<=20){
        return comp='gajah'
    }else if(comp<= 31){
        return comp='orang'
    }else{
        return 'salllafadash'
    }
}

function kondisi (komputer,player){
    if(player == komputer){
        return 'TIE'

    }else if (player == 'semut'){
        return komputer == 'gajah'? 'MENANG':'KALAH';
    }else if(player == 'gajah'){
        return komputer == 'orang'? 'MENANG': 'KALAH';
    }else if(player == 'orang'){
        return komputer =='semut'? 'MENANG':'KALAH';
    }else {
        return 'salah kondisi'
    }
}

const semut =document.getElementsByClassName('semut')[0]
const orang =document.getElementsByClassName('orang')[0]
const gajah =document.getElementsByClassName('gajah')[0]
// const gambarUser =document.getElementsByClassName('gambarUser')
const info =document.getElementsByClassName('infoHasil')[0]
const imgKomputer=document.querySelector('.gambarKomputer')

semut.addEventListener('click', function(){
    const pilihanKomputer=randomKomp()
    const pilihanUser=semut.innerHTML='semut'
    const hasil= kondisi(pilihanKomputer,pilihanUser)

    imgKomputer.setAttribute('src',pilihanKomputer+'.png')
    imgKomputer.classList.toggle('delay')
    info.innerHTML=hasil
    
})

orang.addEventListener('click', function(){
    const pilihanKomputer=randomKomp()
    const pilihanUser=orang.innerHTML='orang'
    const hasil= kondisi(pilihanKomputer,pilihanUser)

    imgKomputer.setAttribute('src',pilihanKomputer+'.png')
    info.innerHTML=hasil

})
gajah.addEventListener('click', function(){
    const pilihanKomputer=randomKomp()
    const pilihanUser=gajah.innerHTML='gajah'
    const hasil= kondisi(pilihanKomputer,pilihanUser)

    imgKomputer.setAttribute('src',pilihanKomputer+'.png')
    info.innerHTML=hasil

})

