import * as d3 from "d3";

async function drarwLineChart() {
  const data = await d3.json("./data/my_weather_data.json");
  let dimensions = {
    width: window.innerWidth * 0.9,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60,
    },
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.left - dimensions.margin.right;

  const wrapper = d3.select("#wrapper");
  console.log(wrapper);
}

drarwLineChart();
