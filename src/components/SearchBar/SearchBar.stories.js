import SearchBar from './index'
const story = {
    title: 'Components/SearchBar',
    component: SearchBar,
    argTypes: {
        label: { control: 'text' }
    }
}
export default story
const Template = args => {
    return <SearchBar {...args} />
}
export const primary = Template.bind({})
