AIUtil.SetContext Device("micclass:=Device")
AIUtil("shopping_cart").Click
AIUtil.FindText("CHECKOUT").Click
AIUtil("button", "PAY NOW").Click

AIUtil.SetContext Device("micclass:=Device")
'get the tracking number as output parameter to pass into SAP OTC
tNumber = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Thank you for buying")).GetText
A = Split(tNumber, " ")
B = A(3)
Parameter("oTrackingNumber") = B
Print Parameter("oTrackingNumber")

AIUtil("button", "Ok").Click
