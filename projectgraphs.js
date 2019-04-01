var datawhatever = d3.json("classData.json");

datawhatever.then(function(data)
{
  drawGraph(data,800,600,".one");

},
function(err)
{
  console.log(err)
})

var drawGraph = function(data,w,h,c)
{
  var screen =
  {
    width:w,
    height:h
  };

var svg = d3.select(c)
             .attr("width",screen.width)
             .attr("height",screen.height)
             .attr("fill","#AACOAA");

var margins =
{
  top:50,
  bottom:50,
  left:100,
  right:100
}

var width = screen.width -margins.left -margins.right;
var height = screen.height- margins.top -margins.bottom;

//scales usually go here
var xScale = d3.scaleLinear()
                .domain([0,40])
                .range([0,width]);
var yScale = d3.scaleLinear()
                .domain([0,10])
                .range([height,0]);

var colors = d3.scaleOrdinal(d3.schemeSet3);


//plot land
var plotLand = svg.append("g")
                  .classed("plot",true)
                  .attr("transform","translate("+margins.left+","+margins.top+ ")");


var circles = plotLand.selectAll("circle")
        .data(data[0].quizes) //function(d) {return d.quizes.grade})
        .enter()
        .append("circle")
        .attr("cx",function(d,i) {return xScale(i)+10})
        .attr("cy",function(d) {return yScale(d.grade)})
        .attr("r",5)
        .style("fill","black");

circles.on("mouseover", function(d) {
  d3.select("svg").selectAll("text")
  .classed("t",true)
  .text(d.grade)
  .attr("x",function(d,i) {return xScale(i)+10})
  .attr("y",yScale(d.grade))
  // var tex = svg.append("text");
  //     tex.text(d.grade)
  //     tex.attr("x",function(d,i) {return xScale(i)+10})
  //     tex.attr("y",yScale(d.grade))
})
circles.on("mouseout", function(d) {
  d3.select("tex").remove()
})



//the legend
// var legend = svg.append("g")
//                 .classed("legend",true)
//                 .attr("transform","translate(" + (width+margins.left+20)+"," + margins.top+")" );
//
// var legendLines = legend.selectAll("g")
//                         .data(data)
//                         .enter()
//                         .append("g")
//                         .classed("legendLine",true)
//                         .attr("transform",function(d,i) {return "translate(0," +(i*20)+")"; })
//
// legendLines.append("rect")
//            .attr("x",0)
//            .attr("y",0)
//            .attr("width",10)
//            .attr("height",10)
//            .attr("fill",function(d) {return colors(d.name);})
//
// legendLines.append("text")
//            .attr("x",20)
//            .attr("y",10)
//            .text(function(d) {return d.name})

var xAxis = d3.axisBottom(xScale);

  svg.append("g").classed("xAxis",true)
     .call(xAxis)
     .attr("transform", "translate(" +margins.left+"," + (margins.top+height+10)+")")

 var yAxis = d3.axisLeft(yScale);

  svg.append("g").classed("yAxis",true)
     .call(yAxis)
     .attr("transform", "translate("+margins.left + "," + margins.top+")")

}
