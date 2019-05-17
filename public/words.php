<?php
	$type = $_GET["type"];
	$count = $_GET["count"];
	$words = [];
	$answer = [];

	if ($type == "classic")
	{
		$words = explode("\r\n", file_get_contents("dictionary.txt"));
		for ($i = 0; $i < $count; $i++)
		{
			$answer[] = $words[rand(0, count($words) - 1)];
		}
	}
	else if ($type == "modded")
	{
		$words = json_decode($_GET["words"]);
		if ($count < count($words))
		{
			$answer = array_slice($words, $count);
		}
		else
		{
			$answer = $words;
		}
		
		shuffle($answer);
	}

	echo json_encode($answer, JSON_UNESCAPED_UNICODE)
?>