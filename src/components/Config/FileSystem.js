//chaque type est gere dans components/FileManager
//Fichier qui seront debase sur le desktop 
//(fichiers cree par user seront dans un usestate dans desktop.jsx) 

//app -> component = page jsx custom dans le code
//file -> TextEditor = pour ouvrir les .txt et les modifier
//     -> ImageViewer = pour voir les images

const FileSystem = {
    "/" : {
        type : "folder",
        content : {
            "Stage" :{
                type : "folder",
                content : {
                    "Test" : {type : "app", component : "Test"},
                }
            },
            "Divers" :{
                type : "folder",
                content : {
                    "Text1" : {type : "file", component : "TextEditor"},
                }
            },
            "Images" :{
                type : "folder",
                content : {
                    "img1" : {type : "file", component : "ImageViewer"},
                }
            },
        }
    }
}

// appelle typemanager -> appelle window en passant les parametres -> 
// appWindow, on appelle typemanager dans le contenue en foreach pour tous 
// les parametre de la liste.