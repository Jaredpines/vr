#pragma strict

var speed : float;

function Start () {
	
}

function Update () {
    //Debug.Log("Hello World the time is " + Time.time);
    if(Input.GetKey("w")){
        transform.Translate(Vector3(0,0,1) * speed * Time.deltaTime);
    }
    else if(Input.GetKey("s")){
        transform.Translate(Vector3(0,0,-1) * speed * Time.deltaTime);
    }


    if(Input.GetKey("a")){
        transform.Rotate(Vector3(0,-1,0) * (speed * 15) * Time.deltaTime);
    }
    else if(Input.GetKey("d")){
        transform.Rotate(Vector3(0,1,0) * (speed * 15) * Time.deltaTime);
    }
    else if(Input.GetKey("e")){
        transform.Rotate(Vector3(0,0,0) * (speed * 15) * Time.deltaTime);
        transform.Translate(Vector3(0,0,0) * speed * Time.deltaTime);
    }
    
}

