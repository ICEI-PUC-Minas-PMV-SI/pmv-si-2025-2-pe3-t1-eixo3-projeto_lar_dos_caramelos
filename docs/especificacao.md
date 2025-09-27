# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Este documento tem como objetivo especificar as necessidades e funcionalidades do sistema web Projeto Caramello, destacando o público-alvo e estabelecendo as metas que a aplicação pretende alcançar. Além disso, serve como referência para desenvolvedores, usuários e demais interessados, garantindo clareza quanto ao propósito e ao direcionamento do sistema.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto, denominado Lar dos Caramelos, consiste em uma plataforma digital colaborativa que tem como finalidade possibilitar a divulgação de cães disponíveis para adoção. Nessa perspectiva, os doadores poderão registrar informações relevantes, tais como idade do animal, localização, condições de saúde e dados de contato para viabilizar o processo de adoção.

### 3.2.2 Missão do produto
Disponibilizar aos potenciais adotantes informações sobre cães em situação de adoção, por meio de uma plataforma digital que permita o registro e a divulgação de dados relevantes, como características, condições de saúde e informações para contato, oferecendo, assim, aos animais a oportunidade de serem acolhidos em lares responsáveis, capazes de lhes proporcionar cuidado, bem-estar e afeto.

### 3.2.3 Limites do produto
O produto será condicionado ao cadastro apenas de cachorros, disponibilizando o contato dos usuários responsáveis pelo cadastro do animal, dando a responsabilidade do trâmites da adoção para o doador, não contemplando chats ou meios de comunicação incorporados à aplicação.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Aumento da visibilidade dos cães | Essencial | 
|3 | Facilita a adoção responsável | Recomendável | 
|4	| Apoio a abrigos e pessoas voluntárias na divulgação de adoção	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar Anúncios de Cães |	Processamento de Inclusão, Alteração, Exclusão de cães para adoção |
| RF2 |	Gerenciar  usuários| Processamento de inclusão,alteração,exclusão de conta dos usuários |
| RF3	| Contar Cães adotados |	O sistema deve possuir uma variável com visualização disponível que registre a quantidade de cães adotados |
| RF4 |	Filtrar cães para Adoção 	| O sistema deve permitir que o usuário pesquise e filtre os cães disponíveis para adoção com base em sua preferência |
| RF5 |	Favoritar cães	| O usuário deve poder favoritar pets para visualizar posteriormente |
| RF6 |	Apadrinhar Cães	| O sistema deve oferecer a opção de apadrinhamento ao usuário |
| RF7 |	Gerenciar Dicas Pets	| O sistema deve possuir uma aba com dicas e informações sobre como cuidar do pet |
| RF8 |	Localizar Cães para Adoção	| O sistema deve exibir animais disponíveis próximos ao endereço do adotante |
| RF9 |	Definir Status dos Cães	| O sistema deve exibir o status atual do cão para adoção |
| RF10 |	Gerenciar Anúncio Eventos	| Processamento de inclusão, alteração, exclusão de anúncios de divulgação de feiras/eventos de adoção |
| RF11 |	Gerenciar Anúncios de denúncias de Maus Tratos | Processamento de inclusão, alteração, exclusão de anúncios de denúncias de maus tratos contra animais |
| RF12 |	Gerenciar histórias Cães adotados	| O sistema deve exibir histórias e fotos de pets já adotados |
| RF13 |	Login	| O sistema deve permitir que o usuário realize login informando um identificador único e senha cadastrados previamente|
| RF14 |	Logout	| O sistema deve permitir que o usuário encerre sua sessão de forma segura, garantindo que terceiros não consigam acessar o sistema sem nova autenticação |
| RF15 |	Recomendar Cães para adoção	| O sistema deve recomendar cães disponíveis para adoção, considerando as informações fornecidas pelo usuário (como estilo de vida, espaço disponível, experiência com animais, presença de crianças, objetivo da adoção) e os dados cadastrados sobre os animais (porte, idade, temperamento, necessidades especiais, histórico)|


### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 |	O site deve ser responsivo, funcionando em todos os dispositivos |
| RNF2 |	Conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo o consentimento dos usuários para a coleta de dados e oferecendo a opção de remover seus dados do sistema |
| RNF3 |	A interface do usuário deve ser intuitiva e de fácil utilização |
| RNF4 |	O banco de dados utilizado deve ser MySQL |
| RNF5 |	A aplicação deve ser desenvolvida em React Native |
| RNF6 |	A aplicação deve ser compatível com os principais navegadores do mercado: Mozilla Firefox, Google Chrome, Microsoft Edge e Safari|

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Usuário |	Usuário responsável por incluir,alterar e excluir dados do sistema. |
| Administrador |	Usuário gerente do sistema responsável manutenção,possuindo acesso geral ao sistema. |
| Tempo |	Atualização do sistema |


## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
O diagrama de caso de uso é um tipo de diagrama da UML (Unified Modeling Language) que descreve as interações entre os usuários (atores) e um sistema, representando de forma visual e simples as funcionalidades principais que o sistema oferece.
Tem como objetivo demonstrar o que o sistema faz (os "casos de uso"), sem entrar em detalhes técnicos de como essas funcionalidades são implementadas.
No diagrama de casos de uso apresentado, o Usuário possui acesso a diversas funcionalidades dentro do sistema, incluindo o gerenciamento de anúncios de cães, agendamento de adoções, favoritar animais e participação em eventos.
O Administrador, além de dispor dessas mesmas funcionalidades, conta com permissões adicionais, como o gerenciamento de usuários, o controle de histórias de cães adotados e a administração de dicas relacionadas aos cuidados com pets.
O ator Tempo representa processos automatizados executados pelo sistema, responsáveis por funcionalidades internas, como a recomendação de cães disponíveis para adoção e o registro automático da quantidade de cães adotados ao longo do tempo.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![Imagem do WhatsApp de 2025-09-27 à(s) 14 40 56_9fa9df35](https://github.com/user-attachments/assets/036f67bd-5347-4042-8ca9-0098e7122037)

 
### 3.4.2 Descrições de Casos de Uso

## CSU01 - Gerenciar Anúncios de Cães

*Sumário:* O Usuário realiza a gestão (inclusão, remoção, alteração e consulta) dos anúncios de cães disponíveis para adoção no site. O Administrador pode acompanhar e moderar os anúncios publicados.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Administrador.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1- O Usuário requisita a manutenção de anúncios de cães.  
2- O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo anúncio, alteração de um anúncio existente, exclusão de um anúncio e consulta de anúncios cadastrados.  
3- O Usuário seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4- Se o Usuário desejar continuar com a gestão de anúncios, o caso de uso retorna ao passo b; caso contrário, o caso de uso termina.  

*Fluxo Alternativo (3): Inclusão*  
a) O Usuário requisita a inclusão de um novo anúncio de cão para adoção.  
b) O Sistema apresenta uma janela solicitando o nome do cão e verifica se já existe um anúncio com esse nome.  
c) Se já existir, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do anúncio sejam preenchidos (Nome do cão, Raça, Idade, Porte, Sexo, Localização, Contato, Foto, Observações).  
d) O Usuário fornece os dados solicitados.  
e) O Sistema verifica a validade dos dados. Se forem válidos, inclui o novo anúncio e atualiza a lista de anúncios disponíveis; caso contrário, reporta o erro e solicita correção.  

*Fluxo Alternativo (3): Remoção*  
a) O Usuário seleciona um anúncio e requisita ao Sistema que o remova.  
b) Se o anúncio puder ser removido, o Sistema realiza a exclusão; caso contrário, reporta o motivo da impossibilidade.  

*Fluxo Alternativo (3): Alteração*  
a) O Usuário altera um ou mais detalhes do anúncio e solicita a atualização.  
b) O Sistema verifica a validade dos dados e, se forem válidos, atualiza o anúncio; caso contrário, reporta o erro.  

*Fluxo Alternativo (3): Consulta*  
a) O Usuário opta por pesquisar anúncios por nome do cão, raça ou localização.  
b) O Sistema apresenta uma lista de anúncios que atendem aos critérios.  
c) O Usuário seleciona um anúncio.  
d) O Sistema apresenta os detalhes completos do anúncio selecionado.  

*Pós-condições:* Um anúncio foi inserido ou removido, seus dados foram alterados ou apresentados na tela.  

---

## CSU02 - Gerenciar Usuários

*Sumário:* O Usuário realiza a gestão (inclusão, remoção e alteração) da própria conta no sistema. O Administrador pode acompanhar e moderar os cadastros realizados.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Administrador.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1- O Usuário requisita manutenção da conta.  
2- O Sistema apresenta as operações que podem ser realizadas: inclusão de uma nova conta, alteração de dados da conta, exclusão da conta e consulta dos dados cadastrados.  
3- O Usuário seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.  
4- Se o Usuário desejar continuar com a gestão da conta, o caso de uso retorna ao passo b; caso contrário, o caso de uso termina.  

