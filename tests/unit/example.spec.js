import { shallowMount } from '@vue/test-utils';
import App from '@/components/App.vue';

test('何もレンダリングされないケース', () => {
  const wrapper = shallowMount(App);

  expect(wrapper.element).toMatchSnapshot();
});

it('文字列を渡すケース', () => {
  const wrapper = shallowMount(App, {
    propsData: {
      message: 'Vue Test Utils',
    },
  });

  expect(wrapper.element).toMatchSnapshot();
});
