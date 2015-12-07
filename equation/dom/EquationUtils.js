/**
 * Created by dragonfire on 12/7/15.
 */
function LoadEquation(editor)
{
    var equation = null;
    var nodeEquation = editor.selection.getNode().querySelector("div[class=equation]");
    if (nodeEquation == null)
    {
        equation = new Equation(editor);
        equation.init();
    }
    else
    {
        equation = new Equation(editor);
        equation.load(nodeEquation);
    }
    return equation;
}