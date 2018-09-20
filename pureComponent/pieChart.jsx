import React from 'react'
import d3 from 'd3'
/* 
@width : width,
@data : dataList ([[name,value],[]...])
@height : height
*/
class Piechartcomponent extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            width : 0,
            height : 0,
            dataList : []
        }
    }
    componentDidMount(){
        d3.select(".pie").append("svg");
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        d3.select(".pie").selectAll("g").remove();
        let svg = d3.select(".pie").select("svg")
        .attr("width",nextProps.width)
        .attr("height",nextProps.height)
        .append("g")
        .attr('transform',"translate("+nextProps.width/2+","+nextProps.height/2+")");
        let outerR = Math.min(nextProps.width,nextProps.height) / 2 * 0.7;
        //路径
        let arc = d3.svg.arc()
        .outerRadius(outerR);
        let arc2 = d3.svg.arc()
        .outerRadius(outerR)
        .innerRadius(outerR*0.6);
        let pie = d3.layout.pie().value((item)=>{
            return item[1];
        });
        const tweenPie = (item)=>{
            item.innerRadius = 0;
            let i = d3.interpolate({startAngle:0,endAngle:0},item);
            return function(t){return arc(i(t))};
        }
        const tweenDount = (item)=>{
            item.innerRadius = outerR * .6;
            let i = d3.interpolate({innerRadius:0},item);
            return function(t){return arc(i(t))};
        }

        let arcs = svg.selectAll("g")
        .data(pie(nextProps.dataList))
        .enter()
        .append("g")
        .attr("class","arc");

        arcs.append("path")
        .attr('fill',(item,idx)=>{
            return item.data[2];
        })
        .transition()
        .ease("bounce")
        .duration(1500)
        .attrTween('d',tweenPie)
        .transition()
        .ease('elastic')
        .delay((item,idx)=>{
            return 1500 + idx * 50
        })
        .duration(750)
        .attrTween('d',tweenDount);

        arcs.selectAll("path")
        .on('mouseover',function(d){
            d3.select(this).attr("stroke","#5b2929")
        })
        .on('mouseout',function(d){
            d3.select(this).attr("stroke","none")
        });

        arcs.append("text")
        .attr("transform",function(d){
            let x = arc2.centroid(d)[0];
            let y = arc2.centroid(d)[1];
            return "translate(" + x + "," + y + ")";
        })
        .attr("text-anchor","middle")
        .attr("font-size","13px")
        .text((d)=>{
            let precent = Number(d.value)/d3.sum(nextProps.dataList,(d)=>{
                return d[1];
            }) * 100;
            return precent.toFixed(1) + "%";
        })
        .attr("fill","#f5f5f5")
        .style({
            "opacity" : 0          
        })
        .transition()
        .delay(1500)
        .ease('linear')
        .duration(200)
        .style({
            "opacity" : 1
        });

        arcs.append("line")
        .attr('stroke',"black")
        .attr('x1',(d)=>{return arc2.centroid(d)[0] * 1.25})
        .attr('y1',(d)=>{return arc2.centroid(d)[1] * 1.25})
        .attr('x2',(d)=>{return arc2.centroid(d)[0] * 1.45})
        .attr('y2',(d)=>{return arc2.centroid(d)[1] * 1.45})
        .style({
            "opacity" : 0          
        })
        .transition()
        .delay(1500)
        .ease('linear')
        .duration(200)
        .style({
            "opacity" : 1
        });

        arcs.append("text")
        .attr("transform",function(d){
            let x = arc2.centroid(d)[0] * 1.55;
            let y = arc2.centroid(d)[1] * 1.55;
            return "translate(" + x + "," + y + ")";
        })
        .attr("text-anchor","middle")
        .attr("font-size","12px")
        .text((d)=>{
            return d.data[0];
        })
        .attr("fill",(d,i)=>{
            return d.data[2];
        })
        .style({
            "opacity" : 0          
        })
        .transition()
        .delay(1500)
        .ease('linear')
        .duration(200)
        .style({
            "opacity" : 1
        });
    }
    render(){
        return (
            <div className = "pie" style = {{width : this.props.width + "px", height : this.props.height + "px"}}></div>
        )
    }
}

module.exports = Piechartcomponent;