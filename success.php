<?php
 session_start();
    $title = 'Ota yhteyttä';
    require_once "./header.php";
?>
<div style="max-width: 100vw; display: flex; justify-content: center;">
    <div style="margin: 2vw; width: 90vw; min-height: 20vh; padding: 4vw; border-radius: 1vw; font-size: 20px;background-color: #F1EFEF;" class="container">
        <form action="check_success.php" method="post">
            <div style="display: flex; flex-direction: column; align-items: center;" class="container">
            <div style="text-align: center; margin: 2vh;"><span class="text-success"><?php print_r($_SESSION['succees']);?></span></div>
                    <div style="margin: 2vh;"><button style="font-size: 20px;"type="submit" class="btn btn-primary">Pääsivulle</button></div>
            </div>
        </form>
    </div>
</div>
<?php
    require_once "./footer.php";
?>