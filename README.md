# RentACar Application

RentACar is an application built on Salesforce Platform to demonstrate the Salesforce UI Frameworks like LWC or Aura. The application allows end users to search for different car, get their current locations on map and easily review it.

## RentACar data scripts

CreateData.apxc: This file has the code to create the data to be used in your RentACar Application

DeleteData.apxc: This file has the code to delete the data created by CreatedData.apxc file

CreateDataTest.apxc: TestClass for CreateData class

DeleteDataTest.apxc: TestClass for DeleteData class

## How to Call CreateData class

Once you have created your "CreateData" class, follow below steps to call the class method to generate data
Open your developer console
Click on 'Debug' menu item
Select 'Open Execute Anonymous Window'
Type CreateData.createPackageData();

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
