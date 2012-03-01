var moveSpeed = 10.0;
var turnSpeed = 170.0;

function Update () {
	
	if(Input.GetButton("Forward")){
		rigidbody.velocity = transform.forward * moveSpeed;
	}
	if(Input.GetButton("Backward")){
		rigidbody.velocity = -transform.forward * moveSpeed;
	}
	
	if(Input.GetButton("Left")){
		rigidbody.velocity = -transform.right * moveSpeed;
	}
	if(Input.GetButton("Right")){
		rigidbody.velocity = transform.right * moveSpeed;
	}
}