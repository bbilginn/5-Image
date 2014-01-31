function BaseController($scope, $http) {

    // Resimlerin servisten geldiğini simüle ediyoruz.
    $scope.ImageList = [
        { _Id: 1, Name: "Minik Panda", ImageUrl: "img/1.jpg", ThumbImageUrl: "img/_thumb/1.jpg" },
        { _Id: 2, Name: "Sonsuz Deniz", ImageUrl: "img/2.jpg", ThumbImageUrl: "img/_thumb/2.jpg" },
        { _Id: 3, Name: "Parmak İzi", ImageUrl: "img/3.jpg", ThumbImageUrl: "img/_thumb/3.jpg" },
        { _Id: 4, Name: "Astronotlar", ImageUrl: "img/4.jpg", ThumbImageUrl: "img/_thumb/4.jpg" },
        { _Id: 5, Name: "Kelebek", ImageUrl: "img/5.jpg", ThumbImageUrl: "img/_thumb/5.jpg" }
    ];

    // İlk resim sabit gelir.
    $scope.CurrentImage = $scope.ImageList[0];

    // Küçük resim tıklandığında değiştirmekle yükümlü event.
    $scope.ChangeImage = function (CurrentImage) {
        $scope.CurrentImage = CurrentImage;
    }
}