// U09226075
// Set up function.
function main() {
    //Set SVG container.
    var data = [100, 420, 230, 850, 560, 925]
    const margin = 1
    const barHeight = 20
    var width = 500
    var height = data.length * barHeight + data.length * margin

    // Create SVG element.
    var svg = d3.select('body').append('svg')
        .attr("width", width)
        .attr("height", height)
}