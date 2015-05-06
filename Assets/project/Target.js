#pragma strict

class Target extends UnityEngine.MonoBehaviour
{
	var agent: GameObject;
	private var otherTargets = new Array();
	
	function Start() {
		var targets: Target[] = FindObjectsOfType(Target);
		targets.ForEach(targets, function(elem) {
			if(elem != this)
				otherTargets.Push(elem);
		});
		
	}
	
	function OnTriggerEnter (other : Collider) 
	{
		other.SendMessage("Arrived", this.gameObject);
	}
	
	function SpawnAgent() {
		var agent: GameObject = Instantiate(agent, gameObject.transform.position, Quaternion.identity);
		agent.GetComponent.<Agent>().StartRunning(GetRandomTarget().gameObject);
	}
	
	function GetRandomTarget(): Target {
		return otherTargets[Random.Range(0, otherTargets.length)];
	}
}

