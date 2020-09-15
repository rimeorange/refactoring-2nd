class Shipment {
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation()   {return this,_trackingInformation;}
    set trackingInformation(aTrackingInformaion) {
        this._trackingInformation = aTrackingInformaion;
    }
}
