const panels=document.querySelectorAll('.panel');
const closeIcons=document.querySelectorAll('.close i')
const movies =document.querySelectorAll('.movie')

let openedSection
function testAgain (){
    openedSection=this 
    this.classList.add('open')   
    console.log('this first click',openedSection)    
    panels.forEach(panel=> {
        if(panel!==openedSection){
            panel.classList.remove('open')
            
        } 
        
    })
}
function addTranslat(e){
    // console.log(e.propertyName)
    if (e.propertyName.includes('flex')){
            movies.forEach(movie=>{
                movie.classList.add('show')
            })
    }
    
}
panels.forEach(panel=> panel.addEventListener('click',testAgain))
panels.forEach(panel=> panel.addEventListener('transitionend',addTranslat))

closeIcons.forEach(closeIcon=>closeIcon.addEventListener('click',(e)=>{
    console.log(e);
    e.stopPropagation()
    panels.forEach(panel=>panel.classList.remove('open'))
})) 





