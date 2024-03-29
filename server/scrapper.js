import puppeteer from "puppeteer";
import cron from "node-cron";
import PopularFoodItem from "./models/popularFoodItem.js";

let foodPictures = [];
let foodNames = [];
let foodDes = [];
// let foodItems = [];

let food_id = [];
let n = 50;

for (let i = 0; i < n + 1; i++) {
  food_id.push(i);
}

export async function scraping() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    ignoreDefaultArgs: ["--disable-extensions"],
  });
  let page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(
    "https://edition.cnn.com/travel/article/world-best-food-dishes/index.html"
  );

  foodPictures = await page.$$eval(".Image__image", (imgs) => {
    return imgs.map((img) => img.src);
  });

  foodNames = await page.$$eval(
    " #mount > div > div.Chrome__content > div > div > div.Zone__component.Article__zone > div> div.Article__primary > div > div > div.Article__pad > div > div > span > h3",
    (h3s) => {
      return h3s.map((h3) => h3.textContent);
    }
  );

  foodDes = await page.$$eval(
    " #mount > div > div.Chrome__content > div > div > div.Zone__component.Article__zone > div > div.Article__primary > div > div > div.Article__pad > div > div > span",
    (descriptions) => {
      return descriptions.map((des) => des.textContent);
    }
  );

  await browser.close();
}

getFoodItems();

export async function getFoodItems() {
  await scraping();
  await foodItemGenerator();
}

export async function foodItemGenerator() {
  let flag = false;
  if (flag === true) {
    let foodNamesReversed = foodNames.reverse();
    let sliced_food_pictures = foodPictures.slice(1, 42).reverse();
    let foodDescription = foodDes.reverse().slice(2);

    try {
      // let food_id_new = [];
      // while(foodName.length && foodImage.length && foodDescription.length){
      //   food_id_new.push(new PopularFoodItem({
      //     foodName: foodNamesReversed.pop(),
      //     foodImage: sliced_food_picture.pop(),
      //     foodDescription: foodDescription.pop()
      //   }))
      // }

      let index = 0;
      for (index of food_id) {
        const newPopularFoodItem = new PopularFoodItem({
          foodName: foodNamesReversed[index],
          foodImage: sliced_food_pictures[index],
          foodDescription: foodDescription[index],
        });

        await newPopularFoodItem.save();
      }
    } catch (error) {
      console.log(error);
    }
    flag = false;
  }
}
