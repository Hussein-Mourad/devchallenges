let imgs = document.querySelectorAll("img")

imgs.forEach(img => {
    img.setAttribute('lazy', 'true')
});