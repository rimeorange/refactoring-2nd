class Organization {
    constructor(data) {
        this._data = data;
    }
}

const organization= {name:"애크미 구스베리", country:"GB"};

function getRawDataOfOrganization(){
    return organization._data;
}

function getOrganization(){
    return organization;
}
