const AppComponent = {
    templateUrl: "/src/app/app.component.html",
    controller: function ($scope, $http) {
        console.log('test');
        $scope.result= 'hidden'
        $scope.resultMessage;
        //form data is an object holding the name, email and message
        $scope.formdata; 
        $scope.submitButtonDisabled = false;
        //Error messages show AFTER form has been submitted
        $scope.submitted = false;
        console.log('buh');
        console.log($scope.formdata);
        //When submit pressed
        $scope.submit = function(contactform) {
            console.log('boom');
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            if(contactform.$valid){
                $http({
                    method: 'POST',
                    url: 'contact-form.php',
                    //param method from jQuery
                    data: $.param($scope.formdata), 
                    //set the headers so angular passing info as form data (not request payload)
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(data){
                    console.log(data);
                    //success comes from the return json object
                    if(data.success){
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.Message;
                        $scope.result = 'bg-success';
                    }
                    else{
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.Message;
                        $scope.result = 'bg-danger';
                    }
                });
            }
            else{
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed bruh';
                $scope.result = 'bg-danger';
            }
        }
        console.log(formdata);

    }

};