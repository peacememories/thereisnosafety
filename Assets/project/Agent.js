#pragma strict


function Start () 
{
	var agent: NavMeshAgent = GetComponent.<NavMeshAgent>();
    var randomTarget = "target_" + Random.Range(1,4);
    agent.SetDestination(GameObject.Find(randomTarget).transform.position);
}
