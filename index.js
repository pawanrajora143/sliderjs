const imageList = document.querySelector(".image-list");
firstImg= imageList.querySelectorAll("img")[0];
const icons = document.querySelectorAll(".wrapper i")

const isDrag = false;
// const dragStart = ()=>{
//     isDrag = true;
// }

let firstImageWidth = firstImg.clientWidth + 16;

const showHideIcon = ()=> {
    // icons[0].style.display = imageList.scrollLeft == 0 ? "none" : "block";
}

icons.forEach(icon => {

    icon.addEventListener("click", () => {

        // console.log(icon);
        imageList.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
        showHideIcon();
    })
})


const dragging =(e)=>{
    if(!isDrag) return;
    e.preventDefault();
    imageList.scrollLeft = e.pageX;
}
imageList.addEventListener("mousemove", dragging)
imageList.addEventListener("mousedown", dragStart)