*Fluxo Alternativo (3): Inclusão*  
a) O Usuário requisita a inclusão de uma nova conta.  
b) O Sistema apresenta uma janela solicitando o e-mail do usuário a ser cadastrado.  
c) O Usuário fornece o dado solicitado.  
d) O Sistema verifica se o e-mail já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes da conta (Nome, E-mail, Senha, Telefone, Endereço, Cidade, Estado, Foto de Perfil e Preferências) sejam incluídos.  
e) O Usuário fornece os detalhes da nova conta.  
f) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui a nova conta e atualiza a lista de usuários cadastrados; caso contrário, o Sistema reporta o erro, solicita correções e repete a verificação.  

*Fluxo Alternativo (3): Remoção*  
a) O Usuário seleciona a opção de excluir sua conta e requisita ao Sistema que a remova.  
b) Se a conta puder ser removida, o Sistema realiza a exclusão; caso contrário, reporta o motivo da impossibilidade.  

*Fluxo Alternativo (3): Alteração*  
a) O Usuário altera um ou mais dos dados da conta e requisita sua atualização.  
b) O Sistema verifica a validade dos dados e, se forem válidos, atualiza os dados da conta; caso contrário, reporta o erro.  

*Fluxo Alternativo (3): Consulta*  
a) O Usuário opta por visualizar os dados da conta.  
b) O Sistema apresenta os dados cadastrados.  
c) O Usuário analisa as informações.  
d) O Sistema mantém os dados disponíveis para edição ou encerramento da sessão.  

*Pós-condições:* Uma conta foi inserida ou removida, seus dados foram alterados ou apresentados na tela.  

---

## CSU03 - Contar Cães Adotados

*Sumário:* O Sistema realiza o monitoramento automático da quantidade de cães adotados, atualizando e disponibilizando esse número para visualização.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Tempo (Atualização automática).  
*Pré-condições:* O Sistema deve estar em funcionamento e conectado à base de dados de anúncios.  

*Fluxo Principal:*  
1- O Sistema identifica a adoção de um cão por meio da atualização do status do anúncio.  
2- O Sistema incrementa automaticamente a variável que contabiliza o número total de cães adotados.  
3- O Sistema atualiza a visualização pública da contagem de cães adotados.  
4- O Usuário acessa a página inicial ou área de estatísticas do site.  
5- O Sistema apresenta o número atualizado de cães adotados.  
6- O Usuário pode optar por continuar navegando ou encerrar a visualização.  

*Fluxo Alternativo (2): Atualização Manual pelo Administrador*  
a) O Administrador acessa o painel de controle do sistema.  
b) O Sistema apresenta a opção de ajustar manualmente o número de cães adotados, caso haja inconsistência ou necessidade de correção.  
c) O Administrador fornece o novo valor da contagem.  
d) O Sistema valida a entrada e atualiza a variável de contagem.  
e) A visualização pública é atualizada com o novo valor.  

*Fluxo Alternativo (5): Visualização por Usuário*  
a) O Usuário acessa a área de estatísticas ou a página inicial do site.  
b) O Sistema apresenta o número total de cães adotados até o momento.  
c) O Usuário visualiza a informação e pode optar por compartilhar ou continuar navegando.  

*Pós-condições:* A contagem de cães adotados foi atualizada automaticamente ou manualmente e apresentada ao Usuário.  

---

## CSU04 - Filtrar Cães para Adoção

*Sumário:* O Usuário realiza a pesquisa e filtragem dos cães disponíveis para adoção com base em suas preferências. O Administrador pode acompanhar o comportamento de busca para fins de análise e melhoria do sistema.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Administrador.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1- O Usuário acessa a área de busca de cães para adoção.  
2- O Sistema apresenta os filtros disponíveis: raça, idade, porte, sexo, localização e outros critérios.  
3- O Usuário seleciona os filtros desejados e inicia a pesquisa.  
4- O Sistema apresenta os anúncios que correspondem aos critérios selecionados.  
5- O Usuário visualiza os resultados e pode optar por entrar em contato com o responsável pelo anúncio ou refinar a busca.  
6- Se o Usuário desejar realizar uma nova filtragem, o caso de uso retorna ao passo b; caso contrário, o caso de uso termina.  

