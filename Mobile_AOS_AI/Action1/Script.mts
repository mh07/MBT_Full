AIUtil.SetContext Device("micclass:=Device")
AIUtil("hamburger_menu").Click
AIUtil.FindTextBlock("LOG IN").Click
AIUtil("input", "USER NAME").Type "aidemo"
AIUtil("input", "PASSWORD").Type "AIdemo1"
AIUtil("button", "LOGIN").Click
vAunthenticatorMessage = AIUtil("button", "NO").Exist
If vAuthenticatorMessage Then
	AIUtil("button", "NO").Click
End If


