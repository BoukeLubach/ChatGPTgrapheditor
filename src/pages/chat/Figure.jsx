import React, { useState, useEffect, useMemo } from 'react'
import Plot from 'react-plotly.js';

// import Plotly from "plotly.js"
// const Plot = createPlotlyComponent(Plotly);

// random array of 10 numbers
const data = {
    b: [23, 43, 53, 54, 55, 56, 57, 58, 59, 60], 
    z: [12, 23, 3, 44, 53, 6, 74, 83, 9, 10], 
    y: [13, 33, 34, 44, 53, 62, 74, 83, 94, 120],
    x: [14, 34, 35, 45, 54, 63, 75, 84, 95, 130]
}

function Figure(props) {

    
    const [screenwidth, setScreenwidth] = useState(window.innerWidth);
    const [screenheight, setScreenheight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setScreenwidth(window.innerWidth);
        setScreenheight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    
    var figdata 
    if (props.plotdata){
        try {
            figdata = eval(`(${props.plotdata})`)
            
        }
        catch (e) {
            console.log(e)
        }
        
    } 
    return (

        <div className="" >
            <Plot
                data={figdata}
                layout={{
                    // autosize: true,
                    width: (screenwidth - 450) * 0.8,
                    height: screenheight * 0.6,
                    showlegend: false,
                    dragmode: "zoom",
                    xaxis: {
                        showgrid: false,
                        // range: xaxisrange,

                        linecolor: '#636363',
                        linewidth: 1,
                        title: '<b>Year</b>',
                        titlefont: {
                            family: "Helvetica",
                            size: 18,
                            color: '#016956',
                        },
                    },
                    yaxis: {

                        title: `<b>Title</b>`,
                        // range: yaxisrange,
                        titlefont: {
                            family: "Helvetica",
                            size: 18,
                            color: '#016956'
                        },
                        linecolor: '#636363',
                        linewidth: 1
                    },

                    hoverlabel: {
                        bgcolor: "#FFF",
                        font: {
                            size: 20,
                            color: "black",
                        },
                    },

                    margin: { r: 0, t: 20, b: 50, l: 70 },
                }}
                config={{
                    displaylogo: false,
                    modeBarButtonsToRemove: ["zoom", "zoom in", "toImage", "zoomIn2d", "zoomOut2d", "autoscale", "resetscale"],
                }}
            />
        </div>


    )
}

export default Figure