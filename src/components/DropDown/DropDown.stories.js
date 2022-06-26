import DropDown from './index'
const story = {
    title: 'Components/DropDown',
    component: DropDown,
    argTypes: {
        label: { control: 'text' }
    }
}
export default story
const Template = args => {
    return <DropDown {...args} />
}
export const primary = Template.bind({})
