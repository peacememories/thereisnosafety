#pragma strict

function OnTriggerEnter (other : Collider) 
{
	other.gameObject.SendMessage("Arrived", this.gameObject);
}