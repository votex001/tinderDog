// Create the Dog class here

class dog{
    constructor(data){
        Object.assign(this,data)
    }
    enjoyHtml(){
        if(this.hasBeenLiked){
            return document.getElementById("like-div").innerHTML = `<img src="images/badge-like.png" class="enjoy">`
        }
        else if(this.hasBeenSwiped){
            return document.getElementById("like-div").innerHTML = `<img src="images/badge-nope.png" class="enjoy">`
        }
         
    }
    getDogHtml(){
        const {name,avatar,age,bio} = this
        return `<div style="background-image:url('${avatar}');" class="content">
        <div id="like-div">
           
        </div>
        
        <div class="dog-info">
            <h1>${name}, ${age}</h1>
            <p>${bio}</p> 
        </div>
    </div>`
    }
}

export default dog
