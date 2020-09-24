# **intro-mongodb-review**

## Repositório criado para revisão de introdução ao **MongoDB**

Baseado nas últimas semanas de conteúdos e na **[documentação-mongoDB](https://docs.mongodb.com/manual/)**.<BR>
Será utilizado uma database inspirada na **[aplicação](https://github.com/orlando-messias/next-level-week-2)** feita por @orlando-messias na NLW-2 (evento realizado pela Rocketseat).

### A revisão está dividida em três partes:

- ### Parte I - CRUD (Create/Read Operations);
  #### 1 - insert - insertOne()/insertMany();
  #### 2 - find();
  #### 3 - count()/itcount();
  #### 4 - sort();
- ### Parte II - CRUD (Update/Delete Operations)
  #### 1 - update - updateOne()/updateMany();
  #### 2 - $search ($text)
  #### 3 - \$regex
- ### Parte III - Aggregations.
  #### 1 - \$match
  #### 2 - \$project
  #### 3 - $unwind e $group
  #### 4 - \$lookup
  <BR><BR>

---

## **Antes de começar:**

### Copie o script e cole no mongo Shell a partir do link:

#### **[Script de criação da database e collections](/scripts/createdb.js)**

---

<BR>

## **Parte I - CRUD (Create/Read Operations)**

### **1 - insertOne()/insertMany()**

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
    "subject": "Desenvolvimento",
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
        "user_id": 2,
        "subject": "Educação Física",
        "cost": 33.0,
    },
    {
        "_id": 3,
        "user_id": 3,
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
  db.collection.find().skip(9).limit(6);
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

### **4 - sort()**

Especifica a ordem em que a consulta retorna documentos correspondentes, de acordo com o(s) campo(s) passado(s) como parâmetro para ele.

```
db.collection.find().sort({ field: <1 ou -1> });
```

| Parâmetro | Valor | Ordem       |
| --------- | ----- | ----------- |
| field     |  1    | Ascendente  |
| field     | -1    | Decrescente |

---

## **Parte II - CRUD (Update/Delete Operations)**

### **1 - updateOne()/updateMany()**

Atualiza documento(s) específico(s) da coleção com base no(s) filtro(s).

Sintaxe: `db.collection.update({ <filter> }, { <update> }, { <options> });`

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

### **2 - $text ($search)**

Executa uma pesquisa de texto no conteúdo dos campos indexados com um **índice de texto**.

```
Sintaxe:

{ 
  $text: {
    $search: <string>,
    $language: <string>,
    $caseSensitive: <boolean>,
    $diacriticSensitive: <boolean>
  }
}
```

#### **$search**

No campo \$search, especifique uma sequência de palavras e o operador de texto analisa e usa para consultar o índice de texto.

O operador de texto trata a maioria da pontuação na string como delimitadores, exceto um hífen-menos (-) que nega o termo ou aspas duplas com escopo `\"` que especifica uma frase.

    `" \" isso é uma frase \" "`

Buscar por uma única palavra:
```
// criação de índice de texto para o campo bio
db.users.createIndex({ bio: "text" });

// $search vai pesquisar no índice de text documentos que possuem a palavra "Desenvolvedor"
db.users.find({ $text: { \$search: "Desenvolvedor" } });

// o retorno será documentos que tenham a palavra semelhante a "desenvolvedor" no campo "bio"
```

Buscar por várias palavras:

```
db.users.find({ $text: { $search: "Desenvolvedor" "full-stack" "react" } });
// Note que nesse caso ele busca como se estivesse utilizando o operador lógico `OR`
```

Buscar por frases:
```
db.users.find({
  $text: {
    $search: "\" Desenvolvedor Full-Stack com ampla experiência em React e NodeJs \""
  }
});
```
> - Cada coleção pode ter apenas um índice do tipo text, porém o índice text pode indexar vários campos.
> - Mais sobre [\$text](https://docs.mongodb.com/manual/core/index-text/).

O exemplo a seguir mostra o índice text indexando mais de um campo da mesma collection:
```
db.collection.createIndex(
   {
     subject: "text",
     comments: "text"
   }
 );
 ```

### **3 - $regex**

Fornece recursos de expressão regular para strings de correspondência de padrões em consultas.

```
Sintaxe:

{ <field>: { $regex: /pattern/, $options: '<options>' } }
{ <field>: { $regex: 'pattern', $options: '<options>' } }
{ <field>: { $regex: /pattern/<options> } }
```

> - [Leia mais sobre \$regex](https://docs.mongodb.com/manual/reference/operator/query/regex/index.html)<BR>
> - [Extra: Regex and quantifiers](https://stackoverflow.com/questions/8575281/regex-plus-vs-star-difference)

---

## **Parte III - Aggregations**

As operações de agregação processam registros de dados e retornam resultados computados. As operações de agregação agrupam valores de vários documentos/coleções e podem executar uma variedade de operações nos dados agrupados para retornar um único resultado. O MongoDB fornece três maneiras de realizar a agregação: **aggregation pipeline** (foco dessa revisão), map-reduce function e single purpose aggregation methods.

O Aggregation Framework foi modelado sob o conceito de processamento de dados por meio de pipelines, ou seja, um "funil". Um pipeline pode contér **múltiplos estágios**.
Cada estágio gera um resultado, e se houver um próximo estágio, será feito com base no resultado do estágio anterior, antes de gerar um novo resultado.

> Você pode ver mais sobre Aggregation pipeline [aqui](https://docs.mongodb.com/manual/aggregation/)

### **1 - \$match**

Filtra os documentos para passar apenas os documentos que correspondem às condições especificadas para o próximo estágio do pipeline. Seu funcionamento é semelhante ao primeiro parâmetro do método `.find()`

```
db.collection.aggregate([
{ $match: { <query> } }
]);
```

> Mais sobre \$match na [documetação](https://docs.mongodb.com/manual/reference/operator/aggregation/match/#pipe._S_match)

### **2 - \$project**

Passa os documentos com os campos solicitados para a próxima etapa do pipeline. Os campos especificados podem ser campos existentes dos documentos de entrada ou campos recém-calculados no estágio anterior, ou no próprio estágio (ex: \$round). Lembra do parâmetro de projeção do método `.find()`?

```
db.collection.aggregate([
  { $project: { <specification(s)> } }
]);

//  exemplo com mais de um stage
db.collection.aggregate([
  { $match: { <query> } },
  { $project: { <specification(s)> } }
]);

```

### **3 - $unwind e $group**

### **\$unwind**:
Desconstrói um campo de matriz dos documentos de entrada para **gerar um documento para cada elemento**. Cada documento de saída é o documento de entrada com o valor do campo da matriz substituído pelo elemento.

```
db.collection.aggregate([{ $unwind: <field path> }]);

//  encadeando vários stages
db.collection.aggregate([
  { $match: { <query> } },
  { $unwind: <field path> },
  { $project: { <specification(s)> } }
]);
```

> - Mais detalhes sobre [\$unwind](https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/)

### **\$group**:

  Agrupa documentos de entrada pelo campo "_id" especificado e, para cada agrupamento distinto, gera um documento. O campo _id de cada documento de saída contém o grupo exclusivo por valor. Os documentos de saída também podem conter campos computados que contêm os valores de alguma expressão de acumulador.
  ```
    {
      $group: {
        _id: <expression>, // Group By Expression
        <field1>: { <accumulator1> : <expression1> },
      ...
      }
    }
  ```

  > * Mais sobre [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/)

### **4 - \$lookup**

Executa um left outer join com uma coleção não fragmentada no mesmo banco de dados para filtrar documentos da coleção “juntada” para processamento. Para cada documento de entrada, o estágio $lookup adiciona um novo campo de array cujos elementos são os documentos correspondentes da coleção “unida”. O estágio $lookup passa esses documentos remodelados para o próximo estágio.

```
{
  $lookup: {
    from: <collection to join>,
    localField: <field from the input documents>,
    foreignField: <field from the documents of the "from" collection>,
    as: <output array field>
  }
}
```

```
{
  $lookup: {
    from: <collection to join>,
    let: { <var_1>: <expression>, …, <var_n>: <expression> },
    pipeline: [ <pipeline to execute on the collection to join> ],
    as: <output array field>
  }
}
```

> - Mais sobre [\$lookup](https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/).
