lang_list = [
    {
        "name" : "Apabara",
        "conscript" : null,
        "en-name" : "Apabaric",
        "tags" : [],
    },
    {
        "name" : "Mäzu",
        "conscript" : null,
        "en-name" : "Atu-Matstonian Creole",
        "tags" : [],
    },
    {
        "name" : "Atusa",
        "conscript" : "atusan",
        "en-name" : "Atusan",
        "tags" : [],
    },
    {
        "name" : "Atu",
        "conscript" : "atusan",
        "en-name" : "Atu",
        "tags" : [],
    },
    {
        "name" : "Duhknan",
        "conscript" : null,
        "en-name" : "Dooknan",
        "tags" : [],
    },
];

menu = document.getElementById('menu');

for (i = 0; i < lang_list.length; i++) {
    lang = lang_list[i];
    lang_name = lang['name'];
    lang_en_name = lang['en-name']
    if (lang['conscript'])
        lang_name = "<span class='" + lang['conscript'] + "'>" + lang_name + "</span>";
    item = lang_name + " <i>(" + lang_en_name + ")</i>";
    tags = lang['tags'];
    for (j = 0; j < tags.length; j++) {
        item = item + " (#" + tags[j] + ")";
    }
    dir = lang_en_name.toLowerCase();
    optext = "<img class='rounded' src='wiki/"+dir+"/flag.png' alt='"+lang_en_name+" Flag'>";
    optext = optext + "\n<a class='nor' href='wiki/"+dir+" title="+lang_en_name+">";
    optext = optext + "\n" + item;
    optext = optext + "\n<a>";

    op = document.createElement("div");
    op.innerHTML = optext;
    menu.insertChild(op);
}
