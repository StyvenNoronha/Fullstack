//callback function: E uma função passada para outra função como um argumento


function execute(taskname,callback){
    console.log("executando a tarefa", taskname)
    callback()
}

function callback(){
    console.log("tarefa finalizada")
}

execute("download do arquivo", callback)


execute("função callback", function(){
    console.log("função de um callback")
})