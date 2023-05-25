var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        fontcolor: { control: 'color' }
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args)); };
export var Basic = Template.bind({});
Basic.args = { size: 'normal', allCaps: false };
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
};
export var Secundary = Template.bind({});
Secundary.args = {
    size: 'h1',
    color: 'secondary'
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: 'h1',
    color: 'tertiary'
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontcolor: '#5517ac'
};
export var CustomBackgorundColor = Template.bind({});
CustomBackgorundColor.args = {
    size: 'h1',
    fontcolor: '#eeeeee',
    backgroundColor: '#000000'
};
