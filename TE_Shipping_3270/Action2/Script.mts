' View Orders
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "4"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync
TeWindow("TeWindow").TeScreen("FR68 Flights").TeField("0000(protected)").SetCursorPos
TeWindow("TeWindow").TeScreen("FR68 Flights").SendKey TE_PF4
TeWindow("TeWindow").TeScreen("FR68 Flights").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("1").SetCursorPos
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_PF7
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("4").Set "x"
TeWindow("TeWindow").TeScreen("FR77 Sele").TeField("4").SetCursorPos 1
TeWindow("TeWindow").TeScreen("FR77 Sele").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR77 Sele").Sync
TeWindow("TeWindow").TeScreen("FR68 Flights").TeField("00022(protected)").SetCursorPos
TeWindow("TeWindow").TeScreen("FR68 Flights").SendKey TE_PF3

