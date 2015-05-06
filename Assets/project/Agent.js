#pragma strict

class Agent extends UnityEngine.MonoBehaviour
{
	private var gameScript: GameScript;
	private var target: GameObject;
	private var score: UnityEngine.UI.Text;
	private var captured: UnityEngine.UI.Text;
	private var names : String[] = [
		"Susanna Scuderi", 
		"Lynnette Lochner", 
		"Elise Etsitty", 
		"Jacelyn Junior", 
		"Werner Wittmer", 
		"Linette Litton", 
		"Edythe Ekberg", 
		"Mistie Mangione", 
		"Adele Aye", 
		"Dan Desai", 
		"Anja Abner", 
		"Kory Kaylor", 
		"Caridad Congdon", 
		"Kimber Kitts", 
		"Miss Mcintyre", 
		"Ned Nottage", 
		"Mechelle Mccumber", 
		"Mirta Mcclendon", 
		"Marguerita Marcoux", 
		"Lida Looby", 
		"Margarito Mccarty", 
		"Katherina Kensey", 
		"Tammie Tauber", 
		"Marquerite Marmol", 
		"Michale Matsunaga", 
		"Milford Maclin", 
		"Chara Clough", 
		"Refugio Rix", 
		"Cayla Cadle", 
		"Kenia Kohut", 
		"Iva Iddings", 
		"Trinh Tabler", 
		"Cynthia Curro", 
		"Shaina Stjean", 
		"Lowell Lightford", 
		"Sonja Schomer", 
		"Elanor Engels", 
		"Raisa Rhoda", 
		"Lorrie Lacomb", 
		"Yu Yelton", 
		"Emile Einhorn", 
		"Bernardine Bomba", 
		"Caitlyn Chrzanowski", 
		"Natashia Newborn", 
		"Zetta Zollars", 
		"Edmundo Ecker", 
		"Giovanna Gaddy", 
		"Ebony Eugene", 
		"Ezekiel Eiler", 
		"Gilberto Gemmell"
	];
	
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
		captured = GameObject.Find("Canvas").GetComponentsInChildren(UnityEngine.UI.Text)[2];
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
		
		var name = names[Random.Range(0, names.Length)];
		captured.text = "You captured " + name + ".\n" + name + " was not a terrorist."; 
		
		Delete();
	}

	function Delete() {
		gameScript.SendMessage("SpawnAgent");
		Destroy(this.gameObject);
	}
}

