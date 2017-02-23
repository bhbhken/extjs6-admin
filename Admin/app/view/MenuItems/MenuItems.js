Ext.define('Admin.view.MenuItems.MenuItems', {
    extend: 'Ext.panel.Panel',
    controller: 'MenuItems',
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.view.View',
        'Ext.ux.DataView.Animated',
        'Admin.controller.MenuItems'
    ],
    initComponent: function() {
        var me = this;
        var item = Ext.getCmp('mainMenuItemsId').getSelectionModel().getSelection();
        var datas = item[0].getData().children;
        Ext.create('Ext.data.Store', {
            id:'imagesStore',
            data: datas
        });
        this.height = 620;
        this.items = {
            xtype: 'dataview',
            style: 'cursor:pointer;',
            tpl: [
                '<tpl for=".">',
                    '<div class="dataview-multisort-item">',
                        '<img src="./Admin/resources/images/touch-icons/thumb-{ids}.png" id="{id}" alt="{text}" />',
                        '<h3>{text}</h3>',
                    '</div>',
                '</tpl>'
            ],
            plugins: {
                xclass: 'Ext.ux.DataView.Animated'
            },
            itemSelector: 'div.dataview-multisort-item',
            listeners:{
                 itemclick:function(view, record, item, index, e, eOpts){
                    var imgs =Ext.dom.Query.select('img',item);
                    var img = imgs[0];
                    id = img.id;
                    text = img.alt;
                    me.getController().createWin(id,text);
                },
            },
            store: Ext.data.StoreManager.lookup('imagesStore')
        };
        this.callParent(arguments);
    }
});