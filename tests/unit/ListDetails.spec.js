import { mount } from '@vue/test-utils'
import ListDetails from '@/components/ListDetails.vue'

describe('ListDetails.vue', () => {
  it('router test', () => {
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
