/**
 * Created by dragonfire on 12/7/15.
 */
function stackedFractionWrapper(editor)
{
    this.editor = editor;
}
stackedFractionWrapper.prototype = new Wrapper();
stackedFractionWrapper.prototype.constructor = stackedFractionWrapper;