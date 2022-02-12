import Button from './index'

const story = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: { control: 'text' }
    }
}

export default story

const Template = args => {
    return <Button {...args} />
}

export const Primary = Template.bind({})
