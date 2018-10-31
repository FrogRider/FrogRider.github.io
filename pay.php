
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->

<head>

    <meta charset="utf-8" />

    <title>Master groomer</title>
    <meta content="" name="description" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="libs/animate/animate.css" />
    <?php include ('font.php') ?>
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/pay.css" />

</head>

<body>

    <div class="container">
        <?php include ('header.php'); ?>

        <div class="conatiner">
        <div class="pay">
            <button class="accordion">Оплата наличными</button>
            <div class="panel">
                <p>Данный вид оплаты действует при варианте курьерской доставки по Киеву.</p>
            </div>

            <button class="accordion">Карта приватбанка</button>
            <div class="panel">
              <p>Удобно и без дополнительных комиссий. Внимание! При возврате платежа денежные средства вернутся только на ту же карту, с которой был произведен платеж.</p>
            </div>

            <button class="accordion">Наложенный платеж</button>
            <div class="panel">
              <p>Вы получаете посылку на отделение Новой Почты, или УкрПочты, проверяете товар и оплачиваете прямо на отделении. Важно: дополнительно оплачивается пересылкa денег.</p>
            </div>
        </div>

        
    </div>

    
    <script src="js/pay.js"></script>
    
</body>
</html>

    

   