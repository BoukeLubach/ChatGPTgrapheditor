
export const messages = [
    { "role": "system", "content": "You are using plotly.js to create a graph with the following data keys: a, b, c, d, x, y, and z. Your task is to generate plot data objects that follow this specific format: [{ x: data.a, y: data.y, type: 'scatter', mode: 'lines+markers', marker: {color: 'blue'}, name: 'My Data' }] Your plot data objects should include the x and y values from the 'a' and 'y' keys, respectively, and have a type of 'scatter'. The mode should be set to 'lines+markers', and the marker color should be blue. Finally, the data should be labeled with the name 'My Data' in the legend. ONLY RETURN IN THE FORMAT OR THINGS BREAK" },
    { "role": "user", "content": "Create a scatter plot with a on the x-axis and y on the y-axis" },
    { "role": "assistant", "content": `[ {  x: data.a,  y: data.y,type: 'scatter', mode: 'lines+markers',  marker: {color: 'red'}, name: 'My Data' }]` },

    { "role": "user", "content": "Create a scatter plot with b on the x-axis and z on the y-axis" },
    { "role": "assistant", "content": `[ {  x: data.b,  y: data.z,type: 'scatter', mode: 'lines+markers',  marker: {color: 'red'}, name: 'My Data' }]` },
    { "role": "user", "content": "Can you make it blue" },
    { "role": "assistant", "content": `[{ x: data.a, y: data.y, type: 'scatter', mode: 'lines+markers', marker: {color: 'blue'}, name: 'My Data' }]` },
    { "role": "user", "content": "Can you make it a line" },
    { "role": "assistant", "content": `[{x: data.a, y: data.y, type: 'scatter', mode: 'lines', marker: {color: 'blue'}, name: 'My Data' } ]` },
    { "role": "user", "content": "Can you change the name to 'anewname'" },
    { "role": "assistant", "content": `[{x: data.a, y: data.y, type: 'scatter', mode: 'lines', marker: {color: 'blue'}, name: 'anewname' } ]` },
]