import React,{Component} from 'react'
import ResponsiveWrapper from '../ResponsiveWrapper'
import {scaleLinear,scaleBand} from 'd3-scale'
import Axes from '../Axes'

class LineChart extends Component{
    constructor(){
        super()
        this.scaleX = scaleBand()
        this.scaleY = scaleLinear()
    }

    state={
        data:{},
        maxValue:0,
      }
      componentDidMount(){
        const url = `https://data.cdc.gov/resource/a3uk-kgrx.json?state=VA&&indicator=Number of Deaths`
        fetch(url)
        .then(res=> res.json())
        .then(json=>{
            let months = ["January", "February", "March", "April", "May", "June",
           "July", "August", "September", "October", "November", "December"];
        
           let d={};

            let max = 0;
           for(let x of json){
               if(d[x.year]){
                   d[x.year].push({title:x.month,value:x.data_value})
               }else{
                   d[x.year] = [{title:x.month, value:x.data_value}]
               }
           }
           for(let x in d){
            d[x].sort((a,b)=>months.indexOf(a.title) - months.indexOf(b.title))
            let m = Math.max(...d[x].map((x)=>x.value))
            if(m > max){
                max = m;
            }
           }
           this.setState({data:d,maxValue:max})
        })
      }
    
    render(){
        const margins = { top: 50, right: 20, bottom: 100, left: 60 }
        const svgDimensions = {
         width: Math.max(this.props.parentWidth, 300),
         height: 500
         }
         const months = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"];

         const xScale = this.scaleX
            .padding(.8)
            .domain(months)
            .range([margins.left, svgDimensions.width - margins.right])
        
        const yScale = this.scaleY
            .domain([0, this.state.maxValue])
            .range([svgDimensions.height - margins.bottom, margins.top])

         
        return(
            <svg width={svgDimensions.width} height={svgDimensions.height} >
                 <Axes
                     scales={{ xScale, yScale }}
                     margins={margins}
                    svgDimensions={svgDimensions}
                />
                
            </svg>
        )
    }
}
export default ResponsiveWrapper(LineChart)