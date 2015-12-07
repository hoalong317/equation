/**
 * Created by dragonfire on 12/7/15.
 */
function StackedFractionWrapper(equation)
{
    this.equation = equation;
}
StackedFractionWrapper.prototype = new Wrapper();
StackedFractionWrapper.prototype.constructor = StackedFractionWrapper;