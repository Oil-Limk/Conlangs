lang_list = [
    {
        "name" : "Apabara",
        "conscript" : null,
        "en-name" : "Apabaric",
        "dir" : "apabara",
        "tags" : ["UAL"],
    },
    {
        "name" : "Mäzu",
        "conscript" : null,
        "en-name" : "Atu-Matstonian Creole",
        "dir" : "mazu",
        "tags" : ["ArtLang", "ConScript"],
    },
    {
        "name" : "atusa",
        "conscript" : "atusan",
        "en-name" : "Atusan",
        "dir" : "atusa",
        "tags" : ["ArtLang", "ConScript"],
    },
    {
        "name" : "atu",
        "conscript" : "atusan",
        "en-name" : "Atu",
        "dir" : "atu",
        "tags" : ["ArtLang", "ConScript"],
    },
    {
        "name" : "Duhknan",
        "conscript" : null,
        "en-name" : "Dooknan",
        "dir" : "duhknan",
        "tags" : ["ArtLang"],
    },
    {
        "name" : "Exwe",
        "conscript" : null,
        "en-name" : "Etre",
        "dir" : "exwe",
        "tags" : ["JokeLang"],
    },
    {
        "name" : "Fasio",
        "conscript" : null,
        "en-name" : "Phasian",
        "dir" : "fasio",
        "tags" : ["ArtLang"],
    },
    {
        "name" : "GACS",
        "conscript" : null,
        "en-name" : "Great Apes Comm. Sys.",
        "dir" : "gacs",
        "tags" : ["Signed"],
    },
    {
        "name" : "Kjavotli",
        "conscript" : null,
        "en-name" : "Kijavol",
        "dir" : "kijavol",
        "tags" : ["Pidgin"],
    },
    {
        "name" : "tuhukima",
        "conscript" : "kimean",
        "en-name" : "Kimean",
        "dir" : "kimean",
        "tags" : ["ConScript"],
    },
    {
        "name" : "Maztokli",
        "conscript" : null,
        "en-name" : "Matstonian",
        "dir" : "matstonian",
        "tags" : ["ArtLang"],
    },
    {
        "name" : "Màztoqin",
        "conscript" : null,
        "en-name" : "Old Matstonian",
        "dir" : "old-matstonian",
        "tags" : ["ArtLang"],
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
    tags_list = lang['tags'];
    tags = " | ";
    for (j = 0; j < tags_list.length; j++) {
        tags = tags + " (#" + tags_list[j] + ")";
    }
    dir = lang['dir'];
    optext = "<img class='rounded' src='wiki/" + dir + "/flag.png' alt='" + lang_en_name + " Flag'>\
    <a class='nor' href='wiki/" + dir + "' title=" + lang_en_name + ">" + item + "</a>" + tags;
    op = document.createElement("div");
    op.innerHTML = optext;
    menu.appendChild(op);
}