*Fluxo Alternativo (3): Filtragem por Raça*  
a) O Usuário seleciona o filtro “Raça” e escolhe uma ou mais opções.  
b) O Sistema apresenta os cães disponíveis que correspondem à raça selecionada.  
c) O Usuário visualiza os resultados e pode optar por aplicar outros filtros ou finalizar a busca.  

*Fluxo Alternativo (3): Filtragem por Localização*  
a) O Usuário seleciona o filtro “Localização” e informa sua cidade ou estado.  
b) O Sistema apresenta os cães disponíveis para adoção próximos à localização informada.  
c) O Usuário visualiza os resultados e pode optar por entrar em contato com os responsáveis ou refinar a busca.  

*Fluxo Alternativo (3): Filtragem por Porte e Idade*  
a) O Usuário seleciona os filtros “Porte” e “Idade” e define suas preferências.  
b) O Sistema apresenta os cães que atendem aos critérios definidos.  
c) O Usuário analisa os resultados e pode optar por salvar os favoritos ou iniciar uma nova busca.  

*Pós-condições:* Uma lista de cães foi apresentada com base nos filtros aplicados pelo Usuário.  

---

## CSU05 - Favoritar Cães

*Sumário:* O Usuário pode favoritar cães para visualizá-los posteriormente em uma lista de favoritos.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Sistema.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1- O Usuário acessa a listagem de cães disponíveis para adoção.  
2- O Sistema exibe os cães disponíveis com informações básicas (nome, raça, idade, status, localização etc.).  
3- O Usuário seleciona um cão e opta por favoritar.  
4- O Sistema adiciona o cão à lista de favoritos do usuário e exibe uma confirmação.  
5- O Usuário pode acessar sua lista de favoritos a qualquer momento pelo menu.  
6- O Sistema exibe todos os cães favoritados pelo usuário.  
7- O Usuário pode optar por remover um cão da lista de favoritos.  
8- O Sistema remove o cão da lista e atualiza a visualização.  
9- O Usuário pode encerrar a navegação.  

*Fluxo Alternativo: Cão já favoritado*  
a) O Sistema identifica que o cão já está na lista de favoritos do usuário.  
b) O Sistema exibe uma mensagem informando que o cão já foi favoritado.  
c) O Sistema não realiza nenhuma alteração na lista.  

*Fluxo Alternativo: Remoção de favorito*  
a) O Usuário seleciona um cão da lista de favoritos e opta por removê-lo.  
b) O Sistema solicita uma confirmação de remoção.  
c) O Usuário confirma a remoção.  
d) O Sistema remove o cão da lista de favoritos e atualiza a interface.  

*Pós-condições:* O cão foi adicionado ou removido da lista de favoritos, e essa lista pode ser consultada posteriormente pelo usuário.

# CSU06 - Apadrinhar Cães

*Sumário:* O Usuário pode escolher um ou mais cães para apadrinhar, contribuindo financeiramente ou com doações para seu bem-estar.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Sistema.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1-O Usuário acessa a área de apadrinhamento no sistema.  

2-O Sistema exibe a lista de cães disponíveis para apadrinhamento com detalhes como nome, raça, idade e necessidade específica.  

3-O Usuário seleciona um cão que deseja apadrinhar.  

4-O Sistema apresenta o usuário cuidador para que o padrinho entre em contato e verifique as formas de pagamento possíveis.  

5-O Sistema processa a solicitação e encaminha mensagem para o cuidador.  

6-O Sistema atualiza o perfil do usuário com os cães apadrinhados.  

7-O Usuário pode encerrar a operação ou continuar apadrinhando outros cães.  

*Fluxo Alternativo: Definição de Forma de Pagamento via Mensagem*  
a) O Sistema informa ao usuário que a forma de pagamento será combinada posteriormente por meio de mensagem direta no chat.  
b) O Sistema solicita confirmação do usuário para prosseguir com o apadrinhamento sem informar dados financeiros no momento.  
c) O Usuário confirma e finaliza a solicitação de apadrinhamento.  
d) O Sistema registra a intenção de apadrinhamento e notifica a equipe responsável para entrar em contato com o usuário.  

*Pós-condições:* O usuário se tornou padrinho de um cão e recebe a confirmação do cuidador.  

---

# CSU07 - Gerenciar Dicas Pets

*Sumário:* O Administrador poderá incluir, alterar, remover ou consultar dicas de cuidados com pets que serão exibidas aos usuários.  

