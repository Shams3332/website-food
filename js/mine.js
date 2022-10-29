
// jQuery


// $("string") to write jQuery


// to chage hight and wieght

// .hide(write time)
// .show()
// .toggle()

// to chage hight only

// slideUP()
// slideDown()
// slideToggle()

// to hide or show using opacity

// fadeOut()
// fadeIn()
// fideToggle()
// fideTO(time , rgba) make opacity chage to rgba


// animate your own effect *numric props only*
// .animate({css proprty} , duration )

// $('h1').html(); to bring the content from html
//  $('h1').html("klam"); بتشيل المحتوي اللي ف h1 وتحط مكانه الكلام الجديد


// $('input).val(); عشان اجيب المحتوي اللي بيتكتب ف  input

// ---------------------------------------------------class attribute
// $('a').attr("get") >> getbattribute
// $('a').attr("attribute" , 'value') >> override (setter)
// $().css('property' , ''style);   to add style   *(لو عايزين نحط كذا استايل بنعمل اوبجيكت)
// $(),addClass(اسم الكلاس);  one paramter  *(لو عايزين نضيف اكتر من كلاس بنعمل array)  + // $().removeClass()  
// +// $().toggleClass

// ############################################ start exam ######################################################

let userName,
    userEmail,
    userPhone,
    userAge,
    userPassword,
    userRePassword,
    userNameAlert,
    userEmailAlert,
    userPhoneAlert,
    userAgeAlert,
    userpasswordAlert,
    userRepasswordAlert;


$('#close').click(function(){


  $('.nav-menu').toggle(2000);

  // let boxWidth = $('.nav-menu').outerWidth();
  
  // if($(".nav").css('left') == '0px')
  // {
  //   $('.nav').animate({left:`-${outerWidth}`} , 2000)
  // }
  // else
  // {
  //   $4(".nav").animate({left:'0px'}, 2000)
  // }
  
});



var meal_data = [];

let row = document.getElementById("rowData");

// **********************start search**********************


// search by name
async function search(s){

  let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`)
  meal = await meal.json()
  
  console.log(meal)
  displayMeals(meal.meals)
  
  return meal;

}

search("");

// search by letter

async function getByLetter(letter) {
      let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      meals = await meals.json()
    
          displayMeals(meals.meals)
  }


function displayMeals(meal_data) {

  let meals = "";
  for (let i = 0; i < meal_data.length; i++) {
      meals += `
      <div class=" col-md-3 col-sm-6 col-lg-3 mb-3">
      <div class="content position-relative rounded-1" onclick="getMeal('${meal_data[i].idMeal}')" >
              <img src=${meal_data[i].strMealThumb} class="w-100" alt="">
              <div class=" position-absolute d-flex align-items-center layer-div">                            
                      <h4 class=" ps-0 fw-light ps-3">${meal_data[i].strMeal}</h4>                         
              </div>                
      </div>
    
  </div>
      `
  }
  row.innerHTML = meals;
}


// ******************* Categories**********************
// get Categories

async function getCategories() {
  x = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  x = await x.json()

  console.log(x);

  return x;
  
}

// display catogries



function displayCategories() {
  let e = "";
  for (var i = 0; i < meal_data.length; i++) e += `
        <div class="col-md-4 col-sm-6 col-lg-3 shadow">
    <div class="content position-relative rounded-1" onclick="detailsCategory('${meal_data[i].strCategory}')">
            <img src=${meal_data[i].strCategoryThumb} class="w-100" alt="">
            <div class=" position-absolute d-flex align-items-center layer-div flex-column justify-content-center">                            
                    <h4 class=" ps-0 fw-light ps-3">${meal_data[i].strCategory}</h4>   
                    <p class="px-2">${meal_data[i].strCategoryDescription.split(" ").slice(0,15).join(" ")}</p>                      
            </div>                
    </div>
    </div>
  </div>
    `
  detailsCategory();
  row.innerHTML = e;

}

// details of Category
async function detailsCategory(category) {
  let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  meals = await meals.json()
  displayMeals(meals.meals)
}
// *************************end categories**********************


//*******************Area**************************************

// geat area

async function getArea() {
  a = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  a = await a.json()

  console.log(a);

  return a;
  
}

// displayArea

function displayArea() {
  let e = "";
  for (var i = 0; i < meal_data.length; i++) 
  e += `
        <div class="col-md-4 col-sm-6 col-lg-3 shadow">
    <div class="content  rounded-1 area text-center" onclick=(detailsArea('${ meal_data[i].strArea}'))>
    <i class="fa-solid fa-city fa-3x"></i>
    <h2 class="text-white">${meal_data[i].strArea}</h2>
    </div>
    </div>
  </div>
    `
    detailsArea();
  row.innerHTML = e;

}

/// details of area
async function detailsArea(area) {
  let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  meals = await meals.json()
  displayMeals(meals.meals)
}
// *************************end area***************************



// ********************Ingredients*****************************

// get Ingredients

async function getIngredient() {
  i = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  i = await i.json()

  console.log(i);

  return i;
  
}

// get display Ingredients
function displayIngredient() {
  let e = "";
  for (var i = 0; i < meal_data.length; i++) 
  e += `
        <div class="col-md-4 col-sm-6 col-lg-3 shadow">
    <div class="content  rounded-1 text-center text-success" onclick=(detailsIngredient('${ meal_data[i].strIngredient}'))>
    <i class="fa-solid fa-bowl-food fa-3x"></i>
      <h2 class="text-white">${ meal_data[i].strIngredient}</h2>
      <p class="text-white">${ meal_data[i].strDescription.split(" ").splice(0,15).join(" ")}</p>
    </div>
    </div>
  </div>
    `
    detailsIngredient();
  row.innerHTML = e;

}

// detailsArea
async function detailsIngredient(Ingredient) {
  let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}`)
  meals = await meals.json()
  displayMeals(meals.meals)
}

