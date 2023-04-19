' Create Order
TeWindow("TeWindow").TeScreen("FR68 Flights").Sync
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "1"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").Set DataTable("FlightDate", dtLocalSheet)
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Airline").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("From City").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("To City").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("5").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("5").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Flight").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR54 System Mes").TeField("Select").Set "2"
TeWindow("TeWindow").TeScreen("FR54 System Mes").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR54 System Mes").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR54 System Mes").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("To City").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("2").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("2").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Flight").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("2").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("2").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Customer").Set DataTable("PassengerName", dtLocalSheet)
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Class of Service").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Method of payment").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Order Number").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("OrderNumber(protected)").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("OrderNumber(protected)").Output Checkpoint("CreatedOrderNum")
AIUtil.SetContext TeWindow("terminal emulator:=Yes", "short name:=B")
Order= AIUtil.FindTextBlock(micAnyText, micWithAnchorOnRight, AIUtil.FindTextBlock("Created.")).GetText
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_PF3
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync
TeWindow("TeWindow").TeScreen("FR03 Flights").TeField("Depart Date").SetCursorPos
TeWindow("TeWindow").TeScreen("FR03 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR03 Flights").Sync

