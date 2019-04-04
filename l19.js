var datawhatever = d3.json("classData.json");

datawhatever.then(function(data,day)
{
    calculategrade(data[19],900,600,"svg");
  // calculategrade(data[day],900,125,"svg");

},
function(err)
{
  console.log(err)
})
// d3.select("#b23")
//   .on("click",calculategrade(data[22],800,600,"svg"))
var calculategrade = function(data,w,h,c)
{
  var finalhwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade + data.homework[5].grade + data.homework[6].grade + data.homework[7].grade + data.homework[8].grade + data.homework[9].grade + data.homework[10].grade + data.homework[11].grade+ data.homework[12].grade+ data.homework[13].grade+ data.homework[14].grade+ data.homework[15].grade+ data.homework[16].grade+ data.homework[17].grade+ data.homework[18].grade
  var finalhwpercentage = (finalhwsum/(50*19))*100
  console.log(finalhwpercentage)
  var finalqzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade+data.quizes[10].grade+data.quizes[11].grade+data.quizes[12].grade+data.quizes[13].grade+data.quizes[14].grade+data.quizes[15].grade+data.quizes[16].grade+data.quizes[17].grade+data.quizes[18].grade+data.quizes[19].grade+data.quizes[20].grade+data.quizes[21].grade+data.quizes[22].grade+data.quizes[23].grade+data.quizes[24].grade+data.quizes[25].grade+data.quizes[26].grade+data.quizes[27].grade+data.quizes[28].grade+data.quizes[29].grade+data.quizes[30].grade+data.quizes[31].grade+data.quizes[32].grade+data.quizes[33].grade+data.quizes[34].grade+data.quizes[35].grade+data.quizes[36].grade+data.quizes[37].grade
  var finalqzpercentage = (finalqzsum/(10*38)*100)
  console.log(finalqzpercentage)
  var finaltestsum = data.test[0].grade + data.test[1].grade
  var finaltestpercentage = (finaltestsum/(100*2)*100)
  console.log(finaltestpercentage)
  var final = data.final[0].grade
  console.log(final)
  var finalgrade = (finalqzpercentage*.15)+(finalhwpercentage*.15)+(finaltestpercentage*.4)+(final*.3)
  console.log(finalgrade)

  var day35hwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade + data.homework[5].grade + data.homework[6].grade + data.homework[7].grade + data.homework[8].grade + data.homework[9].grade + data.homework[10].grade + data.homework[11].grade+ data.homework[12].grade+ data.homework[13].grade+ data.homework[14].grade+ data.homework[15].grade
  var day35hwpercentage= ((day35hwsum/(50*16))*100)
  var day35qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade+data.quizes[10].grade+data.quizes[11].grade+data.quizes[12].grade+data.quizes[13].grade+data.quizes[14].grade+data.quizes[15].grade+data.quizes[16].grade+data.quizes[17].grade+data.quizes[18].grade+data.quizes[19].grade+data.quizes[20].grade+data.quizes[21].grade+data.quizes[22].grade+data.quizes[23].grade+data.quizes[24].grade+data.quizes[25].grade+data.quizes[26].grade+data.quizes[27].grade+data.quizes[28].grade+data.quizes[29].grade+data.quizes[30].grade+data.quizes[31].grade+data.quizes[32].grade
  var day35qzpercentage = (day35qzsum/(10*33)*100)
  var day35testsum = data.test[0].grade + data.test[1].grade
  var day35testpercentage = (day35testsum/(100*2)*100)
  var day35grade = ((day35qzpercentage*.15)+(day35hwpercentage*.15)+(day35testpercentage*.4))/.7
  console.log(day35grade)

  var day30hwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade + data.homework[5].grade + data.homework[6].grade + data.homework[7].grade + data.homework[8].grade + data.homework[9].grade + data.homework[10].grade + data.homework[11].grade+ data.homework[12].grade+ data.homework[13].grade
  var day30hwpercentage= ((day30hwsum/(50*14))*100)
  var day30qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade+data.quizes[10].grade+data.quizes[11].grade+data.quizes[12].grade+data.quizes[13].grade+data.quizes[14].grade+data.quizes[15].grade+data.quizes[16].grade+data.quizes[17].grade+data.quizes[18].grade+data.quizes[19].grade+data.quizes[20].grade+data.quizes[21].grade+data.quizes[22].grade+data.quizes[23].grade+data.quizes[24].grade+data.quizes[25].grade+data.quizes[26].grade+data.quizes[27].grade
  var day30qzpercentage = (day30qzsum/(10*28)*100)
  var day30testsum = data.test[0].grade + data.test[1].grade
  var day30testpercentage = (day30testsum/(100*2)*100)
  var day30grade = ((day30qzpercentage*.15)+(day30hwpercentage*.15)+(day30testpercentage*.4))/.7
  console.log(day30grade)

  var day25hwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade + data.homework[5].grade + data.homework[6].grade + data.homework[7].grade + data.homework[8].grade + data.homework[9].grade + data.homework[10].grade + data.homework[11].grade
  var day25hwpercentage= ((day25hwsum/(50*12))*100)
  var day25qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade+data.quizes[10].grade+data.quizes[11].grade+data.quizes[12].grade+data.quizes[13].grade+data.quizes[14].grade+data.quizes[15].grade+data.quizes[16].grade+data.quizes[17].grade+data.quizes[18].grade+data.quizes[19].grade+data.quizes[20].grade+data.quizes[21].grade+data.quizes[22].grade+data.quizes[23].grade
  var day25qzpercentage = (day25qzsum/(10*24)*100)
  var day25testsum = data.test[0].grade
  var day25testpercentage = (day25testsum/(100)*100)
  var day25grade = ((day25qzpercentage*.15)+(day25hwpercentage*.15)+(day25testpercentage*.2))/.5
  console.log(day25grade)

  var day20hwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade + data.homework[5].grade + data.homework[6].grade + data.homework[7].grade + data.homework[8].grade + data.homework[9].grade
  var day20hwpercentage= ((day20hwsum/(50*10))*100)
  var day20qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade+data.quizes[10].grade+data.quizes[11].grade+data.quizes[12].grade+data.quizes[13].grade+data.quizes[14].grade+data.quizes[15].grade+data.quizes[16].grade
  var day20qzpercentage = (day20qzsum/(10*17)*100)
  var day20testsum = data.test[0].grade
  var day20testpercentage = (day20testsum/(100)*100)
  var day20grade = ((day20qzpercentage*.15)+(day20hwpercentage*.15)+(day20testpercentage*.2))/.5
  console.log(day20grade)

  var day15hwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade + data.homework[5].grade + data.homework[6].grade
  var day15hwpercentage= ((day15hwsum/(50*7))*100)
  var day15qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade+data.quizes[10].grade+data.quizes[11].grade+data.quizes[12].grade+data.quizes[13].grade
  var day15qzpercentage = (day15qzsum/(10*14)*100)
  var day15testsum = data.test[0].grade
  var day15testpercentage = (day15testsum/(100)*100)
  var day15grade = ((day15qzpercentage*.15)+(day15hwpercentage*.15)+(day15testpercentage*.2))/.5
  console.log(day15grade)

  var day10hwsum = data.homework[0].grade + data.homework[1].grade + data.homework[2].grade + data.homework[3].grade + data.homework[4].grade
  var day10hwpercentage= ((day10hwsum/(50*5))*100)
  var day10qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade+data.quizes[5].grade+data.quizes[6].grade+data.quizes[7].grade+data.quizes[8].grade+data.quizes[9].grade
  var day10qzpercentage = (day10qzsum/(10*10)*100)
  var day10grade = ((day10qzpercentage*.15)+(day10hwpercentage*.15))/.3
  console.log(day10grade)

  var day5hwsum = data.homework[0].grade + data.homework[1].grade
  var day5hwpercentage= ((day5hwsum/(50*2))*100)
  var day5qzsum = data.quizes[0].grade + data.quizes[1].grade + data.quizes[2].grade + data.quizes[3].grade+data.quizes[4].grade
  var day5qzpercentage = (day5qzsum/(10*5)*100)
  var day5grade = ((day5qzpercentage*.15)+(day5hwpercentage*.15))/.3
  console.log(day5grade)

  var lineArray = [{day:5, pc:day5grade},{day:10, pc:day10grade},{day:15, pc:day15grade},{day:20, pc:day20grade},{day:25, pc:day25grade},{day:30, pc:day30grade},{day:35, pc:day35grade},{day:40, pc:finalgrade}]
  console.log(lineArray)

  line(lineArray,800,600,c)
}
var line = function(data,w,h,c)
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
                .domain([5,40])
                .range([0,width]);
var yScale = d3.scaleLinear()
                .domain([0,100])
                .range([height,0]);

var colors = d3.scaleOrdinal(d3.schemeSet3);

var drawLine = d3.line()
                  .x(function(d,i){return xScale(d.day)})
                  .y(function(d,){return yScale(d.pc)})
                  .curve(d3.curveMonotoneX)
d3.select("svg").append("g").attr("class","line")
                   .append("path")
                   .datum(data)
                   .attr("d",drawLine)
                   .attr("stroke", "red")
                   .attr("transform", "translate(" +margins.left+"," + (margins.top+10)+")")
                   .attr("fill","none");


 var xAxis = d3.axisBottom(xScale);

   svg.append("g").classed("xAxis",true)
      .call(xAxis)
      .attr("transform", "translate(" +margins.left+"," + (margins.top+height)+")")

  var yAxis = d3.axisLeft(yScale);

   svg.append("g").classed("yAxis",true)
      .call(yAxis)
      .attr("transform", "translate("+margins.left + "," + margins.top+")")


 }
