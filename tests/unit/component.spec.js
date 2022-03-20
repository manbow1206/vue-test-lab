import { shallowMount } from '@vue/test-utils';
import App from '@/components/App.vue';

it('test App Component', () => {
  const wrapper = shallowMount(App, {
    props: {
      msg: 'World',
    },
  });
  expect(wrapper.text()).toBe('Hello World');
  console.log(wrapper.props());
});
