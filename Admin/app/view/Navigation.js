Ext.define('Admin.view.Navigation', {
    extend: 'Ext.tree.Panel',
    xtype: 'navigation',
    title: '控制面板',
    rootVisible: false,
    lines: false,
    useArrows: true,
    
    initComponent: function(){
        Ext.apply(this, {
            store: new Ext.data.TreeStore({
                remoteSort: true,
                proxy: {
                    type: 'ajax',
                    actionMethods:{create: 'POST', read: 'POST', update: 'POST', destroy: 'POST'},
                    url: './Admin/mainMenuItems.json'
                },
                listeners: {
                    load : function(store, records, successful, eOpts) {
                       Ext.getCmp('button-adminId').setValue(records[0].data.adminId);
                       Ext.getCmp('button-adminName').setValue(records[0].data.adminName);
                       Ext.getCmp('button-adminLoginName').setValue(records[0].data.adminLoginName);
                       Ext.getCmp('IconCls-adminName').setText('<span style="font-weight: bold;">当前用户：'+records[0].data.adminName+'</span>');
                    }
                },
                root: {
                    text: '首页',
                    expanded: true,
                    id: 'home'
                }
            })
            
        });
        this.callParent();
    }
});