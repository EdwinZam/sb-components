import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes:{
        color: {control:'select'},
        size: {control:'select'},
        fontcolor: {control:'color'}
    }
} as Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args}/>


export const Basic = Template.bind({});

Basic.args={size:'normal', allCaps: false}

export const AllCaps = Template.bind({});

AllCaps.args={
    size: 'normal',
    allCaps: true
}

export const Secundary = Template.bind({});

Secundary.args = {
    size:'h1',
    color: 'secondary'
}

export const Tertiary = Template.bind({});

Tertiary.args ={
    size:'h1',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
    size:'h1',
    fontcolor: '#5517ac'
}