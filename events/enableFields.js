function enableFields(form){ 
    let activityNumber = getValue("WKNumState");
    // Arquivo
    if (activityNumber == 13) {
        form.setEnabled("areaAval", false);
        form.setEnabled("dataFatura", false);
        form.setEnabled("numeroFatura", false);
        form.setEnabled("numeroProntuario", false);
        form.setEnabled("convenio", false);
        form.setEnabled("nomePaciente", false);
        form.setEnabled("numeroCaixa", false);
        form.setEnabled("setorRequisicao", false);
        form.setEnabled("setorRequisitado", false);
        form.setEnabled("urgenciaAval", false);
        form.setEnabled("observacaoAbertura", false);
        form.setEnabled("atendimento", false);
        form.setEnabled("parcial", false);
        // Desabilitar campos em dadosSetorConfirmReceb
        form.setEnabled("recebidoSetor", false);
        form.setEnabled("obsSetConf", false);
    } // Setor Confirma Recebimento
    if (activityNumber == 11) {
        // Desabilitar dados iniciais
        form.setEnabled("areaAval", false);
        form.setEnabled("dataFatura", false);
        form.setEnabled("numeroFatura", false);
        form.setEnabled("numeroProntuario", false);
        form.setEnabled("convenio", false);
        form.setEnabled("nomePaciente", false);
        form.setEnabled("numeroCaixa", false);
        form.setEnabled("setorRequisicao", false);
        form.setEnabled("setorRequisitado", false);
        form.setEnabled("urgenciaAval", false);
        form.setEnabled("observacaoAbertura", false);
        form.setEnabled("atendimento", false);
        form.setEnabled("parcial", false);
        // Desabilitar campos em dadosConfirmacaoArq
        form.setEnabled("entregueArquivo", false);
        form.setEnabled("observacaoEntregaArq", false);
    } // Aguarda Devolucao
    if (activityNumber == 26) {
        // Desabilitar dados iniciais
        form.setEnabled("areaAval", false);
        form.setEnabled("dataFatura", false);
        form.setEnabled("numeroFatura", false);
        form.setEnabled("numeroProntuario", false);
        form.setEnabled("convenio", false);
        form.setEnabled("nomePaciente", false);
        form.setEnabled("numeroCaixa", false);
        form.setEnabled("setorRequisicao", false);
        form.setEnabled("setorRequisitado", false);
        form.setEnabled("urgenciaAval", false);
        form.setEnabled("observacaoAbertura", false);
        form.setEnabled("atendimento", false);
        form.setEnabled("parcial", false);
        // Desabilitar campos em dadosConfirmacaoArq
        form.setEnabled("entregueArquivo", false);
        form.setEnabled("observacaoEntregaArq", false);
        // Desabilitar campos em dadosSetorConfirmReceb
        form.setEnabled("recebidoSetor", false);
        form.setEnabled("obsSetConf", false);
    }// Aguarda Recebimento
    if (activityNumber == 30) {
        // Desabilitar dados iniciais
        form.setEnabled("areaAval", false);
        form.setEnabled("dataFatura", false);
        form.setEnabled("numeroFatura", false);
        form.setEnabled("numeroProntuario", false);
        form.setEnabled("convenio", false);
        form.setEnabled("nomePaciente", false);
        form.setEnabled("numeroCaixa", false);
        form.setEnabled("setorRequisicao", false);
        form.setEnabled("setorRequisitado", false);
        form.setEnabled("urgenciaAval", false);
        form.setEnabled("observacaoAbertura", false);
        form.setEnabled("atendimento", false);
        form.setEnabled("parcial", false);
        // Desabilitar campos em dadosConfirmacaoArq
        form.setEnabled("entregueArquivo", false);
        form.setEnabled("observacaoEntregaArq", false);
        // Desabilitar campos em dadosSetorConfirmReceb
        form.setEnabled("recebidoSetor", false);
        form.setEnabled("obsSetConf", false);
        // Desabilitar campos em dadosSetorConfirmReceb
        form.setEnabled("devSetor", false);
        form.setEnabled("obsDevolucao", false);
    }
}