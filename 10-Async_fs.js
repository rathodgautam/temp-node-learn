// async file

const { readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8',(err, result)=> {
    if(err){
      console.log(err)
      return
    }
    const first = result
    // console.log(result)
    readFile('./content/second.txt','utf8',(err, result)=> {
        if(err){
          console.log(err)
          return
        }
        const second = result 
        // console.log(result)
        writeFile('./content/result.txt',`Async result is :${first}, ${second}`,(err, result)=>{
            if(err){
                console.log(err)
                 return
            }
            console.log(result)
            console.log('done with this task')

        })
    })
})
console.log('starting new task')