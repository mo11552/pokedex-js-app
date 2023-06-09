let pokemonRepository = (function () {
  let t = [];
  function e(e) {
    t.push(e);
  }
  function n() {
    return t;
  }
  function o(t) {
    i(t).then(function () {
      a(t);
    });
  }
  function i(t) {
    return fetch(t.detailsUrl)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.types = e.types.map((t) => t.type.name));
      })
      .catch(function (t) {
        // eslint-disable-next-line no-console
        console.error(t);
      });
  }
  function a(t) {
    let e = $('.modal-body'),
      n = $('.modal-title');
    n.empty(), e.empty();
    document.querySelector('.close').addEventListener('click', l);
    let o = $('<img class="pokemon-img" src=" ' + t.imageUrl + ' " />'),
      i = $('<p>Height: ' + t.height + '</p>'),
      a = $('<p>types : ' + t.types + '</p>');
    n.append(t.name), e.append(o), e.append(i), e.append(a);
  }
  function l() {
    document.querySelector('#modal-container').classList.remove('is-visible');
  }
  return {
    add: e,
    getAll: n,
    loadList: function t() {
      return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            e({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          // eslint-disable-next-line no-console
          console.error(t);
        });
    },
    loadDetails: i,
    showDetails: o,
    addListItem: function t(e) {
      let n = document.querySelector('ul'),
        i = document.querySelector('.pokemon-list'),
        a = document.createElement('li'),
        l = document.createElement('button');
      a.classList.add('list-group-item'),
        l.classList.add('btn'),
        l.classList.add('btn-primary'),
        (l.innerText = e.name),
        l.setAttribute('data-toggle', 'modal'),
        l.setAttribute('data-target', '#exampleModal'),
        l.addEventListener('click', function () {
          o(e);
        }),
        a.appendChild(l),
        n.appendChild(a),
        i.appendChild(a);
    },
    showModal: a,
    closeModal: l,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
