var data = d3.json("classData.json");
data.then(function(data)
{
  drawGraph(data,800,600,".three");

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
var newData = data[0].homework.map(function(d,i){
  return {
  day:d.day,
  grade:d.grade,
  max:d.max }
})
var xScale = d3.scaleLinear()
                .domain([0,40])
                .range([0,width]);
var yScale = d3.scaleLinear()
                .domain([0,50])
                .range([height,0]);

var colors = d3.scaleOrdinal(d3.schemeSet3);

var drawLine = d3.line()
                  .x(function(d,i){return xScale(d.day)})
                  .y(function(d,){return yScale(d.grade)});
var drawArea = d3.area()
                  .x(function(d,i){return xScale(d.day)})
                  .y0(function(d){return yScale(0)})
                  .y1(function(d) {return yScale(d.grade)});
d3.select(".three").append("g").attr("class","line")
                   .append("path")
                   .datum(newData)
                   .attr("d",drawLine)
                   .attr("stroke", colors("grade"))
                   .attr("transform", "translate(" +margins.left+"," + (margins.top+10)+")")
                   .attr("fill","none");

d3.select(".three").append("g").attr("class","area").classed("hidden",true)
                  .append("path")
                  .datum(newData)
                  .attr("d",drawArea)
                  .attr("transform", "translate(" +margins.left+"," + (margins.top+10)+")")
                  .attr("fill",colors("grade"));
 var xAxis = d3.axisBottom(xScale);

   svg.append("g").classed("xAxis",true)
      .call(xAxis)
      .attr("transform", "translate(" +margins.left+"," + (margins.top+height+10)+")")

  var yAxis = d3.axisLeft(yScale);

   svg.append("g").classed("yAxis",true)
      .call(yAxis)
      .attr("transform", "translate("+margins.left + "," + margins.top+")")
d3.select("#hide")
  .on("click",function(d)
{
  var g = d3.select(".line")
  var toggled = ! g.classed("hidden")
  g.classed("hidden",toggled)

  var me = d3.select(".area")
  var toggled2 = ! g.classed("hidden")
  me.classed("hidden",toggled2)

})

 }
