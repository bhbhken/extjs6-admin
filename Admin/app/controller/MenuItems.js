Ext.define('Admin.controller.MenuItems', {
	extend : 'Ext.app.ViewController',
    alias: 'controller.MenuItems',
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
    }
});