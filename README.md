# workshop-task-5
FA205_Workshop_5 Here is a URL to the webpage for this project: [link](https://jeffcai0502.github.io/workshop-task-5/ )

## Task
- Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
- Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Notes while following workshop
Importing CSV file

<img width="466" alt="截屏2025-01-30 上午12 24 38" src="https://github.com/user-attachments/assets/ef1bbb08-12ad-4951-b685-5549c66c9ce6" />
<img width="466" alt="截屏2025-01-30 上午12 25 08" src="https://github.com/user-attachments/assets/0fe5e38c-a69b-4cbb-bd75-1d5aeae8f5be" />

## Notes from p5.Table
https://p5js.org/reference/p5/p5.Table/

<img width="466" alt="截屏2025-01-30 上午12 29 39" src="https://github.com/user-attachments/assets/d2b20df4-1efc-4d0a-8de8-18d599c1525e" />

<img width="466" alt="截屏2025-01-30 上午12 29 56" src="https://github.com/user-attachments/assets/b5efa137-1cea-44a1-8cee-6c87245a7226" />
<img width="466" alt="截屏2025-01-30 上午12 30 14" src="https://github.com/user-attachments/assets/07f47929-3c49-4017-91dc-02b3681ba5be" />


- Load the data
- Include the file name, type, header

```ruby
let table;

function preload(){
  table = loadTable('fruits.csv', 'csv', 'header');
}

function setup(){
  createCanvas(400,400);
}

function draw () {
  backgrond(220);
  let rows = table.getRowCount();
  text("Total number of rows in the table = " + rows, 20,100);

```
<img width="1376" alt="截屏2025-01-30 上午12 38 08" src="https://github.com/user-attachments/assets/ef21d740-47fc-4d74-8ee0-4e21c3f2c1fa" />

### project
## Version one

- Features

-CSV Data Loading: The project loads data from a CSV file (food_intake.csv) containing daily food intake and calorie information.

-Bar Graph Visualization: The data is visualized using a bar graph, where each bar represents the total calories consumed each day.

  
<img width="797" alt="截屏2025-01-30 上午1 06 58" src="https://github.com/user-attachments/assets/8d4cd78f-c4de-4479-965b-d7ef821b463c" />

- I had issues with loading the csv file at first, i later found out that i have accidently added a space in the name. So it have failed to load the file.

## Version two

- New Features
  
- Color-Coded Segments: Each bar is divided into color-coded segments representing different food items.

- Food Names and Percentages: The name of each food item and its percentage of the total daily calories are displayed on the bars.
  
```ruby
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
```
Explanation:

-Calculate Total Calories: Calculate the total calories for each day and each food item.

-Define Colors: Define specific colors for different foods.

-Draw Bar Graph: Draw the bar graph with color-coded segments representing the percentage of each food item within the total calories for each day.

-Add Food Names: Add the name of each food item to the corresponding segment within the bar.

<img width="797" alt="截屏2025-01-30 上午1 05 33" src="https://github.com/user-attachments/assets/9b36090f-ed5e-4113-9a8b-08b715b9f42a" />


## Future Development
- Hover Effects: Add interactivity so that when you hover over a bar segment, it displays detailed information about the food item.
  
- Clickable Bars: Make the bars clickable to show more detailed breakdowns or charts for each day.

- Custom Fonts and Styles: Use custom fonts and styles to make the visualization more visually appealing.

- Animations: Add animations to the bars when they load or when data changes.
