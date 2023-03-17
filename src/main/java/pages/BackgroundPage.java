package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BackgroundPage {

	WebDriver driver;

	public BackgroundPage(WebDriver driver) {

		this.driver = driver;
	}

	// WebElement List:
	@FindBy(xpath = "//button[@onclick='myFunctionSky()']")
	WebElement SKY_BLUE_BACKGROUND_BUTTON;

	@FindBy(xpath = "//button[@onclick='myFunctionSky()']")
	WebElement WHITE_BACKGROUND_BUTTON;
	
	@FindBy(xpath = "//body[@style='background-color: skyblue;']")
	WebElement SKY_BLUE_BACKGROUND_VALIDATION;
	
	@FindBy(xpath = "//body[@style='background-color: white;']")
	WebElement WHITE_BACKGROUND_VALIDATION;


	// Corresponding methods
	public void clickSkyBlueBackgroundButton() {
		SKY_BLUE_BACKGROUND_BUTTON.click();
	}

	public void clickWhiteBackgroundButton() {
		WHITE_BACKGROUND_BUTTON.click();
	}
    
	//@given corresponding method
	public String getButton_Exists(String button) {

		if (button.contains("Set SkyBlue Background"))
			button = "Set SkyBlue Background";
		else if (button.contains("Set SkyWhite Background"))
			button = "Set SkyWhite Background";

		return button;
	}
	
	//@when corresponding method
	public void clickButton(String button_type) {
		
		if (button_type.equals("Set SkyBlue Background")) {
			System.out.println("clicking on SkyBlue button");
			clickSkyBlueBackgroundButton();
			}
		else if(button_type.equals("Set SkyWhite Background")){
			System.out.println("clicking on White button");
			clickWhiteBackgroundButton();
		}
	}
	
	//@then corresponding method
	public String validateBlueBackground()
	{
		//System.out.println("Color:"+SKY_BLUE_BACKGROUND_VALIDATION.getCssValue("background-color"));
		return SKY_BLUE_BACKGROUND_VALIDATION.getCssValue("background-color"); //skyblue
	}
	
	public String validateWhiteBackground()
	{
		//System.out.println("Color:"+WHITE_BACKGROUND_VALIDATION.getCssValue("background-color"));
		return WHITE_BACKGROUND_VALIDATION.getCssValue("background-color"); //white
	}

}
