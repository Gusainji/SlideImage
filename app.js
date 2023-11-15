const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) => {

        // TO slide from left->
        // slide.style.left = `${index * 100}%`

        // To slide from bottom->
        slide.style.bottom = `${index * 100}%`
    }
)

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            // To slide from left->
            // slide.style.transform = `translateX(-${counter * 100}%)`

            // To slide from bottom->
            slide.style.transform = `translateY(${counter * 100}%)`
        }
    )
}