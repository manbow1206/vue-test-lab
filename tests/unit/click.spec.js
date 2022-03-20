import { mount } from '@vue/test-utils';
import ClickVue from '../../src/components/Click.vue';

describe('Click Component Test', () => {
  it('should ', async () => {
    const wrapper = mount(ClickVue);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Count is: 1');
  });
});
