public var activeSpell : GameObject;

function Update () {

	var range = GetComponent("EntityStats").range;
	var clickDistance = GetComponent("2DInputController").getMouseVector("Magnitude");
	
	//Debug.Log("Range: " + range + ", Click Distance: " + clickDistance);
	
	if(Input.GetMouseButtonDown(0)){
    	if(clickDistance <= range){
    		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			var hit : RaycastHit;
			if (Physics.Raycast(ray, hit)) {
				var instanceSpell = Instantiate(activeSpell, new Vector3(hit.point.x, hit.point.y + .5, hit.point.z), hit.transform.rotation);
    		}
    	}
	}

}