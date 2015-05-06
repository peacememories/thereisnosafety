#pragma strict

var EventText: UnityEngine.UI.Text;
var Events : String[] = [
		"Carbomb",
		"Kidnapping",
		"more.."
	];


function Start () 
{
	EventText = GameObject.Find("Canvas").GetComponentsInChildren(UnityEngine.UI.Text)[0];
	InvokeRepeating("DisplayEvent", 1, 5);
}

function DisplayEvent() 
{
	EventText.text = Events[Random.Range(0, Events.Length)];
}
