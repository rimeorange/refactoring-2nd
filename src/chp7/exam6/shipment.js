class Shipment {
    get trackingInfo() {
        return '${this.shippingCompany}: ${this.trackingNumber}';
    }
    get trackingInformation()   {return this,_trackingInformation;}
    set trackingInformation(aTrackingInformaion) {
        this._trackingInformation = aTrackingInformaion;
    }

    set shippingCompany(arg) {this._trackingInformation.shippingCompany = arg;}

}
