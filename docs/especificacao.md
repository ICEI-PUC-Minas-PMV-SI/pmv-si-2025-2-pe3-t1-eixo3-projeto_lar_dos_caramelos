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
| RF16 |	Recomendar Cães para adoção	| O sistema deve recomendar cães disponíveis para adoção, considerando as informações fornecidas pelo usuário (como estilo de vida, espaço disponível, experiência com animais, presença de crianças, objetivo da adoção) e os dados cadastrados sobre os animais (porte, idade, temperamento, necessidades especiais, histórico)|


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
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
