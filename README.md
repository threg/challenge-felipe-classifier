# Desafio de Projeto: Classificador de Nível de Herói

Este projeto foi desenvolvido como parte do desafio de código "Classificador de Nível de Herói" da DIO. O objetivo é criar uma estrutura de dados para armazenar o nome e a quantidade de experiência (XP) de um herói e, em seguida, utilizar uma estrutura de decisão para classificar seu nível.

## 🚀 Tecnologias Utilizadas

* **JavaScript:** Linguagem principal para a lógica do classificador.

## 📝 Descrição do Projeto

O script define variáveis para armazenar o nome e o XP de um herói. Com base na quantidade de XP, uma estrutura `switch` determina o nível correspondente, seguindo as regras:

* **Ferro:** XP menor que 1.000
* **Bronze:** XP entre 1.001 e 2.000
* **Prata:** XP entre 2.001 e 5.000
* **Ouro:** XP entre 5.001 e 7.000
* **Platina:** XP entre 7.001 e 8.000
* **Ascendente:** XP entre 8.001 e 9.000
* **Imortal:** XP entre 9.001 e 10.000
* **Radiante:** XP maior ou igual a 10.001

No final, o programa exibe uma mensagem de saída formatada, informando o nome do herói e o nível em que ele se encontra.

## 🎯 Objetivo do Desafio

O propósito deste desafio era consolidar o conhecimento sobre os seguintes pilares da programação:

* Declaração e uso de variáveis.
* Utilização de operadores relacionais (`<`, `>`, `<=`, `>=`).
* Implementação de estruturas de decisão (`if/else` ou `switch case`).
* Manipulação e concatenação de strings para exibir mensagens.

## 🔧 Como Executar

1.  Clone este repositório para a sua máquina local.
2.  Navegue até a pasta do projeto.
3.  Para executar o script, utilize o Node.js no seu terminal:
    ```bash
    node src/index.js
    ```
4.  A mensagem "O Herói de nome [nome] está no nível de [nível]" será exibida no console.

## ✨ Melhorias Futuras

* [ ] Encapsular a lógica em uma função para que possa ser reutilizada com diferentes heróis.
* [ ] Criar uma pequena interface com HTML onde o usuário pode digitar o nome e o XP para ver a classificação.
* [ ] Adicionar mais níveis ou personalizar as faixas de XP.

---
Feito por Talles Henrique 👋 [LinkedIn](https://www.linkedin.com/in/talles-henrique-35a48a240)
