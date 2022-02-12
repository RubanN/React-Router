import TextField from './index'

const story = {
    title: 'Components/TextField',
    component: TextField
}

export default story

const Template = args => {
    return <TextField {...args} />
}

export const Primary = Template.bind({})
