let table;

function preload() {
  table = loadTable('food_intake.csv', 'csv', 'header');
  console.log('CSV file loaded');
}

function setup() {
  createCanvas(800, 600);
  background(220);
  console.log('Canvas created');

  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let dayCalories = {};
  let foodCalories = {};

  // Initialize dayCalories and foodCalories objects
  days.forEach(day => {
    dayCalories[day] = 0;
    foodCalories[day] = {};
  });

  // Calculate total calories for each day and each food item
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let day = row.get('Day');
    let food = row.get('Food');
    let calories = row.getNum('Calories');
    dayCalories[day] += calories;

    if (!foodCalories[day][food]) {
      foodCalories[day][food] = 0;
    }
    foodCalories[day][food] += calories;
  }

  console.log('Day Calories:', dayCalories);
  console.log('Food Calories:', foodCalories);

  // Define colors for different foods
  let foodColors = {
    'Apple': color(255, 0, 0),
    'Banana': color(255, 255, 0),
    'Chicken': color(255, 165, 0),
    'Salad': color(0, 255, 0),
    'Steak': color(139, 69, 19)
  };

  // Draw bar graph
  let barWidth = 50;
  let maxCalories = max(Object.values(dayCalories));
  let x = 100;

  for (let day of days) {
    let barHeight = map(dayCalories[day], 0, maxCalories, 0, height - 200);
    let y = height - barHeight - 100;

    for (let food in foodCalories[day]) {
      let foodHeight = map(foodCalories[day][food], 0, dayCalories[day], 0, barHeight);
      fill(foodColors[food]);
      rect(x, y, barWidth, foodHeight);

      fill(0);
      textSize(10);
      textAlign(CENTER, CENTER);
      text(food, x + barWidth / 2, y + foodHeight / 2);

      y += foodHeight;
    }

    fill(0);
    textSize(12);
    textAlign(CENTER);
    text(day, x + barWidth / 2, height - 80);
    text(dayCalories[day] + ' cal', x + barWidth / 2, height - barHeight - 110);

    x += barWidth + 20;
  }
}

function draw() {
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text('Daily Food Intake Visualization', width / 2, 50);
}