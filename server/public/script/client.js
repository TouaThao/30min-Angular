let foodApp = angular.module('foodApp', []);
foodApp.controller('FoodController', [function(){
    let self = this
    self.test = 'This is Test'
    self.people = ['Me','Myself','I']
    self.inConsole = ''
    self.showArrayObject = [{ Food:'pizza', cost:'10.99'},{Food:'hamburger', cost:'15'}]
    self.showMe = false;
    self.invisible = function(){
        self.showMe = !self.showMe
    }
    self.press = function(){
        console.log(self.first)
    self.secondPress = function(){ 
        console.log(self.second)
    }
    }
}])