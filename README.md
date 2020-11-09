<p align="center">
  <img src="https://github.com/lucasiori/typeorm-upload/blob/master/.github/gostack.png" alt="GoStack" width="250" />
</p>

<h1 align="center">Desafio: Database Upload</h1>
<p align="center">
  <a href="#sobre-desafio">Sobre</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#executando-aplicacao">Executando a aplicação</a> &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#rotas-aplicacao">Rotas</a> &nbsp;&nbsp;
  
</p>

<h2 id="sobre-desafio">ℹ Sobre o desafio</h2>

<p>
  Nesse desafio, você deve continuar desenvolvendo a aplicação de gestão de transações, treinando o que você aprendeu até agora no Node.js junto ao TypeScript, 
  mas dessa vez incluindo o uso de banco de dados com o TypeORM e envio de arquivos com o Multer!
</p>
<p>
 Essa será uma aplicação que deve armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir 
 a criação de novos registros no banco de dados a partir do envio de um arquivo csv.
</p>

<br />

<h2 id="executando-aplicacao">✅ Executando a aplicação</h2>

<strong>Requisitos:</strong>
<ul>
  <li>Node.js</li>
  <li>Gerenciador de pacotes: NPM ou Yarn</li>
</ul>

<p>
  Primeiramente, clone o repositório na sua máquina local: <br />
  <code>git clone https://github.com/lucasiori/typeorm-upload</code>
</p>

<p>
  Acesse a pasta do projeto, e no terminal execute o comando para instalar as dependências: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm install</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn</code>
    </li>
  </ul>
</p>

<p>
  Acesse o arquivo <strong>ormconfig.json</strong>, e configure sua conexão com o banco de dados na sua máquina. <br />
  Após realizadas todas as configurações do banco de dados, execute as migrations para criação das tabelas: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm run typeorm migration:run</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn typeorm migration:run</code>
    </li>
  </ul>
</p>

<p>
  Após instaladas as dependências, certifique-se de que a porta <strong>3333</strong> está disponível pois é a porta onde a aplicação será executada. <br />
  Para iniciar o serviço, execute o comando: <br />
  <ul>
    <li>
      <strong>se estiver utilizando NPM: </strong>
      <code>npm run dev:server</code>
    </li>
    <li>
      <strong>se estiver utilizando Yarn: </strong>
      <code>yarn dev:server</code>
    </li>
  </ul>
</p>

<br />

<h2 id="rotas-aplicacao">🔀 Rotas da aplicação</h2>

<h3>🔵 GET</h3>

<p>
  <strong>Rota:</strong> /transactions <br />
  <strong>Descrição:</strong> Retorna a lista de transações cadastradas e o balanço atual. <br />
  <pre>
    {
      transactions: [
        {
          title: "Salario",
          type: "income",
          value: "1800,00",
          category: "Salario Mensal"
        },
        {
          title: "Horas Extras",
          type: "income",
          value: "600,00",
          category: "Rendas Extras"
        },{
          title: "Faculdade",
          type: "outcome",
          value: "620,00",
          category: "Despesas Mensais"
        }
      ],
      balance: {
        income: "2400,00",
        outcome: "620,00",
        total: "1780,00"
      }
    }
  </pre>
</p>

<br />

<h3>🟢 POST</h3>

<p>
  <strong>Rota:</strong> /transactions <br />
  <strong>Descrição:</strong> Cadastra uma nova transação. <br />
  <strong>Corpo da Requisição: </strong> Objeto JSON contendo título, valor, tipo ("income" ou "outcome") da transação e o nome da categoria da transação.
  <pre>
    {
      title: "Conta de Energia",
      type: "outcome",
      value: "180,00",
      category: "Despesas Mensais"
    }
  </pre>
</p>

<br />

<p>
  <strong>Rota:</strong> /transactions/import <br />
  <strong>Descrição:</strong> Cadastra transações a partir de um arquivo <strong>.csv</strong>. <br />
  <strong>Corpo da Requisição: </strong> Arquivo contendo as informações a serem cadastradas, no formato <strong>.csv</strong> e seguindo o seguinte modelo:
  <table>
    <thead>
      <th>title</th>
      <th>type</th>
      <th>value</th>
      <th>category</th>
    </thead>
    <tbody>
      <tr>
        <td>Salario</td>
        <td>income</td>
        <td>1800</td>
        <td>Salario Mensal</td>
      </tr>
      <tr>
        <td>Horas Extras</td>
        <td>income</td>
        <td>600</td>
        <td>Rendas Extras</td>
      </tr>
      <tr>
        <td>Faculdade</td>
        <td>outcome</td>
        <td>620</td>
        <td>Despesas Mensais</td>
      </tr>
    </tbody>
  </table>
</p>

<br />

<h3>🔴 DELETE</h3>

<p>
  <strong>Rota:</strong> /transactions/:id_transacao <br />
  <strong>Descrição:</strong> Deleta o registro de transação. <br />
</p>
