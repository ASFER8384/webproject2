async function display() {
  try {
    let num = document.getElementById("inp-box").value
    let file = await fetch(`https://fakestoreapi.com/products/${num}`)
    let finalOutput = await file.json()
    console.log(finalOutput)

    let output = document.getElementById("card")
    output.innerHTML = `<div class="card" style="width: 25rem;">
<div class="card-body">
  <h5 class="card-title">Product Details</h5>
  <p class="card-text">Catagory : ${finalOutput.category}</p>
  <p class="card-text">Price : ${finalOutput.price}</p>
  <p class="card-text">Description : ${finalOutput.description}</p>
  <p class="card-text">Rating : ${finalOutput.rating.rate}</p>
  <a href="${finalOutput.image}" class="card-link">product image</a>
  <a href="#" class="card-link">Check Website</a>
</div>
</div>`
  }
  catch {
    alert("Enter Number 1 to 20")
  }

}