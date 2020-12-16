
let replace_menu = document.getElementByClass('replace_menu');


replace_menu.InnerHTML = '<!DOCTYPE html>\
\
<html>\
    <head>\
        <link rel="stylesheet" type="text/css" href="style.css">\
        <meta charset="utf-8">\
    </head>\
    <body>\
        <nav>\
        	<ul>\
                <li class="menu"><a href="index.html">Accueil</a></li>\
        		<li class="menu_deroulant"><a>Articles</a>\
                    <ul class="sous_menu">\
                        <li><a class="sous_menu_content" href="informatique.html">Informatique</a>\
                            <ul>\
                                <li><a class="sousmenu_content" href="info/APL.html">APL</a></li>\
                                <li><a class="soumenu_content" href="info/python.html">Python</a></li>\
                                <li><a class="sousmenu_content" href="info/samba.html">Samba</a></li>\
                            </ul>\
                        </li>\
                        <li><a href="mathématiques.html">Mathématiques</a>\
                            <ul>\
                                <li><a href="maths/jeux.html">Jeux Mathématiques</a></li>\
                                <li><a href=""></a></li>\
                            </ul>\
                        </li>\
                    </ul>\
                </li>\
                <li ><a href="contact.html">Contact</a></li>\
        	</ul>\
        </nav>\
\
        <h1 class="nom_site">\
            OsKaR\
        </h1>\
    </body>\
</html>\
'


function pop () {
	alert("salut");
}
