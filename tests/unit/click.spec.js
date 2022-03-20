import { mount } from '@vue/test-utils';
import ClickVue from '../../src/components/Click.vue';

describe('Click Component Test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(ClickVue);
  });

  it('should ', async () => {
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Count is: 1');
  });

  it('should ', async () => {
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('Count is: 1');
  });
});
