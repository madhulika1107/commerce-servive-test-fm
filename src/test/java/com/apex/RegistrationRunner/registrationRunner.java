package com.apex.RegistrationRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Lovy\\eclipse-workspace\\ecommerce-cucumber-fm\\src\\test\\java\\com\\apex\\RegistrationFeature\\registration.Feature", //the path of the feature files
glue = {"com.apex.RegistrationStepDefinations"},// the path of the step definition files
plugin =   {"pretty","html:test_registration_output", "json:jason_registration_output/cucmber.json", "junit:junit_registration_xml/cucumber.xml"},//to generate different type of reporting
monochrome = true, //Display the console output in proper readable format
strict = true,//it will check if the step is not defined in step definition file
dryRun = false)// to check if the mapping is proper between feature file and step definition file. Always it is a good practice to run with dryRun false first

public class registrationRunner {

}
