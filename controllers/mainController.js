exports.renderHome = (req, res) => {
    res.render('index');
};

exports.renderSobre = (req, res) => {
    res.render('sobre');
};

exports.renderCatalogo = (req, res) => {
    res.render('projetos');
};

exports.renderContato = (req, res) => {
    res.render('contato');
};

exports.handleContato = (req, res) => {
    const { nome, email, equipamento, descricao } = req.body;
    console.log(`Chamado recebido: ${nome} - ${equipamento}`);
    res.render('contato', { success: true });
};

exports.handleFrete = (req, res) => {
    const { cep, produto } = req.body;
    // Lógica simples de exemplo: se o CEP começa com 0, frete grátis, senão 25.00
    const valorFrete = cep.startsWith('0') ? 'Grátis' : 'R$ 25,00';
    res.send(`O frete para o produto <strong>${produto}</strong> para o CEP <strong>${cep}</strong> é: <strong>${valorFrete}</strong>`);
};