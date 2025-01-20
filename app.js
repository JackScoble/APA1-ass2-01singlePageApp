const express = require('express');
const app = express();
const port = 3000;

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {  
  const recipe1 = {  
    name: 'Beef Wellington',  
    ingredients: [  
      '2 pounds beef tenderloin',  
      'Salt and freshly ground black pepper',  
      '2 tablespoons olive oil',  
      '1 pound mushrooms, finely chopped',  
      '2 tablespoons unsalted butter',  
      '2 cloves garlic, minced',  
      '2 tablespoons Dijon mustard',  
      '12 slices prosciutto',  
      '1 sheet puff pastry, thawed',  
      '1 egg yolk, beaten with 1 tablespoon water'  
    ],  
    instructions: [  
      'Season the beef with salt and pepper. In a large skillet, heat olive oil over high heat. Sear the beef on all sides until browned, about 2 minutes per side. Set aside to cool.',  
      'In the same skillet, add butter and sauté mushrooms and garlic until soft and all moisture has evaporated. Season with salt and pepper.',  
      'Spread Dijon mustard over the beef. Lay out the prosciutto on a sheet of plastic wrap, overlapping slightly. Spread the mushroom mixture over the prosciutto. Place the beef on top and roll tightly, using the plastic wrap to form a log. Chill for 30 minutes.',  
      'Preheat the oven to 400°F (200°C).',  
      'Roll out the puff pastry on a floured surface. Remove the plastic wrap from the beef and place it on the pastry. Wrap the pastry around the beef, sealing the edges. Brush with egg wash.',  
      'Place the wrapped beef seam-side down on a baking sheet. Bake for 25-30 minutes or until the pastry is golden brown. Rest for 10 minutes before slicing.'  
    ]  
  };  
  

  const recipe2 = {  
    name: 'Paella Valenciana',  
  ingredients: [  
    '1/4 cup olive oil',  
    '1 large onion, chopped',  
    '1 bell pepper, sliced',  
    '3 cloves garlic, minced',  
    '1 teaspoon paprika',  
    '2 cups short-grain rice (such as Bomba)',  
    '1/4 teaspoon saffron threads, soaked in 2 tablespoons warm water',  
    '4 cups chicken stock',  
    '1/2 cup dry white wine',  
    '1 pound chicken, cut into pieces',  
    '1/2 pound chorizo, sliced',  
    '1/2 pound shrimp, peeled and deveined',  
    '1/2 pound mussels, cleaned',  
    '1/2 cup peas',  
    'Salt and pepper to taste',  
    'Lemon wedges for serving'  
  ],  
  instructions: [  
    'Heat olive oil in a large paella pan or skillet over medium heat. Add onions and bell pepper, sauté until softened. Add garlic and paprika, cook for 1 minute.',  
    'Stir in rice, coating it well with oil. Add saffron with its soaking water, chicken stock, and wine. Bring to a simmer.',  
    'Nestle chicken and chorizo into the rice. Cook for 10 minutes.',  
    'Add shrimp, mussels, and peas. Cover and cook until the rice is tender and the seafood is cooked through, about 10-15 minutes.',  
    'Season with salt and pepper. Serve with lemon wedges.'  
  ] 
  };

  const recipe3 = {  
    name: 'Ratatouille',  
    ingredients: [  
      '1/4 cup olive oil',  
      '1 large eggplant, diced',  
      '2 zucchini, sliced',  
      '1 bell pepper, diced',  
      '1 onion, chopped',  
      '4 cloves garlic, minced',  
      '6 tomatoes, chopped',  
      '1 teaspoon dried thyme',  
      '1 teaspoon dried oregano',  
      'Salt and pepper to taste',  
      'Fresh basil leaves for garnish'  
    ],  
    instructions: [  
      'Heat olive oil in a large skillet over medium heat. Add eggplant and sauté until golden. Remove and set aside.',  
      'In the same skillet, add zucchini and cook until lightly browned. Remove and set aside.',  
      'Add bell pepper and onion to the skillet, sauté until soft. Add garlic and cook for another minute.',  
      'Return the eggplant and zucchini to the skillet. Add tomatoes, thyme, and oregano. Simmer for 15-20 minutes until all vegetables are tender.',  
      'Season with salt and pepper. Garnish with fresh basil before serving.'  
    ]  
  };  
  

  res.render('index', { recipe1: recipe1, recipe2: recipe2, recipe3: recipe3 });  
});  

// Start the server
app.listen(port, () => {
  console.log(`Recipe app listening at http://localhost:${port}`);
});

