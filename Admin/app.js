
//@require @packageOverrides

if (Ext.repoDevMode) {
    document.write('<link rel="stylesheet" type="text/css" href="resources/ext-theme-neptune/ext-theme-neptune-all.css"/>');
}

Ext.application({

    name: 'Admin',
    appFolder:'./Admin/app',
    requires: [
        'Admin.DummyText',
        'Ext.state.CookieProvider',
        'Ext.window.MessageBox',
        'Ext.tip.QuickTipManager'
    ],

    controllers: [
        'Main'
    ],

    autoCreateViewport: true,

    init: function() {
        Ext.setGlyphFontFamily('Pictos');
        Ext.tip.QuickTipManager.init();
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
    }
});
