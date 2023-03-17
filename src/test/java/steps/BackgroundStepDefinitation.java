package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BackgroundPage;
import pages.BrowserFactory;

public class BackgroundStepDefinitation extends BrowserFactory {

	public WebDriver driver;
	public BackgroundPage bp;
	
	@Given ("^\"([^\"]*)\" button exists$")
	public void button_exists(String button) {
		BrowserFactory.init();
		bp = PageFactory.initElements(driver, BackgroundPage.class);
		String getText = bp.getButton_Exists(button);
		Assert.assertEquals(button, getText);
		
	}
	
	@When ("^I click on the \"([^\"]*)\"$")
	public void user_click_on_the_button(String button_type) {
		bp.clickButton(button_type);
	}
	
	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() {
	    String skyBlue = bp.validateBlueBackground();//obtain color in rgba 
	    String hexValue = Color.fromString(skyBlue).asHex();//convert rgba to hex
	    System.out.println("Hex code for color:" + hexValue);
	    Assert.assertEquals(hexValue, skyBlue);
	}

	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white() {
	   String white = bp.validateWhiteBackground();
	   String hexValue = Color.fromString(white).asHex();
	   System.out.println("Hex code for color:" + hexValue);
	   Assert.assertEquals(hexValue, white);
	}
	
}
