package com.apex.loginStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

import com.apex.login.constant.LoginConstant;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

//import junit.framework.Assert;
import org.junit.Assert;

public class LoginStepDefination implements LoginConstant{

	
	WebDriver driver;
	
	@Given("^user is already on login Page$")
	public void user_is_already_on_login_Page() throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lovy\\chrome79\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://ecommerce.saipratap.net/customerlogin.php");

	}

	@When("^title of login page is Ez Shop Online$")
	public void title_of_login_page_is_Ez_Shop_Online() throws InterruptedException {
		String title = driver.getTitle();
		System.out.println("Title of the page is: " + title);
		Assert.assertEquals("Ez Shop Online", title);
	}

	// Regular Expression
	// 1. \"([^\"]*)\"
	// 2. \"(.*)\"
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String usernaem, String password) {
		driver.findElement(By.name(EMAIL_NAME_LOCATOR)).sendKeys(usernaem);
		driver.findElement(By.name(PASSWORD_NAME_LOCATOR)).sendKeys(password);

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.linkText(LOGIN_BTN_LINK_TEXT_LOCATOR)).click();

	}

	@Then("^validate user is on home page$")
	public void validate_user_is_on_home_page()   {
		try {
			driver.findElement(By.xpath(LOGGED_SUCESSFULLY_XPATH_LOCATOR)).isDisplayed(); 
			String loginSuccessfulURL = driver.getCurrentUrl();
			System.out.println("Login Sucessful URL is: "+ loginSuccessfulURL);
			String textValid = driver.findElement(By.xpath(LOGGED_SUCESSFULLY_XPATH_LOCATOR)).getText();
			System.out.println(textValid);
			
		} catch (Exception e) {
			driver.findElement(By.xpath(LOGGED_UNSUCESSFULLY_XPATH_LOCATOR)).isDisplayed();
			//WebElement Text= driver.Findelement(By.cssselector(xpath).gettext();
			String textInvalid = driver.findElement(By.xpath(LOGGED_UNSUCESSFULLY_XPATH_LOCATOR)).getText();
			System.out.println(textInvalid);
		}
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
