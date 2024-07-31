function validateForm(form){
    var activityNumber = getValue("WKNumState")
    // var activityNumber = form.getValue("numAtividadeAtual")
    var errors = []
    var MODE = form.getFormMode()
    if (getValue("WKCompletTask") == 'true') {
        // Atividade Inicial
        if (activityNumber == 0 || activityNumber == 4 ) {
            if (form.getValue('areaAval') == "") {
                errors.push("O campo Qual área é obrigatorio.");
            }
            if (form.getValue('areaAval') == "Contas a Receber" || form.getValue('areaAval') == "Cópia de Prontuário" || form.getValue('areaAval') == "Jurídico" || form.getValue('areaAval') == "Auditoria" || form.getValue('areaAval') == "Guias") {
                if (form.getValue('numeroFatura') == null || form.getValue('numeroFatura') == "") 
                    errors.push("O campo Número da Fatura é obrigatório.");
                if (form.getValue('numeroProntuario') == null || form.getValue('numeroProntuario') == "") 
                    errors.push("O campo Número do Prontuário é obrigatório.");
                if (form.getValue('nomePaciente') == null || form.getValue('nomePaciente') == "") 
                    errors.push("O campo Nome do Paciente é obrigatório.");
                if (form.getValue('convenio') == null || form.getValue('convenio') == "") 
                    errors.push("O campo Convênio é obrigatório.");
                if (form.getValue('urgenciaAval') == null || form.getValue('urgenciaAval') == "") 
                    errors.push("O campo Urgência é obrigatório.");
            }
            if (form.getValue('areaAval') == "Setores") {
                if (form.getValue('numeroCaixa') == null || form.getValue('numeroCaixa') == "") 
                     errors.push("O campo Número da Caixa é obrigatório.");
                if (form.getValue('urgenciaAval') == null || form.getValue('urgenciaAval') == "")
                    errors.push("O campo Urgência é obrigatório.");
            }
        }

        // Atividade Comercial
        if (activityNumber == 13) {
            if (form.getValue('entregueArquivo') == "nao") {
                if (form.getValue('observacaoEntregaArq') == null || form.getValue('observacaoEntregaArq') == "") 
                     errors.push("O campo Justificativa é obrigatório.");
            }
            if (form.getValue('entregueArquivo') == "sim") {
                if(form.getValue('signature') == null || form.getValue('signature') == ""){
                    errors.push("O campo Assinatura de Entrega é obrigatório.");
                }
            }
        }
        if (activityNumber == 11) {
            if (form.getValue('recebidoSetor') == "nao") {
                if (form.getValue('obsSetConf') == null || form.getValue('obsSetConf') == "") 
                     errors.push("O campo Justificativa é obrigatório.");
            }
        }
    }
    if (activityNumber == 26) {
        if (form.getValue('devSetor') == "nao") {
            if (form.getValue('obsDevolucao') == null || form.getValue('obsDevolucao') == "") 
                errors.push("O campo Justificativa é obrigatório.");
        }
        if (form.getValue('devSetor') == "sim") {
            if(form.getValue('signatureDev') == null || form.getValue('signatureDev') == ""){
                errors.push("O campo Assinatura de devolução é obrigatório.");
            }
        }
    }
    if (activityNumber == 30) {
        if (form.getValue('enviadoCelula') == "nao") {
                errors.push("O processo só poderá ser finalizado após envio para célula.");
        }
    }

    if (errors.length > 0) {
        var formattedErrors = "<ul style='padding-left: 17px;color: red;list-style: disc;'>";
        for (var i = 0; i < errors.length; i++) {
            formattedErrors += "<li style='margin-bottom: 5px;'>" + errors[i] + "</li>";
        }
        formattedErrors += "</ul><br/>";
        exibirMensagem(form, "Favor informar os campos obrigatórios:<br/><br/>" + formattedErrors);
    }
}

function exibirMensagem(form, mensagem) {
    var mobile = form.getMobile() != null && form.getMobile();

    if (mobile) {
        throw mensagem;
    } else {
        throw "<br/><strong>Atenção:</strong> " + mensagem;
    }
}
