private var motor : CharacterMotor;

private var mouseAngle = 0;
private var mouseDistance = 0;

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
	
	
	//Calculate some stuff
	var mouseVector = new Vector3(Input.mousePosition.x, Input.mousePosition.y, 0.0) - new Vector3(Screen.width/2, Screen.height/2, 0.0);
	
	mouseDistance = mouseVector.magnitude;
	mouseAngle = Vector3.Angle(Vector3.right, mouseVector);
	
	if(mouseVector.y < 0)
		mouseAngle = 360 - mouseAngle;
	
}

function getMouseVector(param){
	if(param == "Angle")
		return mouseAngle;
	else if(param == "Magnitude")
		return mouseDistance / 20.0;
	else
		return null;
}

// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
