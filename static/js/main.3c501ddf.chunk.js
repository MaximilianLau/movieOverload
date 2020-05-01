(this["webpackJsonpmaximilian-lau-project-five"]=this["webpackJsonpmaximilian-lau-project-five"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.03bcfef0.png"},22:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),c=a(2),m=a(3),o=a(5),s=a(4),u=a(19),g=a.n(u),p=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"wrapper"},r.a.createElement("img",{src:g.a,alt:"logo of the website Overload"}),r.a.createElement("h1",null,r.a.createElement("span",null,"m"),"OV",r.a.createElement("span",null,"i"),"ERLOAD"),r.a.createElement("p",null,"movie rating aggregator"))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"wrapper"},r.a.createElement("p",null,"Copyright \xa9 2020 ",r.a.createElement("a",{href:"http://maximilianlau.com",target:"_blank",rel:"noopener noreferrer"},"Maximilian Lau.")),r.a.createElement("p",null,"Powered by React, The Movies DB, and OMDB"))}}]),a}(n.Component),d=a(6),h=a.n(d);var E=function(e){return void 0===e.rating[0]?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"IMDB Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"IMDB Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:10*e.rating[0].Value.substring(0,3)})),r.a.createElement("h4",{className:"ratingScore"},e.rating[0].Value.substring(0,3)))};var f=function(e){return void 0===e.rating[0]?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"RT Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"RT Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:e.rating[0].Value.replace("%","")})),r.a.createElement("h4",{className:"ratingScore"},e.rating[0].Value.replace("%","")/10))};var b=function(e){return void 0===e.rating[0]?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"Metacritic Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"Metacritic Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:e.rating[0].Value.substring(0,2)})),r.a.createElement("h4",{className:"ratingScore"},e.rating[0].Value.substring(0,2)/10))};var N=function(e){var t=e.imdbRating.map((function(t){return e.imdbRating[0].Value.substring(0,3)})),a=[parseFloat(t[0]),e.rtRating.map((function(t){return e.rtRating[0].Value.replace("%","")/10}))[0],e.mtRating.map((function(t){return e.mtRating[0].Value.substring(0,2)/10}))[0],e.tmdbRating].filter((function(e){return e})),n=(a.reduce((function(e,t){return e+t}),0)/a.length).toFixed(1);return n>=7?r.a.createElement("div",{className:"aggregate green"},r.a.createElement("h3",null,n)):n>=3.5&&n<7?r.a.createElement("div",{className:"aggregate orange"},r.a.createElement("h3",null,n)):n>3.5||n?r.a.createElement("div",{className:"aggregate red"},r.a.createElement("h3",null,n)):void 0},y=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={ratingsArray:[],imDB:[],rottenTomatoes:[],metaCritic:[],tmdb:e.tmDBRating},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://www.omdbapi.com/?apikey=accc0453&t=".concat(this.props.moreRatings);h()({method:"GET",url:t,dataType:"json"}).then((function(t){var a=t.data.Ratings;if(e.setState({ratingsArray:t.data.Ratings}),void 0!==a){var n=a.filter((function(e){return"Internet Movie Database"===e.Source})),r=a.filter((function(e){return"Rotten Tomatoes"===e.Source})),i=a.filter((function(e){return"Metacritic"===e.Source}));e.setState({imDB:n,rottenTomatoes:r,metaCritic:i})}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{rating:this.state.imDB}),r.a.createElement(f,{rating:this.state.rottenTomatoes}),r.a.createElement(b,{rating:this.state.metaCritic}),r.a.createElement(N,{imdbRating:this.state.imDB,rtRating:this.state.rottenTomatoes,mtRating:this.state.metaCritic,tmdbRating:this.state.tmdb}))}}]),a}(n.Component);var R=function(e){return null===e.image?r.a.createElement("div",null,r.a.createElement("img",{className:"imageResult",src:"https://via.placeholder.com/500x281.jpg/313131/808080?text=TOO+BAD+SO+SAD+No-Images-Available",alt:"Placeholder "})):r.a.createElement("div",null,r.a.createElement("img",{className:"imageResult",src:"https://image.tmdb.org/t/p/w500/".concat(e.image),alt:e.title}))};var O=function(e){return void 0===e.rating||0===e.rating?r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("p",null,"MoviesDB Rating:"),r.a.createElement("div",null),r.a.createElement("h4",{className:"ratingNegative"},"N/A")):r.a.createElement("div",{className:"ratingWrapper"},r.a.createElement("h5",null,"MoviesDB Rating:"),r.a.createElement("div",{className:"rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"35",high:"70",value:10*e.rating})),r.a.createElement("h4",{className:"ratingScore"},e.rating))};var j=function(e){return r.a.createElement("div",{className:"popularityWrapper"},r.a.createElement("p",null,"Popularity:"),r.a.createElement("h4",{className:"popularityScore"},e.popularity))},S=a(21),w=a(20),D=a.n(w);var A=function(e){var t=[];e.genre.map((function(a){e.genreIndex.genres.map((function(e){a===e.id&&t.push(e.name)}))}));var a=t.join(", ");return r.a.createElement("div",null,r.a.createElement("h5",{className:"genreType"},a))},k=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.setState({userSubmit:e.state.userInput}),""!==e.state.userInput&&e.setState({userInput:""},(function(){return e.performSearch()}))},e.performSearch=function(){var t="https://api.themoviedb.org/3/search/movie?api_key=4e34e370c74f17cdb9f681afc05efa93&query=".concat(e.state.userSubmit,"&page=1");h()({method:"GET",url:t,dataType:"json"}).then((function(t){e.setState({moviesArray:t.data.results})})),h()({method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list?api_key=4e34e370c74f17cdb9f681afc05efa93&language=en-US",dataType:"json"}).then((function(t){e.setState({genreArray:t.data})}))},e.handleUserInput=function(t){e.setState({userInput:t.target.value})},e.state={userInput:"",userSubmit:"",moviesArray:[],genreArray:[]},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"movieName",className:"visuallyHidden"},"enter movie name:"),r.a.createElement("input",{type:"text",id:"movieName",name:"movieName",placeholder:"OVER here!",value:this.state.userInput,onChange:this.handleUserInput}),r.a.createElement("button",{type:"submit",id:"movieButton"},r.a.createElement(S.a,null)))),r.a.createElement("ul",{className:"movieResults"},this.state.moviesArray.map((function(t){return r.a.createElement(D.a,{bottom:!0,key:t.id},r.a.createElement("li",{className:"movieEach"},r.a.createElement(R,{image:t.backdrop_path,title:t.original_title}),r.a.createElement("div",null,r.a.createElement("h2",null,t.original_title.toUpperCase(),"(",void 0===t.release_date?r.a.createElement("p",null,"N/A"):t.release_date.substring(0,4),") "),r.a.createElement(A,{genre:t.genre_ids,genreIndex:e.state.genreArray}),r.a.createElement(j,{popularity:t.popularity}),r.a.createElement(O,{rating:t.vote_average}),r.a.createElement(y,{moreRatings:t.original_title,tmDBRating:t.vote_average}))))}))))}}]),a}(n.Component),x=(a(48),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(k,null),r.a.createElement(v,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3c501ddf.chunk.js.map