*Ator Primário:* Administrador.  
*Ator Secundário:* Sistema.  
*Pré-condições:* O Administrador deve estar autenticado no sistema.  

*Fluxo Principal:*  
1-O Administrador acessa a seção de dicas de cuidados com pets.  

2-O Sistema exibe as opções de inclusão, alteração, exclusão e consulta de dicas.  

3-O Administrador escolhe a operação desejada ou encerra o caso de uso.  

4-O Sistema executa a ação solicitada (ver detalhes nos fluxos alternativos).  

5-O Administrador pode realizar outra ação ou encerrar o caso de uso.  

*Fluxo Alternativo: Inclusão de Dica*  
a) O Administrador escolhe a opção de incluir nova dica.  
b) O Sistema apresenta um formulário com campos como título, descrição, imagem e categoria.  
c) O Administrador preenche os campos e confirma a inclusão.  
d) O Sistema valida os dados e salva a nova dica, exibindo uma confirmação.  

*Fluxo Alternativo: Alteração de Dica*  
a) O Administrador seleciona uma dica existente e escolhe "Alterar".  
b) O Sistema exibe o formulário com os dados atuais.  
c) O Administrador modifica as informações e confirma.  
d) O Sistema valida e salva as alterações.  

*Fluxo Alternativo: Remoção de Dica*  
a) O Administrador seleciona uma dica e escolhe "Remover".  
b) O Sistema solicita confirmação.  
c) O Administrador confirma e o Sistema remove a dica.  

*Fluxo Alternativo: Consulta de Dicas*  
a) O Administrador acessa a lista de dicas.  
b) O Administrador pode visualizar detalhes de uma dica.  

*Pós-condições:* Uma dica foi incluída, alterada, removida ou consultada com sucesso.  

---

# CSU08 - Localizar Cães para Adoção

*Sumário:* O Usuário pode visualizar cães disponíveis para adoção próximos à sua localização.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Sistema.  
*Pré-condições:* O Usuário deve estar autenticado e ter um endereço cadastrado no sistema.  

*Fluxo Principal (RF8):*  
1-O Usuário acessa a área de busca por cães para adoção.  

2-O Sistema solicita confirmação ou atualização do endereço.  

3-O Usuário confirma ou atualiza seus dados de localização.  

4-O Sistema exibe a lista de cães disponíveis próximos ao endereço informado.  

5-O Usuário pode visualizar detalhes dos cães, favoritar ou iniciar processo de adoção.  

6-O Usuário pode aplicar filtros por raça, porte, idade, sexo etc.  

7-O Sistema atualiza os resultados conforme os filtros.  

8-O Usuário encerra a navegação ou realiza nova busca.  

*Fluxo Alternativo: Endereço não cadastrado*  
a) O Sistema identifica que o usuário não possui endereço cadastrado.  
b) O Sistema solicita que o usuário forneça um endereço válido.  
c) O Usuário fornece os dados e prossegue com a busca.  

*Pós-condições:* O sistema apresentou cães disponíveis para adoção com base na localização do usuário.  

# CSU09 - Definir Status dos Cães

*Sumário:* O Usuário doador realiza a gestão (alteração e consulta) do status do cão disponível para adoção. O objetivo principal é garantir que os interessados visualizem a disponibilidade atualizada do animal.  

*Ator Primário:* Usuário doador.  
*Ator Secundário:* Usuário interessado em adoção.  
*Pré-condições:* O cão deve estar previamente cadastrado no sistema.  

*Fluxo Principal:*  
1-O Usuário doador requisita manutenção do status de um cão.  

2-O Sistema apresenta as operações disponíveis: alteração do status ou consulta do status.  

3-O Usuário doador seleciona a operação desejada: Alteração ou Consulta, ou opta por finalizar o caso de uso.  

4-Se desejar continuar, o caso de uso retorna ao passo 2; caso contrário, termina.  

*Fluxo Alternativo (3): Alteração*  
a) O Usuário doador seleciona um cão previamente cadastrado.  
b) Atualiza o status do cão (ex.: “Disponível para Adoção”, “Em Processo de Adoção”, “Adotado”).  
c) O Sistema valida e salva o novo status.  

*Fluxo Alternativo (3): Consulta*  
a) O Usuário interessado acessa a listagem de cães.  
b) O Sistema apresenta o status atualizado de cada cão.  

*Pós-condições:* O status atualizado do cão deve estar visível no sistema.  

---

