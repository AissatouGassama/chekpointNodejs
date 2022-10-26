const fs=require('fs');
fs.writeFile('welcome.txt', 'Hello Node', function(err){
    if(err){
        return console.error(err);
    }
    console.log('fichier créé!')
});

fs.readFile('welcome.txt', 'utf8', function(err,data){
    const content=data;
    if(err){
        console.error(err);
    }
    console.log(content);
});