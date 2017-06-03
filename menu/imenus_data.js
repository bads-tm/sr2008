







/*

          Tips & Tricks

             1: Adjust the "function menudata0()" numeric id in the statement below to match the numeric id of
                the id='imenus0' statement within the menu structure and links secion above.  The numbers must 
                match for the menu to work, multiple menus may be used on a single page by adding new sections 
                with new id's.

             2: To specifically define settings for an individual item or container, apply classes or inline styles
                directly to the UL and A tags in the HTML tags which define your menus structure and links above.

             3: Use the parameter options below to define borders and padding.  Borders and padding specified
                within the menus HTML structure may cause positioning and actual sizing to be offset a bit in
                some browsers.
 
*/




/*-------------------------------------------------
************* Parameter Settings ******************
---------------------------------------------------*/


function menudata0()
{
	
	

    /*---------------------------------------------
    Expand Icon Images
    ---------------------------------------------*/


        //Expand Images are the icons which indicate an additional sub menu level.)
	
        this.main_expand_image_style = "background: url(menu/arrow_main.gif) center left no-repeat;";
        this.main_expand_image_hover_style = "background: url(menu/arrow_main.gif) center left no-repeat;";

	this.subs_expand_image_style = "background: url(menu/arrow_sub.gif) center right no-repeat;";
	this.subs_expand_image_hover_style = "background: url(menu/arrow_sub.gif) center right no-repeat;";



    /*---------------------------------------------
    Menu Container Settings
    ---------------------------------------------*/

	//Main Container

	   this.main_container_border_width = "1px"
           this.main_container_border_style = "none"

           this.main_container_styles =   "background-color:#C9C9C9;		\
                                           border-color:#769bba;"




	//Sub Containers

           this.subs_container_padding = "5px, 5px, 5px, 5px"
           this.subs_container_border_width = "1px"
           this.subs_container_border_style = "solid"

           this.subs_container_styles =   "background-color:#C9C9C9;		\
                                           border-color:#919AA2;"



    /*---------------------------------------------
    Menu Item Settings
    ---------------------------------------------*/


	//Main Items

           this.main_item_padding = "1px,3px,1px,3px"
                  
           this.main_item_styles =        "text-decoration:none;		\
                                           font-family:Verdana;			\
                                           font-size:11px;			\
                                           background-color:#C9C9C9;		\
                                           color:#000000;			\
                                           border-style:none;			\
                                           text-align:center;			\
                                           border-style:none;			\
                                           border-color:#000000;		\
                                           border-width:0px;"
					   


           this.main_item_hover_styles =  "background-color:#919AA2;		\
                                           text-decoration:normal;		\
                                           color:#FFFFFF;"

           this.main_item_active_styles = "background-color:#919AA2;		\
                                           text-decoration:normal;		\
                                           color:#FFFFFF;"



	//Sub Items

           this.subs_item_padding = "3px,3px,3px,3px"
           
           this.subs_item_styles =        "text-decoration:none;		\
                                           font-face:Verdana;			\
                                           font-size:10px;			\
                                           font-weight:normal;			\
                                           background-color:#C9C9C9;		\
                                           color:#111111;			\
                                           width:195px;			\
                                           border-style:none;			\
                                           text-align:left;			\
                                           border-style:none;			\
                                           border-color:#000000;		\
                                           border-width:1px;"	

           this.subs_item_hover_styles =  "background-color:#ffffff;		\
                                           color:#255585;"

           this.subs_item_active_styles = "background-color:#ffffff;		\
                                           color:#255585;"




   /*---------------------------------------------
    Additional Setting
    ---------------------------------------------*/


        //Main Menu Orientation

           this.main_is_horizontal = true
	

        //Main Menu Item Widths 

           this.main_item_width = 130			//default width for all items

           this.main_item_width0 = 70		//optional specific width for the first menu item
           this.main_item_width1 = 130		//optional specific width for the second menu item...
           this.main_item_width2 = 90		//optional specific width for the second menu item...
           this.main_item_width3 = 60		//optional specific width for the second menu item...           
           this.main_item_width4 = 50		//optional specific width for the second menu item...           


        //The mouse off and mouse over delay for sub menus

           this.menu_showhide_delay = 5;

}


