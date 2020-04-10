package com.apex.RegistrationStepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.apex.registration.constant.RegistrationConstant;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegistrayionStemDefination implements RegistrationConstant{
	
	WebDriver driver;
	
	@Given("^you are on login page$")
	public void you_are_on_login_page() throws InterruptedException {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Lovy\\chrome79\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://ecommerce.saipratap.net/customerlogin.php");

	}

	@When("^login page title is Ez Shop Online$")
	public void login_page_title_is_Ez_Shop_Online() throws InterruptedException {
		String title = driver.getTitle();
		System.out.println("Title of the page is: " + title);
		Assert.assertEquals("Ez Shop Online", title);
		// Thread.sleep(4000);
	}
	 
	@Then("^user click signUP buton$")
	public void user_click_signUP_buton() {
		driver.findElement(By.xpath(SIGNUP_BTN_XPATH_LOCATOR)).click();
	}

	@Then("^user clicks gender buton$")
	public void user_clicks_gender_buton() {
		driver.findElement(By.xpath(GENDER_BTN_XPATH_LOCATOR)).click();
	}

	@Then("^user enters contacts details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"  and \"([^\"]*)\"  and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"  and\"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_contacts_details_and_and_and_and_and_and_and_and_and_and_and_and_and_and_and(String FirstName, String lastName, String dateOfBirth, String monthOfBirth,
			String yearOfBirth, String emailID, String houseNumber, String streetName, String city, String county,
			String country, String postal, String dPhone, String ePhone, String password, String cPassword) {

		
		driver.findElement(By.xpath(FIRSTNAME_XPATH_LOCATOR)).sendKeys(FirstName);
		driver.findElement(By.xpath(LASTNAME_XPATH_LOCATOR)).sendKeys(lastName);
		driver.findElement(By.xpath(DATE_OF_BIRTH_XPATH_LOCATOR)).sendKeys(dateOfBirth);
		driver.findElement(By.xpath(MONTH_OF_BIRTH_XPATH_LOCATOR)).sendKeys(monthOfBirth);
		driver.findElement(By.xpath(YEAR_OF_BIRTH_XPATH_LOCATOR)).sendKeys(yearOfBirth);
		driver.findElement(By.xpath(EMAILID_XPATH_LOCATOR)).sendKeys(emailID);
		driver.findElement(By.xpath(HOUSE_NO_XPATH_LOCATOR)).sendKeys(houseNumber);
		driver.findElement(By.xpath(STREET_NAME_XPATH_LOCATOR)).sendKeys(streetName);
		driver.findElement(By.xpath(CITY_NAME_XPATH_LOCATOR)).sendKeys(city);
		driver.findElement(By.xpath(COUNTY_NAME_XPATH_LOCATOR)).sendKeys(county);
		driver.findElement(By.xpath(COUNTRT_NAME_XPATH_LOCATOR)).sendKeys(country);
		driver.findElement(By.xpath(POSTCODE_XPATH_LOCATOR)).sendKeys(postal);
		driver.findElement(By.xpath(DAY_PHONE_XPATH_LOCATOR)).sendKeys(dPhone);
		driver.findElement(By.xpath(EVE_PHONE_XPATH_LOCATOR)).sendKeys(ePhone);
		driver.findElement(By.xpath(PASSWORD__XPATH_LOCATOR)).sendKeys(password);
		driver.findElement(By.xpath(CPASSWORD_XPATH_LOCATOR)).sendKeys(cPassword);
		
	}

	@Then("^user clicks on terms$")
	public void user_clicks_on_terms() {
		driver.findElement(By.xpath(TERMS_XPATH_LOCATOR)).click();

	}
	
	@Then("^user clicks sign up button$")
	public void user_clicks_sign_up_button() {
		driver.findElement(By.xpath(SUBMIT_BTN_XPATH_LOCATOR)).click();
	}


	@Then("^validate if user is already singedUP$")
	public void validate_if_user_is_already_singedUP() throws InterruptedException {
		driver.findElement(By.xpath(ALREADY_SIGNED_MSG_XPATH_LOCATOR)).isDisplayed();
		System.out.println("This email address is already registered");
		Thread.sleep(400);

	}

	@Then("^close the window$")
	public void close_the_window() throws InterruptedException {
		driver.quit();
		

	}

}
