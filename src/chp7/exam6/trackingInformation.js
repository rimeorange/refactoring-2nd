class TrackingInformation {
    get trackingNumber()    {return this._trackingNumber;}  //추적 번호
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display() {
        return '${this.shippingCompany}: ${this.trackingNumber}';
    }
}
