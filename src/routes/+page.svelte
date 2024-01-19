<!-- +Page.svelte -->

<script>
  import Panier from "./panier/+page.svelte";
  import Items from "./items/+page.svelte";

  import { writable, derived } from "svelte/store";
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-routing";
  import { navigate } from "svelte-routing";

  let films = [
    {
      id: 1,
      titre: "The Maze Runner",
      réalisateur: "Wes Ball",
      year: 2014,
      prix: 13,
      img: "https://i.pinimg.com/564x/46/cc/7c/46cc7cd19b97788d455eb888df1ba4a2.jpg",
      viewed: false,
    },
    {
      id: 2,
      titre: "Catching Fire",
      réalisateur: "Francis Lawrence",
      year: 2013,
      prix: 18.99,
      img: "https://i.pinimg.com/564x/95/a9/2b/95a92b45eafce78b34c11ee7f396298d.jpg",
      viewed: false,
    },
    {
      id: 3,
      titre: "Divergent",
      réalisateur: "Neil Burger",
      year: 2014,
      prix: 17.99,
      img: "https://i.pinimg.com/564x/80/2b/bb/802bbb380adbaa3ce0f8ea8d216fa7df.jpg",
      viewed: false,
    },
    {
      id: 4,
      titre: "Fight Club",
      réalisateur: "David Fincher",
      year: 1999,
      prix: 13.99,
      img: "https://i.pinimg.com/564x/45/b1/fe/45b1fe268d7f2c9bae25646c092a8556.jpg",
      viewed: false,
    },
    {
      id: 5,
      titre: "Interstellar",
      réalisateur: "Christopher Nolan",
      year: 2014,
      prix: 20,
      img: "https://i.pinimg.com/564x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
      viewed: false,
    },
    {
      id: 6,
      titre: "Le Voyage de Chihiro",
      réalisateur: "Hayao Miyazaki",
      year: 2002,
      prix: 9.99,
      img: "https://i.pinimg.com/564x/9b/9f/d3/9b9fd3789b6f3b2512526d5c3b0b35e7.jpg",
      viewed: false,
    },
    {
      id: 7,
      titre: "Mon Voisin Totoro",
      réalisateur: "Hayao Miyazaki",
      year: 1988,
      prix: 10.99,
      img: "https://i.pinimg.com/564x/2e/ef/e7/2eefe745410da4cb94e7c71fb037ac9c.jpg",
      viewed: false,
    },
    {
      id: 8,
      titre: "Ponyo sur la falaise",
      réalisateur: "Hayao Miyazaki",
      year: 2008,
      prix: 8.99,
      img: "https://i.pinimg.com/736x/8b/8e/b3/8b8eb303f6222e16246324310c401452.jpg",
      viewed: false,
    },
  ];

  let cart = writable([]);
  let cartCount = derived(cart, ($cart) => $cart.length);

  onMount(() => {
    const badge = document.getElementById("cart-badge");
    if (badge) {
      badge.style.display = "inline-block";
    }
    updateCartBadge(cartCount);
  });

  function updateCartBadge(count) {
    const badge = document.getElementById("cart-badge");
    if (badge) {
      badge.innerText = count > 0 ? count.toString() : "";
      badge.style.display = count > 0 ? "inline-block" : "none";
    }
  }

  function addToCart(film) {
    cart.update((items) => {
      const existingItem = items.find((item) => item.id === film.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const updatedCart = [...items, { ...film, quantity: 1 }];
        updateCartBadge(updatedCart.length);
        return updatedCart;
      }
      updateCartBadge(items.length);
      return items;
    });
  }

  function removeFromCart(film) {
    cart.update((items) => {
      const existingItem = items.find((item) => item.id === film.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        const updatedCart = items.filter((item) => item.id !== film.id);
        updateCartBadge(updatedCart.length);
        return updatedCart;
      }
      updateCartBadge(items.length);
      return items;
    });
  }

  function toggleCartDetails() {
    const cartDetails = document.getElementById("cart-details");
    if (cartDetails) {
      -cartDetails.classList.toggle("show");
    }
  }

  function deleteCart() {
    setTimeout(() => {
      films = films.map((film) => ({ ...film, viewed: false }));
    }, 0);

    cart.set([]);
    updateCartBadge(0);
  }

  function redirectToPanier() {
    navigate("Panier");
  }
</script>

<Router>
  <Route path="Panier" component={Panier} />
  <Route path="/items/:id" component={Items} />
</Router>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>

