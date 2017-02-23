/**
 * This example demonstrates the Toolbar's two different modes of handling overflow:
 *
 * - "menu": buttons that don't fit on the toolbar are rendered into an overflow menu
 * - "scroller": scroller buttons are rendered on either side of the toolbar for scrolling
 * overflowing items into view.
 */
Ext.define('Admin.view.Overflow', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Overflow',
    xtype: 'toolbar-overflow',
    id: 'toolbar-overflow',
    initComponent: function() {
        var buttons = [{
            cls: 'delete-focus-bg',
            iconCls:'x-fa fa-envelope'
        }, {
            cls: 'delete-focus-bg',
            iconCls:'x-fa fa-bell'
        }, {
            cls: 'delete-focus-bg',
            iconCls: 'x-fa fa-user-plus'
        }, {
            cls: 'delete-focus-bg',
            iconCls:'x-fa fa-th-large',
        }, {
            iconCls: 'x-fa fa-globe',
            cls: 'delete-focus-bg'
        }, {
            iconCls: 'x-fa fa-comments',
            cls: 'delete-focus-bg'
        }, {
            iconCls: 'x-fa fa-photo',
            cls: 'delete-focus-bg'
        }, {
            iconCls: 'x-fa fa-pie-chart',
            text: 'Chart',
            menu: [{
                text: 'Solid'
            }, {
                text: 'Dotted'
            }, {
                text: 'Dashed'
            }]
        }, {
            iconCls: 'x-fa fa-gift ',
            text: 'Gift'
        }];

        this.width = 350;

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            overflowHandler: 'menu',
            items: buttons
        }];

        this.callParent();
    }
});