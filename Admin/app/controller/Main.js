Ext.define('Admin.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        'Admin.view.*',
        'Ext.window.Window'
    ],

    refs: [
        {
            ref: 'viewport',
            selector: 'viewport'
        },
        {
            ref: 'navigation',
            selector: 'navigation'
        },
        {
            ref: 'contentPanel',
            selector: 'contentPanel'
        }
    ],

    init: function() {
        this.control({
            'navigation': {
                selectionchange: 'onNavSelectionChange',
                afterlayout: 'afterViewportLayout'
            },
            'contentPanel': {
                resize: 'centerContent'
            }
        });
    },

    afterViewportLayout: function() {
        var id = location.hash.substring(1);
        var grid = Ext.getCmp('mainMenuItemsId');
        if (id) {
            var r = grid.getStore().findExact('id',id);
            if (r != -1) {
                grid.getSelectionModel().select(r,true);
            }
        } else {
            grid.getSelectionModel().select(0,true);
        }
    },

    form:null,
    createWin:function(id,text){
        var button = Ext.get(id);
        if (this.form && this.form.isVisible()) {
            this.form.destroy();
            this.form = null;
        }else{
            this.form = Ext.create('widget.'+id, {
                parentForm: this,
                pid: text,
                button: button
            });
            this.form.show();
        }
    },

    onNavSelectionChange: function(selModel, records) {
        var record = records[0],
            text = record.get('text'),
            xtype = record.get('id'),
            contentPanel = this.getContentPanel(),
            cmp;
        var alias = 'widget.' + 'MenuItems';
        if (record.get('type')) {
            this.createWin(xtype,text);
        } else {
            contentPanel.removeAll(true);
            contentPanel.setTitle(text);
            document.title = document.title.split(' - ')[0] + ' - ' + text;
            location.hash = xtype;

            var className = Ext.ClassManager.getNameByAlias(alias);
            var ViewClass = Ext.ClassManager.get(className);

            cmp = new ViewClass();
            contentPanel.add(cmp);
            if (cmp.floating) {
                cmp.show();
            } else {
                this.centerContent();
            }
        }
    },

    centerContent: function() {
        var contentPanel = this.getContentPanel(),
            body = contentPanel.body,
            item = contentPanel.items.getAt(0),
            align = 'c-c',
            overflowX,
            overflowY,
            offsets;

        if (item) {
            overflowX = (body.getWidth() < (item.getWidth() + 40));
            overflowY = (body.getHeight() < (item.getHeight() + 40));

            if (overflowX && overflowY) {
                align = 'tl-tl';
                offsets = [20, 20];
            } else if (overflowX) {
                align = 'l-l';
                offsets = [20, 0];
            } else if (overflowY) {
                align = 't-t';
                offsets = [0, 20];
            }

            item.alignTo(contentPanel.body, align, offsets);
        }
    }
});
