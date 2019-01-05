package stepOfDefinations;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.ClickAction;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination {
	
	WebDriver driver;
	@Given ("^User is present on the login page$")
	public void user_present_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("http://www.freecrm.com");
	}
	
//	@SuppressWarnings("deprecation")
	@When("^title of login page is free crm$")
	public void title_of_login_page() {
		String title = driver.getTitle();
		//Assert.assertEquals(title ,"");
		if (title.equals("#1 Free CRM software in the cloud for sales and service"))
		{
			System.out.println("title matched");
		}
		else {
			System.out.println("title not matched");
		}
	}
	
	//two type of data driver approach : with example and without example.
	//below is the without example keyword
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password)
	{
		driver.findElement(By.name("username")).sendKeys(username);
		 driver.findElement(By.name("password")).sendKeys(password);
	}
	
	
	@Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
	 WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
		
}
	
	
@Then("^user is on home page$")
public void user_is_on_hopme_page(){
String title = driver.getTitle();
System.out.println("Home Page title ::"+ title);
//Assert.assertEquals("CRMPRO", title);
if (title.equals("CRMPRO"))
{
	System.out.println("title matched");
}
else {
	System.out.println("title not matched");
}

}

@Then("^user moves to new contact page$")
public void user_moves_to_new_contact_page() {
	driver.switchTo().frame("mainpanel");
	Actions act = new Actions(driver);
	act.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	
	
   
}

@Then("^user enters contacts details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
public void user_enters_contacts_details(String firstname,String lastname,String position)
{
	driver.findElement(By.id("first_name")).sendKeys(firstname);
	 driver.findElement(By.id("surname")).sendKeys(lastname);
	 
	 driver.findElement(By.name("client_lookup")).sendKeys(position);
	 driver.findElement(By.xpath("//input[@type='submit'and @value='Save']")).click();
}

@Then("^close the browser$")
public void close_the_browser()
{
	driver.close();
}

}
