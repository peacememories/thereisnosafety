#pragma strict

var EventText: UnityEngine.UI.Text;
var Events : String[] = [
		"A carbomb exploded! 5 dead, 20 injured.",
		"An Austrian tourist group kidnapped!",
		"Airplane hijacked!",
		"Attack on military base",
		"Explosion in school",
		"Suicide bombing at a store",
		"Attack on newspaper office",
		"28 people killed in terror attack",
		"Prime Minister assassinated!",
		"Attack on synagogue"
	];

function Start () 
{
	EventText = GameObject.Find("Canvas").GetComponentsInChildren(UnityEngine.UI.Text)[0];
	InvokeRepeating("DisplayEvent", 1, 15);
}

function DisplayEvent() 
{
	EventText.text = Events[Random.Range(0, Events.Length)];
}
