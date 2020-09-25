let goodFacts3 = [
  'This visualization is for those interested in foreign-born population in New England',
  'This visualization is trying to show the increase in Non-US residents throughout the decades and by different regions.',
  'The data being encoded in this visualization is the foreign-born population by region of birth and decade of immigration.',
  'The data is encoded as a bar chart with its x-axis representing years and y-axis representing population by thousands. Each population from different regions is classified with distinct colors.',
  'The reader is tasked to see the trends on the graph',
  'This visualization is truthful as it uses the uniform scales and labels. It is functional, beautiful and insightful as it helps the reader to interpret visualization correctly and recognize the flow throughout the years. The color coordinates also enable the reader to identify the trend, where the predominant foreign-born population in New England changed from Europe to Asia and Central America. It is enlightening as it is informative and shows the historical transitions',
  'Considering all aspects, this visualization is good because it is easy to understand and visually detect the changes. It has great quantitative measures and a clear comparison that the audience can see. The use of colors are very effective and practical as well',
];

let goodIndex3 = 0;

document.querySelector('#good-forward-3').onclick = function () {
  if (goodIndex3 >= goodFacts3.length - 1) return;
  console.log('forward-3');
  goodIndex3++;

  let pTag = document.querySelector('#good-3');
  pTag.innerHTML = goodFacts3[goodIndex3];
};

document.querySelector('#good-backward-3').onclick = function () {
  if (goodIndex3 <= 0) return;
  console.log('backward-3');
  goodIndex3--;

  let pTag = document.querySelector('#good-3');
  pTag.innerHTML = goodFacts3[goodIndex3];
};

let badFacts3 = [
  'This visualization is for the audience who is interested in comparing the perception of Baby Boomers',
  'This visualization is trying to convey the differences between how Baby Boomers describe themselves and how HR professionals perceive Baby Boomers',
  'The data being encoded in this visualization is two sets of five percentages indicating whether Boomers are perceived from two different groups',
  'The data is represented in two modified pie charts of stick-figures. Each color represents the percentages for five distinct traits',
  'The reader is tasked to compare values of two different views of Baby Boomers',
  'To a certain extent, this visualization is beautiful as it grasps the attention with its design and color coordinations. Also it can be enlightening as it can encourage Baby Boomers to overcome the stereotypes or acknowledge how HR professionals perceive them. However, the visualization fails in other categories. The visualization is misleading since the percentages of the left chart add up to 243% and the right 162%. The colored distributions are not in proportion as well; looking at the colored proportions on the right, it is hard to discern the size of people-savvy and creative, which have 23% differences. Also, the leadership trait on the left side covers the whole head at 40%, while the right side covers only 2/3 of the head at 55%',
  'Considering all aspects, this visualization is bad because it can be misleading to its audience as it misrepresents the data. Also the comparison of the two charts causes a confusion to the audience as it is not in uniform proportion',
];

let badIndex3 = 0;

document.querySelector('#bad-forward-3').onclick = function () {
  if (badIndex3 >= badFacts3.length - 1) return;
  console.log('forward-3');
  badIndex3++;

  let pTag = document.querySelector('#bad-3');
  pTag.innerHTML = badFacts3[badIndex3];
};

document.querySelector('#bad-backward-3').onclick = function () {
  if (badIndex3 <= 0) return;
  console.log('backward-3');
  badIndex3--;

  let pTag = document.querySelector('#bad-3');
  pTag.innerHTML = badFacts3[badIndex3];
};
