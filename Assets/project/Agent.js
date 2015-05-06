#pragma strict

class Agent extends UnityEngine.MonoBehaviour
{
	private var gameScript: GameScript;
	private var target: GameObject;
	
	function Start () 
	{
		gameScript = FindObjectOfType(GameScript);
	}
	
	function StartRunning(t: GameObject) {
		target = t;
		var agent: NavMeshAgent = GetComponent.<NavMeshAgent>();
		agent.SetDestination(target.transform.position);
		agent.speed = Random.Range(1.0, 3.0);
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
		gameScript.SendMessage("SpawnAgent");
		Destroy(this.gameObject);
	}
}

