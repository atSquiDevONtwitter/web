
checkBrowserWidth();

attachEventListener(window, "resize", checkBrowserWidth, false);




function checkBrowserWidth()
{
	var theWidth = getBrowserWidth();
	
	if (theWidth == 0)
	{
		var resolutionCookie = document.cookie.match(/(^|;)tmib_res_layout[^;]*(;|$)/);

		if (resolutionCookie != null)
		{
			setStylesheet(unescape(resolutionCookie[0].split("=")[1]));
		}
		
		addLoadListener(checkBrowserWidth);
		
		return false;
	}

	if (theWidth <= 950)
	{
		setStylesheet("598");
		document.cookie = "tmib_res_layout=" + escape("598");
	}

	else if (theWidth > 950 && theWidth <= 1250)
	{
		setStylesheet("897");
		document.cookie = "tmib_res_layout=" + escape("897");
	}

	else if (theWidth > 1550 && theWidth <= 1850)
	{
		setStylesheet("1495");
		document.cookie = "tmib_res_layout=" + escape("1495");
	}

	else if (theWidth > 1850 && theWidth <= 2150)
	{
		setStylesheet("1794");
		document.cookie = "tmib_res_layout=" + escape("1794");
	}

	else if (theWidth > 2150 && theWidth <= 2450)
	{
		setStylesheet("2093");
		document.cookie = "tmib_res_layout=" + escape("2093");
	}

	else if (theWidth > 2450 && theWidth <= 2750)
	{
		setStylesheet("2392");
		document.cookie = "tmib_res_layout=" + escape("2392");
	}

	else if (theWidth > 2750)
	{
		setStylesheet("2691");
		document.cookie = "tmib_res_layout=" + escape("2691");
	}
	else
	{
		setStylesheet("");
		document.cookie = "tmib_res_layout=";
	}
	
	
	return true;
};




function getBrowserWidth()
{
	if (window.innerWidth)
	{
		return window.innerWidth;
	}
	else if (document.documentElement && document.documentElement.clientWidth != 0)
	{
		return document.documentElement.clientWidth;
	}
	else if (document.body)
	{
		return document.body.clientWidth;
	}
	
	return 0;
};




function setStylesheet(styleTitle)
{
	var currTag;

	if (document.getElementsByTagName)
	{
		for (var i = 0; (currTag = document.getElementsByTagName("link")[i]); i++)
		{
			if (currTag.getAttribute("rel").indexOf("style") != -1 && currTag.getAttribute("title"))
			{
				currTag.disabled = true;

				if(currTag.getAttribute("title") == styleTitle)
				{
					currTag.disabled = false;
				}
			}
		}
	}
	
	return true;
};