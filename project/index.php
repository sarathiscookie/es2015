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
			<button class="button button3 green">Create Customer</button>
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
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
					<td><button class="button button1 green">Enabled</button> <button class="button button1 red">Disabled</button></td>
					<td><button class="button button3 green">Edit</button> <button class="button button3 red">Delete</button></td>
				</tr>
			</table>
		</div>
		
	</section>

	<script src="index.js"></script>
</body>
</html>