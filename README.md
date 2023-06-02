# RentACar Application

RentACar is an application built on Salesforce Platform to demonstrate the Salesforce UI Frameworks like LWC or Aura. The application allows end users to search for different car, get their current locations on map and easily review it.

## Demo
![3](https://github.com/ritik-k03/RentACar2/assets/132000149/843c3dc3-3685-4adf-86d1-47853ae8531c)
![4](https://github.com/ritik-k03/RentACar2/assets/132000149/f99b3f96-4bf3-4b5f-bd36-d18cc3826241)
![5](https://github.com/ritik-k03/RentACar2/assets/132000149/964371f9-f350-42b2-8ec6-3e14bba90f6f)
![6](https://github.com/ritik-k03/RentACar2/assets/132000149/99c60f6f-d4b6-44a3-a17d-a6e9e0c1e41f)
![7](https://github.com/ritik-k03/RentACar2/assets/132000149/62f45798-a77c-4459-b13e-b1541249ad2a)
![8](https://github.com/ritik-k03/RentACar2/assets/132000149/014ed06f-a51b-4937-81eb-9da7743a009f)
![Screenshot from 2023-05-05 15-37-36](https://github.com/ritik-k03/RentACar2/assets/132000149/d6b0f0c2-21c4-4075-a9be-4eeae3912f1c)


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


