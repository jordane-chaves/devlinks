const links = [
  {
    url: "https://lp.rocketseat.com.br/nlw",
    title: "Inscreva-se no NLW",
  },
  {
    url: "https://github.com/jordane-chaves",
    title: "Veja meu portfólio",
  },
  {
    url: "https://rocketseat.com.br/explorer",
    title: "Conheça o Explorer",
  },
];

/**
 * Add all links in ul element
 */
export function addLinks() {
  const ul = document.getElementById("links");

  links.forEach((link) => {
    ul.appendChild(
      getLinkElement({
        url: link.url,
        title: link.title,
      })
    );
  });
}

/**
 * Get element li with child link
 * @param {Object} link
 * @param {string} link.url
 * @param {string} link.title
 * @returns
 */
function getLinkElement({ url, title }) {
  const li = document.createElement("li");

  li.innerHTML = `<a href="${url}">${title}</a>`;

  return li;
}
