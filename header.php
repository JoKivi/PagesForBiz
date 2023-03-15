<!-- BOOTSTRAP -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

<!-- CSS -->
<link href="./css/styles.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Main JS -->
<script src="js/main.js"></script>


<style>
  /* Navbar */
  .navbar {
    display: flex;
    background-color: rgb(12, 12, 12);
    padding: 1rem;
  }

  .nav-item {
    display: flex;
    gap: 0.5rem;
  }

  .navbar a {
    flex: 1;
    color: #fff;
    padding: 0.5rem;
    align-items: center;
    text-align: center;
    text-decoration: none;
    transition: all 0.5s ease-out;
  }

  .navbar-nav a:hover {
    background-color: #fff;
    color: #000000;
  }

  .navbar-brand img {
    height: auto;
    max-width: 100%;
  }
</style>


<div class="header" id="top">

  <nav class="navbar navbar-expand-md navbar-dark container-fluid">
    <a class="navbar-brand" href="index.html"><img src="img/liventer_s.svg" alt="Liventer Group Logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtonContent"
      aria-controls="navbarButtonContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarButtonContent">
      <ul class="navbar-nav me-2">
        <li class="nav-item active">
          <a href="index.html#about" class="nav-link">Tietoa</a>
        </li>
        <li class="nav-item">
          <a href="index.html#services" class="nav-link">Palvelut</a>
        </li>
        <li class="nav-item">
          <a href="gallery.html" class="nav-link">Galleria</a>
        </li>
        <li class="nav-item">
          <a href="index.html#contact" class="nav-link">Yhteystiedot</a>
        </li>
      </ul>
    </div>
    <div class="inline-button">
      <a href="contact.php" class="btn btn-primary" id="tilaa-button">TILAA</a>
    </div>
  </nav>

</div>