# CSU10 - Gerenciar Anúncio de Eventos

*Sumário:* O Usuário realiza a gestão (inclusão, alteração, exclusão e consulta) dos anúncios de feiras ou eventos de adoção.  

*Ator Primário:* Usuário da plataforma.  
*Ator Secundário:* Outros usuários interessados nos eventos.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1-O Usuário requisita manutenção de anúncios de eventos.  

2-O Sistema apresenta as operações disponíveis: inclusão de um novo anúncio, alteração, exclusão ou consulta.  

3-O Usuário seleciona a operação desejada ou encerra o caso de uso.  

4-Se desejar continuar, o caso de uso retorna ao passo 2; caso contrário, termina.  

*Fluxo Alternativo (3): Inclusão*  
a) O Usuário solicita inclusão de um evento.  
b) O Sistema solicita informações obrigatórias (nome, local, data, horário, descrição).  
c) O Usuário fornece os dados.  
d) O Sistema valida e salva o anúncio, exibindo-o na listagem pública.  

*Fluxo Alternativo (3): Alteração*  
a) O Usuário acessa seus anúncios cadastrados.  
b) Seleciona um anúncio e altera os dados.  
c) O Sistema valida e atualiza as informações.  

*Fluxo Alternativo (3): Exclusão*  
a) O Usuário acessa seus anúncios cadastrados.  
b) Seleciona um anúncio e solicita a exclusão.  
c) O Sistema remove o anúncio da listagem pública.  

*Fluxo Alternativo (3): Consulta*  
a) O Usuário acessa a listagem de eventos.  
b) O Sistema apresenta os anúncios ativos.

Pós-condições: O anúncio foi incluído, alterado, excluído ou consultado.

# CSU11 - Gerenciar Anúncios de Denúncias de Maus Tratos

*Sumário:* O Usuário realiza a gestão (inclusão, alteração, exclusão e consulta) de anúncios de denúncias de maus tratos contra animais.  

*Ator Primário:* Usuário da plataforma.  
*Ator Secundário:* Outros usuários interessados em visualizar ou apoiar a denúncia.  
*Pré-condições:* As informações devem respeitar as regras da plataforma.  

*Fluxo Principal:*  
1-O Usuário requisita manutenção de denúncias.  

2-O Sistema apresenta as operações disponíveis: inclusão, alteração, exclusão ou consulta.  

3-O Usuário seleciona a operação desejada ou encerra o caso de uso.  

4-Se desejar continuar, o caso de uso retorna ao passo 2; caso contrário, termina.  

*Fluxo Alternativo (3): Inclusão*  
a) O Usuário solicita inclusão de uma denúncia.  
b) O Sistema solicita as informações necessárias (descrição, local, data, evidências).  
c) O usuário fornece os dados.  
d) O Sistema valida e publica a denúncia.  

*Fluxo Alternativo (3): Alteração*  
a) O usuário acessa suas denúncias cadastradas.  
b) Seleciona uma denúncia e altera os dados.  
c) O Sistema valida e atualiza as informações.  

*Fluxo Alternativo (3): Exclusão*  
a) O usuário acessa suas denúncias cadastradas.  
b) Seleciona uma denúncia e solicita a exclusão.  
c) O Sistema remove a denúncia da listagem pública.  

*Fluxo Alternativo (3): Consulta*  
a) O usuário acessa a listagem de denúncias.  
b) O Sistema apresenta as denúncias ativas.  

*Pós-condições:* A denúncia foi incluída, alterada, excluída ou consultada.  

---

# CSU12 - Gerenciar Histórias de Cães Adotados

*Sumário:* O Usuário realiza a gestão (inclusão, alteração, exclusão e consulta) de histórias e fotos de cães já adotados.  

*Ator Primário:* Usuário da plataforma (adotante).  
*Ator Secundário:* Outros usuários interessados em visualizar histórias.  
*Pré-condições:* O cão deve ter status “Adotado”.  

*Fluxo Principal:*  
1-O Usuário requisita manutenção de histórias de cães adotados.  

2-O Sistema apresenta as operações disponíveis: inclusão, alteração, exclusão ou consulta.  

3-O Usuário seleciona a operação desejada ou encerra o caso de uso.  

4-Se desejar continuar, o caso de uso retorna ao passo 2; caso contrário, termina.  

*Fluxo Alternativo (3): Inclusão*  
a) O Usuário solicita inclusão de uma história.  
b) O Sistema solicita as informações (descrição, fotos, nome do cão).  
c) O Usuário fornece os dados.  
d) O Sistema valida e publica a história.  

