#pragma strict

function OnCollisionEnter (collision : Collision)
{
	Debug.Log("collision");
	Destroy(collision.gameObject);
}

function OnTriggerEnter (other : Collider) 
{
	Debug.Log("trigger");
	Destroy(other.gameObject);
}