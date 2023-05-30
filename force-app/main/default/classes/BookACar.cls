public with sharing class BookACar {
    @AuraEnabled
    public static string bookCar(String contactId, String carId){
        try {
            List<Car__c> car=[SELECT Id,Per_Day_Rent__c, Name, Picture__c, Contact__r.Name,
            Geolocation__latitude__s, Geolocation__longitude__s,Mileage__c,Car_Type__c
            FROM Car__c 
            WHERE Available_For_Rent__c = true 
            AND Id =: carId];
            System.debug('ritik'+carId);
            Car__c c = new car__c();
            c.Per_Day_Rent__c=car[0].Per_Day_Rent__c;
            c.Name=car[0].Name;
            c.Picture__c=car[0].Picture__c;
            c.Contact__c=contactId;
            c.Geolocation__latitude__s=car[0].Geolocation__latitude__s;
            c.Geolocation__longitude__s=car[0].Geolocation__longitude__s;
            c.Available_For_Rent__c=true;
            c.Mileage__c=car[0].Mileage__c;
            c.Car_Type__c=car[0].Car_Type__c;
            insert c;
            return c.Id;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}