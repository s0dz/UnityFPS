function Update()
{
	if( Input.GetKeyDown("w") )
	{
		// Plays the walking animation - stops all other animations
		animation.Play( "walkinganimation",PlayMode.StopAll );
	}
}	