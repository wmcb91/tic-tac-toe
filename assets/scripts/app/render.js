'use strict';


// Not ready



const renderPlayerTurn = (list) => {
  $('.content').html(`
    <h1>${list.title}</h1>
    <ul>
    </ul>
  `);
};

const renderBoard = (item, id) => {
  $('.content > ul').append(
    `<li data-id=${id}>${item.text}</li>`
  );
};

const render = (data) => {
  renderPlayerTurn(data.list);
  data.list.items.forEach((item, index) => {
    renderBoard(item, index);
  });
};

module.exports = render;
