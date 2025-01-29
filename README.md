# workshop-task-5
FA205_Workshop_5 Here is a URL to the webpage for this project: [link]( )

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
