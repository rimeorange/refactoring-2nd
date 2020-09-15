class Shipment {
    get trackingInfo() {
        return '${this.shippingCompany}: ${this.trackingNumber}';
    }
    get trackingInformation()   {return this,_trackingInformation;}
    set trackingInformation(aTrackingInformaion) {
        this._trackingInformation = aTrackingInformaion;
    }

    get shippingCompany()   {return this,_shippingCompany;} //배송 회사
    set shippingCompany(arg) {this.shippingCompany = arg;}

}
