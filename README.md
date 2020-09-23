# **intro-mongodb-review**

## Repositório criado para revisão de introdução ao **MongoDB**

Baseado nas últimas semanas de conteúdos e na **[documentação-mongoDB](https://docs.mongodb.com/manual/)**.<BR>
Será utilizado uma database inspirada na **[aplicação](https://github.com/orlando-messias/next-level-week-2)** feita por @orlando-messias na NLW-2 (evento realizado pela Rocketseat).

### A revisão está dividida em três partes:

- ### Parte I - CRUD (Create/Read Operations);
  #### 1 - Inserts - One/Many;
  #### 2 - Find;
  #### 3 - Count/itcount;
  #### 4 - Sort;
- ### Parte II - CRUD (Update/Delete Operations)
  #### 1 - Updates - One/Many
  #### 2 - Search (text)
  #### 3 - Regex
- ### Parte III - Aggregations.
  #### 1 - Match
  #### 2 - Project
  #### 3 - Unwind
  #### 4 - Lookup
  <BR><BR>

---

## **Antes de começar:**

### Copie o script e cole no mongo Shell a partir do link:

#### **[Script de criação da database e collections](/scripts/createdb.js)**

---

<BR>

## **Parte I - CRUD (Create/Read Operations)**

### **1 - InsertOne/InsertMany**

| Método                       | Descrição                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| `db.collection.insertOne()`  | Insere um documento na coleção.                                                                     |
| `db.collection.insertMany()` | Insere vários documentos na coleação.                                                               |
| `db.collection.insert()`     | Insere um ou vários documentos na coleção.<BR> É recomendado usar apenas um dos dois métodos acima. |

- Exemplo com **insertOne()**:

```
  db.classes.insertOne({
    "_id": 1,
    "user_id": 1,
    "subject": "Desenvolvimento"
    "cost": 80.0,
  });
```

- Exemplo com **insertMany()**:

> - Obs: Os objetos que serão inseridos, são objetos dentro de uma array.

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

> [Mais sobre Create Operations](https://docs.mongodb.com/manual/crud/#create-operations)

### **2 - Find**

    Sintaxe: `db.collection.find({ query }, { projection });`

| Parâmetro  | Descrição                                                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| query      | Opcional. Especifica o filtro de seleção usando [operadores de consulta](https://docs.mongodb.com/manual/reference/operator/query/#query-selectors).<BR>Para retornar todos os documentos em uma coleção, omita este parâmetro ou passe um documento vazio ({}).                                                    |
| projection | Opcional. Especifica os campos a serem retornados nos documentos que correspondem ao filtro da consulta. Para retornar todos os campos nos documentos correspondentes, omita este parâmetro. [Leia mais em operadores de projeção](https://docs.mongodb.com/manual/reference/operator/query/#projection-operators). |

> - O parâmetro de projeção determina quais campos são retornados nos documentos correspondentes. O parâmetro de projeção gera documento(s) nessa forma
>   `{ <field1>: <value>, <field2>: <value> ... }`

| Projeção                | Derscrição                                        |
| ----------------------- | ------------------------------------------------- |
| `<field>`: <1 ou true>  | Especifica a **INCLUSÃO** de um campo na projeção |
| `<field>`: <0 ou false> | Especifica a **EXCLUSÃO** de um campo na projeção |

> - Obs: É possível combinar o método `.find()` com os métodos `.count`, `.skip()` e `.limit()`.

Retornando todos os documentos:

```
  db.collection.find();
  //  ou
  db.collection.find({});

  // retornar todos os documentos a partir do 10°
  db.collection.find().skip(9);

  // retornar documentos do 10°ao 15°, sem filtros/projeção
  db.collection.find().skip(9).limit(5);
```

Retornando apenas um documento:

```
  //  retornar o primeiro documento com base no(s) filtro(s) pelo(s) operador(es) de consulta
  db.collection.findOne({ <query> }, { <projeção> });
  //  ou
  db.collection.find({ <query> }, { <projeção> }).limit(1);
  //  ---------------------------------------------------

  //  retornar determinado documento, no caso, o 25°.
  db.collection.find().skip(24).limit(1);
```

> [Mais sobre Read Operations](https://docs.mongodb.com/manual/crud/#read-operations)

### **3 - Count/itcount**

#### **count():**

Conta o número de documentos referenciados por um cursor. Anexar o método count() a uma consulta find() retorna o número de documentos correspondentes. A operação não executa a consulta, mas conta os resultados que seriam retornados pela consulta.

    Sintaxe: `db.collection.find().count();`

> - No MongoDB também existe o `db.collection.count()` que é uma alternativa equivalente ao `db.collection.find(<query>).count()`. <BR>
>   Assim como acontece com o método `.find()`, também é possível combinar o método `.count()` com os métodos `.skip()` e `.limit()`.

#### **itcount()**

`.itcount()` Conta o número de documentos e é semelhante ao `.count()`, mas na verdade executa a consulta em um iterador existente, esgotando seu conteúdo no processo.

    Sintaxe: `db.collection.find().itcount();`

### **4 - Sort**

Especifica a ordem em que a consulta retorna documentos correspondentes, de acordo com o(s) campo(s) passado(s) como parâmetro para ele.

```
db.collection.find().sort({ field: <1 ou -1> });
```

| Parâmetro | Valor | Ordem       |
| --------- | ----- | ----------- |
| field     | 1     | Ascendente  |
| field     | -1    | Decrescente |

---

## **Parte II - CRUD (Update/Delete Operations)**

### **1 - UpdateOne/UpdateMany**

Atualiza documento(s) específico(s) da coleção com base no(s) filtro(s).

    Sintaxe: `db.collection.update({<filter>},{<update>},{<options>});`

| Método                        | Descrição                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------- |
| `db.collection.updateOne();`  | Altera um ou o primeiro documento encontrado na coleção, baseado nos filtros.    |
| `db.collection.updateMany();` | Altera todos os documentos encontrados na coleção, baseado nos filtros.          |
| `db.collection.update();`     | Assim como o método `.insert()`, é recomendado usar apenas um dos métodos acima. |

> - Obs: Se o método não encontrar documentos que correspondam a consulta, os campos são criados e têm os valores passados atribuídos a eles. Cuidado!

Exemplo **updateOne()**:

```
db.users.updateOne(
  //  Encontra o documento que user_id seja igual a 2
  { user_id: 2 },
  {
    //  Altera subject de "Educação Física" para "Física" e incrementa o custo em 5
    $set: { subject: "Física" },
    $inc: { cost: 5 }
  }
);
//  Qual seria o resultado da operação caso não fosse encontrado os campos no documento, ou não houvesse um documento que correspondesse a consulta?
```

Exemplo **updateMany()**:

```
db.users.updateMany(
 //  Encontra todos os documentos que suas aulas que sejam de Português ou Física.
  { subject: { $in: ["Português", "Física"] } },
  {
    //  multiplica o custo em 1.2
    $mul: { cost: 1.2 }
  }
);
```

> [Mais sobre Update Operations](https://docs.mongodb.com/manual/crud/#update-operations)

> [Bônus: Delete operations](https://docs.mongodb.com/manual/crud/#delete-operations)

### **2 - Text (search)**

Executa uma pesquisa de texto no conteúdo dos campos indexados com um **índice de texto**.

```
Sintaxe:

{
  $text:
    {
      $search: <string>,
      $language: <string>,
      $caseSensitive: <boolean>,
      $diacriticSensitive: <boolean>
  }
}
```

#### search

No campo $search, especifique uma sequência de palavras e o operador de texto analisa e usa para consultar o índice de texto.

O operador de texto trata a maioria da pontuação na string como delimitadores, exceto um hífen-menos (-) que nega o termo ou aspas duplas com escopo `\"` que especifica uma frase.

Buscar por uma única palavra:

    //  criação de índice de texto para o campo bio
    db.users.createIndex({ bio: "text" });

    //  $search vai pesquisar no índice de text documentos que possuem a palavra "Desenvolvedor"
    db.users.find({ $text: { $search: "Desenvolvedor" } });

    //  o retorno será documentos que tenham a palavra semelhante a "desenvolvedor" no campo "bio"

Buscar por várias palavras:

    db.users.find({ $text: { $search: "Desenvolvedor" "full-stack" "react" } });
    //  Note que nesse caso ele busca como se estivesse utilizando o operador lógico `OR`

Buscar por frases:

    db.users.find({
      $text: {
        $search: "\" Desenvolvedor Full-Stack com ampla experiência em React e NodeJs \""
      }
    });

### **3 - Regex**

  <BR>
  
  enunciado
  ```
  <exemplo>
  ```
--------------------------------------------
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

```