*Fluxo Alternativo (3): Alteração*  
a) O Usuário acessa suas histórias cadastradas.  
b) Seleciona uma história e altera os dados.  
c) O Sistema valida e atualiza as informações.  

*Fluxo Alternativo (3): Exclusão*  
a) O Usuário acessa suas histórias cadastradas.  
b) Seleciona uma história e solicita a exclusão.  
c) O Sistema remove a história da listagem pública.  

*Fluxo Alternativo (3): Consulta*  
a) O Usuário acessa a listagem de histórias de adoção.  
b) O Sistema apresenta as histórias ativas.  

*Pós-condições:* A história foi incluída, alterada, excluída ou consultada.  

---

# CSU13 - Login

*Sumário:* O Usuário realiza o login no sistema para acessar as funcionalidades disponíveis, como gerenciar anúncios, visualizar recomendações ou consultar históricos.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Administrador.  
*Pré-condições:* O Usuário deve possuir um cadastro válido no sistema.  

*Fluxo Principal:*  
1-O Usuário acessa a tela de login.  

2-O Sistema solicita o e-mail e a senha.  

3-O Usuário informa as credenciais solicitadas.  

4-O Sistema valida as informações.  

5-Se as credenciais forem válidas, o Sistema autentica o Usuário e redireciona para a página inicial.  

6-O caso de uso termina com o Usuário autenticado.  

*Fluxo Alternativo (4): Credenciais inválidas*  
a) O Sistema identifica que o e-mail ou senha estão incorretos.  
b) O Sistema informa o erro e solicita nova tentativa de login.  

*Fluxo Alternativo (4): Recuperação de senha*  
a) O Usuário seleciona a opção “Esqueci minha senha”.  
b) O Sistema solicita o e-mail cadastrado.  
c) O Sistema envia um link de redefinição de senha para o e-mail informado.  

*Pós-condições:* O Usuário foi autenticado com sucesso ou recebeu instruções para redefinir a senha.  

---

# CSU14 - Logout

*Sumário:*  
O Usuário encerra sua sessão no sistema, garantindo a segurança de suas informações pessoais e impedindo o acesso não autorizado à sua conta.  

*Ator Primário:* Usuário  
*Atores Secundários:* Sistema  
*Pré-condições:*  
- O Usuário deve estar autenticado no sistema.  

*Pós-condições:*  
- A sessão do Usuário é encerrada.  
- O Usuário é redirecionado para a página inicial ou de login.  

*Fluxo Principal:*  
1 O Usuário seleciona a opção “Logout” no menu do sistema.  
2 O Sistema encerra a sessão do Usuário.  
3 O Sistema redireciona o Usuário para a tela inicial ou de login.  

*Fluxos Alternativos:*  
*A – Erro ao encerrar sessão:*  
a) Se ocorrer algum problema na finalização da sessão, o Sistema exibe uma mensagem de erro.  
b) O Sistema solicita que o Usuário tente novamente.  

*Regras de Negócio:*  
- RN01: O sistema deve invalidar todos os tokens e dados de sessão do usuário após o logout.  
- RN02: O sistema deve garantir que, após o logout, não seja possível acessar nenhuma funcionalidade restrita sem novo login.  

---

# CSU15 - Recomendar Cães para Adoção

*Sumário:* O Sistema recomenda cães disponíveis para adoção com base nas preferências informadas pelo Usuário, como raça, porte, idade e localização. O objetivo é facilitar a busca por um cão que melhor se adeque ao perfil desejado pelo adotante.  

*Ator Primário:* Usuário.  
*Ator Secundário:* Administrador.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.  

*Fluxo Principal:*  
1- O Usuário acessa a funcionalidade de recomendação de cães para adoção.  

2- O Sistema solicita as preferências do Usuário (raça, idade, porte, sexo, localização, etc.).  

3- O Usuário informa os critérios desejados.  

4- O Sistema processa as informações e busca cães compatíveis com o perfil informado.  

5- O Sistema exibe uma lista de cães recomendados.  

6- O Usuário pode visualizar detalhes dos cães recomendados ou optar por modificar os critérios.  

7- O caso de uso termina quando o Usuário encerra a busca ou inicia um contato com o anunciante.  

*Fluxo Alternativo (4): Nenhum cão encontrado*  
a) O Sistema não encontra cães que correspondam aos critérios informados.  
b) O Sistema informa ao Usuário que não há resultados e sugere ajustar os filtros de pesquisa.  

