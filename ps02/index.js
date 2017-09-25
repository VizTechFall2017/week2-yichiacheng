var svg = d3.select('svg');


svg.append('circle')
    .attr('cx', 120)
    .attr('cy', 100)
    .attr('r', 80)
    .attr('class', 'circle')
    .style('fill', 'grey')
    .style('stroke', 'darkgrey')
    .style('stroke-width', '5');

svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 110)
    .attr('r', 40)
    .attr('class', 'circle')
    .attr('fill', 'white');

svg.append('circle')
    .attr('cx', 460)
    .attr('cy', 100)
    .attr('r', 80)
    .attr('class', 'circle')
    .style('fill', 'grey')
    .style('stroke', 'darkgrey')
    .style('stroke-width', '5');

svg.append('circle')
    .attr('cx', 450)
    .attr('cy', 100)
    .attr('r', 40)
    .attr('class', 'circle')
    .style('fill', 'white')

svg.append('circle')
    .attr('cx', 300)
    .attr('cy', 230)
    .attr('r', 200)
    .attr('class', 'circle')
    .style('fill', 'grey')
    .style('stroke', 'darkgrey')
    .style('stroke-width', '5');

svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 150)
    .attr('r', 50)
    .attr('class', 'circle')
    .style('fill', 'orange')

svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 150)
    .attr('r', 50)
    .attr('class', 'circle')
    .style('fill', 'orange')

svg.append('circle')
    .attr('cx', 300)
    .attr('cy', 300)
    .attr('r', 50)
    .attr('class', 'circle')
    .style('fill', 'pink')


var svg = d3.select('svg');

var clicked = false;

svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 150)
    .attr('r', 35)
    .attr('class', 'circle')
    .style('fill', 'brown')

    .on('click', function(d){
        if (clicked == false){
            d3.select(this).style('fill','brown');
            clicked = true;
        }
        else{
            d3.select(this).style('fill','black');
            clicked = false;
        }

    });

var svg = d3.select('svg');

var clicked = false;

svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 150)
    .attr('r', 35)
    .attr('class', 'circle')
    .style('fill', 'brown')

    .on('click', function(d){
        if (clicked == false){
            d3.select(this).style('fill','brown');
            clicked = true;
        }
        else{
            d3.select(this).style('fill','black');
            clicked = false;
        }

    });


svg.append('circle')
    .attr('cx', 185)
    .attr('cy', 135)
    .attr('r', 15)
    .attr('class', 'circle')
    .style('fill', 'white')

svg.append('circle')
    .attr('cx', 385)
    .attr('cy', 135)
    .attr('r', 15)
    .attr('class', 'circle')
    .style('fill', 'white')

svg.append('circle')
    .attr('cx', 255)
    .attr('cy', 280)
    .attr('r', 40)
    .attr('class', 'circle')
    .style('fill', 'grey')
    .style('stroke', 'darkgrey')
    .style('stroke-width', '5');

svg.append('circle')
    .attr('cx', 335)
    .attr('cy', 280)
    .attr('r', 40)
    .attr('class', 'circle')
    .style('fill', 'grey')
    .style('stroke', 'darkgrey')
    .style('stroke-width', '5');

svg.append('rect')
    .attr('x', 200)
    .attr('y', 200)
    .attr('height', 90)
    .attr('width', 200)
    .attr('class', 'rect')
    .style('fill', 'grey')

svg.append('ellipse')
    .attr('cx', 300)
    .attr('cy', 210)
    .attr('rx', 40)
    .attr('ry', 15)
    .attr('class', 'ellipse')
    .style('fill', 'black')


/* Your code goes here */