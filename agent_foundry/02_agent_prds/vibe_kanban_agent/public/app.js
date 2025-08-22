async function fetchKanbanData() {
  const response = await fetch('/api/kanban');
  const data = await response.json();
  return data;
}

function renderKanbanBoard(data) {
  const kanbanBoard = document.getElementById('kanban-board');
  kanbanBoard.innerHTML = '';

  for (const column in data) {
    const columnEl = document.createElement('div');
    columnEl.classList.add('column');
    columnEl.innerHTML = `<h2>${column}</h2>`;

    for (const card of data[column]) {
      const cardEl = document.createElement('div');
      cardEl.classList.add('card');
      cardEl.innerHTML = card.content;
      columnEl.appendChild(cardEl);
    }

    kanbanBoard.appendChild(columnEl);
  }
}

async function main() {
  const kanbanData = await fetchKanbanData();
  renderKanbanBoard(kanbanData);
}

main();