*Pós-condições:* O Usuário recebeu uma lista de cães recomendados ou foi informado da ausência de correspondências.



# Definir Status dos Cães

*Sumário:* O Usuário pode definir ou alterar o status de um cão (Disponível, Aguardando Adoção, Adotado, etc.).  

*Ator Primário:* Usuário.  
*Ator Secundário:* Sistema.  
*Pré-condições:* O Usuário deve estar autenticado no sistema.

### 3.4.3 Diagrama de Classes 

O diagrama de classes do sistema possui diversas entidades relacionadas ao processo de adoção, apadrinhamento e interação com cães disponíveis. A classe principal é Usuário, que contém atributos como nome, e-mail, senha e telefone, além de métodos para operações de cadastro, atualização de dados, exclusão de conta e funcionalidades específicas, como adotar animais, cadastrar cães e favoritar cães. O usuário pode ter perfil de administrador, diferenciando seus privilégios no sistema.
Associada ao usuário, a classe Endereço armazena dados como rua, número, cidade, CEP e estado, permitindo o vínculo de informações de localização. O usuário também é responsável por cadastrar Dicas_Pets, que possuem conteúdo, status e data de postagem, e pode editar ou excluir essas dicas. Outra funcionalidade atribuída ao usuário é a criação de História_Cães, que reúne relatos e fotos de cães já adotados, permitindo visualizar o histórico de sucesso das adoções.

A classe Cachorro contém atributos como nome, raça, porte, saúde, peso e fotos, estando vinculada a anúncios de adoção. O gerenciamento de cães é feito através da classe Anuncio_Cães, que inclui informações sobre o usuário anunciante, o cachorro cadastrado, a data da postagem e o status do anúncio. Além disso, existe a possibilidade de Apadrinhamento, onde o usuário pode contribuir financeiramente para os cuidados de um cachorro.
A comunicação entre adotantes e doadores é realizada pela classe Mensagem, que contém métodos para iniciar, enviar e encerrar conversas, além de manter o histórico das interações entre os envolvidos. Já a classe Evento armazena informações como descrição, data e imagens, sendo cadastrada por usuários, e possibilitando sua edição e exclusão.
Por fim, a classe Denúncia permite que o usuário registre conteúdos relacionados a irregularidades, com atributos de descrição, data e status, oferecendo métodos para inclusão, edição e exclusão da denúncia.
Esse diagrama de classes evidencia o fluxo completo do sistema, desde o cadastro e gerenciamento de usuários e cães, até a interação social por meio de mensagens, dicas, histórias e denúncias, cobrindo o ciclo de adoção e apadrinhamento de forma organizada.

#### Figura 2: Diagrama de Classes do Sistema.
 
![Diagrama de classes](https://github.com/user-attachments/assets/f04d7060-738b-4aa3-b4c4-784bdc2335b9)



### 3.4.4 Descrições das Classes 

| Nº | Nome da Classe     | Descrição                                                                 |
|----|---------------------|---------------------------------------------------------------------------|
| 1  | Usuario           | Representa os usuários da plataforma, podendo ser adotantes, doadores ou administradores. Contém dados pessoais e métodos de interação. |
| 2  | Endereco          | Armazena os dados de localização dos usuários, como rua, número, cidade e estado. Está relacionado com o usuário. |
| 3  | Cachorro          | Representa os cães disponíveis para adoção, com atributos como nome, raça, idade, saúde, peso e status. |
| 4  | Anuncio_Caes      | Representa um anúncio de um cão para adoção feito por um usuário. Está vinculado a um cão e um usuário. |
| 5  | Apadrinhamento    | Representa a ação de um usuário apadrinhar um cachorro, com valor de contribuição. |
| 6  | Mensagem          | Gerencia a comunicação entre adotantes e doadores. Contém mensagens trocadas e referências aos dois usuários envolvidos. |
| 7  | Evento            | Representa eventos ou feiras de adoção cadastradas por usuários. Contém descrição, data e imagens. |
| 8  | Dicas_Pets        | Representa dicas de cuidados com pets cadastradas por administradores para os usuários. |
| 9  | Denuncia          | Permite que usuários registrem denúncias de maus tratos, com descrição, data e imagens. |
| 10 | Historia_Caes     | Armazena histórias e fotos de cães que já foram adotados, postadas pelos adotantes. |
