const mongoose = require('mongoose');
const Recipes = require('./model.js');

const recipes = [
  {
    title: 'Spring Minestrone',
    dishType: 'Soup',
    symptoms: 'N C SM',
    description: `In warmer months, a light vegetable soup highlighting fresh flavors from the garden is highly desirable. This soup doesn’t skimp on the veggies or legumes. Edamame (green soybeans often served at Japanese restaurants) provide added protein, fiber, and many other nutrients. A flurry of fresh herbs provides aromatic endnotes, and a splash of lemon juice adds a bright hint of spring.

    This is a “vegetable-centric” soup. If you want a thinner version, add one to two more cups of broth.`,
    servings: '4 Servings',
    ingredients: `¼ cup ditalini, pastina, or other tiny pasta

    2 tablespoons olive oil

    1 leek, white and light green parts only, quartered lengthwise and sliced

    1 small onion, finely chopped

    1 carrot, chopped

    1 celery stalk, chopped

    1 small zucchini, chopped

    ½ fennel bulb, cored and chopped

    1 garlic clove, minced

    4 cups homemade chicken or vegetable broth or store-bought reduced-sodium broth

    1 cup canned navy beans, rinsed and drained

    ½ cup frozen peas

    ½ cup frozen shelled edamame

    Salt and freshly ground black pepper

    ½ cup chopped fresh Italian parsley

    ¼ cup chopped fresh basil leaves

    1 tablespoon fresh lemon juice, optional`,
    directions: `Prepare the pasta according to the package directions for al dente (just firm). Drain and set aside.

    Meanwhile, in a large stockpot over medium heat, add the oil. Sauté the leek, onion, carrot, celery, zucchini, and fennel for 8 to 10 minutes, or until softened. Add the garlic and sauté for 1 minute. Add the broth and bring to a boil, stirring to combine. Reduce the heat, cover, and simmer for 10 to 15 minutes, or until the vegetables are tender. Add the navy beans, peas, edamame, and reserved pasta, and stir to combine. Season with salt and pepper. Add the parsley, basil, and lemon juice, if desired.`,
    nutrition: [{
      calories: 260,
      fat: '9 g',
      saturatedFat: '1.5 g',
      cholesterol: '5 mg',
      sodium: '650 mg',
      carbohydrate: '35 g',
      dietaryFiber: '10 g',
      sugars: '6 g',
      protein: '12 g',
      calcium: '120 mg',
      potassium: '710 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/spring+minestrone.jpg',
    tip: `For the family (or when the side effect has resolved), swirl a dab of prepared pesto into the soup or top with freshly grated Parmesan cheese for more assertive flavor.`,
    notes: ''
  },
  {
    title: 'Baked Rice Balls',
    dishType: 'Rice',
    symptoms: 'N D',
    description: `These mild baked nuggets of rice are simple enough to appeal even when you’re feeling fragile. Adding Italian seasoning and using a stronger-flavored cheese, such as Parmesan, perks them up a little. For added flavor, family members can dip them in pasta sauce.

    Make extra rice the night before to use for these balls.`,
    servings: '15 Balls',
    ingredients: `1 egg

    1 ½ cups cooked white rice

    ½ cup grated or shredded mozzarella, Parmesan, or other cheese

    2 tablespoons all-purpose flour

    Salt and freshly ground black pepper

    Pinch dried Italian seasoning, optional

    1 cup pasta sauce, heated, optional`,
    directions: `Preheat the oven to 350 degrees. Line a rimmed baking sheet with foil and lightly coat with nonstick cooking spray.

    In a bowl, beat the egg. Add the rice, cheese, and flour and stir to combine. Sprinkle with salt, pepper, and Italian seasoning, if desired.

    With wet hands, form the mixture into 1 ½-inch balls and place on the baking sheet. You may need to rewet your hands after every two to three balls.

    Bake for 20 to 25 minutes, or until lightly golden. Serve with pasta sauce, if desired.`,
    nutrition: [{
      calories: 120,
      fat: '3 g',
      saturatedFat: '1.5 g',
      cholesterol: '50 mg',
      sodium: '85 mg',
      carbohydrate: '16 g',
      dietaryFiber: '0 g',
      sugars: '0 g',
      protein: '6 g',
      calcium: '100 mg',
      potassium: '40 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/baked+rice+balls.jpg',
    tip: ``,
    notes: ''
  },
  {
    title: 'Tuna Salad',
    dishType: 'Salad',
    symptoms: 'C TC',
    description: `This colorful mayonnaise-based salad, served on a bed of greens, is full of healthful vegetables. Add whichever embellishments you enjoy: olives, artichoke hearts, hard-boiled eggs, and cucumber are good options.`,
    servings: '3 Servings',
    ingredients: `1 (5-ounce) can white tuna packed in water, drained

    2 teaspoons regular or reduced-fat mayonnaise

    ½ teaspoon Dijon mustard

    1 tablespoon red onion, finely chopped

    ½ red, green, or yellow bell pepper, seeded and finely chopped

    ½ celery stalk, finely chopped

    ¼ cup matchstick carrots, finely chopped

    Salt and freshly ground black pepper

    6 cups mixed salad greens

    2 tomatoes, cut into quarters (or eighths if large)`,
    directions: `In a bowl, flake the tuna. Add the mayonnaise and mustard and stir to combine. Add the onion, bell pepper, celery, and carrots and stir gently to incorporate. Season with salt and pepper.

    Divide the greens and tomatoes on three plates and top with a scoop of the tuna mixture.`,
    nutrition: [{
      calories: 120,
      fat: '4 g',
      saturatedFat: '1 g',
      cholesterol: '20 mg',
      sodium: '220 mg',
      carbohydrate: '9 g',
      dietaryFiber: '3 g',
      sugars: '6 g',
      protein: '12 g',
      calcium: '60 mg',
      potassium: '650 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/tuna+salad.jpg',
    tip: ``,
    notes: ''
  },
  {
    title: 'Roasted Cauliflower Soup',
    dishType: 'Soup',
    symptoms: 'TS SM',
    description: `This creamy, mild soup requires almost no labor. The main ﬂavoring comes simply from the caramelization of the roasted cauliﬂower. A hint of cream adds lushness.

    For stronger ﬂavor, add two to three minced garlic cloves to the cauliﬂower before roasting. Another option is to sprinkle cauliﬂower with one teaspoon fresh thyme leaves and/or two tablespoons freshly grated Parmesan cheese during the last five to ten minutes of roasting.

    To increase calories, use up to one cup heavy cream. If watching calories, omit cream altogether or substitute one-half cup low-fat milk.

    Be very careful when blending soup in a blender or food processor. Let the soup cool slightly, don’t fill the container more than two-thirds full, and secure the lid well before blending.`,
    servings: '5 Servings',
    ingredients: `1 large (about 2 pounds) head cauliflower, cut into large florets

    1 to 2 tablespoons olive oil

    Salt and freshly ground black pepper

    3½ to 4 cups homemade chicken or vegetable broth or store-bought reduced-sodium broth

    ½ to 1 cup heavy cream`,
    directions: `Preheat the oven to 425 degrees.

    On a foil-lined, rimmed baking sheet, drizzle cauliflower with 1 tablespoon of the oil and toss to coat. Add the remaining 1 tablespoon of oil, if necessary. Sprinkle with salt and pepper. Roast for 25 to 35 minutes, or until very tender and slightly charred, tossing every 10 minutes.

    Bring the broth to a boil and reduce the heat to a simmer. Transfer the cauliflower to a blender and add 3 ½ cups of the warmed broth and ½ cup of the cream. Blend until smooth, adding more broth or cream to achieve the desired consistency. (You may need to do this step in batches or transfer some of the mixture to a large bowl before adding all the liquid.)`,
    nutrition: [{
      calories: 140,
      fat: '12 g',
      saturatedFat: '6 g',
      cholesterol: '30 mg',
      sodium: '370 mg',
      carbohydrate: '4 g',
      dietaryFiber: '1 g',
      sugars: '2 g',
      protein: '4 g',
      calcium: '40 mg',
      potassium: '250 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/roasted+cauliflower+soup.jpg',
    tip: `This recipe may not be suitable if you are experiencing gas or bloating.`,
    notes: ''
  },
  {
    title: 'Scrambled Eggs with Cream Cheese and Chives',
    dishType: 'Eggs',
    symptoms: 'TS SM WL',
    description: `Eggs are so versatile and can be eaten virtually any time of day. When you are looking to add calories and feel indulged, this pairing of eggs and cream cheese satisfies hunger with a lush mouth-feel. A sprinkle of chives makes it sing.

    If your mouth is very tender, omit the chives. If you are having trouble swallowing, make sure the eggs are softly scrambled.`,
    servings: '2 Servings',
    ingredients: `1 teaspoon butter or olive oil

    4 eggs, beaten

    2 tablespoons cream cheese, cut into ½-inch pieces

    1 tablespoon thinly sliced chives`,
    directions: `In an 8- or 10-inch, preferably nonstick, skillet, over medium heat, melt the butter, swirling it to coat the bottom of the pan. Add the eggs and cook without stirring for 10 seconds. Top with cream cheese, distributing it evenly over the eggs, and sprinkle with chives. Using a spatula, gently stir to combine the eggs and cream cheese, until the eggs are cooked through.`,
    nutrition: [{
      calories: 210,
      fat: '16 g',
      saturatedFat: '7 g',
      cholesterol: '395 mg',
      sodium: '200 mg',
      carbohydrate: '1 g',
      dietaryFiber: '0 g',
      sugars: '1 g',
      protein: '14 g',
      calcium: '70 mg',
      potassium: '160 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/scrambled+eggs+with+cream+cheese+and+chives.jpg',
    tip: ``,
    notes: ''
  },
  {
    title: 'Beef and Spinach Lasagna with Parmesan Sauce',
    dishType: 'Pasta',
    symptoms: 'WL TC',
    description: `This creamy pasta casserole uses a béchamel sauce instead of mozzarella for a rich, comforting, and satisfying meal that’s lighter than a typical lasagna.`,
    servings: '8 Servings',
    ingredients: `1 tablespoon olive oil

    1 onion, finely chopped

    2 garlic cloves, minced

    1 pound lean ground beef

    1 (5- to 6-ounce) package fresh baby spinach

    1 (28-ounce) can crushed tomatoes

    Salt and freshly ground black pepper

    4 tablespoons butter

    ¼ cup all-purpose flour

    3 cups milk

    1 ½ cups freshly grated Parmesan cheese, divided use

    12 no-boil lasagna noodles`,
    directions: `Place one oven rack in the top setting and the other in the middle slot. Preheat the oven to 350 degrees. Lightly coat a 9-by-13-inch (or other 2-quart) baking pan with nonstick cooking spray.

    In a large skillet over medium-high heat, add the oil. Sauté the onion for 3 to 5 minutes, or until softened. Add the garlic and sauté for 1 minute. Add the ground beef and sauté for 5 to 8 minutes, or until cooked through, using a spatula to break it up into small pieces. Add the spinach, a bit at a time, and sauté for 1 to 2 minutes, or until wilted. Add the tomatoes and bring to a boil, stirring to combine. Reduce the heat and simmer for 10 minutes, or until thickened, stirring occasionally. Season with salt and pepper.

    Meanwhile, in a saucepan over medium-low heat, melt the butter. Add the flour and whisk constantly for 1 minute to incorporate. When the mixture turns golden, gradually add the milk and bring to a boil, whisking constantly. Reduce the heat and simmer for 2 to 3 minutes, or until thickened and smooth, whisking frequently. Add 1 cup of the Parmesan and whisk to combine. Season with salt and pepper.

    Arrange one layer of lasagna noodles in the baking pan. Top with half of the tomato mixture and one-third of the white sauce. Repeat. Top with a layer of noodles and the remaining white sauce. Sprinkle with the remaining ½ cup of Parmesan. Cover with foil and bake for 30 minutes, or until heated through. Remove the foil and change to the broil setting. Transfer the baking pan to the top shelf and broil for 30 to 60 seconds, rotating once, until bubbly and golden brown in spots, watching to prevent burning`,
    nutrition: [{
      calories: 420,
      fat: '20 g',
      saturatedFat: '10 g',
      cholesterol: '90 mg',
      sodium: '460 mg',
      carbohydrate: '36 g',
      dietaryFiber: '3 g',
      sugars: '11 g',
      protein: '25 g',
      calcium: '340 mg',
      potassium: '790 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/beef+and+spinach+lasagna+with+parm.jpg',
    tip: ``,
    notes: ''
  },
  {
    title: 'Shrimp Puttanesca',
    dishType: 'Seafood',
    symptoms: 'C TC',
    description: `When your taste buds need a little resuscitation, try this salty, spicy shrimp dish. Olives, capers, and anchovies add brininess, and garlic and red pepper ﬂakes provide intensity. Start with these amounts and adjust ingredients to taste if you are craving salt or want more heat. Enjoy on its own or serve with a grain or pasta of your choice.`,
    servings: '4 Servings',
    ingredients: `2 tablespoons olive oil

    3 garlic cloves, thinly sliced

    ¼ teaspoon red pepper flakes

    1 pound shrimp, shelled and deveined and patted dry

    1 (14.5-ounce) can diced tomatoes

    1 teaspoon anchovy paste or 1 anchovy fillet, drained and chopped

    ½ teaspoon dried oregano

    ½ teaspoon dried basil

    2 tablespoons capers

    ¼ cup chopped Kalamata olives

    Salt and freshly ground black pepper`,
    directions: `In a large skillet over medium-high heat, add the oil. Sauté the garlic and red pepper ﬂakes for 1 minute. Add the shrimp and cook for 1 minute per side without stirring. Remove the shrimp and set aside.

    In the same skillet, add the tomatoes and their juice, anchovy paste, oregano, and basil and bring to a boil. Reduce the heat and simmer for 10 minutes, or until thickened, stirring occasionally. Add the capers and olives and simmer for 1 minute. Return the shrimp to the skillet and sauté for 1 minute, or until the shrimp is heated through. Season with salt and pepper.`,
    nutrition: [{
      calories: 170,
      fat: '10 g',
      saturatedFat: '1 g',
      cholesterol: '120 mg',
      sodium: '580 mg',
      carbohydrate: '6 g',
      dietaryFiber: '1 g',
      sugars: '3 g',
      protein: '17 g',
      calcium: '100 mg',
      potassium: '380 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/shrimp+puttanesca.jpg',
    tip: ``,
    notes: ''
  },
  {
    title: 'Curried Chicken and Rice',
    dishType: 'Indian',
    symptoms: 'C WL TC',
    description: `This fragrant curry dish provides a lot of flavor without being overpowering. If you’re new to curry, use two tablespoons curry powder as indicated; if you want more intense flavor, three tablespoons will do it.

    Because the rice and chicken cook together, simply add a green salad to round out the meal.

    For easy cleanup, cook in a baking dish that can go from stovetop to oven to table.`,
    servings: '8 Servings',
    ingredients: `1 whole (3 ½- to 4-pound) chicken, cut into 10 pieces (breasts double cut)

    Salt and freshly ground black pepper

    3 tablespoons canola oil

    1 onion, chopped

    2 garlic cloves, finely chopped

    1 ½ cups basmati rice

    2 tablespoons curry powder

    1 teaspoon ground cumin

    ½ teaspoon ground ginger or 1 teaspoon finely chopped fresh ginger

    ½ teaspoon red pepper flakes, optional

    3 cups homemade chicken broth or store-bought reduced-sodium broth

    ½ cup golden raisins or brown raisins

    ½ cup slivered almonds, toasted`,
    directions: `Preheat the oven to 350 degrees.

    Sprinkle the chicken with salt and pepper.

    In a large ovenproof skillet over medium-high heat, add the oil. Brown the chicken for 3 to 5 minutes per side. Remove the chicken and set aside. (You may need to brown the chicken in two or more batches, depending on the size of your skillet.)

    Reduce the heat to medium and add the onion to the skillet. Sauté for 3 to 5 minutes, or until softened. Add the garlic and sauté for 1 minute. Add the rice, curry powder, cumin, ginger, and red pepper flakes, if desired, and stir to combine. Add the broth and bring to a boil, scraping up any browned bits clinging to the pan. Return the chicken to the skillet and cover.

    Bake for 30 to 40 minutes, or until the rice is tender, the broth has been absorbed, and the chicken is cooked through. Just before serving, add the raisins and almonds.`,
    nutrition: [{
      calories: 450,
      fat: '21 g',
      saturatedFat: '4 g',
      cholesterol: '71 mg',
      sodium: '250 mg',
      carbohydrate: '37 g',
      dietaryFiber: '2 g',
      sugars: '7 g',
      protein: '27 g',
      calcium: '60 mg',
      potassium: '360 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/curried+chicken+and+rice.jpg',
    tip: `Most supermarkets sell chicken cut into eight pieces. Cut the breasts in half for ten total pieces.`,
    notes: ''
  },
  {
    title: 'Spinach-Artichoke Dip Quesadillas',
    dishType: 'Mexican',
    symptoms: 'C WL TC',
    description: `Here’s a twist on everyone’s favorite party dip. While it’s delicious on its own or eaten with crudité or crackers, sandwiching it between two tortillas and heating it makes it an easy-to-eat snack or small meal.

    Dry the artichokes and spinach well to keep the mixture from getting too waterlogged.`,
    servings: '6 Servings',
    ingredients: `1 cup canned artichoke hearts in water, drained, quartered, and patted dry

    4 ounces cream cheese, room temperature

    ¼ cup freshly grated Parmesan cheese

    1 tablespoon fresh lemon juice

    Pinch ground nutmeg

    8 ounces frozen chopped spinach, defrosted and squeezed dry

    2 cups shredded mozzarella cheese

    Salt and freshly ground black pepper

    12 (5- to 6-inch) whole wheat or corn tortillas`,
    directions: `Preheat the oven to 300 degrees.

    In a food processor, pulse the artichoke hearts until coarsely chopped. Add the cream cheese, Parmesan, lemon juice, and nutmeg and pulse until combined. Add the spinach and mozzarella cheese and pulse until incorporated, scraping down the blade and sides to blend. Season with salt and pepper.

    Divide the mixture onto six tortillas. Top with the remaining tortillas.

    Lightly coat a nonstick skillet with nonstick cooking spray and place over medium heat. Add the quesadillas one at a time and cook for 3 to 5 minutes per side, or until crisp on the outside and warm throughout. Transfer to a baking sheet to keep warm in the oven while cooking the remaining quesadillas.`,
    nutrition: [{
      calories: 370,
      fat: '19 g',
      saturatedFat: '11 g',
      cholesterol: '45 mg',
      sodium: '730 mg',
      carbohydrate: '32 g',
      dietaryFiber: '8 g',
      sugars: '3 g',
      protein: '19 g',
      calcium: '530 mg',
      potassium: '370 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/spinach+artichoke+dip+quesadillas.jpg',
    tip: ``,
    notes: ''
  },
  {
    title: 'Miso-Glazed Salmon',
    dishType: 'Seafood',
    symptoms: 'D TC',
    description: `A simple glaze made with soy sauce and miso (a Japanese paste made of fermented soybeans) is the perfect complement to baked salmon. Miso is found in the refrigerated section of most supermarkets.

    When the salmon is almost done cooking, switch the oven setting from bake to broil to caramelize the sugar in the sauce. Keeping the baking pan in the middle position of the oven, away from the heating unit, prevents the topping from browning too quickly.

    Apply the glaze before cooking and let it sit briefly to allow it to permeate the fish for greater flavor. Lining the pan with foil or parchment prevents sticking and speeds cleanup.`,
    servings: '4 Servings',
    ingredients: `2 tablespoons white miso paste

    1 tablespoon mirin (Japanese rice wine)

    1 tablespoon reduced-sodium soy sauce or tamari

    1 tablespoon light brown sugar

    1 tablespoon finely chopped fresh ginger

    4 (4- to 6-ounce) salmon fillets`,
    directions: `In a bowl, combine the miso, mirin, soy sauce, brown sugar, and ginger. Place the salmon skin side down in a baking pan and spread the miso mixture over it. Refrigerate for 30 to 60 minutes.

    When ready to cook, place an oven rack in a middle setting. Preheat the oven to 400 degrees.

    Bake for 10 to 14 minutes, or until cooked through. Change to the broil setting (keeping the baking pan in the middle setting) and broil for 1 to 3 minutes, or until the topping darkens and bubbles.`,
    nutrition: [{
      calories: 190,
      fat: '9 g',
      saturatedFat: '2 g',
      cholesterol: '60 mg',
      sodium: '300 mg',
      carbohydrate: '5 g',
      dietaryFiber: '0 g',
      sugars: '3.5 g',
      protein: '23 g',
      calcium: '30 mg',
      potassium: '420 mg',
    }],
    image: 'https://cancer-cookbook-images.s3.us-east-2.amazonaws.com/miso+glazed+salmon.jpg',
    tip: `If you are experiencing neutropenia, uncooked miso paste should be avoided.`,
    notes: ''
  }
]

var seeds = recipes.map((recipe) => {
  return new Recipes(recipe).save();
})
Promise.all(seeds)
  .then(() => {
    mongoose.disconnect(() => {
      console.log('Database Seeded');
    });
  })