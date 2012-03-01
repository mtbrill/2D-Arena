private var motor : CharacterMotor;
private var facing = 0;

// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
}

// Update is called once per frame
function Update () {
	// Get the input vector from kayboard or analog stick
	var directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	
	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
		directionVector = directionVector / directionLength;
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
	// Apply the direction to the CharacterMotor
	motor.inputMoveDirection = transform.rotation * directionVector;
	motor.inputJump = Input.GetButton("Jump");
	
	//Animate!
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	var hit : RaycastHit;
	if (Physics.Raycast(ray, hit)) {
		//var angle = Vector3.Angle(transform.Find("Player"), hit.point);
		Debug.Log(transform.Find("Player"));
	}
	
	
	var horizontalDirection = Input.GetAxis("Horizontal");
	var verticalDirection = Input.GetAxis("Vertical");
	var sprite = transform.Find("Sprite").GetComponent("PackedSprite");
	
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
	
	
}

// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
