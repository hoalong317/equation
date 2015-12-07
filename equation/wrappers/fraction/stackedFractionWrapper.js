/**
 * Created by dragonfire on 12/7/15.
 */
function stackedFractionWrapper()
{
    Wrapper.call(this);

}
(
    function()
    {
        stackedFractionWrapper.prototype = Object.create(stackedFractionWrapper.prototype);
        stackedFractionWrapper.prototype.constructor = new Wrapper();

    }
)();
