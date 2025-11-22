# JavascriptBasics

<h3> It has the most important basics of Javascript </h3>
<p>Learnt from YouTube <b>(Akshay Saini's Namaste Javascript)</b></p>

<table>
  <tr>
    <th>Feature</th>
    <th>Local Storage	</th>
    <th>Session Storage</th> 
  </tr>
  <tr>
    <td>Scope</td>
    <td>Shared across all tabs/windows with same origin (same protocol, domain, and port)</td>
    <td>Specific to a single tab/window</td>
  </tr>
  <tr>
    <td>Lifetime</td>
    <td>Data persists even after the browser is closed and reopened. It remains stored until explicitly deleted by the user or by website code.</td>
    <td>Cleared when tab/window closes</td>
  </tr>   
  <tr>
    <td>Capacity</td>
    <td>Larger (5-10MB)</td>
    <td>Smaller (around 5MB)</td>
  </tr>
  <tr>
    <td>Use Cases</td>
    <td>User preferences, offline data, caching</td>
    <td>Temporary session data, form data, cart data</td>
  </tr>
</table>

<b>OPTIONAL CHAINING</b> - used to access deeply nested properties. It avoids runtime errors by returning 'undefined' when trying to access properties and methods of undefined or null. 

<b>Duck Typing</b> - Concept in JS where object's behaviour matters but not the type. Eg - any component is allowed as long as it has render method. React doesn't require them to extend a specific class.