// *****************end Ingredients *********************************

// ID Meal

async function getMeal(mealID) {
  let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
  meal = await meal.json()
  // displayMeals(meal.meals[0])
  console.log(meal);
  displayMeal(meal.meals[0])
}

// get details of each meal

async function displayMeal(meal){

  let recipes = ""
  for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
          recipes +=
              `<li class="my-3 mx-1 p-1  rounded recipes">
          ${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}
          </li>`
      }
  }

  let tags = meal.strTags?.split(",") 
  let tagsStr = "" 
  for (let i = 0; i < tags?.length; i++) { 
      tagsStr += `<li class="my-3 mx-1 p-1 alert-danger rounded" >
      ${tags[i]}</li>`
  } 


  let str = `
    <div class="col-md-4 myM text-white">
					<img class="w-100" src="${meal.strMealThumb}" alt=""
						srcset=""><br>
					<h1>${meal.strMeal}</h1>
				</div>
				<div class="col-md-8 myM text-white text-left">
					<h2>Instructions</h2>
					<p>${meal.strInstructions}</p>
					<p><b class="fw-bolder">Area :</b> ${meal.strArea}</p>
					<p><b class="fw-bolder">Category :</b> ${meal.strCategory}</p>
					<h3>Recipes :</h3>
					<ul class="d-flex  flex-wrap" id="recipes">
					</ul>

					<h3 class="my-2 mx-1 p-1">Tags :</h3>
					<ul class="d-flex " id="tags">
					</ul>

					
					<a class="btn btn-success text-white" target="_blank" href="${meal.strSource}">Source</a>
					<a class="btn youtube text-white bg-danger" target="_blank" href="${meal.strYoutube}">Youtub</a>
				</div>`

    row.innerHTML = str
    document.getElementById("recipes").innerHTML = recipes
    document.getElementById("tags").innerHTML = tagsStr
}








// ************click item in nav-bar*****************

$(".nav-item a").click(async (e) => {
  let listdata = e.target.getAttribute("data-list")

  document.getElementById("contect$search").innerHTML = "";
  row.innerHTML = "";
  $("html, body").animate({
      scrollTop: 0
  }, 200)

  if (listdata == "search") {
    row.innerHTML = ""
    document.getElementById("contect$search").innerHTML = `
    <div class="row">
    <div class="col-md-6 ">
        <input id="searchName" class="form-control mb-2 " placeholder="Search By Name">
    </div>
    <div class="col-md-6">
        <input class="form-control" type="text" maxlength="1" id="searchletter" placeholder="search By First Letter...">
    </div>

    </div>
  `

    $("#searchName").keyup((e) => {
        search(e.target.value)
    })
    $("#searchletter").keyup((e) => {
        getByLetter(e.target.value)
    })

    $('#letter').on("input", function () {
        if (this.value.length > 1)
            this.value = this.value.slice(0, 1);
    });
}

// to show categories
if (listdata == "categories"){
  let x = await getCategories()
  
  meal_data = x.categories.slice(0,15);
  displayCategories();
}

// to show area
if (listdata == "area"){
  let a = await getArea()
  meal_data = a.meals;
  displayArea();

}

// to show Ingredient
if (listdata == "ingredients"){
  let i = await getIngredient()
  
  meal_data = i.meals.slice(0,15);
  displayIngredient();
}


// contact us

if (listdata == "contact") {

  row.innerHTML = `
        
    <section id="contact" class="container w-75 mx-auto mb-5 ">
    <div class="p-2 mt-5 d-flex justify-content-center flex-column align-items-center">
        <h2 class="text-light mb-5">ContacUs...</h2>
        <div class="row g-4">

            <div class="col-md-6">
                <div class="form-group">
                    <input class="form-control shadow " onkeyup="validation()" id="name"
                        placeholder="Enter Your Name">
                    <div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
                        Special Characters and Numbers not allowed
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input onkeyup="validation()" class="form-control" id="email" placeholder="Enter Email">
                    <div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
                        Enter valid email. *Ex: xxx@yyy.zzz
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input onkeyup="validation()" class="form-control" id="phone" placeholder="Enter phone">
                    <div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
                        Enter valid Phone Number
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input onkeyup="validation()" class="form-control" id="age" placeholder="Enter Age">
                    <div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
                        Enter valid Age
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input onkeyup="validation()" class="form-control" type="password" id="password"
                        placeholder="Enter Password">
                    <div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
                        Enter valid password *Minimum eight characters, at least one letter and one number:*
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-group">
                    <input onkeyup="validation()" class="form-control" type="password" id="rePassword"
                        placeholder="Enter RePassword">
                    <div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
                        Enter valid Repassword
                    </div>
                </div>
            </div>

        </div>

        <button type="submit" disabled id="submitBtn" class="btn btn-outline-danger mt-5">Submit</button>
        </div>

        </section>
        
        `

      userName = document.getElementById("name"),
      userEmail = document.getElementById("email"),
      userPhone = document.getElementById("phone"),
      userAge = document.getElementById("age"),
      userPassword = document.getElementById("password"),
      userRePassword = document.getElementById("rePassword"),
      userNameAlert = document.getElementById("namealert"),
      userEmailAlert = document.getElementById("emailalert"),
      userPhoneAlert = document.getElementById("phonealert"),
      userAgeAlert = document.getElementById("agealert"),
      userpasswordAlert = document.getElementById("passwordalert"),
      userRepasswordAlert = document.getElementById("repasswordalert");

  userName.addEventListener("focus", () => {
      nameToached = true
  })
  userEmail.addEventListener("focus", () => {
      emailToached = true
  })
  userPhone.addEventListener("focus", () => {
      phoneToached = true
  })
  userAge.addEventListener("focus", () => {
      ageToached = true
  })
  userPassword.addEventListener("focus", () => {
      passwordToached = true
  })
  userRePassword.addEventListener("focus", () => {
      repasswordToached = true
  })
}

});




