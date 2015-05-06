#pragma strict

var target: GameObject;

function Start () 
{
	var agent: NavMeshAgent = GetComponent.<NavMeshAgent>();
    var randomTarget = "target_" + Random.Range(1,4);
    target = GameObject.Find(randomTarget);
    agent.SetDestination(target.transform.position);
}

function Arrived(other: GameObject) {
	if(other == target) {
		Delete();
	}
}

function OnMouseDown() {
	//Insert flavour text here
	Delete();
}

function Delete() {
	Destroy(this.gameObject);
}