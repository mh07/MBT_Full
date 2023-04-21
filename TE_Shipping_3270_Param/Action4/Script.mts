' Delete Order
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").Set "3"
TeWindow("TeWindow").TeScreen("Flight Reservation System").TeField("Select").SetCursorPos 1
TeWindow("TeWindow").TeScreen("Flight Reservation System").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("Flight Reservation System").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").Set DataTable("CreatedOrderNum", dtGlobalSheet)
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos 4
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos 4
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos 4
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_ENTER
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync
TeWindow("TeWindow").TeScreen("FR17 Flights").TeField("Order Number").SetCursorPos
TeWindow("TeWindow").TeScreen("FR17 Flights").SendKey TE_PF3
TeWindow("TeWindow").TeScreen("FR17 Flights").Sync

