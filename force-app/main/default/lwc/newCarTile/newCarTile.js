import { LightningElement, api, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
import { NavigationMixin } from 'lightning/navigation';

export default class NewCarTile extends NavigationMixin(LightningElement) {
    @api car;
    @api carSelectedId;

    
    @wire(CurrentPageReference) pageRef;

    handleCarSelect(event){
        event.preventDefault();

        const carId = this.car.Id;

        const carSelect = new CustomEvent('carselect', {detail:carId});
        this.dispatchEvent(carSelect);

        fireEvent(this.pageRef, 'carselect', this.car);
    }

    get isCarSelected(){
        if(this.car.Id === this.carSelectedId){
            return "tile selected";
        }
        return "tile";
    }
    bookcar(){
        console.log('inside button222');
        const carTypeSelectionChangeEvent = new CustomEvent('cartypeselect', {detail : this.car.Id});
        this.dispatchEvent(carTypeSelectionChangeEvent);
    }
   
}