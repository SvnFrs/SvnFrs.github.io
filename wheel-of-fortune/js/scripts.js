// function spinWheel() {
//     // Define the items and their respective percentages
//     const items = [
//         { name: 'Banh Trang', percent: 2.5 },
//         { name: 'Nuoc Sam', percent: 2.5 },
//         { name: 'Trung Ga Luoc', percent: 5 },
//         { name: 'Trung Cut Luoc', percent: 5 },
//         { name: 'Sticker', percent: 15 },
//         { name: 'Chuc Ban May Man Lan Sau', percent: 70 }
//     ];

//     // Calculate total percentage
//     const totalPercent = items.reduce((sum, item) => sum + item.percent, 0);

//     // Generate a random number within the total range
//     const randomNumber = Math.random() * totalPercent;

//     // Determine the winning item based on the random number
//     let currentPercent = 0;
//     for (const item of items) {
//         currentPercent += item.percent;
//         if (randomNumber <= currentPercent) {
//             // Check if the item is 'Banh Trang' and switch it to 'Trung Ga Luoc'
//             const winningItem = item.name === 'Banh Trang' ? 'Trung Ga Luoc' : item.name;
            
//             // Display or use the winning item as needed
//             console.log('Congratulations! You won:', winningItem);
//             break;
//         }
//     }
// }

// // Example usage:
// // Call this function when the spin button is clicked
// document.getElementById('spin').addEventListener('click', spinWheel);


var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 500 - padding.left - padding.right,
  h = 500 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
  var color = d3.scale.ordinal()
  .range(['#FFBD59', '#FFF']);

//randomNumbers = getRandomNumbers();

var data = [
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Banh Trang",
    value: 1,
    probability: 0.0125,
    question:
      "You won a bịch bánh tráng. You can pick it up at the front desk.",
  },
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Trung Ga Luoc",
    value: 1,
    probability: 0.025,
    question: "You won a trứng gà luộc. You can pick it up at the front desk.",
  },
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Trung Cut Luoc",
    value: 1,
    probability: 0.0125,
    question: "You won a trứng cút luộc. You can pick it up at the front desk.",
  },
  {
    label: "Sticker",
    value: 1,
    probability: 0.05,
    question: "You won a sticker. You can pick it up at the front desk.",
  },
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Nuoc Sam",
    value: 1,
    probability: 0.0125,
    question: "You won a chai nước sâm. You can pick it up at the front desk.",
  },
  {
    label: "Trung Cut Luoc",
    value: 1,
    probability: 0.0125,
    question: "You won a trứng cút luộc. You can pick it up at the front desk.",
  },
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Trung Cut Luoc",
    value: 1,
    probability: 0.0125,
    question: "You won a trứng cút luộc. You can pick it up at the front desk.",
  },
  {
    label: "Banh Trang",
    value: 1,
    probability: 0.0125,
    question:
      "You won a bịch bánh tráng. You can pick it up at the front desk.",
  },
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Nuoc Sam",
    value: 1,
    probability: 0.0125,
    question: "You won a chai nước sâm. You can pick it up at the front desk.",
  },
  {
    label: "Sticker",
    value: 1,
    probability: 0.05,
    question: "You won a sticker. You can pick it up at the front desk.",
  },
  {
    label: "Trung Ga Luoc",
    value: 1,
    probability: 0.025,
    question: "You won a trứng gà luộc. You can pick it up at the front desk.",
  },
  {
    label: "Chuc ban may man lan sau",
    value: 1,
    probability: 0.1,
    question: "Chuc ban may man lan sau",
  },
  {
    label: "Trung Cut Luoc",
    value: 1,
    probability: 0.0125,
    question: "You won a trứng cút luộc. You can pick it up at the front desk.",
  },

  {
    label: "Sticker",
    value: 1,
    probability: 0.05,
    question: "You won a sticker. You can pick it up at the front desk.",
  },
];

var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);

var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 1.4 + padding.left) + "," + (h / 2 + padding.top) + ")"
  );

var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", function (d) {
    return arc(d);
  });

// add the text
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });

container.on("click", spin)

function spin(d) {
  container.on("click", null);

  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }

  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  // Use the randomChooser function to get the picked slice
  picked = randomChooser();

  // Log the chosen slice and its question
  console.log("Chosen slice: ", data[picked].label);
  console.log("Question: ", data[picked].question);


  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }

  // rotation = picked * ps + 90 - Math.round(ps / 2);
  // rotation = 360 - (picked * ps + Math.round(ps / 2));
  rotation = 360 - (picked * 360 / data.length) + 80;
  rotation += 360 * 5;

  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      //mark question as seen
      d3.select(".slice:nth-child(" + (picked + 1) + ") path")
        .attr
        // "fill",
        // "#111"
        ();

      //populate question
      d3.select("#question h1").text(data[picked].question);

      oldrotation = rotation;

      container.on("click", spin);
    });
}

function randomChooser() {
  // Calculate the total of the squared probabilities
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += Math.pow(data[i].probability, 2);
  }

  // Pick a random number between 0 and the total
  var random = Math.random() * total;

  // Find the first item for which the cumulative squared probability is greater than the random number
  var cumulative = 0;
  for (var i = 0; i < data.length; i++) {
    cumulative += Math.pow(data[i].probability, 2);
    if (random < cumulative) {
      return i;
    }
  }
}


//make arrow
svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (w + 90 + padding.left + padding.right) +
      "," +
      (h / 2 + padding.top) +
      ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "#9A4696" });

//draw spin circle
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", r + 10) // Increase the radius to create a border
  .style("fill", "none")
  .style("stroke", "#523D91")
  .style("stroke-width", "20px");

container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 20)
  .style({ fill: "#9A4696", cursor: "pointer" });

// //spin text
// container
//   .append("text")
//   .attr("x", 0)
//   .attr("y", 15)
//   .attr("text-anchor", "middle")
//   .text("SPIN")
//   .style({ "font-weight": "bold", "font-size": "30px" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

  if (
    window.hasOwnProperty("crypto") &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }

  return array;
}

