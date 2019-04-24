<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Customers</title>
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>

	<section>
		<div>
			<h3>Customers</h3>
		</div>

		<div class="right">
			<form action="#" method="post">
				<label for="company">Company</label>
				<input type="text" id="company" name="company" placeholder="Your company..">

				<label for="contact">Contact</label>
				<input type="text" id="contact" name="contact" placeholder="Your contact..">

				<label for="country">Country</label>
				<select id="country" name="country">
					<option value="australia">Australia</option>
					<option value="canada">Canada</option>
					<option value="usa">USA</option>
				</select>

				<button class="button button3 green createCustomer">Create Customer</button>
			</form>
		</div>
		
		<div>
			<table id="customers">
				<tr>
					<th>Company</th>
					<th>Contact</th>
					<th>Country</th>
					<th>Status</th>
					<th>Action</th>
				</tr>

				<!-- <tr id="tableRow">
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
					<td><button class="button button1 green">Enabled</button> <button class="button button1 red">Disabled</button></td>
					<td><button class="button button3 green">Edit</button> <button class="button button3 red">Delete</button></td>
				</tr> -->
			</table>
		</div>
		
	</section>

	<script src="index.js"></script>
</body>
</html>