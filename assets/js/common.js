(function (module) {
  //TODO: Add all common helpers here
  function AppCommon() {
    this.SDKVersion = "v1.1.1";
  }

  AppCommon.prototype.parseJwt  = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  module.AppCommon = new AppCommon();
})(this)
