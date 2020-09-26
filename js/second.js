let goodFacts2 = [
  'This visualization is for those interested in comparing the different disease deaths This visualization is for those interested in comparing stock performance between growth index and value index for the last 20 years',
  'This visualization demonstrates strong outperformance of growth index over value index for the last 10 years.',
  'The data being encoded in this visualization is the stock index for each sector at given time of the year',
  'The visualization encodes the data as a graph with its x-axis representing the time (year) and y-axis representing the stock index. There is also a horizontal heatmap below the graph demonstrating the dominant index of that time by color',
  'Here, the reader compares values and see the trends on the graph',
  'This visualization is truthful as it shows the correct stock data and the graph is scaled equally. It is functional as the readers can easily identify the changes in time through both the graph and heatmap. It is beautiful as its scale is near to 45%. It is insightful and enlightening as it shows historical evidence to support the author',
  'Considering all aspects, this visualization is good because it is easy to understand with minimal data encoding. Both x-axis and y-axis are uniformly scaled to prevent misleading perception. It has great quantitative measures and a clear comparison that the audience can see',
];

let goodIndex2 = 0;

document.querySelector('#good-forward-2').onclick = function () {
  if (goodIndex2 >= goodFacts2.length - 1) return;
  goodIndex2++;
  let pTag = document.querySelector('#good-2-question');
  pTag.innerHTML = questions[goodIndex2];

  let liTag = document.querySelector('#good-2');
  liTag.innerHTML = goodFacts2[goodIndex2];
};

document.querySelector('#good-backward-2').onclick = function () {
  if (goodIndex2 <= 0) return;
  goodIndex2--;
  let pTag = document.querySelector('#good-2-question');
  pTag.innerHTML = questions[goodIndex2];

  let liTag = document.querySelector('#good-2');
  liTag.innerHTML = goodFacts2[goodIndex2];
};

let badFacts2 = [
  'This visualization is for those interested in COVID-19 spreads in seattle',
  'This visualization attempts to convey that the COVID-19 spreads in seattle is flattening',
  'The data being encoded in this visualization is the number of positive COVID-19 cases in Seattle',
  'The data is represented through a graph. The x-axis represents the date and the y-axis represents the number of cases.',
  'The reader is tasked with seeing COVID 19 cases trend in Seattle from February to April',
  'To a certain extent, this visualization is beautiful as the graph can easily gain attention. However, the visualization fails in other categories. The y axis of the graph is scaled unevenly, creating misperception over COVID-19 cases. Uneven marks in the x axis also makes the viewer hard to grasp the average change over time. Lastly, the data is ambiguous as it could be either cumulative or discrete.',
  'Considering all aspects, this visualization is bad because it fails to deliver a clear message to its viewers. The explanation over data is unclear, and multiple design issues can delude confusion to its viewers.',
];

let badIndex2 = 0;

document.querySelector('#bad-forward-2').onclick = function () {
  if (badIndex2 >= badFacts2.length - 1) return;
  badIndex2++;

  let pTag = document.querySelector('#bad-2-question');
  pTag.innerHTML = questions[badIndex2];

  let liTag = document.querySelector('#bad-2');
  liTag.innerHTML = badFacts2[badIndex2];
};

document.querySelector('#bad-backward-2').onclick = function () {
  if (badIndex2 <= 0) return;
  badIndex2--;

  let pTag = document.querySelector('#bad-2-question');
  pTag.innerHTML = questions[badIndex2];

  let liTag = document.querySelector('#bad-2');
  liTag.innerHTML = badFacts2[badIndex2];
};
