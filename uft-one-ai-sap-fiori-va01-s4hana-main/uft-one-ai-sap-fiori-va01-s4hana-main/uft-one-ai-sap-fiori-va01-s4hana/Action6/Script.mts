Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

AIUtil("plus").Click
AIUtil("search", micAnyText, micFromBottom, 1).CheckExists True
'the automation keeps overrunning the application
wait 1
set objSendKey=CreateObject("WScript.shell")
objSendKey.SendKeys "+{TAB}"
objSendKey.SendKeys "10"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "EWMS4-02"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "1"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "PC"

