const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data){
  data = data.trim().replace(/\s+/g, ' ')
  fs.writeFile("a.txt", data, "utf-8", function(err){
      if(err){
        console.log(err)
      }
  })
  
})