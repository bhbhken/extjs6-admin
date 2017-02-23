Ext.define('Admin.view.Header', {
    extend: 'Ext.Container',
    requires: [
        'Admin.view.Overflow'
    ],
    xtype: 'appHeader',
    id: 'app-header',
    height: 52,
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    config: {
        entity: null
    },
    initComponent: function() {
        var entity = null;
        if(Ext.getCmp('MemberCardChangeId')!=undefined){
            var entity = Ext.getCmp('MemberCardChangeId').getEntity();
        }       
        Ext.apply(this, {
            defaultType: 'fieldcontainer',
            layout: {
                type: 'border',
                padding: '4 0 4 0'
            },
            items: [{
                region: 'west',
                items: [{
                    xtype: 'segmentedbutton',
                    allowToggle: false,
                    defaults: {
                        scale: 'large'
                    },
                    items: [{
                        iconCls: 'button-home-small',
                        text: '<span style="font-weight: bold;font-size:20px;">游戏会员卡管理系统（SMS）</span>'
                    }, {
                        iconCls: 'button-user-small',
                        id: 'button-user-small',
                        text: entity == null ? null : '<span style="font-weight: bold;">'+entity.cardMemberName+'</span>'
                    }, {
                        iconCls: 'button-credit-card-small',
                        id: 'button-credit-card-small',
                        text: entity == null ? null : '<span style="font-weight: bold;">'+entity.cardNo+'</span>'
                    }, {
                        id: 'OverflowId',
                        xtype: 'Overflow'
                    }]
                }],
            }, {
                region: 'east',
                items: [{
                    xtype: 'segmentedbutton',
                    allowToggle: false,
                    defaults: {
                        scale: 'large'
                    },
                    items: [
                    {xtype: "hidden", id: "button-adminId"},
                    {xtype: "hidden", id: "button-adminName"},
                    {xtype: "hidden", id: "button-adminLoginName"},
                    {
                        text: '<span style="font-weight: bold;">个人中心</span>',
                        id: "IconCls-adminName",
                        iconCls: 'button-cogs-small',
                        menu: [
                            {text: '修改密码', iconCls: 'button-key-small', handler: this.onPassWord},
                            {text: '资料信息', iconCls: 'button-qrcod-small', handler: this.onInfo},
                            {text: '重新登录', iconCls: 'button-off-small', handler: this.onReLogin}
                        ]
                    }]
                }],
            }]
        });
        this.callParent();
    },

    onPassWord: function() {
        var form = Ext.create('widget.Changepassword', {
                parentForm: this,
                entity: null
            });
        form.show();
    },

    onReLogin: function(btn) {
        Ext.MessageBox.show({
            title:'系统提示',
            msg: "请确认是否重新登录？",
            buttons: Ext.MessageBox.OKCANCEL,
            scope: this,
            animateTarget: btn,
            icon: Ext.MessageBox.QUESTION,
            fn: function (btn, text) {
            if(btn=='ok'){
                    location.replace("http://10.10.0.176:90/Home/MainMenu/navigateTo/fid/-9999");
                }
            }
        });
    }

});
