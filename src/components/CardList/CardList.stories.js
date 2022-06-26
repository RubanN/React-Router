import CardList from './index'

const story = {
    title: 'Components/CardList',
    component: CardList,
    argTypes: {
        label: { control: 'text' }
    }
}

export default story
const Template = args => {
    return <CardList {...args} />
}
// export const Comforatble = Template.bind({})

export const Compactcard = Template.bind({})
Compactcard.args = {
    type: 'CardList'
}
