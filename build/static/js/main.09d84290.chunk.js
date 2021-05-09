(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{20:function(t,e,n){t.exports={image:"Cast_image__pFL1u",list:"Cast_list__35Gie"}},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(29),r=n.n(a),i=n(11),o=n(4),s=n(5),l=n(7),u=n(6),h=n(2),j=n(14),p=n.n(j),b="https://api.themoviedb.org/3",d="f6dc6a80ab643da3afb0355d292a0e10",v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"batman";return p.a.get("".concat(b,"/search/movie?api_key=").concat(d,"&language=en-US&page=1&include_adult=false&query=").concat(t))},m="/",O="/movies",f="/movies/:movieId",x="/movies/:movieId/cast",g="/movies/:movieId/reviews",y=n(0),k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={popular:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;p.a.get("".concat(b,"/trending/movie/week?api_key=").concat(d)).then((function(e){console.log(e),t.setState({popular:e.data.results})}))}},{key:"render",value:function(){var t=this.state.popular;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h2",{children:"Trending today"}),Object(y.jsx)("ul",{children:t.map((function(t){return Object(y.jsx)("li",{children:Object(y.jsx)(i.b,{to:"".concat(O,"/").concat(t.id),children:t.title})},t.id)}))})]})}}]),n}(c.Component),w=n(20),S=n.n(w),_=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={cast:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t,e=this,n=this.props.match.params.movieId;(t=n,p.a.get("".concat(b,"/movie/").concat(t,"/credits?api_key=").concat(d))).then((function(t){console.log("Res :",t),e.setState({cast:t.data.cast})}))}},{key:"render",value:function(){var t=this.state.cast;return Object(y.jsx)("ul",{children:t.map((function(t){return Object(y.jsxs)("li",{className:S.a.list,children:[Object(y.jsx)("img",{className:S.a.image,src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:""}),Object(y.jsx)("p",{children:t.name}),Object(y.jsx)("p",{children:t.character})]},t.id)}))})}}]),n}(c.Component),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[]},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t,e=this,n=this.props.match.params.movieId;(t=n,p.a.get("".concat(b,"/movie/").concat(t,"/reviews?api_key=").concat(d))).then((function(t){console.log("Res",t),e.setState({reviews:t.data.results})}))}},{key:"render",value:function(){var t=this.state.reviews;return Object(y.jsx)("ul",{children:t.map((function(t){return Object(y.jsxs)("li",{children:[Object(y.jsx)("p",{children:t.author}),Object(y.jsx)("p",{children:t.content})]},t.id)}))})}}]),n}(c.Component),F=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={searchFilm:{genres:[]}},t.onBackButton=function(){t.props.history.goBack()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t,e=this,n=this.props.match,c=n.params.movieId;console.log("match",n),(t=c,p.a.get("".concat(b,"/movie/").concat(t,"?api_key=").concat(d))).then((function(t){console.log("resData",t),e.setState({searchFilm:t.data})}))}},{key:"render",value:function(){var t=this.state.searchFilm,e=this.props.match.url;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{onClick:this.onBackButton,type:"button",children:"Go back"}),Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:""}),Object(y.jsxs)("h2",{children:[t.original_title," (",t.release_date,")"]}),Object(y.jsxs)("p",{children:["User score: ",10*t.vote_average,"%"]}),Object(y.jsx)("h3",{children:"Overview"}),Object(y.jsx)("p",{children:t.overview}),Object(y.jsx)("h3",{children:"Genres"}),t.genres.reduce((function(t,e){return"".concat(t," ").concat(e.name)}),""),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(i.c,{to:"".concat(e,"/cast"),children:"Cast"})}),Object(y.jsx)("li",{children:Object(y.jsx)(i.c,{to:"".concat(e,"/reviews"),children:"Reviews"})})]}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:x,component:_}),Object(y.jsx)(h.a,{exact:!0,path:g,component:C})]})]})})}}]),n}(c.Component),D=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={input:""},t.onChange=function(e){t.setState({input:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onSubmit)(t.state.input),t.setState({input:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.value;return Object(y.jsx)("div",{children:Object(y.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(y.jsx)("input",{value:t,onChange:this.onChange,type:"text"}),Object(y.jsx)("button",{type:"submit",children:Object(y.jsx)("span",{children:"Search film"})})]})})}}]),n}(c.Component),A=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={query:"",searchFilms:[]},t.onSubmit=function(e){var n=t.props.history;t.setState({query:e}),v(e).then((function(e){console.log("resData :",e),t.setState({searchFilms:e.data.results})})),n.push({pathname:n.pathname,search:"query=".concat(e)})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.location,e=new URLSearchParams(t.search).get("query");console.log("getMovies",e),e&&this.onSubmit(e)}},{key:"render",value:function(){var t=this.state.searchFilms;return Object(y.jsxs)("div",{children:[Object(y.jsx)(D,{onSubmit:this.onSubmit}),Object(y.jsx)("ul",{children:t.map((function(t){return Object(y.jsx)("li",{children:Object(y.jsx)(i.b,{to:"".concat(O,"/").concat(t.id),children:t.title})},t.id)}))})]})}}]),n}(c.Component),M=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={films:[]},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("header",{children:[Object(y.jsx)(i.c,{to:m,children:"Home page"}),Object(y.jsx)(i.c,{to:O,children:" Movies page"})]}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:m,component:k}),Object(y.jsx)(h.a,{path:f,component:F}),Object(y.jsx)(h.a,{exact:!0,path:O,component:A})]})]})}}]),n}(c.Component);n(62);r.a.render(Object(y.jsx)(i.a,{children:Object(y.jsx)(M,{})}),document.querySelector("#root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.09d84290.chunk.js.map