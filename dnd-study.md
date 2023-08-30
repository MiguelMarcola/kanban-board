# GP-1642 - Frontend - Incidentes - Estudo de componentes React para componente Kanban

O objetivo dessa tarefa é avaliar qual a complexidade envolvida para criação de um Kambam simples utilizando react e
nextJS.

Requisitos minimos:

Kanban deve ter 3 colunas, sendo aberto, em atendimento e fechado;

Devem ser apresentado os cards com dados do incidente;

Deve ser possível arrastar os cards entre essas colunas;

Quando um card é arrastado de uma coluna para outra, ele deve aparecer no topo da nova coluna.

## Referências do Estudo

- [@dnd-kit](https://dndkit.com/)
- [react-draggable](https://github.com/react-grid-layout/react-draggable)
- [kanban task management clone](https://reactjsexample.com/a-kanban-task-management-clone-with-react-and-tailwind-and-redux/#google_vignette)

## Aprendizados

Após a implementação e teste de diversas formas de implementação para chegar na criação de um componente de Kanban
cheguei a conclusão que a melhor forma para atingir esse objetivo é com a utilização da biblioteca @dnd-kit devido a sua
facilidade de implementção e liberdade para customização a respeito dessa biblioteca podemos citar algumas vantagens e
desvantagems.

### Vantagens

- Flexibilidade e Modularidade: Ao contrário de algumas bibliotecas de "drag and drop", o @dnd-kit é projetado para ser
  modular. Isto significa que você pode usar apenas as partes da biblioteca que são relevantes para o seu projeto.

- Independente de Plataforma: A biblioteca foi projetada para ser usada tanto na web quanto em plataformas nativas,
  tornando-a versátil.

- Integração com Outras Bibliotecas: O @dnd-kit pode ser integrado facilmente com outras bibliotecas de animação.

- Abstração de Sensor: Isso permite que desenvolvedores adicionem diferentes "sensores" para diferentes métodos de
  entrada, como toque, mouse e teclado, tornando a experiência de arrastar e soltar mais acessível.

- Documentação: A biblioteca possui uma boa documentação com uma variedade de exemplos para ajudar os desenvolvedores a
  começar.

### Desvantagens

- Performance: Embora a biblioteca seja geralmente eficiente, há casos de uso ou cenários onde outras bibliotecas
  específicas possam ter uma performance superior.

- Tamanho da Biblioteca: Dependendo de quantas funcionalidades do @dnd-kit você utiliza, o tamanho do bundle final do
  seu aplicativo pode ser afetado.

### Considerações sobre os outros métodos

Foram avaliados outros métodos para atingir o resultado esperado sendo eles o uso da biblioteca react-draggable e
utilizando o próprio método nativo do react para realizar a função de draggable mas acabaram sendo desconsiderados pelos
seguintes motivos:

#### react-draggable

- Funcionalidade Básica: O react-draggable se concentra principalmente em fornecer funcionalidade básica de arrastar e
  soltar. Se você precisar de funcionalidades mais avançadas, como arrastar entre listas, arrastar múltiplos itens ou
  ter animações mais complexas, pode achar que a biblioteca é um pouco limitada.

- Falta de Abstração para Diferentes "Sensores": Ao contrário de algumas bibliotecas mais recentes, como @dnd-kit, o
  react-draggable não tem uma abstração para diferentes métodos de entrada, como toque, mouse e teclado.

- Integração com Outras Bibliotecas: Se você estiver usando bibliotecas de animação ou gerenciamento de estado mais
  avançadas, poderá encontrar algumas dificuldades ou incompatibilidades ao tentar integrá-las com o react-draggable.

- Estilos e Classes Predefinidos: O react-draggable aplica algumas classes e estilos CSS predefinidos aos elementos
  arrastáveis. Embora isso possa ser útil em muitos cenários, pode ser um pouco restritivo se você precisar de um
  controle total sobre a aparência e o comportamento dos seus elementos arrastáveis.

#### Uso nativo da função de draggable

- Funcionalidade Básica: O suporte nativo para arrastar e soltar em HTML5 é bastante básico. Se você precisar de
  funcionalidades mais avançadas, como arrastar entre listas, suporte para touch, animações, e outros, terá que
  implementar muita lógica adicional.

- Inconsistências entre Navegadores: A implementação de arrastar e soltar em HTML5 pode variar entre diferentes
  navegadores. Isso pode levar a comportamentos inconsistentes e possíveis bugs.

- Estilo e Feedback Visual: Ao usar o arrastar e soltar nativo, o feedback visual (como a representação do item sendo
  arrastado) pode ser limitado e não ser tão personalizável quanto as soluções de bibliotecas.

- Sem Abstração para Múltiplas Entradas: A abordagem nativa geralmente não possui abstração para lidar com diferentes
  métodos de entrada, como mouse, toque e teclado. Bibliotecas especializadas frequentemente têm soluções para lidar com
  esses diferentes métodos de forma mais elegante.

- Complexidade na Gestão de Estado: Enquanto bibliotecas especializadas muitas vezes fornecem maneiras integradas de
  gerenciar o estado do que está sendo arrastado, onde está sendo solto, etc., com a abordagem nativa, você precisará
  gerenciar tudo isso manualmente.

- Acessibilidade: Implementar uma solução acessível usando apenas o suporte nativo de arrastar e soltar pode ser
  desafiador. Bibliotecas especializadas frequentemente oferecem melhor suporte para acessibilidade.

## Exemplo

Você pode ter acesso ao exemplo criado utilizando a lib @dnd-kit acessando o link
[@dnd-kit deploy](https://kanban-board-43ez.vercel.app/)

Além disso o código está disponível no github

```bash
  git clone https://github.com/MiguelMarcola/kanban-board.git
```

ou no link [@dnd-kit example github](https://github.com/MiguelMarcola/kanban-board)
