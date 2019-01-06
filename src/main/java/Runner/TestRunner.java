package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/hp/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/deal.feature", //the path of the feature files
		glue={"stepOfDefinations"}, //the path of the step definition files
		plugin= {"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_output/cucumber.xml"},//to display different type of output
		monochrome =true,//display the console output in readable form
		strict=true,//it will check if any step is not defined in step defination file
		dryRun = false // to check the mapping with proper between feature file and step defination file
)

public class TestRunner {
	
	
}

