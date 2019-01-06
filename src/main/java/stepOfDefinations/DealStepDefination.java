package stepOfDefinations;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;


public class DealStepDefination {
	WebDriver driver;
	@Given ("^User is present on the login page$")
	public void user_present_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "C:/chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("http://www.freecrm.com");
	}
	
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
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable dt1)
	{
		
		 
		 List<List<String>> list1 = dt1.asLists(String.class);
		
		
		driver.findElement(By.name("username")).sendKeys(list1.get(0).get(0));
		 driver.findElement(By.name("password")).sendKeys(list1.get(0).get(1));
		 
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
@Then("^user moves to new deal page$")
public void user_moves_new_deal_page()
{
	driver.switchTo().frame("mainpanel");
	Actions act = new Actions(driver);
	act.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
	driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	
}

@Then("^user enters deal details$")
public void user_enters_deal_details(DataTable dt)
{

	List<List<String>> list = dt.asLists(String.class);
	driver.findElement(By.id("title")).sendKeys(list.get(0).get(0));
	
	 driver.findElement(By.id("title")).sendKeys(list.get(0).get(0));
	 driver.findElement(By.id("amount")).sendKeys(list.get(0).get(1));
	 driver.findElement(By.id("probability")).sendKeys(list.get(0).get(2));
	 driver.findElement(By.id("commission")).sendKeys(list.get(0).get(3));
}

@Then("^close the browser$")
public void close_the_browser()
{
	driver.close();
}

}


