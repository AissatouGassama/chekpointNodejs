var generator=require('generate-password');

var password=generator.generate({
    length:9,
    numbers:true,
    
    

});
console.log(password)