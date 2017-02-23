Ext.define('Admin.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],

    layout: 'border',

    items: [{
        region: 'north',
        xtype: 'appHeader'
    }, {
        region: 'west',
        width: 250,
        minWidth: 100,
        height: 200,
        split: true,
        stateful: true,
        collapsible: true,
        title: '控制面板',
        id: 'mainMenuItemsId',
        xtype: 'navigation'    
    }, {
        region: 'center',
        xtype: 'contentPanel'
    }, {
        region: 'east',
        id: 'east-region',
        title: '消息动态',
        split: true,
        collapsible: true,
        width: 310,
        height: 200,
        minWidth: 100,
        id: 'MessagesId',
        // xtype: 'Messages',
        tools: [{
                type:'maximize',
                scope:this,
                handler: function (e, target, panelHdr) {
                    var panel = panelHdr.up('panel');
                    if (!panel.maximized) {

                        panel.restoreSize = panel.getSize();
                        panel.restorePos = panel.getPosition(true);
                        panel.maximized = true;
                        var parent = panel.ownerCt,
                            container = parent ? parent.getTargetEl() : panel.container,
                            newBox = container.getViewSize(false);
                        panel.setBox(newBox);
                    } else {
                        var newBox = panel.restoreSize;
                        newBox.x = panel.restorePos[0];
                        newBox.y = panel.restorePos[1];
                        panel.maximized = false;
                        panel.setBox(newBox);
                    }
                }
            }]
    }]
});