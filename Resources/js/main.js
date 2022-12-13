const blogBox=[...document.querySelectorAll('.blog_box')];
const nxtBtn=[...document.querySelectorAll('.nxt_btn')];
const preBtn=[...document.querySelectorAll('.pre_btn')];

blogBox.forEach((item, i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtn[i].addEventListener('click', ()=>{
        item.scrollLeft+=containerWidth;
    })
    preBtn[i].addEventListener('click', ()=>{
        item.scrollLeft-=containerWidth;
    })
})