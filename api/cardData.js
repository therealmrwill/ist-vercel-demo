
export default async function handler(request, res) {
 
	const currentData = [
    {
          "side-one": "This is card one",
          "side-two": "And this is the back side",
          "height": 200,
          "width": 200,
          "color-1": "black",
          "color-2": "darkBlue"
      },
      {
          "side-one": "This is card two",
          "side-two": "And this is cool",
          "height": 400,
          "width": 200,
          "color-1": "#AAAE7F",
          "color-2": "#143109"
      },
      {
        "side-one": "Red Fish",
        "side-two": "Blue Fish",
        "height": 200,
        "width": 100,
        "color-1": "#DB4437",
        "color-2": "#4285F4"
        },
        {
            "side-one": "Red Fish",
            "side-two": "Blue Fish",
            "height": 200,
            "width": 100,
            "color-1": "#DB4437",
            "color-2": "#4285F4"
        },
        {
            "side-one": "Red Fish",
            "side-two": "Blue Fish",
            "height": 200,
            "width": 100,
            "color-1": "#DB4437",
            "color-2": "#4285F4"
        }
  ]

  res.json(currentData);
}

