// Remember to import the data and Dog class!
import dogs from './data.js'
import dog from './Dog.js'
let isWating = false
const likeBtn = document.getElementById('like')
const dislikeBtn = document.getElementById('dislike')
let dogArray = Array.from(Array(1000).keys())


function getNewDog(){
    const nextDogData = dogs[dogArray.shift()]
    return nextDogData ? new dog(nextDogData) : {};
}

function render(){
    document.getElementById('content').innerHTML = doggy.getDogHtml()
}
// like clicked
likeBtn.addEventListener('click',() => {
    if(!isWating){
    isWating = true
    doggy.hasBeenLiked = true
    doggy.enjoyHtml()
    document.getElementById("like-div").classList.add('active')
    if(dogArray.length > 0){
        setTimeout(()=>{
            doggy =getNewDog()
            render()
            isWating = false
        },2000)
    }}

})
// dicleke clicked
dislikeBtn.addEventListener('click',() => {
    if(!isWating){
        isWating = true
    doggy.hasBeenSwiped = true
    doggy.enjoyHtml()
    document.getElementById("like-div").classList.add('active')
    if(dogArray.length > 0){
        setTimeout(()=>{
            doggy =getNewDog()
            render()
            isWating = false
        },2000)
    }}
})

let doggy = getNewDog()
render()