var svg = d3.select('svg');

var clicked = false;

svg.append('circle')
    .attr('cx', 400)
    .attr('cy', 200)
    .attr('r', 100)
    .attr('class', 'circle')
    .style('fill', 'lightsteelblue')
    .style('stroke', 'steelblue')
    .style('stroke-width', '3')
    .on('click', function(d){
        if (clicked == false){
            d3.select(this).style('fill','blue');
            clicked = true;
        }
        else{
            d3.select(this).style('fill','green');
            clicked = false;
        }

    });
