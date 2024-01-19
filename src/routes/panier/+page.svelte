<!-- Panier.svelte -->
<script>
</script>

<main>
  <header>
    <button>
      <a href="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <g clip-path="url(#clip0_9077_37)">
            <path
              d="M26.6667 14.6667H10.44L17.8933 7.21334L16 5.33334L5.33334 16L16 26.6667L17.88 24.7867L10.44 17.3333H26.6667V14.6667Z"
              fill="#130B11"
            />
          </g>
          <defs>
            <clipPath id="clip0_9077_37">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg></a
      ></button
    >
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
      </a>
    </div>
  </header>
  <h2>Panier</h2>
  <p>
    Où veux-tu te faire livrer ? <br />Au bureau ou chez toi ?
  </p>
  <div class="form-container">
    <label for="rue">Nom de la rue :</label>
    <input type="text" id="rue" name="rue" required />
    <label for="ville">Ville :</label>
    <input type="text" id="ville" name="ville" required />
    <label for="code-postal">Code postal :</label>
    <input type="text" id="code-postal" name="code-postal" required />
  </div>
  <a href="/commande" id="button">Passer commande</a>
</main>

<style>
  main {
    max-width: 100%;
    padding: 10px;
    margin-top: -10px;
  }

  header {
    background-color: #f3e2f6;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-left: -18px;
    margin-top: -8px;
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

  button {
    background-color: #f3e2f6;
    border: none;
  }

  p {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    width: 235px;
    height: 5rem;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-container label {
    margin-bottom: 0.5rem;
    font-family: Montserrat;
    font-size: 14px;
  }

  .form-container input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: Montserrat;
    font-size: 14px;
  }

  #button {
    color: black;
    background-color: #f3e2f6;
    font-family: Montserrat;
    font-weight: 500;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
