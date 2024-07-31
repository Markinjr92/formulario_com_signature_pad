function displayFields(form, customHTML) {
    var atividade = Number(getValue('WKNumState'));
    var instanceId = getValue('WKNumProces');
    var currentUser = fluigAPI.getUserService().getCurrent();
    form.setValue('numeroSolicitacao', instanceId);
    form.setValue('numAtividadeAtual', atividade);
    form.setVisibleById("painelInfosPostRm", false);
    form.setVisibleById("deleteSignature", false)
    form.setVisibleById("deleteSignatureDev", false)
    atualizarStatus(atividade);
    // Inicio
    if (atividade == 0) {
        form.setVisibleById("DadosSolicitacao", true)
        form.setVisibleById("dadosArquivoSol", true)
        // form.setVisibleById("dadosConfirmacaoArq", false)
        // form.setVisibleById("dadosSetorConfirmReceb", false)
        // form.setVisibleById("dadosPendDevolucao", false)
        form.setVisibleById("assinarArea", false)
        form.setVisibleById("assinarAreaDev", false)
        form.setVisibleById("dadosEnviarCelula", false)
        form.setValue('nomeSolicitante', currentUser.getFullName());
        form.setValue('NOME', currentUser.getFullName());
        form.setValue('matriculaSolicitante', currentUser.getCode());
        form.setValue('dataSolicitacao', retornaDataAtual());
        form.setValue('nomeEntregaDoc', currentUser.getFullName());
        destacarDiv('dadosArquivoSol');
    } // Arquivo
    if (atividade == 13) {
        form.setVisibleById("DadosSolicitacao", true)
        form.setVisibleById("dadosArquivoSol", true)
        form.setVisibleById("assinarAreaDev", false)
        // form.setVisibleById("dadosConfirmacaoArq", true)
        // form.setVisibleById("dadosSetorConfirmReceb", true)
        // form.setVisibleById("dadosPendDevolucao", false)
        form.setVisibleById("dadosEnviarCelula", false)
        form.setValue('dataEntregaDoc', retornaDataAtual());
        destacarDiv('assinarArea');
    } 
    // Setor Confirma Recebimento
    // if (atividade == 11) {
    //     form.setVisibleById("DadosSolicitacao", true)
    //     form.setVisibleById("dadosArquivoSol", true)
    //     form.setVisibleById("dadosConfirmacaoArq", true)
    //     form.setVisibleById("dadosSetorConfirmReceb", true)
    //     form.setVisibleById("dadosPendDevolucao", false)
    //     form.setVisibleById("dadosEnviarCelula", false)
    //     form.setValue('nomeSetorRecebimento', currentUser.getFullName());
    //     form.setValue('dataSetorRecebimento', retornaDataAtual());
    //     form.setValue('matSetorRecebimento', currentUser.getCode());
    //     destacarDiv('dadosSetorConfirmReceb');
    // } // Aguarda Devolucao
    if (atividade == 26) {
        form.setValue('nomeDevolucao', currentUser.getFullName());
        form.setVisibleById("DadosSolicitacao", true)
        form.setVisibleById("dadosArquivoSol", true)
        // form.setVisibleById("dadosConfirmacaoArq", true)
        // form.setVisibleById("dadosSetorConfirmReceb", true)
        // form.setVisibleById("dadosPendDevolucao", true)
        form.setVisibleById("dadosEnviarCelula", false)
        form.setValue('nomeSetorRecebimento', currentUser.getFullName());
        form.setValue('dataSetorRecebimento', retornaDataAtual());
        destacarDiv('assinarAreaDevolucao');
    } // Pendente Envio Celula
    if (atividade == 30) {
        form.setVisibleById("DadosSolicitacao", true)
        form.setVisibleById("dadosArquivoSol", true)
        form.setVisibleById("dadosConfirmacaoArq", true)
        form.setVisibleById("dadosSetorConfirmReceb", true)
        form.setVisibleById("dadosPendDevolucao", true)
        form.setVisibleById("dadosEnviarCelula", true)
        form.setValue('nomeEnvioCelula', currentUser.getFullName());
        form.setValue('dataEnvioCelula', retornaDataAtual());
        form.setValue('matEnvioCelula', currentUser.getCode());
        destacarDiv('dadosEnviarCelula');
    }

    function retornaDataAtual() {
        return (new java.text.SimpleDateFormat('dd/MM/yyyy')).format(new Date());
    }""
    function atualizarStatus(atividade) {
        var status = '';
        switch (atividade) {
            case 0:
            case 4:
                status = 'Inicio';
                break;
            case 13:
                status = 'Arquivo';
                break;
            case 11:
                status = 'Pend. Setor confirmar recebimento';
                break;
                case 15:
                status = 'Finalizado';
                break;
            case 26:
                status = 'Aguardando devolução do setor';
                break;
            case 29:
                status = 'Cancelado';
                break;
            case 30:
                status = 'Enviar para Celula';
                break;
            default:
                status = 'Status desconhecido';
                break;
        }
        form.setValue('status', status);
    }
    function destacarDiv(divId) {
        customHTML.append("<script>document.getElementById('" + divId + "').classList.add('highlight-blue');</script>");
    }
}