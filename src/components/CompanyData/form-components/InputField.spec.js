import { shallowMount } from '@vue/test-utils'
import InputField from './Inputfield.vue'


describe('InputField.vue', () => {
  test('Simple unit test', () => {
    const wrapper = shallowMount(InputField,{
      propsData: {
        label: "COMPANY NAME",
        placeholder: "Your Company Name",
        type: "text"
      }
    })
    expect(wrapper.props().type).toBe('text')
    expect(wrapper.props().label).toBe('COMPANY NAME')
    expect(wrapper.props().placeholder).toBe('Your Company Name')
  })
})