export default ['$scope', $scope => {
    initReceipt();

    $scope.receipts = [];
    $scope.modalShow = false;
    $scope.invalidAlert = false;

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

            $scope.receipts.push(newRec);
            $scope.modalShow = false;
            initReceipt();
            /** TODO: save to db */
        }
    };

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
