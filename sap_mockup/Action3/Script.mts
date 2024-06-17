AIUtil("text_box", "Cust. Reference:").Type "450008433"
AIUtil("text_box", "Standard Order:").Type Parameter
AIUtil("text_box", "Ship-To Party").Type "7214"
AIUtil("text_box", "Sold-To Party").Type "2666"
AIUtil("text_box", "Cust. Ref. Date:").Type ""
AIUtil("down_triangle", micAnyText, micFromTop, 2).Click
AIUtil.FindTextBlock("No Export Documents").Click
AIUtil.FindTextBlock("Save").Click
