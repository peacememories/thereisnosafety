#pragma strict

class GameScript extends UnityEngine.MonoBehaviour
{
	var numAgents = 4;
	private var targets: Target[];
	
	function Start () 
	{
		targets = FindObjectsOfType(Target);
		for(var i = 0; i < numAgents; i++)
		{
			SpawnAgent();
		}
	}
	
	function SpawnAgent() {
		GetRandomTarget().SendMessage("SpawnAgent");
	}
	
	function GetRandomTarget(): Target {
		return targets[Random.Range(0, targets.length)];
	}
}

	