Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon

AIUtil.SetContext AppContext		

AIUtil.FindTextBlock("dvantageDEMO").Click
