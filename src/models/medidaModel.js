var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        temperatura, 
                        umidade, 
                        dataHoraRgt,
                        CONVERT(varchar, dataHoraRgt, 108) as momento_grafico
                    from medida
                    where fkSensor = ${idSensor}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        medida, 
                        dataHoraRgt,
                        DATE_FORMAT(dataHoraRgt,'%H:%i:%s') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor}
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        temperatura, 
                        umidade, CONVERT(varchar, momento, 108) as momento_grafico, 
                        fkSensor 
                        from medida where fkSensor = ${idSensor} 
                    order by id desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
                        temperatura, 
                        umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fkSensor 
                        from medida where fkSensor = ${idSensor} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
