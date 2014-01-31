function BaseController($scope, $http) {

    // Resimlerin servisten geldiğini simüle ediyoruz.
    var Images = new Array();
    Images.push({ _Id: 1, Name: "Minik Panda", ImageUrl: "img/1.jpg", ThumbImageUrl: "img/_thumb/1.jpg" });
    Images.push({ _Id: 2, Name: "Sonsuz Deniz", ImageUrl: "img/2.jpg", ThumbImageUrl: "img/_thumb/2.jpg" });
    Images.push({ _Id: 3, Name: "Parmak İzi", ImageUrl: "img/3.jpg", ThumbImageUrl: "img/_thumb/3.jpg" });
    Images.push({ _Id: 4, Name: "Astronotlar", ImageUrl: "img/4.jpg", ThumbImageUrl: "img/_thumb/4.jpg" });
    Images.push({ _Id: 5, Name: "Kelebek", ImageUrl: "img/5.jpg", ThumbImageUrl: "img/_thumb/5.jpg" });
    $scope.ImageList = Images;

    // Küçük resim tıklandığında değiştirmekle yükümlü event
    $scope.ChangeImage = function () {

    }
}