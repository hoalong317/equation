/**
 * Created by dragonfire on 12/7/15.
 */
function Wrapper(editor)
{
    this.ed = editor;
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.padLeft = 0
    this.padRight = 0;
    this.padTop = 0;
    this.padBottom = 0;
    this.domObj = null;
}
Wrapper.prototype.generateDom = function()
{
    var element = this.ed.getDoc().createElement('div');
    element.setAttribute("class", "equation");
    element.setAttribute("width", this.width.toString() + 'px');
    element.setAttribute("height", this.height.toString() + 'px');
    element.setAttribute();
    this.domObj =  element;
}
