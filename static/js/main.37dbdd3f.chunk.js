(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){},20:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(8),i=t.n(a),l=(t(15),t(3)),c=t(4),u=t(6),s=t(5),d=t(7),h=t(1),f=t.n(h)()({loader:function(){return t.e(1).then(t.bind(null,38))},loading:function(){return null}}),v=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(s.a)(e).call(this,n))).hasLoadedSuccessfully=function(){var n=t.state,e=n.loading,o=n.error,r=n.profile;return!(e||o||!r)},t.hasErrorWhileLoading=function(){var n=t.state,e=n.loading;return!(!n.error||e)},t.isLoading=function(){var n=t.state,e=n.loading,o=n.error;return!(!e||o)},t.state={profile:null,error:!1,loading:!0},t}return Object(d.a)(e,n),Object(c.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("http://www.mocky.io/v2/5a5e38f3330000b0261923a5").then(function(e){e.json().then(function(e){var t=e.profile;n.setState({profile:t,loading:!1,error:!1})})}).catch(function(e){n.setState({error:!0,loading:!1})})}},{key:"render",value:function(){var n=this.state.profile;return this.isLoading()?r.a.createElement("div",null,"Carregando"):this.hasErrorWhileLoading()?r.a.createElement("div",null,"erro"):this.hasLoadedSuccessfully()?r.a.createElement(f,{profile:n}):null}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},9:function(n,e,t){n.exports=t(20)}},[[9,8,7]]]);
//# sourceMappingURL=main.37dbdd3f.chunk.js.map