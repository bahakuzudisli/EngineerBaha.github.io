<!DOCTYPE html>
<html>
<head>
    <title>Currency Converter</title>
</head>
<body>
    <?php
    $currencies = array(
        'EUR' => array(
            'USD' => 1.10,
            'CAD' => 1.47
        ),
        'USD' => array(
            'EUR' => 0.91,
            'CAD' => 1.34
        ),
        'CAD' => array(
            'EUR' => 0.68,
            'USD' => 0.75
        )
    );

    if (isset($_POST['convert'])) {
        $amount = $_POST['amount'];
        $from = $_POST['from'];
        $to = $_POST['to'];

        $rate = $currencies[$from][$to];
        $result = $amount * $rate;

        echo "<p>$amount $from is equivalent to $result $to</p>";
    }
    ?>

    <form method="post">
        <label for="amount">Enter amount:</label>
        <input type="text" id="amount" name="amount" value="<?php echo isset($_POST['amount']) ? $_POST['amount'] : ''; ?>"><br><br>
        <label for="from">Convert from:</label>
        <select id="from" name="from">
            <option value="EUR" <?php echo (isset($_POST['from']) && $_POST['from'] == 'EUR') ? 'selected' : ''; ?>>Euro (EUR)</option>
            <option value="USD" <?php echo (isset($_POST['from']) && $_POST['from'] == 'USD') ? 'selected' : ''; ?>>US Dollar (USD)</option>
            <option value="CAD" <?php echo (isset($_POST['from']) && $_POST['from'] == 'CAD') ? 'selected' : ''; ?>>Canadian Dollar (CAD)</option>
        </select><br><br>
        <label for="to">Convert to:</label>
        <select id="to" name="to">
            <option value="EUR" <?php echo (isset($_POST['to']) && $_POST['to'] == 'EUR') ? 'selected' : ''; ?>>Euro (EUR)</option>
            <option value="USD" <?php echo (isset($_POST['to']) && $_POST['to'] == 'USD') ? 'selected' : ''; ?>>US Dollar (USD)</option>
            <option value="CAD" <?php echo (isset($_POST['to']) && $_POST['to'] == 'CAD') ? 'selected' : ''; ?>>Canadian Dollar (CAD)</option>
        </select><br><br>
        <button type="submit" name="convert">Convert</button>
    </form>
</body>
</html>
