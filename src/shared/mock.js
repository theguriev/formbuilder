window.beaglApp = window.beaglApp || {
  ajaxUrl: 'http://localhost/beagl/wp-json/beagl/',
  pluginUrl: 'http://localhost/beagl/wp-content/plugins/beagl/',
  nonce: '',
  adminEmail: 'eg@beagl.in',
  textDirection: 'ltr',
  backgroundColor: '#e9eaec',
  blogName: 'Beagl',
  homeUrl: 'http://localhost/beagl'
}

window.bgl = window.bgl || {
  fields: [],
  process: Object.create(null),
  notify: () => {}
}
