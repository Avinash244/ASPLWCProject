import { LightningElement } from 'lwc';

export default class DatatableExample extends LightningElement {
    columns=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'}
    ]
    data=[
        {Id:'1',Name:'John'},
         {Id:'2',Name:'Mark'}
    ]
}