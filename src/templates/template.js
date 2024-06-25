const imgs = document.getElementsByTagName("img");

for(let i=0;i<imgs.length;i++){
    imgs[i].onerror = "this.src='https://oil-limk.github.io/Conlangs/src/img/flags.png';this.onerror='';"
}
