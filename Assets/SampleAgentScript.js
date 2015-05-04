#pragma strict


function Start () 
{
	var agent: NavMeshAgent = GetComponent.<NavMeshAgent>();
    agent.SetDestination(GameObject.Find("target").transform.position);
}
