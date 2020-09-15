class TrackingInformation {
    get shippingCompany()   {return this,_shippingCompany;} //배송 회사
    set shippingCompany(arg){this._shippingCompany = arg;}
    get trackingNumber()    {return this._trackingNumber;}  //추적 번호
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display() {
        return '${this.shippingCompany}: ${this.trackingNumber}';
    }
}