export default ['$scope', '$http', '$state', 'userService', 'auth', ($scope, $http, $state, userService, auth) => {
    initReceipt();
    const API_HOST = 'http://77.55.230.115:3030';

    $scope.userId = auth;

    $scope.receipts = [];
    $scope.modalShow = false;
    $scope.detailShow = false;
    $scope.currentDetail = {};
    $scope.invalidAlert = false;

    $http.post(`${API_HOST}/receipts`, { id: $scope.userId })
        .then(({ data }) => {
            console.log(data);
        })
        .catch(e => {
            console.error('Panel Controller ERROR:', e);
        });

    $scope.addReceipt = () => {
        $scope.invalidAlert = false;
        if (!$scope.receiptFile.base64 || !$scope.receiptName || !$scope.shopName || !$scope.purchaseTime || !$scope.warrantyRange || !$scope.warrantyType) {
            document.getElementById('modal-main').scrollTop = 0;
            $scope.invalidAlert = true;
        } else {
            const newRec = {
                image: $scope.receiptFile.base64,
                name: $scope.receiptName,
                shop: $scope.shopName,
                purchaseTime: $scope.purchaseTime,
                warrantyRange: $scope.warrantyRange,
                warrantyType: $scope.warrantyType,
            };

            if ($scope.receiptDesc)
                newRec.description = $scope.receiptDesc;

            $http.post(`${API_HOST}/image`, { body: newRec.image }, { headers: { 'Content-Type': 'application/json' } })
                .then(({ data }) => {
                    console.log(data);
                })
                .catch(e => {
                    console.error(e);
                });

            $scope.receipts.push(newRec);
            $scope.modalShow = false;
            initReceipt();
            /** TODO: save to db */
        }
    };

    $scope.showDetail = (bill, index) => {
        $scope.currentDetail = bill;
        $scope.currentDetail.index = index;
        $scope.detailShow = true;
    };

    $scope.deleteReceipt = () => {
        $scope.receipts.splice($scope.currentDetail.index, 1);
        $scope.currentDetail = {};
        $scope.detailShow = false;
    };

    $scope.logout = () => {
        userService.logout();
        $state.go('home', {}, { reload: true });
    }

    function initReceipt() {
        $scope.receiptFile = null;
        $scope.receiptName = '';
        $scope.shopName = '';
        $scope.purchaseTime = null;
        $scope.warrantyRange = '';
        $scope.warrantyType = '';
        $scope.receiptDesc = '';
    }
}];
