'Device("Device").App("Home").MobileButton("Safari").Tap



AIUtil.SetContext Device("micclass:=Device")

AIUtil("search").Search "www.advantageonlineshopping.com"

'AIUtil.FindTextBlock("go").Click


AIUtil("hamburger_menu").Click
AIUtil("profile").Click
AIUtil("input", "Username").Type "aidemo"
AIUtil("input", "Password").Type "AIdemo1"
AIUtil("button", "SIGN IN").Click
AIUtil.FindTextBlock("SPEAKERS").Click
AIUtil.FindTextBlock("Bose Soundlink Bluetooth Speaker").Click
'scroll down 1
AIUtil("button", "ADD TO CART").Click

AIUtil("hamburger_menu").Click
AIUtil("shopping_cart").Click
AIUtil("button", "CHECKOUT").Click
'scroll down 1
AIUtil("button", "NEXT").Click
AIUtil("button", "PAY NOW").Click
AIUtil.FindTextBlock("Your order number is 7393096312").Click
AIUtil.FindTextBlock("Your tracking number is 7393076257").Click
AIUtil("hamburger_menu").Click
AIUtil("profile", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("Sign out").Click

AIUtil.FindTextBlock("Not Secure 'nlineshopping.com").Click
AIUtil("close").Click


