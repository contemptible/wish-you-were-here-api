<h1 align="center">Wish You Were Here</h1>
<p align="center"><a href="https://contemptible.github.io/wish" target="_blank">(go to the live site)</a></p>

<h3>User Guide</h3>
<p>The Wish You Were Here API can be used to access the Weather Underground API, as well as the NPM package themeparks. It was specially written to consolidate these duties, and will likely be of little use to other developers.</p>

<h3>Endpoints</h3>
<ul><strong>/weather/:zip</strong>
<ul>GET<br />
Returns a Weather Underground object for the city with zip code zip.</ul></ul>

<ul><strong>/attractions/:rideID</strong>
<ul>GET<br />
Returns a themeparks object for the ride with ID rideID.</ul></ul>

<h3>Current Uses</h3>
<ul><li><a href="https://github.com/contemptible/wish" target="_blank">The Wish You Were Here app</a></li></ul>