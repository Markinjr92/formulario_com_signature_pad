document.addEventListener('DOMContentLoaded', function() {
  numAtividadade = document.getElementById("numAtividadeAtual").value;
  if (numAtividadade == 13) {
    const nomeSolicitante = document.getElementById("nomeSolicitante").value;
    const numeroSolicitacao = document.getElementById("numeroSolicitacao").value;
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const declaracaoTexto = `Eu, ${nomeSolicitante} declaro para os devidos fins que recebi o documento do Arquivo, referente à solicitação de número ${numeroSolicitacao} na data de ${dataAtual}.`;
    document.getElementById('declaracaoRecebimento').textContent = declaracaoTexto;
    document.getElementById('decRecebimento').value = declaracaoTexto;
  }
  if (numAtividadade == 26) {
    const nomeSolicitante = document.getElementById("nomeSolicitante").value;
    const numeroSolicitacao = document.getElementById("numeroSolicitacao").value;
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    const declaracaoTexto = `Eu, ${nomeSolicitante} declaro para os devidos fins que recebi a Devolução do documento, referente à solicitação de número ${numeroSolicitacao} na data de ${dataAtual}.`;
    document.getElementById('declaracaoRecebimentoDev').textContent = declaracaoTexto;
    document.getElementById('decDevolucao').value = declaracaoTexto;
  }

  const clearButton = document.getElementById('clearSignature');
  const saveButton = document.getElementById('saveSignature');
  const openModalButton = document.getElementById('openSignatureModal');
  
  const clearButtonDev = document.getElementById('clearSignatureDev');
  const saveButtonDev = document.getElementById('saveSignatureDev');
  const openModalButtonDev = document.getElementById('openSignatureModalDev');

  const signaturePad = new SignaturePad(document.getElementById('signatureCanvas'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
  });

  const signaturePadDev = new SignaturePad(document.getElementById('signatureCanvasDev'), {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    penColor: 'rgb(0, 0, 0)'
  });

  function adjustCanvasSize() {
    const canvas = document.getElementById('signatureCanvas');
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    signaturePad.clear();
  }

  function adjustCanvasSizeDev() {
    const canvas = document.getElementById('signatureCanvasDev');
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    signaturePadDev.clear();
  }

  function saveSignature() {
    if (!signaturePad.isEmpty()) {
      const dataURL = signaturePad.toDataURL();
      document.getElementById('signature').value = dataURL;
      const declaracaoTexto = document.getElementById('declaracaoRecebimento').textContent;
      document.getElementById('signatureImageDisplay').innerHTML = 
        `<p class="text-center">${declaracaoTexto}</p>
         <img src="${dataURL}" alt="Assinatura" class="img-fluid">
         <button id="deleteSignature" class="btn btn-danger mt-2">
           <i class="fluigicon fluigicon-trash icon-sm" aria-hidden="true"></i>
         </button>`;
      $('#signatureModal').modal('hide');
      document.getElementById('openSignatureModal').style.display = 'none';

      document.getElementById('deleteSignature').addEventListener('click', function() {
        signaturePad.clear();
        document.getElementById('signature').value = '';
        document.getElementById('signatureImageDisplay').innerHTML = '';
        document.getElementById('openSignatureModal').style.display = 'inline-block';
        localStorage.setItem('signatureData', dataURL);
        localStorage.setItem('declarationText', declaracaoTexto);
      });
    }
  }

  function saveSignatureDev() {
    if (!signaturePadDev.isEmpty()) {
      const dataURL = signaturePadDev.toDataURL();
      document.getElementById('signatureDev').value = dataURL;
      const declaracaoTexto = document.getElementById('declaracaoRecebimento').textContent;
      document.getElementById('signatureImageDisplayDev').innerHTML = 
        `<p class="text-center">${declaracaoTexto}</p>
         <img src="${dataURL}" alt="Assinatura" class="img-fluid">
         <button id="deleteSignatureDev" class="btn btn-danger mt-2">
           <i class="fluigicon fluigicon-trash icon-sm" aria-hidden="true"></i>
         </button>`;
      $('#signatureModalDevolucao').modal('hide');
      document.getElementById('openSignatureModalDev').style.display = 'none';

      document.getElementById('deleteSignatureDev').addEventListener('click', function() {
        signaturePadDev.clear();
        document.getElementById('signatureDev').value = '';
        document.getElementById('signatureImageDisplayDev').innerHTML = '';
        document.getElementById('openSignatureModalDev').style.display = 'inline-block';
      });
    }
  }

  if (clearButton) {
    clearButton.addEventListener('click', function() {
      signaturePad.clear();
    });
  } else {
    console.error('clearSignature button not found');
  }

  if (saveButton) {
    saveButton.addEventListener('click', saveSignature);
  } else {
    console.error('saveSignature button not found');
  }

  if (openModalButton) {
    openModalButton.addEventListener('click', function() {
      $('#signatureModal').modal('show');
      adjustCanvasSize();
    });
  } else {
    console.error('openSignatureModal button not found');
  }

  if (clearButtonDev) {
    clearButtonDev.addEventListener('click', function() {
      signaturePadDev.clear();
    });
  } else {
    console.error('clearSignatureDev button not found');
  }

  if (saveButtonDev) {
    saveButtonDev.addEventListener('click', saveSignatureDev);
  } else {
    console.error('saveSignatureDev button not found');
  }

  if (openModalButtonDev) {
    openModalButtonDev.addEventListener('click', function() {
      $('#signatureModalDevolucao').modal('show');
      adjustCanvasSizeDev();
    });
  } else {
    console.error('openSignatureModalDev button not found');
  }
  const signatureRecebimento = document.getElementById('signature').value;
  const signatureDevolucao = document.getElementById('signatureDev').value;
  const decRecebimento = document.getElementById('decRecebimento') ? document.getElementById('decRecebimento').value : '';
  const decDevolucao = document.getElementById('decDevolucao') ? document.getElementById('decDevolucao').value : '';

  if (signatureRecebimento !== null && signatureRecebimento !== '' && decRecebimento !== null && decRecebimento !== '') {
    const signatureDisplayHTML = `
      <p class="text-center">${decRecebimento}</p>
      <img src="${signatureRecebimento}" alt="Assinatura" class="img-fluid">
    `;
    document.getElementById('signatureImageDisplay').innerHTML = signatureDisplayHTML;
    document.getElementById('openSignatureModal').style.display = 'none';
  }

  if (signatureDevolucao !== null && signatureDevolucao !== '' && decDevolucao !== null && decDevolucao !== '') {
      const signatureDisplayHTML = `
        <p class="text-center">${decDevolucao}</p>
        <img src="${signatureDevolucao}" alt="Assinatura" class="img-fluid">
      `;
      document.getElementById('signatureImageDisplayDev').innerHTML = signatureDisplayHTML;
      document.getElementById('openSignatureModalDev').style.display = 'none';

  }
  window.onresize = function() {
    adjustCanvasSize();
    adjustCanvasSizeDev();
  };
});