//validation of contact

let nameToached = false,
    emailToached = false,
    phoneToached = false,
    ageToached = false,
    passwordToached = false,
    repasswordToached = false;

function validation() {

  if (nameToached) {
      if (userNameValid()) {
          userName.classList.remove("is-invalid")
          userName.classList.add("is-valid")
          userNameAlert.classList.replace("d-block", "d-none")
          userNameAlert.classList.replace("d-block", "d-none")

      } else {
          userName.classList.replace("is-valid", "is-invalid")
          userNameAlert.classList.replace("d-none", "d-block")
      }
  }

  if (emailToached) {
      if (userEmailValid()) {
          userEmail.classList.remove("is-invalid")
          userEmail.classList.add("is-valid")
          userEmailAlert.classList.replace("d-block", "d-none")
          userEmailAlert.classList.replace("d-block", "d-none")
      } else {
          userEmail.classList.replace("is-valid", "is-invalid")
          userEmailAlert.classList.replace("d-none", "d-block")
      }
  }

  if (phoneToached) {
      if (userPhoneValid()) {
          userPhone.classList.remove("is-invalid")
          userPhone.classList.add("is-valid")
          userPhoneAlert.classList.replace("d-block", "d-none")
          userPhoneAlert.classList.replace("d-block", "d-none")
      } else {
          userPhone.classList.replace("is-valid", "is-invalid")
          userPhoneAlert.classList.replace("d-none", "d-block")
      }
  }

  if (ageToached) {
      if (userAgeValid()) {
          userAge.classList.remove("is-invalid")
          userAge.classList.add("is-valid")
          userAgeAlert.classList.replace("d-block", "d-none")
          userAgeAlert.classList.replace("d-block", "d-none")
      } else {
          userAge.classList.replace("is-valid", "is-invalid")
          userAgeAlert.classList.replace("d-none", "d-block")
      }
  }

  if (passwordToached) {
      if (userPasswordValid()) {
          userPassword.classList.remove("is-invalid")
          userPassword.classList.add("is-valid")
          userpasswordAlert.classList.replace("d-block", "d-none")
          userpasswordAlert.classList.replace("d-block", "d-none")
      } else {
          userPassword.classList.replace("is-valid", "is-invalid")
          userpasswordAlert.classList.replace("d-none", "d-block")
      }
  }

  if (repasswordToached) {
      if (userRePasswordValid()) {
          userRePassword.classList.remove("is-invalid")
          userRePassword.classList.add("is-valid")
          userRepasswordAlert.classList.replace("d-block", "d-none")
          userRepasswordAlert.classList.replace("d-block", "d-none")
      } else {
          userRePassword.classList.replace("is-valid", "is-invalid")
          userRepasswordAlert.classList.replace("d-none", "d-block")
      }
  }

  if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
      document.getElementById("submitBtn").removeAttribute("disabled")
  }else{
      document.getElementById("submitBtn").setAttribute("disabled","true")
  }

}

function userNameValid() {
  return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
  return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}

function userPasswordValid() {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
  return userPassword.value == userRePassword.value
}
