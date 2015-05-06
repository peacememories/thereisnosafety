#pragma strict

class Agent extends UnityEngine.MonoBehaviour
{
	private var gameScript: GameScript;
	private var target: GameObject;
	private var score: UnityEngine.UI.Text;
	
	function Start () 
	{
		gameScript = FindObjectOfType(GameScript);
	}
	
	function StartRunning(t: GameObject) {
		target = t;
		var agent: NavMeshAgent = GetComponent.<NavMeshAgent>();
		agent.SetDestination(target.transform.position);
		agent.speed = Random.Range(1.0, 3.0);
		score = GameObject.Find("Canvas").GetComponentsInChildren(UnityEngine.UI.Text)[1];
	}

	function Arrived(other: GameObject) {
		if(other == target) {
			Delete();
		}
	}

	function OnMouseDown() {
		var newScore = parseInt(score.text) - 1;
		score.color = Color.red;
		score.text = "" + newScore;
		
		Delete();
	}

	function Delete() {
		gameScript.SendMessage("SpawnAgent");
		Destroy(this.gameObject);
	}
}

