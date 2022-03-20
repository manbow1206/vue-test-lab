import { mount } from '@vue/test-utils';
import EmitComponent from '../../src/components/EmitComponent.vue';

describe('App', () => {
  it('click button count up', () => {
    const wrapper = mount(EmitComponent);
    wrapper.get('button').trigger('click');
    wrapper.get('button').trigger('click');

    console.log(wrapper.emitted('incrementCount'));
  });
});
