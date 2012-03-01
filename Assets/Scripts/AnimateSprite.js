private var facing = 0;

function Update () {
	var horizontalDirection = Input.GetAxis("Horizontal");
	var verticalDirection = Input.GetAxis("Vertical");
	var sprite = GetComponent("PackedSprite");
	
	var vectorAngle = transform.parent.GetComponent("2DInputController").getMouseVector("Angle");
	var vectorMagnitude = transform.parent.GetComponent("2DInputController").getMouseVector("Magnitude");
	
	//Debug.Log(vectorMagnitude);
	
	///////////////////////////////
	// LOOK AT MOUSE
	
	if(vectorAngle <= 45 || vectorAngle > 315){
		facing = 2;
	}
	else if(vectorAngle <= 135 && vectorAngle > 45){
		facing = 1;
	}
	else if(vectorAngle <= 225 && vectorAngle > 135){
		facing = 3;
	}
	else if(vectorAngle <= 315 && vectorAngle > 225){
		facing = 0;
	}
	
	if(verticalDirection != 0 || horizontalDirection != 0){
		if(facing == 0)
			sprite.DoAnim(0);
		if(facing == 1)
			sprite.DoAnim(1);
		if(facing == 2)
			sprite.DoAnim(2);
		if(facing == 3)
			sprite.DoAnim(3);
	}
	else{
		if(facing == 0)
			sprite.DoAnim(4);
		if(facing == 1)
			sprite.DoAnim(5);
		if(facing == 2)
			sprite.DoAnim(6);
		if(facing == 3)
			sprite.DoAnim(7);
	}

	
	
	
	///////////////////////////////
	// LOOK MOVEMENT DIRECTION
	
	/*
	if(verticalDirection < 0){
		facing = 0;
		sprite.DoAnim(0);
	}
	else if(verticalDirection > 0){
		facing = 1;
		sprite.DoAnim(1);
	}
	
	else if(horizontalDirection > 0){
		facing = 2;
		sprite.DoAnim(2);
	}
	else if(horizontalDirection < 0){
		facing = 3;
		sprite.DoAnim(3);
	}
	else {
		if(facing == 0)
			sprite.PlayAnim(4);
		if(facing == 1)
			sprite.PlayAnim(5);
		if(facing == 2)
			sprite.PlayAnim(6);
		if(facing == 3)
			sprite.PlayAnim(7);
	}
	*/

}