<header>
  <h1>Delivefilms</h1>
  <div>
    <a href="/panier" class="cart-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <g clip-path="url(#clip0_9016_42)">
          <path
            d="M10.5 27C8.85 27 7.515 28.35 7.515 30C7.515 31.65 8.85 33 10.5 33C12.15 33 13.5 31.65 13.5 30C13.5 28.35 12.15 27 10.5 27ZM1.5 3V6H4.5L9.9 17.385L7.875 21.06C7.635 21.48 7.5 21.975 7.5 22.5C7.5 24.15 8.85 25.5 10.5 25.5H28.5V22.5H11.13C10.92 22.5 10.755 22.335 10.755 22.125L10.8 21.945L12.15 19.5H23.325C24.45 19.5 25.44 18.885 25.95 17.955L31.32 8.22C31.44 8.01 31.5 7.755 31.5 7.5C31.5 6.675 30.825 6 30 6H7.815L6.405 3H1.5ZM25.5 27C23.85 27 22.515 28.35 22.515 30C22.515 31.65 23.85 33 25.5 33C27.15 33 28.5 31.65 28.5 30C28.5 28.35 27.15 27 25.5 27Z"
            fill="#130B11"
          />
        </g>
        <defs>
          <clipPath id="clip0_9016_42">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {#if $cartCount > 0}
        <span class="badge" id="cart-badge"
          >{#if $cartCount > 0}{$cartCount}{/if}</span
        >
      {/if}
    </a>
  </div>
</header>

<main>
  <h2>Liste de films (les meilleurs d'après moi 🤪)</h2>

  <div class="cart-details" id="cart-details">
    {#if $cartCount > 0}
      <ul>
        {#each $cart as film (film.id)}
          <li>
            {film.titre} - ${film.prix} x {film.quantity}
            <button on:click={() => removeFromCart(film)}
              >Retirer du panier</button
            >
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="films-container">
    {#each films as film (film.id)}
      <div class="film">
        <img src={film.img} alt={film.titre} />
        <h3>{film.titre}</h3>
        <div class="film-row">
          <div class="film-details">
            <p>Date de sortie: {film.year}</p>
            <p>Prix: {film.prix}€</p>
          </div>
          <div class="film-checkbox">
            <input
              type="checkbox"
              bind:checked={film.viewed}
              on:change={() => {
                if (film.viewed) {
                  addToCart(film);
                } else {
                  removeFromCart(film);
                }
              }}
            />
            <label for={`checkbox-${film.id}`}></label>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <button class="delete-cart-button" on:click={deleteCart}
    ><p>Supprimer le panier</p>
    <i class="fa-solid fa-trash"></i></button
  >
</main>

<style>
  header {
    background-color: #f3e2f6;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    margin-left: -10px;
  }

  header h1 {
    margin: 0;
    color: #130b11;
    text-align: center;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #101010;
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .cart-icon svg {
    height: 2rem;
  }

  main {
    max-width: 100%;
    margin: 80px auto 20px;
    padding: 10px;
  }

  .films-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    gap: 10px;
    justify-items: center;
  }

  .film {
    padding: 10px;
    margin-bottom: 10px;
    width: 90%;
    border-radius: 5px;
    border: 1px solid #f3e2f6;
    background: #fffefe;
  }

  .film img {
    max-width: 100%;
    height: auto;
    border-radius: 5px 5px 0px 0px;
  }

  .film h3 {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1rem;
  }

  .film-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .film-details p {
    margin: 5px 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  .film-checkbox {
    display: flex;
    align-items: end;
  }

  .film-checkbox input {
    margin-right: 5px;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;
    cursor: pointer;
    border-radius: 5px; /* Coins arrondis */
    width: 20px; /* Largeur personnalisée */
    height: 20px; /* Hauteur personnalisée */
  }

  .cart-details {
    margin-top: 20px;
    text-align: center;
    display: none;
  }

  .badge {
    left: 23rem;
    top: 1rem;
    position: absolute;
    padding: 5px 9px;
    font-size: 11px;
    background-color: #9c27b0;
    color: white;
    border-radius: 50%;
    font-family: Montserrat;
  }

  .delete-cart-button {
    display: flex;
    align-items: center;
    background-color: #8d5497;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
  }

  .delete-cart-button i {
    margin-left: 0.5rem;
    margin-top: 0.7rem;
    color: rgb(255 230 255);
    cursor: pointer;
    font-size: 1.5rem;
  }
  .delete-cart-button p {
    margin-bottom: 3px;
  }

  @media screen and (min-width: 600px) {
    header {
      padding: 20px;
    }

    .badge {
      padding: 4px 8px;
      font-size: 12px;
    }
  }
</style>
