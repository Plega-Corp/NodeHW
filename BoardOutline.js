function CreateDecagon() {
var Board; //IPCB_Board;
var Track;   //IPCB_Track;
var Width = 10;                                                                                                        SS
var SideLength = 25;
var PerimeterGap = 5;
var xOrigin;
var yOrigin;
var radius;
var xStart;
var yStart;



    Board = PCBServer.GetCurrentPCBBoard;

    if (Board != Null)
    {
        //radius    = (SideLength * Math.sqrt((5*2*Math.sqrt(5))))/2;
        //radius = (SideLength/2)/ Math.tan(Degrees2Radians(18));
        radius = 38.5;
        xOrigin   = Board.XOrigin + MMsToCoord(radius);
        yOrigin   = Board.YOrigin + MMsToCoord(radius);


        xStart  = xOrigin + MMsToCoord(radius * Math.cos(Degrees2Radians(0)));
        yStart  = yOrigin + MMsToCoord(radius * Math.sin(Degrees2Radians(0)));
        var deg=0;
       for(x=0;x<20;x++)
       {            deg = deg+36;
                    Track            = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
                    Track.X1  = xStart;
                    Track.Y1  = yStart;
                    Track.X2         = xOrigin + MMsToCoord(radius * Math.cos(Degrees2Radians(deg)));
                    Track.Y2         = yOrigin + MMsToCoord(radius * Math.sin(Degrees2Radians(deg)));
                    xStart          = Track.X2;
                    yStart          = Track.Y2;
                    Track.Layer      =eMechanical1;
                    Track.Width       ==MMsToCoord(Width);
                    /* Put this track in the Board object*/
                    Board.AddPCBObject(Track);

        }
    }

        //xOrigin   = xOrigin + MMsToCoord(PerimeterGap/2);
        //yOrigin   = xOrigin + MMsToCoord(PerimeterGap/2);
        radius = radius-PerimeterGap;


        xStart  = xOrigin + MMsToCoord(radius * Math.cos(Degrees2Radians(0)));
        yStart  = yOrigin + MMsToCoord(radius * Math.sin(Degrees2Radians(0)));
        var deg=0;
       for(x=0;x<20;x++)
       {            deg = deg+36;
                    Track            = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
                    Track.X1  = xStart;
                    Track.Y1  = yStart;
                    Track.X2         = xOrigin + MMsToCoord(radius * Math.cos(Degrees2Radians(deg)));
                    Track.Y2         = yOrigin + MMsToCoord(radius * Math.sin(Degrees2Radians(deg)));
                    xStart          = Track.X2;
                    yStart          = Track.Y2;
                    Track.Layer      =eMechanical1;
                    Track.Width       ==MMsToCoord(Width);
                    /* Put this track in the Board object*/
                    Board.AddPCBObject(Track);

        }
}

