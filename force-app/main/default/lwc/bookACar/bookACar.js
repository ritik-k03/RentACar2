import { LightningElement, api, wire, track } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import bookCar from '@salesforce/apex/BookACar.bookCar';
import { NavigationMixin } from 'lightning/navigation';

export default class BookACar extends NavigationMixin(LightningElement) {
    @api carTypeId='';
    @api isLoaded = false;
    @track cars;
    @track selectedCarId;
    @track showcars =true;
    @track showform=false;
    @wire(getCars, {carTypeId : '$carTypeId'})
    wiredCars({data, error}){
        if(data){
            this.cars = data;
        } else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    carSelectHandler(event){
        const carId = event.detail;
        this.selectedCarId = carId;
        console.log('this.selectedCarId.'+this.selectedCarId);
        this.showcars=false;
        this.showform=true;
    }

    get carsFound(){
        if(this.cars){
            return true;
        }
        return false;
    }

    handleSaveRecord(event){
        this.isLoaded=true;
        bookCar({contactId : event.detail.id, carId: this.selectedCarId}).then(result =>{
            if(result){
                this.showToast('Success', event.detail.id, 'success');
            
            this.isLoaded=false;
            var compDefinition = {
                componentDef: "c:carSearch",
                attributes: {
                    propertyValue: "500"
                }
            };
            // Base64 encode the compDefinition JS object
            var encodedCompDef = btoa(JSON.stringify(compDefinition));
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: 'https://rksoftware6-dev-ed.develop.lightning.force.com/lightning/n/Rent_A_Car'
                }
            });
            
            }
        }).catch(error =>{
            this.showToast('ERROR', error.body.message, 'error');
            this.isLoaded=false;
        });
    }
    updateRecordView() {
        setTimeout(() => {
             eval("$A.get('e.force:refreshView').fire();");
        }, 1000); 
     }
}