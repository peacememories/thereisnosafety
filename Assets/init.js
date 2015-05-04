#pragma strict

var floor;

function Start () 
{
	floor = GameObject.Find("floor");
	
	createTargets();

	for(var i = 0; i < 4; i++)
	{
		createPerson(i);
	}
}

function createPerson(index)
{
	var person = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	var agent  = person.AddComponent.<NavMeshAgent>() as NavMeshAgent;
	
	// TODO set position of person
	
	var randomTarget = "target_" + Random.Range(1,4);
	
	Debug.Log(randomTarget);
	
	agent.SetDestination(GameObject.Find(randomTarget).transform.position);
}

function createTargets()
{
 // TODO create targets here or in visual editor?
}

function Update () 
{

}