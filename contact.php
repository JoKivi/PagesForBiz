<?php
session_start();
$title = 'Ota yhteyttä';
require_once "./header.php";
?>
<style>
  .base {
    height: 0%;
    max-width: 100vw;
    display: flex;
    justify-content: center;
  }

  .form-base {
    display: flex;
    justify-content: center;
    margin: 2vw;
    width: 90vw;
    padding: 4vw;
    border-radius: 1vw;
    background-color: #F1EFEF;
  }
</style>

<div class="base">
  <div class="form-base" class="container">
    <h1 class="text-secondary">Ota yhteyttä</h1></br>

    <form action="check_contact.php" method="post">

      <input type="text" name="user_name" value="<?php print_r($_SESSION['user_name']); ?>" placeholder="Nimi*"
        class="form-control">
      <div class="text-danger">
        <?php print_r($_SESSION['error_name']); ?>
      </div></br>

      <input type="email" name="email" value="<?php print_r($_SESSION['email']); ?>" placeholder="Sähköposti*"
        class="form-control">
      <div class="text-danger">
        <?php print_r($_SESSION['error_from']); ?>
      </div></br>

      <input type="text" name="subject" value="<?php print_r($_SESSION['subject']); ?>" placeholder="Aihe*"
        class="form-control">
      <div class="text-danger">
        <?php print_r($_SESSION['error_subject']); ?>
      </div></br>

      <textarea type="text" name="message" placeholder="Viesti" class="form-control"
        style="min-height: 20vh"></textarea></br>

      <div class="checkbox-container">
        <input style="border:1px solid blue; margin-left: 1vw" class="form-check-input" type="checkbox" name="rights"
          id="rights" required>
        <label style="margin-left: 1vw; display: inline-block;" class="form-check-label" for="rights">Hyväksyn, että
          tietoni tallennetaan ja niitä käytetään tietosuojaselosteen <a
            href="https://tietosuoja.fi/etusivu">osoittamalla tavalla.</a></label>
      </div><br>

      <button style="font-size: 20px;" type="submit" class="btn btn-primary">Lähetä</button>
    </form>
  </div>
</div>
<?php
require_once "./footer.php";
?>