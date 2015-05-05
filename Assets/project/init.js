#pragma strict

var floor;
var agent: GameObject;

function Start () 
{
	floor = GameObject.Find("floor");

	for(var i = 0; i < 4; i++)
	{
		Instantiate(agent, Vector3(0, 0, 0), Quaternion.identity);
	}
}
function Update () 
{

}