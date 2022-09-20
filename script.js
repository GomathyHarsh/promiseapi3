async function foo(){
    try{
    let res=await fetch("https://deckofcardsapi.com/api/deck/new/"); 
    let res1=await res.json();
    console.log(res1);
    let div = document.createElement("div");
        div.classList.add("conatiner-fulid", "d-flex", "justify-content-center", "m-5", "p-5")
        div.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">DECK OF CARDS</div>
        <div class="card-body">
          <p class="card-text">Deck_id:${res1.deck_id}</p>
          <p class="card-text">Success:${res1.success}</p>
          <p class="card-text">Remaining:${res1.remaining}</p>
          <p class="card-text">Shuffled:${res1.shuffled}</p>
        </div>
      </div>`
        document.body.append(div);

    }
    catch(error){
       console.log(error);
    }
} foo();