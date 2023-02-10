
export default async function handler(request, res) {
 
	const currentData = [
    {
          "side-one": "This is card one",
          "side-two": "And this is the text",
          "height": 200,
          "width": 200,
          "color-1": "black",
          "color-2": "grey"
      },
      {
          "side-one": "This is card two",
          "side-two": "And this is cool",
          "height": 400,
          "width": 200,
          "color-1": "orange-7",
          "color-2": "blue"
      },
      {
        "side-one": "One Fish",
        "side-two": "Two Fish",
        "height": 400,
        "width": 300,
        "color-1": "deep-purple-7",
        "color-2": "green"
      },
      {
        "side-one": "Red Fish",
        "side-two": "Blue Fish",
        "height": 400,
        "width": 300,
        "color-1": "green-9",
        "color-2": "red"
        },
        
        {
            "side-one": "Mr Will",
            "side-two": "The Coolest guy around",
            "height": 400,
            "width": 200,
            "color-1": "cyan-7",
            "color-2": "orange"
        }


  ]

  res.json(currentData);
}

