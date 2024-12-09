/** Função Detalhes*/
    function toggleSobreDetalhes() {
        const details = document.getElementById('sobre-detalhes');
        details.style.display = details.style.display === 'none' || !details.style.display ? 'block' : 'none';
    }

/** Carrossel Produtos */
    const carrossel = document.getElementById('carrossel');

    function scrollLeft() {
        carrossel.scrollBy({
            left: - 300,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        carrossel.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    }

    const carrossel2 = document.getElementById('carrossel2');

    function scrollLeft2() {
        carrossel2.scrollBy({
            left: - 300,
            behavior: 'smooth'
        });
    }

    function scrollRight2() {
        carrossel2.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    }

/** Contato */
    const contatoForm = document.querySelector('#contato form');

    // Adiciona um listener para o evento de envio
    contatoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os valores dos campos do formulário
        const nome = contatoForm.querySelector('input[type="text"]').value.trim();
        const email = contatoForm.querySelector('input[type="email"]').value.trim();
        const mensagem = contatoForm.querySelector('textarea').value.trim();

        // Valida os campos
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        // Simula o envio do formulário
        console.log('Enviando os dados:', { nome, email, mensagem });

        // Exibe uma mensagem de sucesso
        alert('Sua mensagem foi enviada com sucesso!');

        // Opcional: limpa os campos do formulário
        contatoForm.reset();
    });

/**Seção do QR Code */
    document.getElementById('show-qr').addEventListener('click', function() {
        const qrContainer = document.getElementById('qr-container');
        const qrCodeImg = document.getElementById('qr-code');
    
        // Gera o QR Code direcionando para o URL atual do site
        const siteUrl = window.location.href;
    
        if (!qrCodeImg.src) {
            // Gera o QR Code
            QRCode.toDataURL(siteUrl, { errorCorrectionLevel: 'L' }, function (err, url) {
                if (err) throw err;
                qrCodeImg.src = url; // Define a imagem do QR Code gerado
            });
        }
    
        // Exibe o QR Code
        qrContainer.style.display = 'block';
    });