(function (global) {
  "use strict";

  var COMPRA = "/games/compra.html";

  var sugestoes = [
    { id: "odallus",  name: "Odallus the Dark Call", price: "R$ 10,00", img: "/imgs/produtos/Sugestões/UX/odallus.png",   href: COMPRA },
    { id: "toren",    name: "Toren",                 price: "R$ 20,00", img: "/imgs/produtos/Sugestões/UX/toren.png",     href: COMPRA },
    { id: "unsighted",name: "Unsighted",             price: "R$ 20,00", img: "/imgs/produtos/Sugestões/UX/unsighted.png", href: COMPRA },
    { id: "horizon",  name: "Horizon Chase Turbo",   price: "R$ 50,00", img: "/imgs/produtos/Sugestões/UX/horizon.png",   href: COMPRA },
    { id: "arida",    name: "ÁRIDA",                 price: "R$ 25,00", img: "/imgs/produtos/Sugestões/UX/arida.png",     href: COMPRA }
  ];

  var adicionados = [
    { id: "eternal-cylinder", name: "The Eternal Cylinder",     price: "R$ 22,00", img: "/imgs/produtos/Adicionados Recentemente/1 the eternal cylinder.png", href: COMPRA },
    { id: "relic-hunters",    name: "Relic Hunters Legend",     price: "R$ 17,00", img: "/imgs/produtos/Adicionados Recentemente/2 relic.png",                href: COMPRA },
    { id: "unsighted",        name: "Unsighted",                price: "R$ 20,00", img: "/imgs/produtos/Adicionados Recentemente/3 unsighted.png",            href: COMPRA },
    { id: "fobia",            name: "Fobia – St. Dinfna Hotel", price: "R$ 50,00", img: "/imgs/produtos/Adicionados Recentemente/fobia.png",                  href: COMPRA },
    { id: "pocket-bravery",   name: "Pocket Bravery",           price: "R$ 50,00", img: "/imgs/produtos/Adicionados Recentemente/pocket.png",                 href: COMPRA }
  ];

  var maisComprados = [
    { id: "odallus",    name: "Odallus the Dark Call",    price: "R$ 10,00", img: "/imgs/produtos/Sugestões/UX/odallus.png",         href: COMPRA },
    { id: "knights-2",  name: "Knights of Pen & Paper 2", price: "R$ 7,00",                          img: "/imgs/produtos/Mais Comprados/2 Knights.png",     href: COMPRA },
    { id: "dodgeball",  name: "Dodgeball Academia",       price: "R$ 70,00",                         img: "/imgs/produtos/Mais Comprados/3 Dodgeball.png",   href: COMPRA },
    { id: "dandy-ace",  name: "Dandy Ace",                price: "R$ 30,00",                         img: "/imgs/produtos/Mais Comprados/dandy.jpg",         href: COMPRA },
    { id: "kaze",       name: "Kaze and the Masks",       price: "R$ 50,00",                         img: "/imgs/produtos/Mais Comprados/kaze.png",          href: COMPRA }
  ];

  var melhores = [
    { id: "kukoos",   name: "Kukoos Lost Pets",       price: "R$ 60,00",  img: "/imgs/produtos/melhores/UX/kukos.png",           href: COMPRA },
    { id: "toren",    name: "Toren",                  price: "R$ 20,00",  img: "/imgs/produtos/melhores/UX/Rectangle 300-1.png", href: COMPRA },
    { id: "dandara",  name: "Dandara Trials Of Fear", price: "R$ 10,00",  img: "/imgs/produtos/melhores/UX/Rectangle 301.png",   href: COMPRA },
    { id: "mullet",   name: "Mullet MadJack",         price: "R$ 50,00",  img: "/imgs/produtos/melhores/UX/mullet.jpg",          href: COMPRA },
    { id: "midnight", name: "The Midnight Walk",      price: "R$ 100,00", img: "/imgs/produtos/melhores/UX/midnight.png",        href: COMPRA }
  ];

  var emAlta = {
    id: "aila",
    name: "A.I.L.A",
    price: "R$ 80,00",
    cover: "/imgs/produtos/em alta/aila.png",
    gif: "/gifs/aila.gif",
    description: "Survival horror em primeira pessoa do estúdio brasileiro Pulsatrix. Como testador de jogos, você recebe o kit de A.I.L.A, uma inteligência artificial que cria pesadelos a partir dos seus próprios medos, até o virtual parecer real.",
    href: COMPRA
  };

  var gratuito = {
    id: "relic-hunters-zero",
    name: "Relic Hunters Zero: Remix",
    price: "Gratuito",
    free: true,
    cover: "/imgs/produtos/gratuitos/relic.png",
    gif: "/gifs/relic.gif",
    description: "Um shooter roguelike 2D do estúdio mineiro Rogue Snail. Escolha um dos sete caçadores de relíquias da nave Spaceheart e atire, desvie e abra caminho contra o Império Ducan na corrida pelas relíquias lendárias.",
    href: COMPRA
  };

  var ofertas = [
    { id: "hazel-sky",     name: "Hazel Sky",        discount: "Economize 40%", oldPrice: "R$ 75,00", price: "R$ 45,00", img: "/imgs/produtos/ofertas/UX/Rectangle 300.png",   href: COMPRA },
    { id: "mark-of-deep",  name: "Mark Of The Deep", discount: "Economize 50%", oldPrice: "R$ 75,00", price: "R$ 45,00", img: "/imgs/produtos/ofertas/UX/Rectangle 300-1.png", href: COMPRA },
    { id: "toggles",       name: "Toggles",          discount: "Economize 75%", oldPrice: "R$ 75,00", price: "R$ 45,00", img: "/imgs/produtos/ofertas/UX/Rectangle 300-2.png", href: COMPRA }
  ];

  var apenasBusca = [
    { id: "chroma-squad", name: "Chroma Squad",                         img: "/imgs/carrossel/chroma.jpg",    href: COMPRA },
    { id: "momodora",     name: "Momodora", img: "/imgs/carrossel/momodora.jpg", href: COMPRA }
  ];

  var sugeridosBusca = ["dandy-ace", "mullet", "relic-hunters", "kukoos"];

  global.IaraCatalogo = global.IaraCatalogo || {};
  var dados = {
    produtos: [
      {
        key: "sugestoes",
        className: "display-jogos",
        blocos: [
          { id: "sugestoes", tipo: "grade", titulo: "Sugestões", subtitulo: "Jogos para você conhecer", jogos: sugestoes }
        ]
      },
      {
        key: "em-alta",
        className: "display-jogos vitrine",
        id: "em-alta",
        labelledBy: "alta-titulo",
        blocos: [
          { id: "em-alta", tipo: "destaque", titulo: "Em Alta", tituloId: "alta-titulo", icone: "fa-fire", subtitulo: "Os jogos mais populares do momento", jogo: emAlta }
        ]
      },
      {
        key: "listas",
        className: "display-jogos",
        blocos: [
          { id: "adicionados",    tipo: "grade", titulo: "Adicionados Recentemente", subtitulo: "Explore o que você não pode perder",  jogos: adicionados },
          { id: "mais-comprados", tipo: "grade", titulo: "Mais Comprados",           subtitulo: "Os favoritos da comunidade",          jogos: maisComprados },
          { id: "melhores",       tipo: "grade", titulo: "Melhores Avaliados",       subtitulo: "Jogos que Conquistaram os Jogadores", jogos: melhores }
        ]
      }
    ],

    ofertas: [
      {
        key: "ofertas",
        blocos: [
          { id: "ofertas", tipo: "ofertas", titulo: "Ofertas", subtitulo: "Descontos que estão esperando por você", ofertas: ofertas }
        ]
      }
    ],

    gratuitos: [
      {
        key: "gratuitos",
        className: "display-jogos vitrine",
        id: "gratuitos",
        labelledBy: "gratis-titulo",
        blocos: [
          { id: "gratuitos", tipo: "destaque", titulo: "Gratuitos", tituloId: "gratis-titulo", icone: "fa-gift", subtitulo: "Aproveite jogos incríveis sem gastar nada", jogo: gratuito }
        ]
      }
    ]
  };


  var regioes = ["produtos", "ofertas", "gratuitos"];

  function listarBlocos() {
    var blocos = [];
    regioes.forEach(function (regiao) {
      dados[regiao].forEach(function (secao) {
        secao.blocos.forEach(function (bloco) { blocos.push(bloco); });
      });
    });
    return blocos;
  }

  function encontrarBloco(id) {
    return listarBlocos().filter(function (bloco) { return bloco.id === id; })[0] || null;
  }

  function jogosDoBloco(bloco) {
    if (bloco.tipo === "destaque") {
      var j = bloco.jogo;
      return [{ id: j.id, name: j.name, price: j.price, img: j.cover, href: j.href }];
    }
    if (bloco.tipo === "ofertas") {
      return bloco.ofertas.map(function (o) {
        return { id: o.id, name: o.name, price: o.price, img: o.img, href: o.href };
      });
    }
    return bloco.jogos;
  }

  function listarJogos() {
    var vistos = {};
    var lista = [];
    var todos = [];

    listarBlocos().forEach(function (bloco) { todos = todos.concat(jogosDoBloco(bloco)); });
    todos = todos.concat(apenasBusca);

    todos.forEach(function (jogo) {
      if (vistos[jogo.id]) return;
      vistos[jogo.id] = true;
      lista.push(jogo);
    });
    return lista;
  }

  function listarSugeridosBusca() {
    var todos = listarJogos();
    return sugeridosBusca
      .map(function (id) { return todos.filter(function (jogo) { return jogo.id === id; })[0]; })
      .filter(Boolean);
  }

  dados.listarBlocos = listarBlocos;
  dados.encontrarBloco = encontrarBloco;
  dados.listarJogos = listarJogos;
  dados.listarSugeridosBusca = listarSugeridosBusca;

  global.IaraCatalogo.dados = dados;
})(window);
