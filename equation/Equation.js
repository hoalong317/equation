/**
 * Created by dragonfire on 12/7/15.
 */
function Equation(editor)
{
    this.ed = editor;
    Wrapper.call(this, editor);
}
Equation.prototype = new Wrapper();
Equation.prototype.constructor = Equation;
Equation.prototype.init = function()
{
    this.width = 200;
    this.width = 50;
    Wrapper.prototype.generateDom.call(this);
    this.ed.selection.getRng().insertNode(this.domObj);
}
Equation.prototype.load = function(nodeEquation)
{

}
