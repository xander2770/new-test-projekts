const topics = [
  { name: 'Algebra', content: 'Algebra is the study of mathematical symbols and rules for manipulating these symbols.' },
  { name: 'Geometri', content: 'Geometri involves the properties and relations of points, lines, surfaces, and solids.' },
  { name: 'Kalkulus', content: 'Kalkulus is the mathematical study of continuous change, such as differentiation and integration.' },
  { name: 'Statistik', content: 'Statistik is the science of collecting, analyzing, and interpreting data.' },
  { name: 'asd', content: 'Example content for asd.' },
  { name: 'asd', content: 'Example content for asd.' },
  { name: 'asd', content: 'Example content for asd.' }
];

const container = document.getElementById('topics');
const detailPage = document.getElementById('topicDetail');
const detailContent = document.getElementById('topicDetailContent');
const backBtn = document.getElementById('backToTopics');
const inputField = document.getElementById('inputField');

function renderTopics(topicsList) {
  container.innerHTML = '';
  topicsList.forEach(topic => {
    const div = document.createElement('div');
    div.className = 'topic';
    div.textContent = topic.name;
    div.tabIndex = 0;
    div.addEventListener('click', function () {
      showDetail(topic);
    });
    container.appendChild(div);
  });
}

// Initial render
renderTopics(topics);

function showDetail(topic) {
  container.classList.add('swipe-left');
  detailPage.classList.add('active');
  backBtn.style.display = 'block';
  detailContent.innerHTML = `<h2>${topic.name}</h2><p>${topic.content}</p>`;
}

function hideDetail() {
  container.classList.remove('swipe-left');
  detailPage.classList.remove('active');
  backBtn.style.display = 'none';
  detailContent.innerHTML = '';
}

// Move the topic that matches the input to the front
inputField.addEventListener('input', function () {
  const value = inputField.value.trim().toLowerCase();
  if (!value) {
    renderTopics(topics);
    return;
  }
  // Find the best match (first topic whose name includes the input)
  const matchIndex = topics.findIndex(t => t.name.toLowerCase().includes(value));
  if (matchIndex > 0) {
    // Move the matched topic to the front
    const reordered = [topics[matchIndex], ...topics.slice(0, matchIndex), ...topics.slice(matchIndex + 1)];
    renderTopics(reordered);
  } else {
    renderTopics(topics);
  }
});

backBtn.addEventListener('click', hideDetail);