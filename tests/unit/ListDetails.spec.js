import { mount } from '@vue/test-utils'
import ListDetails from '@/components/ListDetails.vue'

describe('ListDetails.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(ListDetails, {
      mocks: {
        $route: {
          name: 'foo'
        }
      }
    })
    expect(wrapper.text()).toBe('foo')
  })
})
