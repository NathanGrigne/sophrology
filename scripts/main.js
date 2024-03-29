const color = document.querySelectorAll('.imgInsta')

for (let i=0; i<color.length; i++){
    color[i].addEventListener(
        'click',
        function(){
            if (this.classList.contains('borderColor')){
                this.classList.remove('borderColor')
            }
            else {
                let temp = document.querySelector('.borderColor')
                if (temp != null){
                    temp.classList.remove('borderColor')
                }
            }
            this.classList.add('borderColor')
        }
    )
}

class Slider {
constructor(selector, sliding)
{
    this.slider = document.querySelector(selector)
    this.sliding = sliding
    this.currentPosition=0
    this.sliderContainer

    this.sliderCardWidth=this.slider.querySelector('.card').offsetWidth;

    this.numberItems = this.slider.querySelectorAll('.card').length

    this.arrowNext
    this.arrowPrev
    this.arrowNav

    this.init()

    this.hideArrow()
}

init()
{


    this.sliderContainer= document.createElement('div')
    this.sliderContainer.classList.add('sliderContainer')
    this.sliderContainer.style.width= this.numberItems*this.sliderCardWidth +'px'
    this.sliderContainer.innerHTML = this.slider.innerHTML
    this.slider.innerHTML= '';
    this.slider.appendChild(this.sliderContainer)



    this.arrowNav = document.createElement('div')
    this.arrowNav.classList.add('arrowNav')
    this.slider.appendChild(this.arrowNav)

    this.arrowNext = document.createElement('div')
    this.arrowNext.classList.add('arrowNext')
    this.arrowNav.appendChild(this.arrowNext)

    this.arrowPrev = document.createElement('div')
    this.arrowPrev.classList.add('arrowPrev')
    this.arrowNav.appendChild(this.arrowPrev)

    this.arrowNext.addEventListener('click',()=>
    {
    this.currentPosition = this.currentPosition + this.sliding
    let toSlide = this.sliderCardWidth*this.currentPosition
    this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
    this.hideArrow()
    })

    this.arrowPrev.addEventListener('click',()=>
    {
    this.currentPosition = this.currentPosition - this.sliding
    let toSlide = this.sliderCardWidth*this.currentPosition
    this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
    this.hideArrow()
    })
}

hideArrow()
{
    if(this.currentPosition==0)
    {
    this.arrowPrev.classList.remove('is-visible')
    }
    else{
    this.arrowPrev.classList.add('is-visible')
    }

    if(this.currentPosition+this.sliding>=this.numberItems){
    this.arrowNext.classList.remove('is-visible')
    }
    else{
    this.arrowNext.classList.add('is-visible')
    }

}
}
  
  
let mySlide = new Slider('.slider',1)