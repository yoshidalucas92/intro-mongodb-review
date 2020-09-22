# **intro-mongodb-review**
## Repositório criado para revisão de introdução ao **MongoDB**.
## A revisão está dividida em duas partes:
  * ## Parte I - CRUD (básico);
    * ### 1 - Inserts - One/Many.
    * ### 2 - Find
    * ### 3 - Count
    * ### 4 - Sort
  * ## Parte II - Aggregations.
    * ### 1 - Match
    * ### 2 - Project
    * ### 3 - Unwind
    * ### 4 - Lookup
  <BR><BR>


# **Antes de começar:**
  ## Copie o script e cole no mongo Shell a partir do link:
  ### [Script de criação da database e collections](/scripts/createdb.js)
<BR><BR>

# **Part I - CRUD**
  
  ## **1 - InsertOne/InsertMany**

  Método | Definição
  ---------------------------- | ----------------------------
  `db.collection.insertOne()`  |  Insere um documento na coleção.
  `db.collection.insertMany()` |  Insere vários documentos na coleação.
  `db.collection.insert()`     |  Insere um ou vários documentos na coleção. É recomendado usar apenas um dos dois métodos acima.

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

  ## **2 - Find**
  `db.collection.find({ query }, { projection })`
  Parâmetro  |  Descrição
  ---------- | ----------
  query      | opcional figfdog
  projection |  opcional dusfhlijdas
  <BR>

  enunciado
  ```
  <exemplo>
  ```
  ## **3 - Count**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
  ## **4 - Sort**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
  ## **5 - Regex**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
  ## **6 - Search (text)**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
  ## **7 - UpdateOne/UpdateMany**
  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
--------
# **Part II - Aggregations**
  ## **1 - Match**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
  ## **2 - Project**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
  ## **3 - Unwind**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
  ## **4 - Lookup**
  ```
  definição e exemplo

    exercicio1
    .
    .
    .
    exercicioN
  ```
