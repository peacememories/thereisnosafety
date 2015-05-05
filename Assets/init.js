#pragma strict

function Start () 
{
	for(var i = 0; i < 10; i++)
	{
		createPerson();
	}
}

function createPerson()
{
	var person = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	var agent  = person.AddComponent.<NavMeshAgent>() as NavMeshAgent;
	person.AddComponent.<SphereCollider>();
	
	// TODO set position of person
	
	var randomTarget = "target_" + Random.Range(1,5);
	
	agent.SetDestination(GameObject.Find(randomTarget).transform.position);
}

function Update () 
{
	// TODO create more persons
}

