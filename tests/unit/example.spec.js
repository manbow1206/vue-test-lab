import { mount } from '@vue/test-utils';
import App from '@/components/App.vue';

describe('App', () => {
  it('computed property upper case', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toBe('JOHN');
  });

  it.only('test App Component', () => {
    const wrapper = mount(App);
    const admin = wrapper.find('#admin');
    expect(admin.exists()).toBe(false);
  });
});
