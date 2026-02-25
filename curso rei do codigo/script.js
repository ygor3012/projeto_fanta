//Criação de uma TIMELINE do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO
    }
});

tl.to(
    '#fanta',
    {
        top: '120%',  // quando move o elemento com o id fanta para 120% do topo
        left: '0%',
    },
    'orange'
);  //NOMEANDO ESTE TRECHO DE ANIMAÇÃO COMO 'ORANGE' PARA SINCRONIZAÇÃO

tl.to(
    '#laranja2',
    {
        top: '160%', // move o elemento com id 'laranja2' para 160% do topo
        left: '23%', // Move o elemento p ara 23% da esquerda
    },
    'orange'
); //sincronizando com a animação nomeada 'orange'

tl.to(
    '#laranja1',
    {
        widht:'15%', //Reduz a largura do elemento com id 'orange' para 15%
        top: '160%', // move o elemento com id 'laranja' para 160% do topo
        right: '10%', // Move o elemento para 10% da esquerda
    },
    'orange'
);

tl.to(
    '#folha1',
    {
        top: '110%', // move o elemento com id 'laranja' para 160% do topo
        rotate: '530deg', //Rotaciona o elemento em 130 graus
        left: '70%', // Move o elemento para 70% da esquerda
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%', // move o elemento com id 'laranja' para 160% do topo
        rotate: '530deg', //Rotaciona o elemento em 130 graus
        left: '0%', // Move o elemento para 0% da esquerda
    },
    'orange'
);



//CRIANDO OUTRA TIMELINE


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.tres',
        start: '0% 95%',
        end: '20% 50%', //Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .tres)
        scrub: true,
        markers: true, //DEPURAÇÃO
    },
});

tl2.from(
    '.lemon1',
    {
        top: '110%', // Inicia o elemento ligeiramente abaixo da tela(110% abaixo)
        rotate: '-90deg', // Inicia o elemento rotacionando
        left: '-110%', // Inicia o elemento fora da tela, à esquerda
    },
    'an-lemon'
);//Nomeando esse trecho da animação como 'an-lemon' para sincronização

tl2.from(
    '#cocacola',
    {
        top: '110%', // Inicia o elemento ligeiramente abaixo da tela(110% abaixo)
        rotate: '-90deg', // Inicia o elemento rotacionando
        left: '-110%', // Inicia o elemento fora da tela, à esquerda
    },
    'an-lemon'
);//Nomeando esse trecho da animação como 'an-lemon' para sincronização

tl2.from(
    '.lemon2',
    {
        top: '110%', // Inicia o elemento ligeiramente abaixo da tela(110% abaixo)
        rotate: '90deg', // Inicia o elemento rotacionando
        right: '110%', // Inicia o elemento fora da tela, à esquerda
    },
    'an-lemon'
);//Nomeando esse trecho da animação como 'an-lemon' para sincronização

tl2.from(
    '#pepsi',
    {
        top: '110%', // Inicia o elemento ligeiramente abaixo da tela(110% abaixo)
        rotate: '90deg', // Inicia o elemento rotacionando
        right: '-110%', // Inicia o elemento fora da tela, à esquerda
    },
    'an-lemon'
);//Nomeando esse trecho da animação como 'an-lemon' para sincronização

tl2.to(
    '#laranja2',
    {
      width: '18%',
      left: '41%',
      top: '204%',
    },
    'an-lemon'
);//Nomeando esse trecho da animação como 'an-lemon' para sincronização

tl2.to(
    '#fanta',
    {
      width: '33%',
      left: '33.5%',
      top: '213%',
    },
    'an-lemon'
);//Nomeando esse trecho da animação como 'an-lemon' para sincronização



