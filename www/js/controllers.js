angular.module('starter.controllers', [])

  /*刚刚合并*/
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


.controller('RecommendCtrl', function($scope,$http,$ionicSideMenuDelegate,$ionicModal) {
  $http({
    url: 'http://localhost:3000/'
  }).success(function (res) {
    $scope.articles=res.data;
  })

  //文章模态框
  $ionicModal.fromTemplateUrl('templates/herdetail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.herdetail = modal;
  });
  $scope.createContact = function() {
    $scope.herdetail.hide();
  };
  //点击文章传参
  $scope.aount = function(id){
    $http.get('http://localhost:3000/a/'+ id).then(function(res){
      $scope.aounts=res.data.data;
      console.log($scope.aounts)
    })
  }

})

.controller('MyCtrl', function($scope,$http,$ionicSideMenuDelegate,$ionicModal) {
  $http({
    url: 'http://localhost:3000/'
  }).success(function (res) {
    $scope.articlese=res.data;
    console.log($scope.articlese[0].hot)
  });

  //头像点击传参
  $scope.count = function(id){
      $http.get('http://localhost:3000/'+ id).then(function(res){
        $scope.counts=res.data.data;
        $scope.name = $scope.counts[0].nick;
        $scope.Turl = $scope.counts[0].turl;
        $scope.Sign = $scope.counts[0].sign;
        $scope.Sign = $scope.counts[0].sign;
        $scope.Hot = $scope.counts[0].hot;
        $scope.Good = $scope.counts[0].good;
        $scope.Burl = $scope.counts[0].burl;

        console.log($scope.counts)
      })
  }

  //点击文章传参
  $scope.aount = function(id){
    $http.get('http://localhost:3000/a/'+ id).then(function(res){
      $scope.aounts=res.data.data;
      console.log($scope.aounts)
    })
  }
  //头像模态框
  $ionicModal.fromTemplateUrl('templates/detail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.detail = modal;
  });

  $scope.createContact = function() {
    $scope.detail.hide();
  };

  //文章模态框
  $ionicModal.fromTemplateUrl('templates/herdetail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.herdetail = modal;
  });

  $scope.createContact = function() {
    $scope.herdetail.hide();
  };

  //点赞传参
  $scope.hit = function (id) {
    $scope.id = id;
    $scope.ID = $scope.id - 1
    $http.put('http://localhost:3000/w/'+id,{id:id}).then(function (res) {
      if (res.data.success == true){
        $scope.articlese[$scope.ID].hot +=1;

      }
    })
   }

})




