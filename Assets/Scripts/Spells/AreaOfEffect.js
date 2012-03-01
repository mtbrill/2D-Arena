
function Update () {

}

function OnTriggerStay (other : Collider) {
    if (other.gameObject.CompareTag("Player")) {
    	other.gameObject.GetComponent(EntityStats).health -= 1;
        Debug.Log(other.gameObject.GetComponent(EntityStats).health);
    }
}