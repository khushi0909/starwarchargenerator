 const btn = $("#btn");
    const img = $(".img");
    const imgname = $(".imgname");
    btn.on("click", function(){
             let index = Math.ceil(Math.random()*88);
             $.get(`https://akabab.github.io/starwars-api/api/id/${index}.json`,function(data){
             imgname.text(data['name']);
             img.attr('src',data['image']);
             img.css({"width":"400px","height":"400px"})
            }); 