.controller('FindCtrl', function($scope,$http,$ionicSideMenuDelegate,$ionicModal) {
  $http({
    url: 'http://localhost:3000/'
  }).success(function (res) {
    $scope.articles=res.data;
    // console.log($scope.articles)
    console.log($scope.articles.length)
  })
  $scope.s = '关注'
  angular.forEach($scope.articles, function(data){
    console.log(data.nick);
  });
  $scope.click_k= function(a){
    // console.log(a)
    if (a ==$scope.articles.nick){
      if($scope.s == '已关注'){
        $scope.s = '关注'
      }else{
        $scope.s = '已关注'
      }
    }
  }

  //文章模态框
  $ionicModal.fromTemplateUrl('templates/herdetail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.herdetail = modal;
  });
  $scope.createContact = function() {
    $scope.herdetail.hide();
  };
  //C模态框
  $ionicModal.fromTemplateUrl('C.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.C = modal;
  });
  $scope.createContact = function() {
    $scope.C.hide();
  };

  //头像模态框
  $ionicModal.fromTemplateUrl('templates/detail.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.detail = modal;
  });
  $scope.createContact = function() {
    $scope.detail.hide();
  };
  //头像点击传参
  $scope.count = function(id){
    $http.get('http://localhost:3000/'+ id).then(function(res){
      $scope.counts=res.data.data;

      $scope.name1 = $scope.counts[0].nick;
      $scope.Turl1 = $scope.counts[0].turl;
      $scope.Sign1 = $scope.counts[0].sign;
      $scope.Sign1 = $scope.counts[0].sign;
      $scope.Hot1 = $scope.counts[0].hot;
      $scope.Good1 = $scope.counts[0].good;
      $scope.Burl1 = $scope.counts[0].burl;

      console.log($scope.name1)
    })
  }
  //点击文章传参
  $scope.aount = function(id){
    $http.get('http://localhost:3000/a/'+ id).then(function(res){
      $scope.aounts=res.data.data;
      console.log($scope.aounts)
    })
  }

  //不同类型的故事传参
  $scope.count = function(id){
    $http.get('http://localhost:3000/as/'+ id).then(function(res){
      $scope.counts=res.data.data;
      $scope.Type = $scope.counts[0].type;
      console.log($scope.counts)
    })
  }

})


  .controller('StoryCtrl', function($scope,$http,$ionicSideMenuDelegate,$ionicModal) {
    $scope.settings = {
      enableFriends: true
    };

    $http({
      url: 'http://localhost:3000/'
    }).success(function (res) {
      $scope.articlese=res.data;
    })

    //头像模态框
    $ionicModal.fromTemplateUrl('templates/detail.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.detail = modal;
    });

    $scope.createContact = function() {
      $scope.detail.hide();
    };


    //文章模态框
    $ionicModal.fromTemplateUrl('templates/herdetail.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.herdetail = modal;
    });

    $scope.createContact = function() {
      $scope.herdetail.hide();
    };
    //头像点击传参
    $scope.count = function(id){
      $http.get('http://localhost:3000/'+ id).then(function(res){
        $scope.counts=res.data.data;
        $scope.name = $scope.counts[0].nick;
        $scope.Turl = $scope.counts[0].turl;
        $scope.Sign = $scope.counts[0].sign;
        $scope.Sign = $scope.counts[0].sign;
        $scope.Hot = $scope.counts[0].hot;
        $scope.Good = $scope.counts[0].good;
        $scope.Burl = $scope.counts[0].burl;
        console.log($scope.counts)
      })
    }
    //点击文章传参
    $scope.aount = function(id){
      $http.get('http://localhost:3000/a/'+ id).then(function(res){
        $scope.aounts=res.data.data;
        console.log($scope.aounts)
      })
    }

  })


  .controller("LeftCtrl",function ($ionicActionSheet,$timeout,$http,$ionicTabsDelegate,$scope,$ionicSideMenuDelegate,$ionicModal,UserService) {
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.Clear = function(){
      $(".padding").hide();
    }
    $scope.Appear = function () {
      $(".padding").show();
    }
    $scope.GOI = function () {
      location.href = "index.html";
    }

    $ionicModal.fromTemplateUrl('templates/search.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.createContact = function() {
      $scope.modal.hide();
    };

    $ionicModal.fromTemplateUrl('templates/write.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.write = modal;
    });

    $scope.createContact = function() {
      $scope.write.hide();
    };

    $ionicModal.fromTemplateUrl('templates/MyStory.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.MyStory = modal;
    });

    $scope.createContact = function() {
      $scope.MyStory.hide();
    };

  /*刚刚合并*/
    $ionicModal.fromTemplateUrl('templates/Daz.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Daz = modal;
    });

    $scope.createContact = function() {
      $scope.Daz.hide();
    };

    $ionicModal.fromTemplateUrl('templates/Login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Login = modal;
    });

    $scope.createContact = function() {
      $scope.Login.hide();
    };


    $scope.login={};
    $scope.isLogin = false;
    //登录事件
    $scope.Logins = function(){
      $http({
        method: 'POST',
        url: 'http://localhost:3000/l',
        data:$scope.login
      }).then(function (response) {
        if(response.data.success){
          $scope.Nick = response.data.data.nick;
          $scope.Burl = response.data.data.burl;
          $scope.Turl = response.data.data.turl;
          $scope.Sign = response.data.data.sign;
          UserService.setUser(response.data.data);
          console.log(response.data.data)

          $scope.Login.hide();
          $scope.Daz.hide();
          $ionicSideMenuDelegate.toggleLeft();
          $scope.isLogin = true;
        }else{
          alert('用户名或者密码错误')
        }
      }, function (response) {
        alert('请求失败');

      });
    };


    $ionicModal.fromTemplateUrl('templates/Register.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Register = modal;
    });

    $scope.createContact = function() {
      $scope.Register.hide();
    };

    $scope.user ={};
    //注册事件
    $scope.Resigters = function(){
      console.log($scope.user);
      $http({
        method: 'POST',
        url: 'http://localhost:3000',
        data:$scope.user
      }).then(function successCallback(response) {

        if(response.data.success){
          alert('注册成功,请登录')
          $scope.Register.hide();
        }else{
          alert('用户名已存在');
        }
      }, function errorCallback(response) {
        alert('注册失败')
      });
    };


    $ionicModal.fromTemplateUrl('Setting.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Setting = modal;
    });

    $scope.createContact = function() {
      $scope.Setting.hide();
    };

    $scope.Regiters = function(){
      $scope.Register.hide();
    }


    $ionicModal.fromTemplateUrl('Off.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Off = modal;
    });

    $scope.createContact = function() {
      $scope.Off.hide();
    };

    $ionicModal.fromTemplateUrl('Message.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Message = modal;
    });

    $scope.createContact = function() {
      $scope.Message.hide();
    };

    $ionicModal.fromTemplateUrl('MyRemmond.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.MyRemmond = modal;
    });

    $scope.createContact = function() {
      $scope.MyRemmond.hide();
    };

    $ionicModal.fromTemplateUrl('Read.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Read = modal;
    });

    $scope.createContact = function() {
      $scope.Read.hide();
    };

    $scope.selectTabWithIndex = function(index) {
      $ionicTabsDelegate.select(index);
    }

    //编辑资料
    $ionicModal.fromTemplateUrl('Editor.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Editor = modal;
    });

    $scope.createContact = function() {
      $scope.Editor.hide();
    };

    //修改资料
    $ionicModal.fromTemplateUrl('Material.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.Material = modal;
    });

    $scope.createContact = function() {
      $scope.Material.hide();
    };

    //修改昵称
    $ionicModal.fromTemplateUrl('NIC.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.NIC = modal;
    });

    $scope.createContact = function() {
      $scope.NIC.hide();
    };

    //城市
    $ionicModal.fromTemplateUrl('City.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.City = modal;
    });

    $scope.createContact = function() {
      $scope.City.hide();
    };

    //签名
    $ionicModal.fromTemplateUrl('QianMing.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.QianMing = modal;
    });
    $scope.createContact = function() {
      $scope.QianMing.hide();
    };

    //性别模态
    $scope.MAN = function() {

      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<i class="icon ion-female"></i>&nbsp;&nbsp;<span>女</span>' },
          { text: '<i class="icon ion-male" style="font-size: 10px;"></i>&nbsp;&nbsp;<span>男</span>' }
        ],
        titleText: '性别',

        buttonClicked: function(index) {
          return true;
        }
      });
      $timeout(function() {
        hideSheet();
      }, 10000);
    };

  })

