// <!-- beagl.in -->
//   <script>
//   if (document.getElementById('beagl-app') === null) {
//     var a = document.createElement('script')
//     a.setAttribute('src', '${window.beaglApp.pluginUrl}fe/dist_render/js/app.js')
//     a.setAttribute('id', 'beagl-app')
//     document.head.appendChild(a)
//   }
//   if (document.getElementById('beagl-app-vendors') === null) {
//     var b = document.createElement('script')
//     b.setAttribute('src', '${window.beaglApp.pluginUrl}fe/dist_render/js/chunk-vendors.js')
//     b.setAttribute('id', 'beagl-app-vendors')
//     document.head.appendChild(b)
//   }
//   if (document.getElementById('beagl-app-styles') === null) {
//     var s = document.createElement('link')
//     s.setAttribute('href', '${window.beaglApp.pluginUrl}fe/dist_render/css/app.css')
//     s.setAttribute('rel', 'stylesheet')
//     s.setAttribute('type', 'text/css')
//     s.setAttribute('media', 'all')
//     s.setAttribute('id', 'beagl-app-styles')
//     document.head.appendChild(s)
//   }
//   </script>
//   <!-- END beagl.in -->
//   <bgl-render url="${window.beaglApp.ajaxUrl}form/${id}"></bgl-render>
export default function (id) {
  return `<!-- beagl.in --><script>if(null===document.getElementById("beagl-app")){var a=document.createElement("script");a.setAttribute("src","${window.beaglApp.pluginUrl}fe/dist_render/js/app.js"),a.setAttribute("id","beagl-app"),document.head.appendChild(a)}if(null===document.getElementById("beagl-app-vendors")){var b=document.createElement("script");b.setAttribute("src","${window.beaglApp.pluginUrl}fe/dist_render/js/chunk-vendors.js"),b.setAttribute("id","beagl-app-vendors"),document.head.appendChild(b)}if(null===document.getElementById("beagl-app-styles")){var s=document.createElement("link");s.setAttribute("href","${window.beaglApp.pluginUrl}fe/dist_render/css/app.css"),s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("media","all"),s.setAttribute("id","beagl-app-styles"),document.head.appendChild(s)}</script><bgl-render url="${window.beaglApp.ajaxUrl}form/${id}"></bgl-render><!-- END beagl.in -->`
}
