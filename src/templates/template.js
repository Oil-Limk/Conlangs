change_to_default = () => {
    this.src = "https://oil-limk.github.io/Conlangs/src/img/flags.png";
    this.onerror = "";
}

let imgs = Document.getElementsByTagName('img');

for(let i=0;i<imgs.length;i++){
    imgs[i].onerror = change_to_default;
}
