# **intro-mongodb-review**

## Repositório criado para revisão de introdução ao **MongoDB**

  Baseado nas últimas semanas de conteúdos e na [documentação oficial](https://docs.mongodb.com/manual/).<BR>
  Será utilizado uma database inspirada na [aplicação](https://github.com/orlando-messias/next-level-week-2) feita por @orlando-messias na NLW-2 (evento realizado pela Rocketseat).

### A revisão está dividida em três partes:
  * ### Parte I - CRUD (básico);
    * #### 1 - Inserts - One/Many;
    * #### 2 - Find;
    * #### 3 - Count/itcount;
    * #### 4 - Sort;
  * ### Parte II - CRUD (Bônus)
    * #### 1 - Updates - One/Many
    * #### 2 - Search (text)
    * #### 3 - Regex
  * ### Parte III - Aggregations.
    * #### 1 - Match
    * #### 2 - Project
    * #### 3 - Unwind
    * #### 4 - Lookup
  <BR><BR>


## **Antes de começar:**
  ### Copie o script e cole no mongo Shell a partir do link:
  #### [Script de criação da database e collections](/scripts/createdb.js)
<BR><BR>

## **Parte I - CRUD**
  
  ### **1 - InsertOne/InsertMany**

  Método | Definição
  ---------------------------- | ----------------------------
  `db.collection.insertOne()`  |  Insere um documento na coleção.
  `db.collection.insertMany()` |  Insere vários documentos na coleação.
  `db.collection.insert()`     |  Insere um ou vários documentos na coleção.<BR> É recomendado usar apenas um dos dois métodos acima.

  * Exemplo com **insertOne()**
  ```
    db.classes.insertOne({
      "_id": 1,
      "user_id": 1,
      "subject": "Desenvolvimento"
      "cost": 80.0,
    });
  ```

  * Exemplo com **insertMany()**

  > * Obs: Os objetos que serão inseridos, são objetos dentro de uma array.
     `db.collection.insertMany([{doc1}, {doc2}, ..., {docN}])};`
  ```
    db.classes.insertMany([
      {
          //  _id = id do documento, da aula
          "_id": 2,
          //  user_id = id de user, docente
          "user_id": 2
          "subject": "Educação Física",
          "cost": 33.0,
      },
      {
          "_id": 3,
          "user_id": 3
          "subject": "Português",
          "cost": 25.0,
      }
    ]);
  ```

  ### **2 - Find**

  `db.collection.find({ query }, { projection });`
  Parâmetro  |  Descrição
  ---------- | ----------
  query      | Opcional. Especifica o filtro de seleção usando [operadores de consulta](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors).<BR>Para retornar todos os documentos em uma coleção, omita este parâmetro ou passe um documento vazio ({}).
  projection |  Opcional. Especifica os campos a serem retornados nos documentos que correspondem ao filtro da consulta. Para retornar todos os campos nos documentos correspondentes, omita este parâmetro. [Leia mais em operadores de projeção](https://docs.mongodb.com/manual/reference/operator/query/#projection-operators)
  <BR>

  > * O parâmetro de projeção determina quais campos são retornados nos documentos correspondentes. O parâmetro de projeção gera documento(s) nessa forma
  `{ <field1>: <value>, <field2>: <value> ... }`

  Projection              | Description
  ------------------------|------------
  `<field>`: <1 ou true>  | Especifica a **INCLUSÃO** de um campo na projeção 
  `<field>`: <0 ou false> | Especifica a **EXCLUSÃO** de um campo na projeção
  > * Obs: É possível combinar o método `.find()` com os métodos `.count`, `.skip()` e `.limit()`.

  Retornando todos os documentos:
  ```
    db.collection.find();
    //  ou
    db.collection.find({});

    // retornar todos os documentos a partir do 10°
    db.collection.find().skip(9);

    // retornar documentos do 10°ao 15°
    db.collection.find().skip(9).limit(5);
  ```
  Retornando apenas um documento
  ```
    //  retornar o primeiro documento com base no(s) filtros pelos operadores de consulta
    db.collection.findOne();
    //  ou
    db.collection.find().limit(1);
    //  ---------------------------------------------------

    //  retornar determinado documento, no caso, o 25°.
    db.collection.find().skip(24).limit(1);
  ```
  ### **3 - Count/itcount**
  #### **count():**
  Conta o número de documentos referenciados por um cursor. Anexar o método count() a uma consulta find() retorna o número de documentos correspondentes. A operação não executa a consulta, mas conta os resultados que seriam retornados pela consulta.
  enunciado.
  ```
  db.collection.find().count();
  ```
  > * No MongoDB também existe o `db.collection.count()` que é uma alternativa equivalente ao `db.collection.find(<query>).count()`. <BR>
  Assim como acontece com o método `.find()`, também é possível combinar o método `.count()` com os métodos `.skip()` e `.limit()`.

  #### **itcount()**
  `.itcount()` Conta o número de documentos e é semelhante ao `.count()`, mas na verdade executa a consulta em um iterador existente, esgotando seu conteúdo no processo.
  ```
  db.collection.find().itcount();
  ```

  ### **4 - Sort**
  Especifica a ordem em que a consulta retorna documentos correspondentes, de acordo com o(s) campo(s) passado(s) como parâmetro para ele.
  ```
  db.collection.find().sort({ field: <1 ou -1> });
  ```
  Parâmetro | valor | Ordem
  --------- | ----- | ----------
  field     |   1   | Ascendente
  field     |  -1   | Decrescente

## **Parte II - CRUD (Bônus)**
  ### **1 - UpdateOne/UpdateMany**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
  ### **2 - Search (text)**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
  ### **3 - Regex**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
--------
## **Parte III - Aggregations**
  ### **1 - Match**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
  ### **2 - Project**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
  ### **3 - Unwind**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
  ### **4 - Lookup**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
