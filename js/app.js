function Amiibo(name, img) {
    var self = this;
    self.name = name;
    self.img = img;
}

// Overall viewmodel for this screen, along with initial state
function amiiboViewModel() {
    // Non-editable catalog data - would come from the server
    self.amiiboList = ko.observableArray([
        new Amiibo("BoTW Amiibo Test 1", "imgsrc1"),
        new Amiibo("BoTW Amiibo Test 2", "imgsrc2"),
        new Amiibo("BoTW Amiibo Test 3", "imgsrc3")
    ]);    
}

ko.applyBindings(new amiiboViewModel());